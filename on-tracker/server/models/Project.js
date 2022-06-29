import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


export const ProjectSchema = new Schema({
  creatorId: { type: ObjectId, required: true, ref: 'Account' },
  location: { type: String, required: true },
  quotePrice: { type: Number, required: true },
  coverImg: { type: String, required: true },
  jobSiteImgs: { type: Array, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  cancelled: { type: Boolean, required: true, default: false },
  completed: { type: Boolean, required: true, default: false }

},
  { timestamps: true, toJSON: { virtuals: true } })

ProjectSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
}
)