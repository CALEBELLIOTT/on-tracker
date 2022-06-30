import { logger } from "../utils/Logger"
import { api } from "./AxiosService"



class NotesService {

    async getNotes(id) {
        const res = await api.get('api/notes/' + id)
        logger.log(res.data)
    }


}


export const notesService = new NotesService()