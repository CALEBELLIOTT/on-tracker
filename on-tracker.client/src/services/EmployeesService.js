import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class EmployeesService {

  async getAllEmployees() {
    const res = await api.get('api/businesses/' + AppState.account.businessId + '/employees')
    logger.log(res.data)
    AppState.employees = res.data
    let target = AppState.employees.filter(e => e.account.id == AppState.account.id)
    AppState.activeEmployee = target[0]
    logger.log('Active Employee', AppState.activeEmployee)
    logger.log('[EMPLOYEES IN APPSTATE]')
  }

  async createEmployee() {
    let data = {
      businessId: AppState.account.businessId,
      accountId: AppState.account.id,
      skills: "I am good at this",
      certifications: ["emt"]
    }
    const res = await api.post('api/employees', data)
    AppState.employees.push(res.data)
    AppState.activeEmployee = res.data
    console.log(res.data + 'create employee');
  }

  async editEmployee(updatedData, id) {
    let employees = await api.get('api/employees')
    employees = employees.data.filter(e => e.account.id === id)
    console.log(employees);
    const res = await api.put('api/employees/' + employees[0].id, updatedData)
    console.log(res.data);
  }

  async removeEmployee(id) {
    // TODO allow business accounts to remove employees that aren't themselves
    const res = await api.delete('api/employees/' + id)
    console.log(res.data + "[remove employee]");
  }

  async setActiveEmployee(id) {
    let target = AppState.employees.filter(e => e.id == id);
    AppState.activeEmployee = target[0]
    console.log(AppState.employees);
    console.log(AppState.activeEmployee)
  }

  getAvailableEmployees() {
    let teamMembers = AppState.activeProjectTeamMembers
    let employees = AppState.employees

    teamMembers.forEach(m => {
      employees.forEach(e => {
        if (e.id === m.employee.id) {
          employees = employees.filter(employee => employee.id !== e.id)
        }
      })
    })
    console.log('here!!!!')
    console.log(employees);
    AppState.activeProjectAvailableEmployees = employees
  }

  setAccountEmployee(id) {
    AppState.accountEmployee = AppState.employees.filter(e => e.accountId == id)[0]
    console.log(AppState.accountEmployee);
  }
}

export const employeesService = new EmployeesService()