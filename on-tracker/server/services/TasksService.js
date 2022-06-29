import { dbContext } from "../db/DbContext"


class TasksService {
  async getById(id) {
    const task = await dbContext.Tasks.findById(id)
    return task
  }
  async createTask(taskData) {
    const task = await dbContext.Tasks.create(taskData)
    return task
  }

}

export const tasksService = new TasksService()