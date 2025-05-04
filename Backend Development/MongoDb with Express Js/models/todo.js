import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    task: String
  });

export const Todo = mongoose.model('Task', TodoSchema);