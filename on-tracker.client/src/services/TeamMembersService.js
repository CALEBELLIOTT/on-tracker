import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class TeamMembersService {

    async createTeamMember(employeeData) {
        const res = await api.post('api/teammembers', employeeData)
        logger.log(res.data, '[TEAMMEMBERS IN AppState]')

    }



}



export const teamMemberService = new TeamMembersService()