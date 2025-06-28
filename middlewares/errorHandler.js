import logger from "../utils/logger.js";

const errorHandler = (err, req, res, next) => {
  // Loguear el error
  logger.error(err.stack);

  // Determinar el código de estado
  const statusCode = err.status || 500;

  // Enviar una respuesta de error consistente
  res.status(statusCode).json({
    error: err.name || "InternalServerError",
    message: err.message || "An unexpected error has occurred on the server.",
  });
};

export default errorHandler;
