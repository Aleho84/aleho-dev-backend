import mongoose from "mongoose";

export const randomNumber = function () {
  const numero = Math.floor(Math.random() * 10000);
  return numero.toString().padStart(4, '0');
};

export const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} no es un email válido!`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8
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
      confirmationDate: { type: Date, defaul: null }
    },
    default: {}
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});