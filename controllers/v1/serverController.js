import os from 'node:os';
import { exec } from 'child_process';

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
            KB: totalMemory / 1024,
            MB: totalMemory / 1024 / 1024,
            GB: totalMemory / 1024 / 1024 / 1024,
        },
        freeMemory: {
            B: freeMemory,
            KB: freeMemory / 1024,
            MB: freeMemory / 1024 / 1024,
            GB: freeMemory / 1024 / 1024 / 1024,
        },
        uptime: {
            totalSeconds: uptime,
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

const getSystemProcess = async () => {
    const command = process.platform === 'win32' ? 'tasklist' : 'ps aux';

    try {
        const { stdout, stderr } = await new Promise((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({ stdout, stderr });
                }
            });
        });

        if (stderr) {
            throw new Error(stderr);
        }

        const processes = stdout.split('\n').filter(line => line.trim() !== '');
        const processObject = {};

        processes.forEach((process, index) => {
            processObject[`process_${index + 1}`] = process;
        });

        return processObject;
    } catch (error) {
        throw error;
    }
};

export const systemInfo = async (req, res, next) => {
    try {
        res.status(200).json(getSystemInfo());
    } catch (error) {
        next(error);
    }
};

export const systemProcess = async (req, res, next) => {
    try {
        res.status(200).json(await getSystemProcess());
    } catch (error) {
        next(error);
    }
};