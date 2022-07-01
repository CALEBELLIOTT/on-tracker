import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class EmployeesService {

  async getAllEmployees() {
    const res = await api.get('api/businesses/'+ AppState.account.businessId + '/employees')
    logger.log(res.data)
    AppState.employees = res.data
    logger.log('[EMPLOYEES IN APPSTATE]')
  }
}

export const employeesService = new EmployeesService()