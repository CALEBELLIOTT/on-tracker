import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { teamMembersService } from '../services/TeamMembersService'



export class TeamMembersController extends BaseController {
    constructor() {
        super('api/teammembers')
        this.router
            .get('', this.getTeamMembers)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createTeamMember)
            .delete('/:id', this.removeTeamMembers)
    }
    async getTeamMembers(req, res, next) {
        try {
            const teamMembers = await teamMembersService.getTeamMembers()
            return res.send(teamMembers)
        } catch (error) {
            next(error)
        }
    }

    async createTeamMember(req, res, next) {
        try {
            const teamMember = await teamMembersService.createTeamMember(req.body)
            return res.send(teamMember)
        } catch (error) {
            next(error)
        }
    }

    async removeTeamMembers(req, res, next) {
        try {

            const teamMembers = await teamMembersService.removeTeamMembers(req.params.id, req.userInfo.id)
            return res.send('delorted')
        } catch (error) {
            next(error)
        }
    }
}