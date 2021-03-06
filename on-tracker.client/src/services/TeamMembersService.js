import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { api } from "./AxiosService"

class TeamMembersService {

    async createTeamMember(employeeData) {
        console.log(AppState.teamMembers);
        let found = AppState.teamMembers.filter(t => t.employeeId == employeeData.employeeId && t.projectId == employeeData.projectId)
        console.log(found);
        if (found.length === 0) {
            const res = await api.post('api/teammembers', employeeData)
            logger.log(res.data, '[TEAMMEMBERS IN AppState]')
            AppState.teamMembers.push(res.data)
            AppState.activeProjectTeamMembers.push(res.data)
            AppState.activeProjectAvailableEmployees = AppState.activeProjectAvailableEmployees.filter(e => e.id !== res.data.employee.id)
            if (res.data.employee.account.id == AppState.account.id) {
                AppState.teamMemberAccount.push(res.data)
            }
            return
        }
        Pop.toast('Already Assigned to Project')
    }

    async getBusinessTeamMembers() {
        const res = await api.get('api/teammembers')
        console.log(res.data);
        let ThisBusinessTeamMembers = res.data.filter(m => m.employee?.businessId === AppState.account.businessId)
        console.log(ThisBusinessTeamMembers);
        AppState.teamMembers = ThisBusinessTeamMembers
        AppState.teamMemberAccount = res.data.filter(t => t.employeeId == AppState.accountEmployee.id)
        console.log(AppState.teamMemberAccount);
    }

    async getProjectTeamMembers(projectId) {
        const res = await api.get('api/projects/' + projectId + '/teamMembers')
        console.log(res.data);
        AppState.activeProjectTeamMembers = res.data
    }

    async getEmployeesTeamMembers(id) {
        const res = await api.get('api/employees/' + id + '/teammembers')
        console.log(res.data);
        AppState.teamMemberAccount = res.data
    }

}



export const teamMemberService = new TeamMembersService()