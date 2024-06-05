import mongoose from "mongoose";

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
      code: { type: String, default: "0000" },
      admin: { type: Boolean, default: false },
    },
    default: {},
  },
});
