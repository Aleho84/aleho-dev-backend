import dotenv from "dotenv";
dotenv.config();

import express from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import readJson  from "../utils/readJson.js";
import path from "path";

const { PROTOCOL, HOST, PORT } = process.env;
const SERVER_URL = `${PROTOCOL}://${HOST}:${PORT}`;
const __dirname = path.resolve();
const DOC_PATH = path.join(__dirname, ".", "docs", "swagger", "*.js");
const packageJson = readJson();

const swaggerApp = express();

// Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.3",
    info: {
      title: packageJson.name.toUpperCase(),
      version: packageJson.version,
      description: packageJson.description,
      contact: {
        name: packageJson.author.name,
        email: packageJson.author.email,
        url: packageJson.author.url,
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    servers: [{ url: SERVER_URL }],
  },
  apis: [DOC_PATH],
};

const swaggerUIOptions = {
  customCss: ".swagger-ui .topbar { display: none }",
  customSiteTitle: packageJson.name,
  customfavIcon: "/ico/favicon.ico",
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
swaggerApp.use(
  "/",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocs, swaggerUIOptions)
);

export default swaggerApp;
