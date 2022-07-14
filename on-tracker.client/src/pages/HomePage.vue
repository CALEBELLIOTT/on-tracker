<template>
  <Navbar v-if="account.id"></Navbar>
  <UserLogin v-if="!account.id" />

  <div class="container-fluid" v-if="account.id">
    <div class="row justify-content-around">
      <div class="d-none d-md-block col-md-12 mb-5 my-5">
        <div class="d-flex align-items-center justify-content-center">
          <h1 class="text-center text-md-start me-2 my-0">
            <span class="text-primary">OnTracker</span> for {{ business.name
            }}<span class="sup">&reg;</span>
          </h1>
          <img :src="business.logo" class="img-fluid business-logo" alt="" />
        </div>
        <p class="text-muted text-center">
          A space for your company and employees to collaborate, coordinate, and
          tackle challenges.
        </p>
        <div class="divider-line"></div>
      </div>
      <!-- <div class="col-6"></div> -->

      <div class="col-md-3 d-flex flex-column align-items-center my-3">
        <h3 class="text-center">
          {{ business.name }}
          <span class="text-primary border-bottom border-primary mb-0">Tracked</span>
          projects
        </h3>
        <div class="projects-container">
          <Project v-for="p in projects" :key="p.id" :project="p" class="mx-5" />
        </div>
      </div>

      <div class="col-md-8 ms-3 me-4 mt-3 map-component">
        <b class="mt-3 text-muted">{{ business.name }} project locations</b>
        <MapComponent />
      </div>
    </div>

    <!-- <div class="col-md-12 d-flex justify-content-center">
      <div class="col-md-10 border-bottom border-warning border-3 my-3" v-if="account.id"></div>
    </div>


    <h1 class="text-danger text-center" v-if="account.id">Critical</h1>
    <div class="container justify-content-evenly p-5" v-if="account.id">
      <vue-horizontal>
        <Project v-for="p in projects.slice(0, 3)" :key="p.id" :project="p" class="mx-4" />
      </vue-horizontal>
    </div>

    <div class="d-flex justify-content-center">
      <div class="col-md-10 border-top border-3 my-3" v-if="account.id"></div>
    </div>
    <div class="col-12">
      <h1 class="text-orange text-center" v-if="account.id">All Projects</h1>
      <div class="container p-5" v-if="account.id">
        <vue-horizontal>
          <Project v-for="p in projects" :key="p.id" :project="p" class="mx-4" />
        </vue-horizontal>
      </div>
    </div> -->
  </div>
</template>


<script>
import { computed, watchEffect, onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { projectsService } from '../services/ProjectsService'
import { AppState } from '../AppState'
import VueHorizontal from "vue-horizontal";
import { teamMemberService } from "../services/TeamMembersService"
import MapComponent from "../components/MapComponent.vue"
export default {
  components: { VueHorizontal, MapComponent },
  setup() {
    onMounted(async () => {
      if (AppState.account?.businessId) {
        await teamMemberService.getBusinessTeamMembers()
      }

    })
    watchEffect(async () => {
      try {
        await projectsService.getAllProjects()
      } catch (error) {
        logger.log(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      account: computed(() => AppState.account),
      projects: computed(() => AppState.activeBusinessProjects.sort((a, b) => a.dueDate.localeCompare(b.dueDate))),
      business: computed(() => AppState.activeBusiness)
    }
  }
}
</script>


<style lang="scss" scoped>
.sup {
  font-size: 1rem;
  vertical-align: super;
}

.divider-line {
  height: 2px;
  background-color: #f27648;
  width: 50%;
  margin: auto;
}

.projects-container {
  max-height: 50vh;
  overflow: scroll;
  overflow-x: hidden;
}

.projects-container::-webkit-scrollbar {
  width: 0.5rem;
}

.projects-container::-webkit-scrollbar-thumb {
  background-color: #f27648;
  border-radius: 5px;
}

.projects-container::-webkit-scrollbar-track {
  background-color: #e9ecef;
  border-radius: 5px;
}

.map-img {
  object-position: center;
  object-fit: cover;
}

.business-logo {
  height: 3rem;
  width: 3rem;
  object-fit: cover;
  border-radius: 50%;
}

img {
  object-fit: cover;
}

.border {
  color: orange;
}

.text-orange {
  color: orange;
}

.bg-img {
  height: 20vh;
  background-size: cover;
  background-position: center;
  background-color: var(--bs-primary);
}

.blur {
  backdrop-filter: blur(10px);
}

.no-projects-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 15px;
  width: 100%;
  height: 43.5vh;
  background-color: rgb(255, 255, 255);
}

@media (max-width: 756px) {
  .map-component {
    transform: translateY(0);
    order: -1;

  }
}
</style>
