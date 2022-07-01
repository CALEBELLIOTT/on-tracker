import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"



class ProjectsService {

    async getAllProjects() {
        const res = await api.get('api/projects')
        logger.log(res.data)
        AppState.projects = res.data
        logger.log('[PROJECTS IN APPSTATE]')
    }

    async getProjectById(id) {
        const res = await api.get('api/projects/' + id)
        logger.log(res.data)
        AppState.activeProject = res.data
    }

    async createProject(projectData) {
        projectData.businessId = AppState.account.businessId
        projectData.creatorId = AppState.account.id
        const res = await api.post('api/projects', projectData)
        console.log(res.data);
    }


}



export const projectsService = new ProjectsService()