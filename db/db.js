import logger from "../utils/logger.js";
import dotenv from "dotenv";
dotenv.config();

let usersDao;
let chatbotDao;
let devicesDao;

async function initUsersDao() {
  try {
    const { MongoDBUsers } = await import('./mongoDBUsers.js');
    usersDao = new MongoDBUsers();
  } catch (error) {
    logger.error('Error al inicializar usersDao:', error);
    process.exit(1);
  }
}

async function initChatbotDao() {
  try {
    const { MongoDBChatbot } = await import('./mongoDBChatbot.js');
    chatbotDao = new MongoDBChatbot();
  } catch (error) {
    logger.error('Error al inicializar chatbotDao:', error);
    process.exit(1);
  }
}

async function initDevicesDao() {
  try {
    const { MongoDBDevices } = await import('./mongoDBDevices.js');
    devicesDao = new MongoDBDevices();
  } catch (error) {
    logger.error('Error al inicializar devicesDao:', error);
    process.exit(1);
  }
}

switch (process.env.DB_MODE) {
  case 'mongoDB':
    await initUsersDao();
    await initChatbotDao();
    await initDevicesDao();
    break;

  default:
    logger.error('DB_MODE no definido.');
    process.exit(1);
}

export { usersDao, chatbotDao, devicesDao };