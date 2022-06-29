import { dbContext } from "../db/DbContext"

class TeamMembersService{
  

 async teamByEmployee(id){
        const teams = await dbContext.TeamMembers.find({employeeId: id})
        return teams
    }


}



 export const teamMembersService = new TeamMembersService()