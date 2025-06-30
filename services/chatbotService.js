
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

export const deleteChatbot = async (chatbotId) => {
    if (!chatbotId) throw new ValidationError("Parametro faltante: 'chatbotId'");

    const deletedChatbot = await chatbotDao.delete(chatbotId);
    if (!deletedChatbot) throw new ValidationError(`Chatbot con id:'${chatbotId}' no encontrado`);

    return { message: "Chatbot eliminado correctamente" };
};

export const updateChatbot = async (chatbotId, chatbotData) => {        
    if (!chatbotId) throw new ValidationError("Parametro faltante: 'chatbotId'");

    const updatedChatbot = await chatbotDao.update(chatbotId, chatbotData);
    if (!updatedChatbot) throw new ValidationError(`Chatbot con id:'${chatbotId}' no encontrado`);

    return updatedChatbot;
};
