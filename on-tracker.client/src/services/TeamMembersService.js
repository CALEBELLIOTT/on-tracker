import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class TeamMembersService {

    async createTeamMember(employeeData) {
        const res = await api.post('api/teammembers', employeeData)
        logger.log(res.data, '[TEAMMEMBERS IN AppState]')
        AppState.teamMembers.push(res.data)
    }

    async getBusinessTeamMembers() {
        const res = await api.get('api/teammembers')
        console.log(res.data);
        let ThisBusinessTeamMembers = res.data.filter(m => m.employee?.businessId === AppState.account.businessId)
        console.log(ThisBusinessTeamMembers);
        AppState.activeBusinessTeamMembers = ThisBusinessTeamMembers
    }



}



export const teamMemberService = new TeamMembersService()