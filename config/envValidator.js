
import dotenv from "dotenv";
dotenv.config();

const requiredEnvVars = [
  "MONGOOSE_URI",
];

export const validateEnvVariables = () => {
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

  if (missingVars.length > 0) {
    throw new Error(
      `Error: Faltan variables de entorno críticas: ${missingVars.join(
        ", "
      )}. Por favor, defínalas en el archivo .env antes de iniciar la aplicación.`
    );
  }
};
