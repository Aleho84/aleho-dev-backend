import dotenv from "dotenv";
dotenv.config();

import winston from "winston";
import loggerConfig from "../config/logger.js";

function createLogger(env) {
    const logger = winston.createLogger(loggerConfig[env]);

    logger.on("error", (error) => {
        logger.error(error);
    });

    return logger;
}

// Inicializa el logger winston
const logger = createLogger(process.env.NODE_ENV || "development");

export default logger;