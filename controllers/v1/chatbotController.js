
import * as chatbotService from "../../services/chatbotService.js";

export const chatbotList = async (req, res, next) => {
    try {
        const list = await chatbotService.list();
        res.status(200).json(list);
    } catch (error) {
        next(error);
    }
};

export const chatbotNew = async (req, res, next) => {
    try {
        const newChatBot = await chatbotService.create(req.body);
        res.status(201).json({ id: newChatBot._id, });
    } catch (error) {
        next(error);
    }
};
