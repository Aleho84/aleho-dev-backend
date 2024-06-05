import logger from "./logger.js";
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const mongoURI = process.env.MONGOOSE_URI;

export default async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI);

    const mongoServer = new URL(mongoURI).host;

    logger.info(`Conectado a MongoDB 💾 ${mongoURI}`);
  } catch (error) {
    logger.error(`Error al conectar MongoDB ❌ ${error}`);
    process.exit(1);
  }
};
