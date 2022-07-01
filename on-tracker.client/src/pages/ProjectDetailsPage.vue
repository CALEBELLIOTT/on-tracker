<template>
  <navbar />
  <div class="container-fluid dark-theme">
    <div class="row">
      <ActiveProject />
    </div>

    <!-- Note Component -->
    <div class="row">
      <ProjectNotes v-for="n in notes" :key="n.id" :note="n" />
    </div>
    <!--  -->
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { projectsService } from '../services/ProjectsService'
import { AppState } from '../AppState'
import { notesService } from '../services/NotesService'
export default {

  setup() {
    const route = useRoute()
    onMounted(async () => {
      try {
        await projectsService.getProjectById(route.params.id)
        await notesService.getNotes(route.params.id)
      } catch (error) {
        logger.log(error)
        Pop.toast(error.message, 'error')
      }
    }
    )

    return {
      project: computed(() => AppState.activeProject),
      notes: computed(() => AppState.projectNotes),
    }
  }
}
</script>


<style lang="scss" scoped>
</style>