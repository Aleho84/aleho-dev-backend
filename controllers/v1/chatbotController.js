import dotenv from "dotenv";
import { chatbotDao } from "../../db/db.js";
dotenv.config();

export const chatbotList = async (req, res, next) => {
    try {
        const list = await chatbotDao.getAll();
        res.status(200).json(list);
    } catch (error) {
        next(error);
    }
};