class EmployeesService {

  async getAllEmployees() {
    const res = await api.get('api/business/'+ AppState.account.businessId + '/employees')
    logger.log(res.data)
    AppState.employees = res.data
    logger.log('[EMPLOYEES IN APPSTATE]')
  }
}

export const employeesService = new EmployeesService()