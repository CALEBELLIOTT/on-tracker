import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { TaskSchema } from "../models/Task";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Task = mongoose.model('Task', TaskSchema)
}

export const dbContext = new DbContext()
