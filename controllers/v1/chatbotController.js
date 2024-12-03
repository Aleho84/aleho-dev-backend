import { chatbotDao } from "../../db/db.js";
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from '@google/generative-ai';

import dotenv from "dotenv";
dotenv.config();

const { GEMINI_API_KEY } = process.env;

export const chatbotList = async (req, res, next) => {
    try {
        const list = await chatbotDao.getAll();
        res.status(200).json(list);
    } catch (error) {
        next(error);
    }
};

export const chatbotNew = async (req, res, next) => {
    try {
        const { chatbotName, model, systemInstruction, generationConfig, history } = req.body;

        const newChatBot = await chatbotDao.create({
            chatbotName,
            model,
            systemInstruction,
            generationConfig,
            history
        });

        res.status(201).json({ id: newChatBot._id, });
    } catch (error) {
        next(error);
    }
};