import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { businessesService } from '../services/BusinessesService'
import { employeesService } from "../services/EmployeesService"
import { projectsService } from "../services/ProjectsService"


export class BusinessesController extends BaseController {
    constructor() {
        super('api/businesses')
        this.router
            .get('', this.getBusinesses)
            .get('/:id', this.getBusinessesById)
            .get('/:id/employees', this.getEmployeesByBusiness)
            .get('/:id/projects', this.getProjectsByBusiness)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createBusiness)
            .put('/:id', this.editBusiness)
            .delete('/:id', this.removeBusiness)
    }

    async getBusinesses(req, res, next) {
        try {
            const business = await businessesService.getBusinesses()
            return res.send(business)
        } catch (error) {
            next(error)
        }
    }

    async getBusinessesById(req, res, next) {
        try {
            const business = await businessesService.getBusinessesById(req.params.id)
            return res.send(business)
        } catch (error) {
            next(error)
        }
    }


    async createBusiness(req, res, next) {
        try {
            req.body.accountId = req.userInfo.id
            const business = await businessesService.createBusiness(req.body)
            return res.send(business)
        } catch (error) {
            next(error)
        }
    }


    async editBusiness(req, res, next) {
        try {
            const business = await businessesService.editBusiness(req.body, req.params.id)
            return res.send(business)
        } catch (error) {
            next(error)
        }
    }


    async removeBusiness(req, res, next) {
        try {
            await businessesService.removeBusiness(req.params.id, req.userInfo.id)
            return res.send('delorted')
        } catch (error) {
            next(error)
        }
    }

    async getEmployeesByBusiness(req, res, next) {
        try {
            const employees = await employeesService.getEmployeesByBusiness(req.params.id)
            return res.send(employees)
        } catch (error) {
            next(error)
        }
    }

    async getProjectsByBusiness(req, res, next) {
        try {
            const projects = await projectsService.getProjectsByBusiness(req.params.id)
            return res.send(projects)
        } catch (error) {
            next(error)
        }
    }
}