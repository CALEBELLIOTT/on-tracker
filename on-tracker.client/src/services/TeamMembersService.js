import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class TeamMembersService {

    async createTeamMember(employeeData) {
        const res = await api.post('api/teammembers', employeeData)
        logger.log(res.data, '[TEAMMEMBERS IN AppState]')
        AppState.teamMembers.push(res.data)
        AppState.activeProjectTeamMembers.push(res.data)
        AppState.activeProjectAvailableEmployees = AppState.activeProjectAvailableEmployees.filter(e => e.id !== res.data.employee.id)
    }

    async getBusinessTeamMembers() {
        const res = await api.get('api/teammembers')
        console.log(res.data);
        let ThisBusinessTeamMembers = res.data.filter(m => m.employee?.businessId === AppState.account.businessId)
        console.log(ThisBusinessTeamMembers);
        AppState.teamMembers = ThisBusinessTeamMembers
    }

    async getProjectTeamMembers(projectId) {
        const res = await api.get('api/projects/' + projectId + '/teamMembers')
        console.log(res.data);
        AppState.activeProjectTeamMembers = res.data
    }

}



export const teamMemberService = new TeamMembersService()