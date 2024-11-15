import bcrypt from "bcrypt";

// Encripta la contraseña
export const encryptPassword = async (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

// Compara la contraseña ingresada con la encriptada
export const comparePassword = async (password, hash) => {
  return bcrypt.compareSync(password, hash);
};