<template>
  <div class="row px-5 pt-4 pb-3">
    <div class="col-12 border border-primary border-1 rounded-top">
      <div class="row">
        <div class="col-md-12 bg-white p-4">
          <div>{{ project.description }}</div>
        </div>
        <span class="d-flex justify-content-end">
          <TaskOffCanvas />
        </span>
      </div>
      <div class="col-12">
        <div class="row">
          <vue-horizontal responsive class="p-0">
            <div
              class="col-md-12"
              v-for="img in project.jobSiteImgs"
              :key="img"
            >
              <!-- NOTE create method to iterate through images -->
              <img class="img-fluid project-img" :src="img" alt="" />
            </div>
          </vue-horizontal>
          <div class="col-md-10 mx-auto pt-3">
            <ProjectProgressBar />
          </div>
          <div class="col-12">
            <Task v-for="t in tasks" :key="t.id" :task="t" />
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
export default {
  components: { VueHorizontal },
  props: { project: { type: Object, required: true } },
  setup() {
    return {
      project: computed(() => AppState.activeProject),
      tasks: computed(() => AppState.projectTasks)
    }
  }
}
</script>


<style lang="scss" scoped>
.project-img {
  height: 500px;
  width: 10500px;
}
</style>