<template>
  <div class="d-none d-md-block col-md-12 mb-5 my-5">
    <div class="d-flex align-items-center justify-content-center">
      <h1 class="text-center text-md-start me-2 my-0">
        <span class="text-primary">OnTracker</span> for {{ business.name
        }}<span class="sup">&reg;</span>
      </h1>
      <img :src="business.logo" class="img-fluid business-logo" alt="" />
    </div>

    <div class="divider-line"></div>
  </div>
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
            <span>{{ project.projectName }}</span>
          </div>
        </div>
        <span class="d-flex justify-content-end">
          <TaskOffCanvas />
        </span>
      </div>
      <div class="row border-bottom border-primary border-2">
        <ProjectImage />
      </div>
      <div>
        <div class="p-5">
          <div>Description</div>
          {{ project.description }}
        </div>
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
      business: computed(() => AppState.activeBusiness)



    }
  }
}
</script>


<style lang="scss" scoped>
.project-img {
  width: 100%;
  height: 100%;
}

.business-logo {
  height: 3rem;
  width: 3rem;
  object-fit: cover;
  border-radius: 50%;
}
</style>