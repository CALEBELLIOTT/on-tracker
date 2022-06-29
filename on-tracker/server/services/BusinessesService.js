import { dbContext } from "../db/DbContext"




class BusinessesService{
    
    async getBusinesses() {
        const business = await dbContext.Businesses.find()
        return business
    }

    async getBusinessesById(id) {
        const business = await dbContext.Businesses.findById(id)
        return business
    }

    async createBusiness(businessData) {
        const business = await dbContext.Businesses.create(businessData)
        await business.Populate('creator')
        return business
    }

}



export const businessesService = new BusinessesService()