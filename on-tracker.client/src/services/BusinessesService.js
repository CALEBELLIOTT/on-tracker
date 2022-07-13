import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { accountService } from "./AccountService";
import { api } from "./AxiosService"
import { employeesService } from "./EmployeesService";


class BusinessesService {

  async getAllBusinesses() {
    const res = await api.get('api/businesses')
    console.log(res.data);
    AppState.allBusinesses = res.data
  }

  async setActiveBusiness(id) {
    const res = await api.get('api/businesses/' + id)
    console.log('SET ACTIVE BUSINESS');
    console.log(res.data);
    AppState.activeBusiness = res.data
  }

  async createBusiness(data) {
    if (!AppState.account.businessId) {
      let res = await api.post('api/businesses', data)
      console.log(res.data);
      AppState.allBusinesses.push(res.data)
      await accountService.setBusinessId(res.data.id)
      return
    }
    Pop.toast('you already belong to a business', "error")
  }
}

export const businessesService = new BusinessesService()