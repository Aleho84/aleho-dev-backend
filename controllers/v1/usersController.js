import dotenv from "dotenv";
dotenv.config();

import { ValidationError, UnauthorizedError } from "../../config/errors.js";
import { encryptPassword, comparePassword } from "../../utils/bcrypt.js";
import { sendCodeValidatorMail, generateCode } from "../../utils/mailer.js";
import { usersDao } from "../../db/db.js";
import jwt from "jsonwebtoken";

const jwtExpire = process.env.JWT_EXPIRE || "1w";
const jwtSecret = process.env.JWT_SECRET || "no_olvide_el_jwt_secret";
const apiURL = process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT;
const defaultIMG = apiURL + "/img/aleho-dev.png";

// Registrar usuario
export const usersSignin = async (req, res, next) => {
  try {
    const { name, email, password, image } = req.body;

    // Comprueba los parametros    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

    if (!name) throw new ValidationError("Parametro faltante: 'name'");
    if (!email) throw new ValidationError("Parametro faltante: 'email'");
    if (!emailRegex.test(email)) throw new ValidationError(`Parametro invalido: '${email}' no es una direccion de correo valida`);
    if (!password) throw new ValidationError("Parametro faltante:'password'");
    if (!passwordRegex.test(password)) throw new ValidationError("Parametro invalido: La contraseña debe tener al menos 8 caracteres, una mayuscula y un numero");

    // Encripta la contraseña
    const hashedPassword = await encryptPassword(password);

    // Crea el usuario
    const newUser = await usersDao.create({
      name,
      email,
      password: hashedPassword,
      image,
    });

    // Generar y enviar el token JWT si el alta es correcta
    const token = jwt.sign({ id: newUser._id }, jwtSecret, { expiresIn: jwtExpire });

    // Enviar correo de confirmacion
    fetch(apiURL + '/api/v1/users/activationCodeRequest', {
      method: 'POST',
      headers: {
        "User-Agent": 'Aleho-Dev-Backend',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ id: newUser._id }),
    });

    res.status(201).json({
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        image: newUser.image,
        confirmed: newUser.account.confirmed,
        admin: newUser.account.admin,
      }
    });
  } catch (error) {
    next(error);
  }
};

// Login Usuario
export const usersLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Comprueba los parametros 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) throw new ValidationError("Parametro faltante: 'email'");
    if (!emailRegex.test(email)) throw new ValidationError(`Parametro invalido: '${email}' no es una direccion de correo valida`);
    if (!password) throw new ValidationError("Parametro faltante:'password'");

    // Busca al usuario por correo electronico
    const user = await usersDao.findByEmail(email);
    if (!user) throw new UnauthorizedError("Credenciales invalidas: usuario incorrecto");

    // Comparar la contraseña proporcionada con el hash almacenado
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) throw new UnauthorizedError("Credenciales invalidas: contraseña incorrecta");


    // Generar y enviar el token JWT si las credenciales son validas
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: jwtExpire });
    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        image: user.image,
        confirmed: user.account.confirmed,
        admin: user.account.admin,
      }
    });
  } catch (error) {
    next(error);
  }
};

// Remover usuario.
export const usersDelete = async (req, res, next) => {
  try {
    const { id } = req.body;

    // Comprueba los parametros 
    if (!id) throw new ValidationError("Parametro faltante: 'id'");

    // Busca y elimina el usuario
    const deleteUser = await usersDao.delete(id);
    if (!deleteUser) throw new ValidationError(`Usuario con id:'${id}' no encontrado`);

    res.status(204).json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    next(error);
  }
};

// Listar usuarios.
export const usersList = async (req, res, next) => {
  try {
    const usersList = await usersDao.getAll();
    res.status(200).json(usersList);
  } catch (error) {
    next(error);
  }
};

// Enviar codigo de confirmacion usuario.
export const usersActivationCodeRequest = async (req, res, next) => {
  try {
    const { id, appName, imageURL } = req.body;

    if (!id) throw new ValidationError("Parametro faltante: 'id'");

    const userToSendCode = await usersDao.get(id);
    if (!userToSendCode) throw new ValidationError(`Usuario con id:'${id}' no encontrado`);

    const { email, name, account } = userToSendCode;

    // Regenerar el código de activación
    const newActivationCode = generateCode();
    account.code = newActivationCode;

    // Guardar el nuevo código en la base de datos
    await usersDao.update(id, { account });

    const codeSend = await sendCodeValidatorMail(email, name, appName || "ALEHO-DEV", imageURL || defaultIMG, newActivationCode);
    if (!codeSend) throw new Error('Error al enviar el codigo de activacion');

    res.status(200).json({ code: newActivationCode });
  } catch (error) {
    next(error);
  }
};