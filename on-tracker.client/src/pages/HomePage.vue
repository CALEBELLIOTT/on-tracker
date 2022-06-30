<template>
  <navbar v-if="account.id" />
  <UserLogin v-if="!account.id" />
  <div class="col-10 d-flex justify-content-between p-3">
    <Project v-for="p in projects" :key="p.id" :project="p" />
  </div>
</template>


<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { projectsService } from '../services/ProjectsService'
import { AppState } from '../AppState'
export default {
  setup() {
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
</style>
