import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"

class TeamMembersService {


    async getTeamMembers() {
        const teamMembers = await dbContext.TeamMembers.find().
            populate({
                path: 'employee',
                populate: { path: 'account' }
            }).
            populate('project')
        return teamMembers
    }
    async getTeamMembersByProject(projectId) {
        const teamMembers = await dbContext.TeamMembers.find({ projectId: projectId }).populate('project').populate('employee')
        return teamMembers
    }

    async createTeamMember(teamMemberData) {
        const teamMember = await dbContext.TeamMembers.create(teamMemberData)
        await teamMember.populate({
            path: 'employee',
            populate: { path: 'account' }
        })
        await teamMember.populate('project')
        return teamMember
    }

    async teamByEmployee(id) {
        const teams = await dbContext.TeamMembers.find({ employeeId: id }).
            populate('project').
            populate({
                path: 'employee',
                populate: { path: 'account' }
            })
        return teams
    }


    async removeTeamMembers(id, userId) {
        const teamMember = await dbContext.TeamMembers.findById(id)
        if (teamMember.accountId != userId) {
            throw new Forbidden('You are not allowed to deleted this')
        }
        await teamMember.populate('project').populate('employee')
        await teamMember.delete()
        return ('delorted')
    }


}



export const teamMembersService = new TeamMembersService()