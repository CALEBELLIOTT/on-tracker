import { dbContext } from "../db/DbContext"

class TeamMembersService{

    async TeamByEmployee(id){
        const teams = await dbContext.TeamMembers.find({employeeId: id})
        return teams
    }


}



 export const teamMembersService = new TeamMembersService()