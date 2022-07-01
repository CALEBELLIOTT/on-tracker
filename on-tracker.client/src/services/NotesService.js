import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"



class NotesService {

    async getNotes(id) {
        const res = await api.get(`api/projects/${id}/notes`)
        logger.log('getting notes', res.data)
        AppState.projectNotes = res.data
    }

    async createNote(body) {
        const res = await api.post('api/notes/', body)
        logger.log(res.data)

    }

    async editNote(id) {
        const res = await api.put('api/notes/' + id)
        logger.log(res.data)
        AppState.projectNotes = res.data
    }


}


export const notesService = new NotesService()