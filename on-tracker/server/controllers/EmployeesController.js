import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { employeesService } from '../services/EmployeesService'
import { teamMembersService } from '../services/TeamMembersService'




export class EmployeesController extends BaseController{
    constructor(){
        super('api/employees')
        this.router
        .get('/:id/teammembers', this.teamByEmployee)
        .post('', this.createEmployee)
    }
    
    async teamByEmployee(req, res, next) {
        try {
            const employeeTeams = await teamMembersService.teamByEmployee(req.params.id)
            return res.send(employeeTeams)
        } catch (error) {
            next(error)
        }
    }

    async createEmployee(req, res, next) {
        try {
            const employee = await employeesService.createEmployee(req.body)
            return res.send(employee)
        } catch (error) {
            next(error)
        }
    }
}