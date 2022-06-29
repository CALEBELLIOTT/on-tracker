import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"



class EmployeesService {


   async getById(id) {
      const employee = await dbContext.Employees.findById(id)
      return employee
   }

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

   async deleteEmployee(id, userId) {
      const employee = await this.getById(id)
      if (employee.accountId != userId) {
         throw new Forbidden('that is not your profile')
      }
      await employee.remove()
      return ('delorted')
   }



}


export const employeesService = new EmployeesService()