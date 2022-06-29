import { dbContext } from "../db/DbContext"


class TasksService {
  async getTasksByProject(projectId) {
    const tasks = await dbContext.Tasks.find({projectId})
    return tasks
  }

  async getById(id) {
    const task = await dbContext.Tasks.findById(id)
    return task
  }
  async createTask(taskData) {
    const task = await dbContext.Tasks.create(taskData)
    return task
  }

  async editTask(update, id) {
    const original = await this.getById(id)
    original.description = update.description || original.description
    original.estimatedTime = update.estimatedTime || original.estimatedTime
    await original.save()
    return original
  }

  async toggleCompleted(id) {
    const original = await this.getById(id)
    original.isCompleted ? original.isCompleted = false : original.isCompleted = true
    await original.save()
    return original
  }

  async removeTask(id) {
    const task = await this.getById(id)
    await task.delete()
    return
  }

}

export const tasksService = new TasksService()