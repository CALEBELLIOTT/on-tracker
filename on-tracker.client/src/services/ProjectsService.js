import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"



class ProjectsService {

    async getAllProjects() {
        const res = await api.get('api/projects')
        logger.log(res.data)
        AppState.projects.unshift(res.data)
        logger.log('[PROJECTS IN APPSTATE]')
    }


}



export const projectsService = new ProjectsService()