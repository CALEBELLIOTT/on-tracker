import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from "../utils/Pop"
import { api } from './AxiosService'
import { employeesService } from "./EmployeesService"

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async setBusinessId(id) {
    if (!AppState.account.businessId) {
      const res = await api.put('account/' + AppState.account.id, { businessId: id })
      const business = await api.get('api/businesses/' + id)
      AppState.account.businessId = id
      await employeesService.getAllEmployees()
      if (business.data.creator.id == AppState.account.id) {
        const res = await api.put('account/' + AppState.account.id, { businessAccount: true, businessId: id })
        AppState.account.businessAccount = true
      }
      AppState.account.businessId = id
      return
    }
    Pop.toast('you already belong to a business [set business id]', "warning")
  }

  async removeBusinessId(id) {
    const res = await api.put('/account/' + id, { businessId: undefined })
    console.log("remove business ID");
    console.log(res.data);
  }

  async editAccountInfo(updatedData) {
    const res = await api.put('account/' + AppState.account.id, updatedData)
    console.log(res.data);
  }

}

export const accountService = new AccountService()
