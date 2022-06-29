import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { tasksService } from "../services/TasksService"


export class TasksController extends BaseController {
  constructor() {
    super('api/tasks')
    this.router
      .get('/:id', this.getById)
      .post('', this.createTask)
      .put('/:id', this.editTask)
      .put('/:id/completed', this.toggleCompleted)
      .delete('/:id', this.removeTask)
  }


  async getById(req, res, next) {
    try {
      const task = await tasksService.getById(req.params.id)
      return res.send(task)
    } catch (error) {
      next(error)
    }
  }

  async createTask(req, res, next) {
    try {
      const task = await tasksService.createTask(req.body)
      return res.send(task)
    } catch (error) {
      next(error)
    }
  }

  async editTask(req, res, next) {
    try {
      const task = await tasksService.editTask(req.body, req.params.id)
      return res.send(task)
    } catch (error) {
      next(error)
    }
  }

  async toggleCompleted(req, res, next) {
    try {
      const completed = await tasksService.toggleCompleted(req.params.id)
      return res.send(completed)
    } catch (error) {
      next(error)
    }
  }

  async removeTask(req, res, next) {
    try {
      const task = await tasksService.removeTask(req.params.id)
      return res.send('delorted')
    } catch (error) {
      next(error)
    }
  }

}