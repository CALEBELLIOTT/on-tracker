import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from "../utils/Pop"
import { api } from './AxiosService'

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
      console.log(res.data);
      AppState.account.businessId = id
    }
    Pop.toast('you already belong to a business', "warning")
  }
}

export const accountService = new AccountService()
