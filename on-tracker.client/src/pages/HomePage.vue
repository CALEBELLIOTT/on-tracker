<template>
  <Navbar v-if="account.id"></Navbar>
  <UserLogin v-if="!account.id" />
  <!-- <div class="col-10 d-flex justify-content-between p-3"> -->

  <div v-if="account.id" class="d-flex justify-content-center m-5">
    <img src="https://www.s-lec.eu/wp-content/uploads/map.jpg" alt="" />
  </div>

  <div class="col-md-12 d-flex justify-content-center">
    <div class="col-md-10 border-bottom border-warning border-3 my-3" v-if="account.id"></div>
  </div>
  <!-- <hr class="text-light" v-if="account.id"> -->

  <h1 class="text-light text-center" v-if="account.id">Critical</h1>
  <div class="container justify-content-evenly p-5" v-if="account.id">
    <vue-horizontal>
      <Project v-for="p in projects" :key="p.id" :project="p" class="mx-4" />
    </vue-horizontal>
  </div>

  <div class="d-flex justify-content-center">
    <div class="col-md-10 border-top border-3 my-3" v-if="account.id"></div>
  </div>
  <div class="col-12">
    <h1 class="text-light text-center" v-if="account.id">All Projects</h1>
    <div class="container p-5" v-if="account.id">
      <vue-horizontal>
        <Project v-for="p in projects" :key="p.id" :project="p" class="mx-4" />
      </vue-horizontal>
    </div>
  </div>

  <!-- </div> -->
</template>


<script>
import { computed, watchEffect, onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { projectsService } from '../services/ProjectsService'
import { AppState } from '../AppState'
import VueHorizontal from "vue-horizontal";
import { teamMemberService } from "../services/TeamMembersService"
export default {
  components: { VueHorizontal },
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
      projects: computed(() => AppState.projects)

    }
  }
}
</script>


<style lang="scss" scoped>
img {
  width: 80%;
  border-radius: 25px;
}

.border {
  color: orange;
}
</style>
