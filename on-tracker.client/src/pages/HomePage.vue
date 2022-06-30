<template></template>


<script>
import { onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { projectsService } from '../services/ProjectsService'
export default {
  setup() {
    onMounted(async () => {
      try {
        await projectsService.getAllProjects()
      } catch (error) {
        logger.log(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {

    }
  }
}
</script>


<style lang="scss" scoped>
</style>
