import mongoose from 'mongoose'

const DummySchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language:String,
    city:String,
    isManager:Boolean
  });

export const Dummy = mongoose.model('Dummy', DummySchema);