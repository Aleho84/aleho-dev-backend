import os from 'node:os';
import net from 'net';
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

const isIPOnline = async (ip, port) => {
    return new Promise((resolve) => {
        const socket = new net.Socket();

        socket.on('connect', () => {
            socket.destroy();
            resolve({ status: 1, message: 'online' });
        });

        socket.on('error', (error) => {
            socket.destroy();
            console.log('error en soket', error);
            resolve({ status: 2, message: 'offline', error: error.message });
        });

        socket.setTimeout(5000, () => {
            socket.destroy();
            resolve({ status: 0, message: 'offline' });;
        });

        socket.connect(port, ip);
    });
}

export const systemInfo = async () => {
    return getSystemInfo();
};

export const systemProcess = async () => {
    return await getSystemProcess();
};

export const isOnline = async (ip, port) => {
    return await isIPOnline(ip, port);
};
