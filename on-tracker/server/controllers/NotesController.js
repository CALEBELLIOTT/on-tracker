import { notesService } from "../services/NotesService";
import BaseController from "../utils/BaseController";

export class NotesController extends BaseController {
    constructor() {
        super('api/notes')
        this.router
            .get('/:id', this.getById)
            .post('', this.createNote)
            .put('/:id', this.editNote)
            .delete('/:id', this.removeNote)
    }


    async getById(req, res, next) {
        try {
            const notes = await notesService.getById(req.params.id)
            res.send(notes)
        } catch (error) {
            next(error)
        }
    }

    async createNote(req, res, next) {
        try {
            const note = await notesService.createNote(req.body)
            res.send(note)
        } catch (error) {
            next(error)
        }
    }

    async editNote(req, res, next) {
        try {
            const note = await notesService.editNote(req.body, req.params.id)
            res.send(note)
        } catch (error) {
            next(error)
        }
    }

    async removeNote(req, res, next) {
        try {
            const note = await notesService.removeNote(req.params.id)
            res.send('delorted')
        } catch (error) {
            next(error)
        }
    }
}