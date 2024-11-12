import mongoose from "mongoose";

export const randomNumber = function () {
  const numero = Math.floor(Math.random() * 10000);
  return numero.toString().padStart(4, '0');
};

export const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  account: {
    type: {
      confirmed: { type: Boolean, default: false },
      code: { type: String, default: randomNumber() },
      admin: { type: Boolean, default: false },
    },
    default: {},
  },
});