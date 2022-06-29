import { projectsService } from "../services/ProjectsService.js";
import BaseController from "../utils/BaseController.js";

export class ProjectsController extends BaseController {
  constructor() {
    super('api/projects')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
  }

  async getAll(req, res, next) {
    try {
      const projects = await projectsService.getAll(req.query)
      res.send(projects)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const project = await projectsService.findById(req.params.id)
      res.send(project)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      const project = await projectsService.create(req.body)
      res.send(project)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      const updated = await projectsService.edit(req.body)
      res.send(updated)
    } catch (error) {
      next(error)
    }
  }
}