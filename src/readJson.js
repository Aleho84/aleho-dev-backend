import { readFileSync } from 'fs';

const readJson = function(file) {
    try {
        file ? file : file = './package.json';
        const contenidoArchivo = readFileSync(file, 'utf-8');
        const objetoJson = JSON.parse(contenidoArchivo);
       
        return (objetoJson);            
    } catch (error) {
        throw error;
    }        
}

export default readJson;