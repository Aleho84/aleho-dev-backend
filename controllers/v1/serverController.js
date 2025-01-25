import { cp } from 'node:fs';
import os from 'node:os';

const getSystemInfo = () => {
    const freeMemory = os.freemem();
    const totalMemory = os.totalmem();
    
    const cpu = os.cpus();

    const uptime = os.uptime();
    const dias = Math.floor(uptime / (60 * 60 * 24));
    const horas = Math.floor((uptime % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((uptime % (60 * 60)) / 60);
    const segundos = Math.floor(uptime % 60);

    return {
        totalMemory: {
            B: totalMemory,
            KB: (totalMemory / 1024).toFixed(1),
            MB: (totalMemory / 1024 / 1024).toFixed(1),
            GB: (totalMemory / 1024 / 1024 /1024).toFixed(1),
        },
        freeMemory: {
            B: freeMemory,
            KB: (freeMemory / 1024).toFixed(1),
            MB: (freeMemory / 1024 / 1024).toFixed(1),
            GB: (freeMemory / 1024 / 1024 /1024).toFixed(1),
        },
        uptime: {
            totalSeconds: (uptime).toFixed(0),
            dias,
            horas,
            minutos,
            segundos
        },
        cpu: {
            model: (cpu[0].model).trimEnd(),
            cores: cpu.length,
            speed: cpu[0].speed,
            times: cpu[0].times
        },               
    };
};

export const systemInfo = async (req, res, next) => {
    try {
        res.status(200).json(getSystemInfo());
    } catch (error) {
        next(error);
    }
};