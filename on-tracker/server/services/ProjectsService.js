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
    if (original.creatorId.toString() !== edited.creatorId) {
      throw new Forbidden("You do not have permission to edit this project.");
    }
    if (original.cancelled) {
      throw new Forbidden("You cannot edit a cancelled project.");
    }
    original.creatorId = edited.creatorId || original.creatorId
    original.businessId = edited.businessId || original.businessId
    original.location = edited.location || original.location
    original.quotePrice = edited.quotePrice || original.quotePrice
    original.coverImg = edited.coverImg || original.coverImg
    original.jobSiteImgs = edited.jobSiteImgs || original.jobSiteImgs
    original.description = edited.description || original.description
    original.dueDate = edited.dueDate || original.dueDate
    original.cancelled = edited.cancelled || original.cancelled
    original.completed = edited.completed || original.completed
  }
  async findById(id) {
    const project = await dbContext.Projects.findById(id).populate('creator', 'name picture')
    if (!project) {
      throw new BadRequest('so invalid')
    }
    return project
  }

}

export const projectsService = new ProjectsService()