import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


export const NoteSchema = new Schema({
    projectId: { type: ObjectId, required: true, ref: 'Project' },
    accountId: { type: ObjectId, required: true, ref: 'Account' },
    body: { type: String, required: true }
})