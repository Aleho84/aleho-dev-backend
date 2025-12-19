import mongoose from "mongoose";

export const devicesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    service: {
        type: String,
        required: true,
        trim: true
    },
    icon: {
        type: String,
        required: true, // e.g., 'Code', 'Database', 'Bot'
        trim: true
    },
    ip: {
        type: String,
        required: true,
        trim: true
    },
    port: {
        type: Number,
        required: true
    }
}, { timestamps: true });
