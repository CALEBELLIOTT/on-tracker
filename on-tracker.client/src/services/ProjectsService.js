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


}



export const projectsService = new ProjectsService()