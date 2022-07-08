import { BadRequest, Forbidden } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"

class ProjectsService {


  async getAll(query = {}) {
    const projects = await dbContext.Projects.find(query)
    return projects
  }

  async create(body) {
    const project = await dbContext.Projects.create(body)
    return project
  }
  async edit(edited) {
    const original = await this.findById(edited.id);
    if (original.creatorId !== edited.creatorId) {
      throw new Forbidden("You do not have permission to edit this project.");
    }
    if (original.cancelled) {
      throw new Forbidden("You cannot edit a cancelled project.");
    }
    original.location = edited.location || original.location
    original.projectName = edited.projectName || original.projectName
    original.quotePrice = edited.quotePrice || original.quotePrice
    original.coverImg = edited.coverImg || original.coverImg
    original.jobSiteImgs = edited.jobSiteImgs || original.jobSiteImgs
    original.description = edited.description || original.description
    original.dueDate = edited.dueDate || original.dueDate
    original.completed = edited.completed || original.completed
  }

  async cancel(projectId, userId) {
    const project = await this.findById(projectId)
    if (project.creatorId != userId) {
      throw new Forbidden("You are not authorized to cancel this project!")
    }
    project.cancelled = true
    await project.save()
  }


  async complete(projectId, userId) {
    const project = await this.findById(projectId)
    if (project.creatorId != userId) {
      throw new Forbidden("You are not authorized to complete this project!")
    }
    if (project.cancelled) {
      throw new Forbidden("You cannot complete a project that is canceled(trust me, Sam said I'm a developer)!")
    }
    project.completed = true
    await project.save()
  }
  async findById(id) {
    const project = await dbContext.Projects.findById(id).populate('creator', 'name picture')
    if (!project) {
      throw new BadRequest('so invalid')
    }
    return project
  }
  async delete(id, userId) {
    const project = await this.findById(id)
    if (project.creatorId != userId) {
      throw new Forbidden('This is not your project')
    }
    await project.remove()
    return
  }

  async getProjectsByBusiness(businessId) {
    const projects = await dbContext.Projects.find({ businessId })
    return projects
  }
}

export const projectsService = new ProjectsService()