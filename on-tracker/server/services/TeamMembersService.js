import { dbContext } from "../db/DbContext"

class TeamMembersService {
    async getTeamMembersByProject(projectId) {
        const teamMembers = await dbContext.TeamMembers.find({projectId})
        return teamMembers
    }

    async teamByEmployee(id) {
        const teams = await dbContext.TeamMembers.find({ employeeId: id })
        return teams
    }
}



export const teamMembersService = new TeamMembersService()