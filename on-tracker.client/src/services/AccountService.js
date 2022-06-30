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
      const business = await api.get('api/businesses/' + id)
      if (business.data.creator.id == AppState.account.id) {
        const res = await api.put('account/' + AppState.account.id, { businessAccount: true })
        AppState.account.businessAccount = true
      }
      AppState.account.businessId = id
      return
    }
    Pop.toast('you already belong to a business [set business id]', "warning")
  }

  // async setBusinessAccount() {
  //   const res = await api.put('account/' + AppState.account.id, { businessAccount: true })
  //   console.log(res.data);
  //   console.log(AppState.account);
  // }
}

export const accountService = new AccountService()
