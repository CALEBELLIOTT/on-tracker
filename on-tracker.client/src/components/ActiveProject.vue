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
    <div class="row justify-content-center mt-5" v-if="project.cancelled">
      <div class="col-md-10 text-center text-danger">
        <h1 class=" mb-0">This Project is cancelled</h1>
      </div>
    </div>
    <div class="row justify-content-center mt-5" v-if="project.completed">
      <div class="col-md-10 text-center text-primary">
        <h1 class=" mb-0">This Project is completed</h1>
      </div>
    </div>
  </div>
  <div class="row px-5 pt-4 pb-3">
    <div class="col-12 elevation-5">
      <div class="row">
        <div class="col-md-12 bg-white p-3 border-bottom border-2 border-primary">
          <h2 class="text-center text-primary">
            {{ project.projectName }}
          </h2>
          <div class="text-center text-muted">
            {{ project.description }}
          </div>
        </div>
        <span class="d-flex justify-content-end">
          <TaskOffCanvas />
        </span>
      </div>
      <div class="row border-bottom border-primary border-2">
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