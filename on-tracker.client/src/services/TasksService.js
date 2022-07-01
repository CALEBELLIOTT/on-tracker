import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class TasksService {

    async postTask(body) {
        const res = await api.post('api/tasks', body)
        logger.log('posted task', res.data)
        AppState.projectTasks = res.data
        logger.log(AppState.projectTasks, '[TASKS IN APPSTATES')
        return res.data
    }

    async completeTask(id) {
        const res = await api.put('api/tasks/' + id + '/completed')
        logger.log(res.data)
        AppState.projectTasks = res.data

    }

}

export const tasksService = new TasksService()