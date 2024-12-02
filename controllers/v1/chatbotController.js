import dotenv from "dotenv";
dotenv.config();

// import { chatbotDao } from "../../db/db.js";

export const chatbotList = async (req, res, next) => {
    const dummyData = {
        model: "",
        systemInstruction: "Eres un chatbot.",
        generationConfig :{            
            temperature: "",
            topP: 0.95,
            topK: 40,
            maxOutputTokens: 8192,
            responseMimeType: "text/plain",    
        },
        history: [],
    }

    try {
        res.status(201).json(dummyData);
    } catch (error) {
        next(error);
    }
};