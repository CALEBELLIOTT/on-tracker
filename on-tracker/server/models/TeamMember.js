import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId



export const TeamMemberSchema = new Schema({
    employeeId: { type: ObjectId, required: true, ref: 'Employee' },
    projectId: { type: ObjectId, required: true, ref: 'Project' },
    admin: { type: Boolean, default: false }
}, { timestamps: true, toJSON: { virtuals: true } })


TeamMemberSchema.virtual('employee', {
    localField: 'employeeId',
    foreignField: '_id',
    ref: 'Employee',
    justOne: true
})

TeamMemberSchema.virtual('project', {
    localField: 'projectId',
    foreignField: '_id',
    ref: 'Project',
    justOne: true
})