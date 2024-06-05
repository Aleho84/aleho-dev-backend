import dotenv from "dotenv";
dotenv.config();

import logger from "../../src/logger.js";
import { encryptPassword, comparePassword } from '../../src/bcrypt.js';
import { usersDao } from "../../db/db.js";
import jwt from "jsonwebtoken";

const jwtExpire = process.env.JWT_EXPIRE || "1w";
const jwtSecret = process.env.JWT_SECRET || "no_olvide_el_jwt_secret";

// Registrar usuario
export const usersSignin = async (req, res) => {
  try {
    const { name, email, password, image } = req.body;

    // Comprueba los parametros    
    usersSigninValidate({ name, email, password });

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
    res.status(201).json({ token });
  } catch (error) {
    logger.error(`[usersController.js] [usersSignin]: ${error}`);
    usersSigninErrorHanndle(res, error);
  }
};

const usersSigninValidate = ({ name, email, password }) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

  if (!name) throw new Error("Parametro faltante: 'name'");
  if (!email) throw new Error("Parametro faltante: 'email'");
  if (!emailRegex.test(email)) throw new Error(`Parametro invalido: '${email}' no es una direccion de correo valida`);
  if (!password) throw new Error("Parametro faltante:'password'");
  if (!passwordRegex.test(password)) throw new Error("Parametro invalido: La contraseña debe tener al menos 8 caracteres, una mayuscula y un numero");
};

const usersSigninErrorHanndle = (res, error) => {
  const statusCode = error.message.startsWith("Parametro faltante") ||
    error.message.startsWith("Parametro invalido") ||
    error.message.startsWith("E11000 duplicate key error collection")
    ? 400
    : 500;

  if (error.message.startsWith("E11000 duplicate key error collection")) error.message = `Usuario existente: ya se encuentra registrado`
  res.status(statusCode).json({ error: error.message });
};


// Login Usuario
export const usersLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Comprueba los parametros 
    usersLoginValidate({ email, password });

    // Busca al usuario por correo electronico
    const user = await usersDao.findByEmail(email);
    if (!user) return res.status(401).json({ message: "Credenciales invalidas: usuario incorrecto" });

    // Comparar la contraseña proporcionada con el hash almacenado
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: "Credenciales invalidas: contraseña incorrecta" });


    // Generar y enviar el token JWT si las credenciales son validas
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: jwtExpire });
    res.status(200).json({ token });
  } catch (error) {
    logger.error(`[usersController.js] [usersLogin]: ${error}`);
    usersLoginErrorHanndle(res, error);
  }
};

const usersLoginValidate = ({ email, password }) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) throw new Error("Parametro faltante: 'email'");
  if (!emailRegex.test(email)) throw new Error(`Parametro invalido: '${email}' no es una direccion de correo valida`);
  if (!password) throw new Error("Parametro faltante:'password'");
};

const usersLoginErrorHanndle = (res, error) => {
  const statusCode = error.message.startsWith("Parametro faltante") ||
    error.message.startsWith("Parametro invalido")
    ? 400
    : 500;

  res.status(statusCode).json({ error: error.message });
};


// Prueba de acceso
export const usersTest = async (req, res) => {
  try {
    const { user } = req;

    res.status(200).json({ message: "Test de acceso exitoso!", user });
  } catch (error) {
    logger.error(error);
    res.status(500).send({ error: "¡Algo malio sal!" });
  }
};