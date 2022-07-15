
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


    <div class="row">
      <div class="col-12">
        <div class="d-flex flex-column mt-5 text-start m-2">
          <h1>Thank you for choosing <span class="text-primary">OnTracker</span></h1>
          <p class="text-muted">Here at OnTracker, it is always our goal to keep you in the loop about the progress of
            your project.</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="p-2 text-center text-md-start mt-5 d-flex justify-content-center flex-column align-items-center">
          <div class="d-flex align-items-center">
            <h3 class="">Your Project, <span class="text-primary">{{ project.projectName }}</span> is being completed by
              <span class="text-primary">{{ business.name }}</span>
            </h3>
            <img :src="business.logo" class="profile-img mx-2" alt="">
          </div>
          <p class="text-muted my-0">{{ project.description }}</p>
          <!-- <p class="text-muted my-0">{{ project.location.route }}</p> -->
          <p class="text-muted my-0">Estimated Price: ${{ project.quotePrice }}</p>
        </div>
        <div class="divider-line-local"></div>
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
        <div class="teamMembersContainer mt-5">
          <div class="teamMemberCard p-2" v-for="t in teamMembers">
            <div class="d-flex align-items-center">
              <img class="profile-img mx-2" :src="t.employee.account.picture" alt="">
              <div class="d-flex-flex-column">
                <p class="text-primary my-0">{{ t.employee.account.name }} <span
                    v-if="t.employee.account.businessAccount || t.isAdmin" class="text-muted">(Admin)</span></p>
                <p class="text-muted my-0">{{ t.employee.account.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex flex-column mt-5">
          <h3 class="text-center">Job Progress</h3>
          <p class="text-muted m-0 text-center">Monitor the progress of your job. Watch as tasks get completed</p>
          <projectProgressBar></projectProgressBar>
          <p class="text-muted text-center">Job is {{ completion }}% done</p>
          <div class="row">
            <div class="col-md-6">
              <div class="tasks-container m-2 p-2 mt-5">
                <h4>Completed Tasks</h4>
                <template v-for="t in tasks">
                  <div class="task d-flex justify-content-start flex-column task-card mt-2 p-2" v-if="t.isCompleted">
                    <p class="m-0"><span class="text-primary">{{ t.description }}</span></p>
                    <p class="m-0">Estimated time: {{ t.estimatedTime }} hours</p>
                  </div>
                </template>
                <p class="text-muted mt-2 p-2" v-if="tasks.length < 1">no tasks to show</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="tasks-container m-2 p-2 mt-5">
                <h4>In Progress Tasks</h4>
                <template v-for="t in tasks">
                  <div class="task d-flex justify-content-start flex-column task-card mt-2 p-2" v-if="!t.isCompleted">
                    <p class="m-0"><span class="text-primary">{{ t.description }}</span></p>
                    <p class="m-0">Estimated time: {{ t.estimatedTime }} hours</p>
                  </div>
                </template>
                <p class="text-muted mt-2 p-2" v-if="tasks.length < 1">no tasks to show</p>
              </div>
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
import { businessesService } from "../services/BusinessesService"
import { projectsService } from "../services/ProjectsService"
import { tasksService } from "../services/TasksService"
import { teamMemberService } from "../services/TeamMembersService"

export default {
  setup() {
    let route = useRoute()
    onMounted(async () => {
      let project = await projectsService.getProjectById(route.params.id)
      await businessesService.setActiveBusiness(project.businessId)
      await teamMemberService.getProjectTeamMembers(route.params.id)
      await tasksService.getTasks(route.params.id)
      console.log(AppState.activeProject);
      console.log(AppState.projectTasks);
      console.log('Project Tasks Directly Above');
      console.log(AppState.activeProjectTeamMembers);

    })
    return {
      project: computed(() => AppState.activeProject),
      tasks: computed(() => AppState.projectTasks),
      teamMembers: computed(() => AppState.activeProjectTeamMembers),
      business: computed(() => AppState.activeBusiness),
      completion: computed(() => AppState.projectCompletion)
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
  width: 75%;
  margin: auto;
}

@media(max-width: 769px) {
  .divider-line-local {
    width: 75%;
    margin: auto;
  }
}

.teamMemberCard {
  border-bottom: #f27648 2px dashed;
  width: max-content;
}
</style>
