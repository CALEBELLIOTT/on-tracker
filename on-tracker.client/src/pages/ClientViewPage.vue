
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="
          col-12
          p-2
          d-flex
          justify-content-center
          border-primary
          shadow
          border-bottom
          nav-color
        ">
        <router-link :to="{ name: 'Home' }">
          <img class="img-fluid logo" src="../assets/img/Ontracker logo OG.png" alt="" />
        </router-link>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12">
      <div class="d-flex flex-column align-items-center mt-5">
        <h1>Thank you for choosing <span class="text-primary">OnTracker</span></h1>
        <p class="text-muted">Here at OnTracker, it is always our goal to keep you in the loop about the progress of
          your project.</p>
      </div>
    </div>
  </div>

</template>


<script>
import { computed, onMounted } from "vue"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"
import { projectsService } from "../services/ProjectsService"
import { tasksService } from "../services/TasksService"
import { teamMemberService } from "../services/TeamMembersService"

export default {
  setup() {
    let route = useRoute()
    onMounted(async () => {
      await projectsService.getProjectById(route.params.id)
      await teamMemberService.getProjectTeamMembers(route.params.id)
      await tasksService.getTasks(route.params.id)
      console.log(AppState.activeProject);
      console.log(AppState.projectTasks);
      console.log(AppState.activeProjectTeamMembers);
    })
    return {
      project: computed(() => AppState.activeProject),
      tasks: computed(() => AppState.projectTasks),
      teamMembers: computed(() => AppState.activeProjectTeamMembers)
    }
  }
}
</script>


<style lang="scss" scoped>
.logo {
  height: 4rem;
  object-fit: contain;
}
</style>
