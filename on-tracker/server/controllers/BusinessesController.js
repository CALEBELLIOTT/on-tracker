import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { businessesService } from '../services/BusinessesService'


export class BusinessesController extends BaseController{
    constructor(){
        super('api/businesses')
        this.router
        .get('', this.getBusinesses)
    }
    async getBusinesses(req, res, next) {
      try {
        const business = await businessesService.getBusinesses()
        return res.send(business)
      } catch (error) {
        next(error)
      }
    }
}