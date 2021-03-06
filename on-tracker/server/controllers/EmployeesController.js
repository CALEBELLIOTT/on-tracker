import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { employeesService } from '../services/EmployeesService'
import { teamMembersService } from '../services/TeamMembersService'




export class EmployeesController extends BaseController {
    constructor() {
        super('api/employees')
        this.router
            .get('', this.getAllEmployees)
            .get('/:id/teammembers', this.teamByEmployee)
            .get('/:id', this.getById)
            .delete('/:id', this.deleteEmployee)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createEmployee)
            .put('/:id', this.editEmployee)
    }



    async getAllEmployees(req, res, next) {
        try {
            const employees = await employeesService.getAllEmployees()
            return res.send(employees)
        } catch (error) {
            next(error)
        }
    }
    async getById(req, res, next) {
        try {
            const employee = await employeesService.getById(req.params.id)
            return res.send(employee)
        } catch (error) {
            next(error)
        }
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
            req.body.accountId = req.userInfo.id
            const employee = await employeesService.createEmployee(req.body)
            return res.send(employee)
        } catch (error) {
            next(error)
        }
    }

    async editEmployee(req, res, next) {
        try {
            const employee = await employeesService.editEmployee(req.body, req.userInfo.id, req.params.id)
            res.send(employee)
        } catch (error) {
            next(error)
        }
    }

    async deleteEmployee(req, res, next) {
        try {
            await employeesService.deleteEmployee(req.params.id, req.userInfo.id)
            res.send('delorted')
        } catch (error) {
            next(error)
        }
    }
}