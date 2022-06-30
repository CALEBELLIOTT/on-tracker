import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"




class BusinessesService {


    async getBusinesses() {
        const business = await dbContext.Businesses.find()
        return business
    }

    async getBusinessesById(id) {
        const business = await dbContext.Businesses.findById(id).populate('creator')
        return business
    }

    async createBusiness(businessData) {
        const business = await dbContext.Businesses.create(businessData)
        await business.populate('creator')
        return business
    }

    async editBusiness(update, id) {
        const original = await this.getBusinessesById(id)
        original.name = update.name || original.name
        original.coverImg = update.coverImg || original.coverImg
        original.logo = update.logo || original.logo

        await original.save()
        await original.populate('creator')
        return original
    }

    async removeBusiness(id, userId) {
        const business = await this.getBusinessesById(id)
        if (business.accountId != userId) {
            throw new Forbidden('This is not your Business')
        }
        business.remove()
        return business
    }


}



export const businessesService = new BusinessesService()