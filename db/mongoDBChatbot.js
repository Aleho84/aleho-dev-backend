import MongoClass from './mongoClass.js';
import { chatbotSchema } from '../models/chatbotSchema.js';
import { UserError } from "../config/errors.js";

export class MongoDBChatbot extends MongoClass {
  constructor() {
    super('chatbot', chatbotSchema);
  }

  async findByChatbotName(chatbotName) {
    try {
      const user = await this.collection.findOne({ chatbotName });
      return user;
    } catch (error) {
      throw new UserError(error.message);
    }
  }
}
