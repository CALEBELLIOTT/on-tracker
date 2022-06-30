<template>
  {{ project }}
</template>


<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { projectsService } from '../services/ProjectsService'
import { AppState } from '../AppState'
export default {

  setup() {
    const route = useRoute()
    watchEffect(async () => {
      try {
        await projectsService.getProjectById(route.params.id)
      } catch (error) {
        logger.log(error)
        Pop.toast(error.message, 'error')
      }
    }
    )

    return {
      project: computed(() => AppState.activeProject)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>