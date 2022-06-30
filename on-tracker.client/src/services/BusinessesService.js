import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { api } from "./AxiosService"


class BusinessesService {

  async getAllBusinesses() {
    const res = await api.get('api/businesses')
    console.log(res.data);
    AppState.allBusinesses = res.data
  }

  async createBusiness(data) {
    if (!AppState.account.businessId) {
      const res = await api.post('api/businesses', data)
      console.log(res.data);
      AppState.allBusinesses.push(res.data)
    }
    Pop.toast('you already belong to a business', "error")
  }
}

export const businessesService = new BusinessesService()