import dotenv from "dotenv";
dotenv.config();

import logger from "../utils/logger.js";

export const debuggerMidd = async (req, res, next) => {
    const debuggerData = {
        ENV: process.env.NODE_ENV,
        Peticion: req.method + " " + req.originalUrl,
        Cliente: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        Body: req.body,
        Query: req.query,
        Params: req.params,
        Headers: req.headers,
    };

    logger.info(`🖥️ Cliente : ${debuggerData.Cliente} -- 🌐 Peticion: ${debuggerData.Peticion}`);

    if (debuggerData.ENV === "development") {
        console.log("*************LOGGER: ", debuggerData.Peticion, "**************");
        console.log('Cliente: ', debuggerData.Cliente);
        console.log('Body: ', debuggerData.Body);
        console.log('Query: ', debuggerData.Query);
        console.log('Params: ', debuggerData.Params);
        console.log('Headers: ', debuggerData.Headers);
    }

    next();
};