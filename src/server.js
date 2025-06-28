import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import fs from "fs";
import http from "http";
import https from "https";
import path from "path";
import passport from "passport";
import "../config/passport.js";
import { fileURLToPath } from "url";
import logger from "../utils/logger.js";

import apiRouter from "../routes/apiRoutes.js";
import indexRouter from "../routes/indexRoutes.js";
import errorHandler from "../middlewares/errorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Variables de entorno
const config = {
  protocol: process.env.PROTOCOL || "http",
  port: process.argv[3] || parseInt(process.env.PORT, 10) || 8080,
  keyPath: path.resolve(process.env.KEY || "./certificates/key.pem"),
  certPath: path.resolve(process.env.CERT || "./certificates/cert.pem"),
  cookieSecret: process.env.COOKIE_SECRET || "no_olvide_el_cookie_secret",
  corsSettings: process.env.CORS || { origin: "*", methods: ["GET, POST, PUT, DELETE, OPTIONS"] },
};

// Configuración del servidor (http o https)
const server = config.protocol === "https"
  ? https.createServer({
    key: fs.readFileSync(config.keyPath),
    cert: fs.readFileSync(config.certPath),
  }, app)
  : http.createServer(app);

// Middleware
app.use(cors(config.corsSettings));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(config.cookieSecret));
app.use(passport.initialize());

// Vistas y archivos estáticos
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));

// Rutas
app.use("/", indexRouter);
app.use("/api", apiRouter);


// Manejo de Errores
app.use(errorHandler);

// Exportación y manejo de errores
export default async () => {
  try {
    await server.listen(config.port);
    logger.info(`Server listo en 💻 ${config.protocol}://localhost:${config.port}`);
  } catch (error) {
    logger.error(`Error al iniciar el servidor ❌ ${error}`);
    process.exit(1);
  }
};
