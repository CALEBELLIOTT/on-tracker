<template>
  <navbar />
  <div class="container-fluid dark-theme">
    <div class="row">
      <ActiveProject />
    </div>

    <!-- Note Component -->
    <div class="row align-items-center flex-column">
      <div
        class="
          col-md-10
          bg-grey
          elevation-2
          rounded
          d-flex
          justify-content-center
        "
      >
        <div class="col-md-10">
          <h1
            class="text-center text-white border-bottom border-5 border-white"
          >
            <b>Notes</b>
          </h1>
          <ProjectNotes v-for="n in notes" :key="n.id" :note="n" />
          <div class="d-flex justify-content-center">
            <form @submit.prevent="createNote">
              <textarea
                placeholder="Add a note..."
                name=""
                id=""
                cols="80"
                rows="1"
                v-model="noteData.body"
              ></textarea>
              <button
                class="btn btn-dark text-light rounded mb-3"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>


<script>
import { computed, onMounted, ref } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { projectsService } from '../services/ProjectsService'
import { AppState } from '../AppState'
import { notesService } from '../services/NotesService'
export default {

  setup() {
    let noteData = ref({})
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
      noteData,
      project: computed(() => AppState.activeProject),
      notes: computed(() => AppState.projectNotes),
      async createNote() {
        try {
          noteData.value.projectId = route.params.id
          await notesService.createNote(noteData.value)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }

      }

    }
  }
}
</script>


<style lang="scss" scoped>
</style>