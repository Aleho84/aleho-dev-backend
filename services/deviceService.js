import { devicesDao } from "../db/db.js";
import { ValidationError } from "../config/errors.js";

export const listDevices = async () => {
    return await devicesDao.getAll();
};

export const createDevice = async (deviceData) => {
    if (!deviceData.name || !deviceData.ip || !deviceData.port) {
        throw new ValidationError("Faltan campos obligatorios");
    }
    return await devicesDao.create(deviceData);
};

export const updateDevice = async (id, deviceData) => {
    if (!id) throw new ValidationError("Falta ID del dispositivo");
    return await devicesDao.update(id, deviceData);
};

export const deleteDevice = async (id) => {
    if (!id) throw new ValidationError("Falta ID del dispositivo");
    return await devicesDao.delete(id);
};

export const getDevice = async (id) => {
    if (!id) throw new ValidationError("Falta ID del dispositivo");
    return await devicesDao.get(id);
};
