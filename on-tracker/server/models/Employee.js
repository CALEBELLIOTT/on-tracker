import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


export const EmployeeSchema = new Schema({
    businessId : {type: ObjectId, required: true, ref: 'Business'},
    skills: {type: String, required: true},
    certifications: {type: Array, required: true},
    accountId: {type: ObjectId, required: true, ref: 'Account'}
},{ timestamps: true, toJSON: {virtuals: true}
})


EmployeeSchema.virtual('account',{
    localField: 'accountId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})