import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"

class TeamMembersService {

    async getTeamMembers() {
        const teamMembers = await dbContext.TeamMembers.find()
            .populate('employee')
            .populate('project')
        return teamMembers
    }
    async getTeamMembersByProject(projectId) {
        const teamMembers = await dbContext.TeamMembers.find(projectId).populate('project').populate('employee')
        return teamMembers
    }

    async teamByEmployee(id) {
        const teams = await dbContext.TeamMembers.find({ employeeId: id }).populate('project').populate('employee')
        return teams
    }

    async removeTeamMembers(id, userId) {
        const teamMember = await dbContext.TeamMembers.findById(id)
        if (teamMember.accountId != userId) {
            throw new Forbidden('You are not allowed to deleted this')
        }
        await teamMember.populate('project').populate('employee')
        await teamMember.save()
        return teamMember
    }


}



export const teamMembersService = new TeamMembersService()