import MongoClass from './mongoClass.js';
import { devicesSchema } from '../models/deviceSchema.js';

export class MongoDBDevices extends MongoClass {
    constructor() {
        super('devices', devicesSchema);
    }
}
