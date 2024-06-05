
import dotenv from "dotenv";
dotenv.config();

import { ValidationError, UnauthorizedError } from "../config/errors.js";
import { encryptPassword, comparePassword } from "../utils/bcrypt.js";
import { sendCodeValidatorMail, generateCode } from "../utils/mailer.js";
import { usersDao } from "../db/db.js";
import jwt from "jsonwebtoken";

const jwtExpire = process.env.JWT_EXPIRE || "1w";
const jwtSecret = process.env.JWT_SECRET || "no_olvide_el_jwt_secret";
const apiURL = process.env.PROTOCOL + "://" + process.env.HOST + ":" + process.env.PORT;
const defaultIMG = apiURL + "/img/aleho-dev.png";

export const signin = async (userData) => {
  const { name, email, password, image } = userData;

  const existingUser = await usersDao.findByEmail(email);
  if (existingUser) {
    throw new ValidationError("El usuario con este correo electrónico ya existe.");
  }

  const hashedPassword = await encryptPassword(password);

  const newUser = await usersDao.create({
    name,
    email,
    password: hashedPassword,
    image,
  });

  const token = jwt.sign({ id: newUser._id }, jwtSecret, { expiresIn: jwtExpire });

  // En lugar de un fetch, llamamos a la función directamente
  await activationCodeRequest(newUser._id, { appName: "ALEHO-DEV", imageURL: defaultIMG });

  return {
    token,
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      image: newUser.image,
      confirmed: newUser.account.confirmed,
      admin: newUser.account.admin,
    }
  };
};

export const login = async (credentials) => {
  const { email, password } = credentials;

  const user = await usersDao.findByEmail(email);
  if (!user) throw new UnauthorizedError("Credenciales invalidas: usuario incorrecto");

  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) throw new UnauthorizedError("Credenciales invalidas: contraseña incorrecta");

  const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: jwtExpire });

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      confirmed: user.account.confirmed,
      admin: user.account.admin,
    }
  };
};

export const deleteUser = async (userId) => {
  if (!userId) throw new ValidationError("Parametro faltante: 'userId'");

  const deletedUser = await usersDao.delete(userId);
  if (!deletedUser) throw new ValidationError(`Usuario con id:'${userId}' no encontrado`);

  return { message: "Usuario eliminado correctamente" };
};

export const listUsers = async () => {
  return await usersDao.getAll();
};

export const activationCodeRequest = async (userId, body) => {
  const { appName, imageURL } = body;

  if (!userId) throw new ValidationError("Parametro faltante: 'userId'");

  const userToSendCode = await usersDao.get(userId);
  if (!userToSendCode) throw new ValidationError(`Usuario con id:'${userId}' no encontrado`);

  const { email, name, account } = userToSendCode;

  const newActivationCode = generateCode();
  account.code = newActivationCode;

  await usersDao.update(userId, { account });

  const codeSend = await sendCodeValidatorMail(email, name, appName || "ALEHO-DEV", imageURL || defaultIMG, newActivationCode);
  if (!codeSend) throw new Error('Error al enviar el codigo de activacion');

  return { code: newActivationCode };
};

export const updateUser = async (userId, userData) => {
  if (!userId) throw new ValidationError("Parametro faltante: 'userId'");

  if (userData.password) {
    userData.password = await encryptPassword(userData.password);
  }

  const updatedUser = await usersDao.update(userId, userData);
  if (!updatedUser) throw new ValidationError(`Usuario con id:'${userId}' no encontrado`);

  return updatedUser;
};
