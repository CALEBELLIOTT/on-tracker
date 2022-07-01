import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class EmployeesService {

  async getAllEmployees() {
    const res = await api.get('api/businesses/' + AppState.account.businessId + '/employees')
    logger.log(res.data)
    AppState.employees = res.data
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
    console.log(res.data + 'create employee');
  }
}

export const employeesService = new EmployeesService()