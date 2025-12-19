import * as deviceService from "../../services/deviceService.js";

export const listDevices = async (req, res, next) => {
    try {
        const devices = await deviceService.listDevices();
        res.status(200).json(devices);
    } catch (error) {
        next(error);
    }
};

export const createDevice = async (req, res, next) => {
    try {
        const device = await deviceService.createDevice(req.body);
        res.status(201).json(device);
    } catch (error) {
        next(error);
    }
};

export const updateDevice = async (req, res, next) => {
    try {
        const { id } = req.params;
        const device = await deviceService.updateDevice(id, req.body);
        res.status(200).json(device);
    } catch (error) {
        next(error);
    }
};

export const deleteDevice = async (req, res, next) => {
    try {
        const { id } = req.params;
        await deviceService.deleteDevice(id);
        res.status(200).json({ message: "Dispositivo eliminado" });
    } catch (error) {
        next(error);
    }
};
