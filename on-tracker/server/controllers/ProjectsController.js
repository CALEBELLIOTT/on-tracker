import { Auth0Provider } from "@bcwdev/auth0provider";
import { notesService } from "../services/NotesService.js";
import { projectsService } from "../services/ProjectsService.js";
import { tasksService } from "../services/TasksService.js";
import { teamMembersService } from "../services/TeamMembersService.js";
import BaseController from "../utils/BaseController.js";

export class ProjectsController extends BaseController {
  constructor() {
    super('api/projects')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/notes', this.getNotesByProject)
      .get('/:id/teamMembers', this.getTeamMembersByProject)
      .get('/:id/tasks', this.getTasksByProject)
      // NOTE May have switch auth0 to another place
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.edit)
      .put('/:id/cancel', this.cancel)
      .put('/:id/complete', this.complete)
      .delete('/:id', this.delete)
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

  async getNotesByProject(req, res, next) {
    try {
      const notes = await notesService.getNotesByProject(req.params.id)
      res.send(notes)
    } catch (error) {
      next(error)
    }
  }
  async getTeamMembersByProject(req, res, next) {
    try {
      const teamMembers = await teamMembersService.getTeamMembersByProject(req.params.id)
      res.send(teamMembers)
    } catch (error) {
      next(error)
    }
  }
  async getTasksByProject(req, res, next) {
    try {
      const tasks = await tasksService.getTasksByProject(req.params.id)
      res.send(tasks)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id;
      const project = await projectsService.create(req.body)
      res.send(project)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id;
      req.body.id = req.params.id
      const updated = await projectsService.edit(req.body)
      res.send(updated)
    } catch (error) {
      next(error)
    }
  }

  async cancel(req, res, next) {
    try {
      await projectsService.cancel(req.params.id, req.userInfo.id)
      res.send({ message: "Project Canceled" })
    } catch (error) {
      next(error)
    }
  }

  async complete(req, res, next) {
    try {
      await projectsService.complete(req.params.id, req.userInfo.id)
      res.send({ message: "Project Completed" })
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await projectsService.delete(req.params.id, req.userInfo.id)
      res.send({ message: 'Deleted Project' })
    } catch (error) {
      next(error)
    }
  }
}