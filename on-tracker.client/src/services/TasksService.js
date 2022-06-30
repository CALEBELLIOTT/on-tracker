import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class TasksService {

    async postTask() {
        const res = await api.post('api/tasks')
        logger.log('posted task', res.data)
    }

}

export const tasksService = new TasksService()