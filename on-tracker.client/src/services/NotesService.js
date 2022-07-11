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
        AppState.projectNotes.push(res.data)

    }

    async editNote(id, notes) {
        const res = await api.put(`api/notes/${id}`, { body: notes })
        logger.log(res.data)
        // AppState.projectNotes = res.data
    }

    async deleteNote(id) {
        const res = await api.delete('api/notes/' + id)
        logger.log('deleting note', res.data)
        AppState.projectNotes = AppState.projectNotes.filter(n => n.id != id)
    }


}


export const notesService = new NotesService()