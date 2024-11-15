import logger from "../utils/logger.js";
import dotenv from "dotenv";
dotenv.config();

let usersDao;

switch (process.env.DB_MODE) {
  case 'mongoDB':
    import('./mongoDBUsers.js')
      .then(({ MongoDBUsers }) => {
        usersDao = new MongoDBUsers();
      })
      .catch(error => {
        logger.error(error);
        process.exit(1);
      });
    break;

  default:
    logger.error('DB_MODE no definido.');
    process.exit(1);
};

export {
  usersDao,
};