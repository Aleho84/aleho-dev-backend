import mongoose from "mongoose";

export const chatbotSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'usersSchema'
    },
    chatbotName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'Eres un chatbot'
    },
    model: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return ['gemini-2.5-pro', 'gemini-2.5-flash'].includes(v);
            },
            message: props => `${props.value} no es un modelo válido!`
        }
    },
    systemInstruction: {
        type: String,
        default: 'Eres un chatbot'
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
                default: 40,
                min: 0,
                max: 99
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
        type: [{
            role: String,
            parts: [{
                text: String
            }],
        }],
        default: [],
    },
}, { timestamps: true });