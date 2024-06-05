
import { ValidationError } from "../config/errors.js";

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    const errorDetails = error.details.map((detail) => detail.message).join(", ");
    return next(new ValidationError(`Error de validación: ${errorDetails}`, error.details));
  }

  return next();
};

export default validate;
