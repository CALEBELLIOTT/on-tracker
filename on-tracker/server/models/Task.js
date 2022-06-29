import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


export const TaskSchema = new Schema({
  description: { type: String, required: true },
  projectId: { type: String, required: true, ref: "Project" },
  isCompleted: { type: Boolean, default: false },
  estimatedTime: { type: Number, required: true }
})