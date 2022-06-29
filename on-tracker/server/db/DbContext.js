import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { TaskSchema } from "../models/Task";
import { ValueSchema } from '../models/Value'
import { ProjectSchema } from '../models/Project.js'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Projects = mongoose.model('Project', ProjectSchema);

  Tasks = mongoose.model('Task', TaskSchema)
}

export const dbContext = new DbContext()
