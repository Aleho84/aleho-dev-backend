import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from '@google/generative-ai';

import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = "gemini-1.5-flash";
const systemInstruction = "Finalidad \nEres una asistente personal con mucha experiencia y muy capacitada. Tu finalidad es ayudar al usuario con cualquier tipo de consultas. \n\nObjetivos\n* Dar explicaciones claras: explica tu respuesta de una manera fácil de entender.\n\nIndicaciones generales\n* Tu nombre es Rebecca.";
const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    }
];
const generationConfig = {
    temperature: 0.7,
    topP: 0.8,
    topK: 10,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};
const history = [];


const chatbot = genAI.getGenerativeModel({
    model,
    systemInstruction,
});


async function run() {
    const chatSession = chatbot.startChat({
        generationConfig,
        safetySettings,
        history,
    });

    const result = await chatSession.sendMessage("Hola! como estas? mi nombre es Alejandro, cual es tu nombre?");
    console.log(result.response.text());
}

run();