import MongoClass from './mongoClass.js';
import { usersSchema } from '../models/userSchema.js';
import { UserError } from "../config/errors.js";

export class MongoDBUsers extends MongoClass {
  constructor() {
    super('users', usersSchema);
  }

  async findByEmail(email) {
    try {
      const user = await this.collection.findOne({ email });
      return user;
    } catch (error) {
      throw new UserError(error.message);
    }
  }
}
