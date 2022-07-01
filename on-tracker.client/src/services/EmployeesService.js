import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class EmployeesService {

  async getAllEmployees() {
    const res = await api.get('api/businesses/' + AppState.account.businessId + '/employees')
    logger.log(res.data)
    AppState.employees = res.data
    AppState.activeEmployee = AppState.employees.filter(e => e.account.id == AppState.account.id)
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
    console.log(res.data + 'create employee');
  }

  async removeEmployee(id) {
    // TODO allow business accounts to remove employees that aren't themselves
    const res = await api.delete('api/employees/' + id)
    console.log(res.data + "[remove employee]");
  }

  async setActiveEmployee(id) {
    AppState.activeEmployee = AppState.employees.filter(e => e.id == id);
    logger.log(AppState.activeEmployee)
  }
}

export const employeesService = new EmployeesService()