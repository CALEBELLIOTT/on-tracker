import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class TasksService {


    async getTasks(id) {
        const res = await api.get('api/projects/' + id + '/tasks')
        logger.log(res.data)
        AppState.projectTasks = res.data
        logger.log(AppState.projectTasks, '[APPSTATE TASKS[')
    }
    async postTask(body) {
        const res = await api.post('api/tasks', body)
        logger.log('posted task', res.data)
        AppState.projectTasks.push(res.data)
        logger.log(AppState.projectTasks, '[TASKS IN APPSTATES')
        return res.data
    }

    async completeTask(id) {
        const res = await api.put('api/tasks/' + id + '/completed')
        logger.log(res.data)
        let updated = res.data
        let index = AppState.projectTasks.findIndex(t => t._id == updated._id);
        AppState.projectTasks = AppState.projectTasks.filter(p => p._id !== updated._id)
        AppState.projectTasks.splice(index, 0, updated)
    }

    async deleteTask(id) {
        const res = await api.delete('api/tasks/' + id)
        logger.log(res.data)
        AppState.projectTasks = AppState.projectTasks.filter(t => t._id != id)
    }


    async editTask(id, newText, newHour) {
        const res = await api.put(`api/tasks/${id}`, { description: newText }, { estimatedTime: newHour })
        logger.log(res.data)
    }

    getPercentage() {
        let done = 0
        let undone = 0
        AppState.projectTasks.forEach(t => {
            if (t.isCompleted) {
                done += t.estimatedTime
            } else {
                undone += t.estimatedTime
            }
        })
        let ratio = done / (undone + done) * 100
        AppState.projectCompletion = Math.floor(ratio)
    }

}

export const tasksService = new TasksService()