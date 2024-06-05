import Joi from "joi";

export const userSigninSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'El campo \'name\' es obligatorio.',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'El correo electrónico proporcionado no es válido.',
    'any.required': 'El campo \'email\' es obligatorio.',
  }),
  password: Joi.string().pattern(/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/).required().messages({
    'string.pattern.base': 'La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.',
    'any.required': 'El campo \'password\' es obligatorio.',
  }),
  image: Joi.string().uri(),
});

export const userLoginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'El correo electrónico proporcionado no es válido.',
    'any.required': 'El campo \'email\' es obligatorio.',
  }),
  password: Joi.string().required().messages({    
    'any.required': 'El campo \'password\' es obligatorio.',
  }),
  image: Joi.string().uri(),
});