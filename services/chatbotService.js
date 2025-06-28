
import { chatbotDao } from "../db/db.js";
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from '@google/generative-ai';

import dotenv from "dotenv";
dotenv.config();

const { GEMINI_API_KEY } = process.env;

export const list = async () => {
    return await chatbotDao.getAll();
};

export const create = async (data) => {
    return await chatbotDao.create(data);
};
