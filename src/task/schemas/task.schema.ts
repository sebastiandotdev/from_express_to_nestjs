import { Schema } from 'mongoose';

export const schemaTask = new Schema({
  title: String,
  description: String,
  done: Boolean,
});
