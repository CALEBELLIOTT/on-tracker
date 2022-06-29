import { dbContext } from "../db/DbContext"

class NotesService {

    async getById(id) {
        const notes = await dbContext.Notes.findById(id)
        return notes
    }

    async createNote(noteData) {
        const note = dbContext.Notes.create(noteData)
        return note
    }

    async editNote(update, id) {
        const original = await this.getById(id)
        original.

    }


}

export const notesService = new NotesService()