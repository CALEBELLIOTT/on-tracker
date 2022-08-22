import { Auth0Provider } from "@bcwdev/auth0provider";
import { notesService } from "../services/NotesService";
import { socketProvider } from "../SocketProvider";
import BaseController from "../utils/BaseController";

export class NotesController extends BaseController {
    constructor() {
        super('api/notes')
        this.router
            .get('/:id', this.getById)
            .use(Auth0Provider.getAuthorizedUserInfo)
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
            req.body.accountId = req.userInfo.id
            const note = await notesService.createNote(req.body)
            socketProvider.messageRoom(req.body.noteId, 'new:note', note)
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