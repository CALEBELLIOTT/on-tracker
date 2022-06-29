import { dbContext } from "../db/DbContext"




class BusinessesService{
    getBusinesses() {
        const business = dbContext.Businesses.find()
        return business
    }

}



export const businessesService = new BusinessesService()