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

    async editBusiness(update, id) {
        const original = await this.getBusinessesById(id)
        original.name = update.name || original.name 
        original.coverImg = update.coverImg || original.coverImg 
        original.logo = update.logo || original.logo 

        await original.save()
        return original
    }

}



export const businessesService = new BusinessesService()