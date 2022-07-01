import { dbContext } from "../db/DbContext"

class NotesService {

    async getById(id) {
        const notes = await dbContext.Notes.findById(id).populate('account').populate('project')
        return notes
    }
    async getNotesByProject(projectId) {
        const notes = await dbContext.Notes.find({ projectId }).populate('account').populate('project')
        return notes
    }

    async createNote(noteData) {
        const note = dbContext.Notes.create(noteData)
        return note
    }

    async editNote(update, id) {
        const original = await this.getById(id)
        original.body = update.body || original.body
        await original.save()
        return original
    }

    async removeNote(id) {
        const note = await this.getById(id)
        await note.delete()
        return

    }

}

export const notesService = new NotesService()