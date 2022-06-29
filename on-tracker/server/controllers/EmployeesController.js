import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { employeesService } from '../services/EmployeesService'




export class EmployeesController extends BaseController{
    constructor(){
        super('api/employees')
        this.router
        .get('/:id/teammembers', this.teamByEmployee)
        .post('', this.createEmployee)
    }
    async teamByEmployee(req, res, next) {
        try {
            const employeeTeams = await employeesService.teamMembersService(req.params.id)
            return res.send(employeeTeams)
        } catch (error) {
            next(error)
        }
    }
}