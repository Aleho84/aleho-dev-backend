import dotenv from "dotenv";
dotenv.config();

import winston from "winston";
import path from "path";
import { fileURLToPath } from "url";
import { MongoDB } from "winston-mongodb";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loggerConfig = {
  production: {
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(info => `${info.timestamp} - ${info.level}: ${info.message}`)
    ),
    transports: [
      new winston.transports.Console(),
      new MongoDB({
        db: process.env.MONGOOSE_URI,
        collection: "logs",
        level: "info",
        options: { },
        storeHost: true,
        metaKey: "metadata",
        decolorize: true,
        capped: true,
        cappedSize: 10000000,
        tryReconnect: true,
        leaveConnectionOpen: true
      }),
    ]
  },

  development: {
    format: winston.format.combine(
      winston.format.colorize(), // ¡Colores para alegrar la vista!
      winston.format.timestamp(),
      winston.format.printf(info => `${info.timestamp} - ${info.level}: ${info.message}`)
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({
        filename: path.join(__dirname, "../logs/error.log"),
        level: "error"
      }),
      new winston.transports.File({
        filename: path.join(__dirname, "../logs/combined.log")
      }),
    ]
  }
};

export
  default loggerConfig;