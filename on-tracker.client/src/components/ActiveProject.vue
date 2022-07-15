<template>
  <div class="row px-5 pt-4 pb-3">
    <div class="col-12 elevation-5">
      <div class="row">
        <div
          class="
            col-md-12
            bg-white
            p-4
            border-bottom border-2 border-primary
            d-flex
            justify-content-between
          "
        >
          <div class="fs-4">
            <span class="px-3"><i class="mdi mdi-dots-horizontal"></i></span>
            <span>{{ project.description }}</span>
          </div>
        </div>
        <span class="d-flex justify-content-end">
          <TaskOffCanvas />
        </span>
      </div>
      <div class="row">
        <ProjectImage />
      </div>
    </div>
  </div>
  <!-- OFFCANVAS -->
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
import VueHorizontal from "vue-horizontal";
import { notesService } from '../services/NotesService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
export default {
  components: { VueHorizontal },
  props: { project: { type: Object, required: true } },
  setup() {
    return {
      project: computed(() => AppState.activeProject),
      tasks: computed(() => AppState.projectTasks),
      notes: computed(() => AppState.projectNotes),



    }
  }
}
</script>


<style lang="scss" scoped>
.project-img {
  width: 100%;
  height: 100%;
}
</style>