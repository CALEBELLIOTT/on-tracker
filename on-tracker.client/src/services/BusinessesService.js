import { AppState } from "../AppState";
import { api } from "./AxiosService"


class BusinessesService {

  async getAllBusinesses() {
    const res = await api.get('api/businesses')
    console.log(res.data);
    AppState.allBusinesses = res.data
  }
}

export const businessesService = new BusinessesService()