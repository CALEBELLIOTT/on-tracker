import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId



export const BusinessSchema = new Schema({
    name: {type: String, required: true},
    coverImg: {type: String, required: true},
    logo: {type: String, required: true},
    accountId: {type: ObjectId, required: true, ref: 'Account'}
},{timestamps: true, toJSON: {virtuals: true}})


BusinessSchema.virtual('creator', {
    localField: 'accountId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})