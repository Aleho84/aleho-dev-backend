import mongoose from "mongoose";

export const chatbotSchema = new mongoose.Schema({
    chatbotName: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    systemInstruction: {
        type: String,
        default: ''
    },
    generationConfig: {
        type: {
            temperature: {
                type: Number,
                default: 1,
                min: 0,
                max: 2,
            },
            topP: {
                type: Number,
                default: 0.95,
                min: 0,
                max: 1
            },
            topK: {
                type: Number,
                default: 0.40,
                min: 0,
                max: 1
            },
            maxOutputTokens: {
                type: Number,
                default: 1024,
                min: 0,
                max: 8192
            },
            responseMimeType: {
                type: String,
                default: "text/plain"
            },
        },
    },
    history: {
        type: Array,
        default: [],
    },
});