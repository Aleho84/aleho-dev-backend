import mongoose from 'mongoose';

class MongoClass {
  constructor(collectionName, docSchema) {
    this.collection = mongoose.model(collectionName, docSchema);
  }

  async getAll() {
    try {
      const all = await this.collection.find();
      return all;
    } catch (error) {
      throw error;
    }
  }

  async get(id) {
    try {
      const one = await this.collection.findById(id);
      return one;
    } catch (error) {
      throw error;
    }
  }

  async create(doc) {
    try {
      const newDoc = await this.collection.create(doc);
      return newDoc;
    } catch (error) {
      throw error;
    }
  }

  async update(id, doc) {
    try {
      const updatedDoc = await this.collection.findByIdAndUpdate(id, doc, { new: true });
      return updatedDoc;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const deletedDoc = await this.collection.findByIdAndDelete(id);
      return deletedDoc;
    } catch (error) {
      throw error;
    }
  }
}

export default MongoClass;