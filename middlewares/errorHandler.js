import logger from "../config/logger.js";

const errorHandler = (err, req, res, next) => {
  // Loguear el error
  logger.error(err.stack);

  // Determinar el código de estado
  const statusCode = err.status || 500;

  // Enviar una respuesta de error consistente
  res.status(statusCode).json({
    success: false,
    error: {
      name: err.name || "InternalServerError",
      message: err.message || "Ha ocurrido un error inesperado en el servidor.",
      details: err.details || null,
    },
  });
};

export default errorHandler;
