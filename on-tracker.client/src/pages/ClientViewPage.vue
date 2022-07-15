
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
      <div class="d-flex flex-column mt-5 text-start m-2">
        <h1>Thank you for choosing <span class="text-primary">OnTracker</span></h1>
        <p class="text-muted">Here at OnTracker, it is always our goal to keep you in the loop about the progress of
          your project.</p>
      </div>
    </div>
    <div class="divider-line-local"></div>
  </div>

  <div class="row">
    <div class="col-12">
      <div class="p-2 text-center text-md-start mt-5 d-flex justify-content-center flex-column align-items-center">
        <h3 class="">Your Project: <span class="text-primary">{{ project.projectName }}</span></h3>
        <p class="text-muted my-0">{{ project.description }}</p>
        <!-- <p class="text-muted my-0">{{ project.location.route }}</p> -->
        <p class="text-muted my-0">Estimated Price: ${{ project.quotePrice }}</p>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <div class="d-flex align-items-center text-center flex-column mt-5">
        <h3>Your Team</h3>
        <p class="text-muted m-0">The Employees of {{ business.name }} are working hard to complete your project on
          time.
        </p>
      </div>
      <div class="teamMembersContainer">
        <div class="teamMemberCard m-2 p-2" v-for="t in teamMembers">
          <div class="d-flex align-items-center">
            <img class="profile-img mx-2" :src="t.employee.account.picture" alt="">
            <div class="d-flex-flex-column">
              <p class="text-primary my-0">{{ t.employee.account.name }}</p>
              <p class="text-muted my-0">{{ t.employee.account.email }}</p>
            </div>
          </div>
        </div>
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
      teamMembers: computed(() => AppState.activeProjectTeamMembers),
      business: computed(() => AppState.activeBusiness)
    }
  }
}
</script>


<style lang="scss" scoped>
.logo {
  height: 4rem;
  object-fit: contain;
}

.profile-img {
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  object-fit: cover;
}

.divider-line-local {
  height: 2px;
  background-color: #f27648;
  width: 50%;
}

@media(max-width: 769px) {
  .divider-line-local {
    width: 75%;
    margin: auto;
  }
}
</style>
