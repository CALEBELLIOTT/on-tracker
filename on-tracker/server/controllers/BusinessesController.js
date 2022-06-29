import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { businessesService } from '../services/BusinessesService'


export class BusinessesController extends BaseController{
    constructor(){
        super('api/businesses')
        this.router
        .get('', this.getBusinesses)
        .get('/:id', this.getBusinessesById)
        // TODO create project and employee gets
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createBusiness)
        .put('/:id', this.editBusiness)
    }
    
    async getBusinesses(req, res, next) {
      try {
        const business = await businessesService.getBusinesses()
        return res.send(business)
      } catch (error) {
        next(error)
      }
    }

    async getBusinessesById(req, res ,next) {
       try {
        const business = await businessesService.getBusinessesById(req.params.id)
        return res.send(business)
       } catch (error) {
        next(error)
       }
    }


    async createBusiness(req, res, next){
        try {
            req.body.creatorId = req.userInfo.id
            const business = await businessesService.createBusiness(req.body)
            return res.send(business)
        } catch (error) {
            next(error)
        }
    }


    async editBusiness(req, res, next){
        try {
            const business = await businessesService.editBusiness(req.body, req.params.id)
            return res.send(business)
        } catch (error) {
            next(error)
        }
    }
}