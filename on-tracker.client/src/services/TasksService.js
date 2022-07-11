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
        AppState.projectTasks = AppState.projectTasks.filter(p => p.id === updated.id)
        AppState.projectTasks.push(updated)
    }

    async deleteTask(id) {
        const res = await api.delete('api/tasks/' + id)
        logger.log(res.data)
        AppState.projectTasks = AppState.projectTasks.filter(t => t.id != id)
    }


    async editTask(id, newText) {
        const res = await api.put(`api/tasks/${id}`, { description: newText })
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
        console.log(Math.floor(ratio));
        AppState.projectCompletion = Math.floor(ratio)
        console.log(AppState.projectCompletion);
        console.log(AppState.projectTasks);
    }

}

export const tasksService = new TasksService()