import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"



class EmployeesService {
   async getEmployeesByBusiness(businessId) {
      const employees = await dbContext.Employees.find({ businessId }).populate('account')
      return employees
   }


   async getById(id) {
      const employee = await dbContext.Employees.findById(id)
      await employee.populate('account')
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


   // TODO add logic to allow admins/ business owners to delete employees too
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