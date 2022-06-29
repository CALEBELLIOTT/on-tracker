import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"



class EmployeesService{
    
    async createEmployee(employeeData) {
       const employee = await dbContext.Employees.create(employeeData)
       await employee.populate('account', 'name picture')
       return employee
    }

    async editEmployee(update, userId, employeeId) {
       const original = await dbContext.Employees.findById(employeeId)
       if (original.accountId != userId) {
        throw new Forbidden('This is not your account')
       }
       original.skills = update.skills || original.skills
       original.certifications = update.certifications || original.certifications

       await original.save()
       await original.populate('account')
       return original
    }
  
    

}


export const employeesService = new EmployeesService()