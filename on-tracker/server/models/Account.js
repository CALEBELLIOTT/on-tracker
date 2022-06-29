import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    description: { type: String },
    businessId: { type: ObjectId },
    businessAccount: { type: Boolean, default: false }
    // NOTE If you wish to add additional properties do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)


AccountSchema.virtual('business', {
  localField: 'businessId',
  ref: 'Business',
  foreignField: '_id',
  justOne: true
})
