
import * as serverService from "../../services/serverService.js";

export const systemInfo = async (req, res, next) => {
    try {
        res.status(200).json(await serverService.systemInfo());
    } catch (error) {
        next(error);
    }
};

export const systemProcess = async (req, res, next) => {
    try {
        res.status(200).json(await serverService.systemProcess());
    } catch (error) {
        next(error);
    }
};

export const isOnline = async (req, res, next) => {
    try {
        const { ip, port } = req.body;
        res.status(200).json(await serverService.isOnline(ip, port));
    } catch (error) {
        next(error);
    }
};
