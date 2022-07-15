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
        return res.data
    }

    async createProject(projectData) {
        projectData.businessId = AppState.account.businessId
        projectData.creatorId = AppState.account.id
        const res = await api.post('api/projects', projectData)
        console.log(res.data);
        AppState.projects.unshift(res.data)
        AppState.activeBusinessProjects.unshift(res.data)
        return res.data
    }

    async deleteProject(id) {
        const res = await api.delete('api/projects/' + id)
        logger.log(res.data)
        AppState.activeBusinessProjects = AppState.activeBusinessProjects.filter(p => p.id != id)
        AppState.projects = AppState.projects.filter(p => p.id != id)
    }

    async getBusinessProjects(businessId) {
        const res = await api.get('api/businesses/' + businessId + '/projects')
        // console.log('Business Projects!!! LOOK HERE!');
        console.log(res.data);
        AppState.activeBusinessProjects = res.data
    }


}



export const projectsService = new ProjectsService()