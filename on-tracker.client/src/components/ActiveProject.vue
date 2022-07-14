<template>
  <div class="row px-5 pt-4 pb-3">
    <div class="col-12 elevation-5">
      <div class="row">
        <div class="col-md-12 bg-white p-4 border-bottom border-2 border-primary">
          <div class="fs-4">
            <span class="px-3"><i class="mdi mdi-dots-horizontal"></i></span>
            {{ project.description }}
          </div>
        </div>
        <span class="d-flex justify-content-end">
          <TaskOffCanvas />
        </span>
      </div>
      <div class="col-12">
        <div class="row bg-white">
          <vue-horizontal responsive class="p-0 border-bottom border-2 border-primary">
            <div class="col-md-12" v-for="img in project.jobSiteImgs" :key="img">
              <!-- NOTE create method to iterate through images -->
              <img class="img-fluid p-3 project-img" :src="img" alt="" />
            </div>
          </vue-horizontal>
          <div class="col-md-10 mx-auto pt-3 pb-3">
            <ProjectProgressBar />
          </div>
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
  height: 500px;
  width: 100%;
  object-fit: cover;

}
</style>