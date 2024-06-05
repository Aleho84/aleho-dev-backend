import mongoose from 'mongoose';
import { UserError } from "../config/errors.js";

class MongoClass {
  constructor(collectionName, docSchema) {
    this.collection = mongoose.model(collectionName, docSchema);
  }

  async getAll() {
    try {
      const all = await this.collection.find();
      return all;
    } catch (error) {
      throw new UserError(error.message);
    }
  }

  async get(id) {
    try {
      const one = await this.collection.findById(id);
      return one;
    } catch (error) {
      throw new UserError(error.message);
    }
  }

  async create(doc) {
    try {
      const newDoc = await this.collection.create(doc);
      return newDoc;
    } catch (error) {
      throw new UserError(error.message);
    }
  }

  async update(id, doc) {
    try {
      const updatedDoc = await this.collection.findByIdAndUpdate(id, doc, { new: true });
      return updatedDoc;
    } catch (error) {
      throw new UserError(error.message);
    }
  }

  async delete(id) {
    try {
      const deletedDoc = await this.collection.findByIdAndDelete(id);
      return deletedDoc;
    } catch (error) {
      throw new UserError(error.message);
    }
  }
}

export default MongoClass;