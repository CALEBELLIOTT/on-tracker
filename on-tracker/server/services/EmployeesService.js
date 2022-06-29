import { dbContext } from "../db/DbContext"



class EmployeesService{
    async createEmployee(employeeData) {
       const employee = await dbContext.Employees.create(employeeData)
       await employee.Populate('account', 'name picture')
       return employee
    }
  
    

}


export const employeesService = new EmployeesService()