<template>
  <div class="col-12 text-center">
    <div class="row pt-5">
      <div class="col-md-10 mx-auto grey-card p-5 rounded">
        <div>{{ project.description }}</div>
      </div>
      <span class="d-flex justify-content-end">
        <TaskOffCanvas />
      </span>
    </div>
    <div class="col-12">
      <div class="row p-5">
        <vue-horizontal responsive>
          <div class="col-md-12 bg-white elevation-4 py-4 rounded" v-for="img in project.jobSiteImgs" :key="img">
            <!-- NOTE create method to iterate through images -->
            <img class="img-fluid" :src="img" alt="" />
          </div>
        </vue-horizontal>
        <div class="col-md-10 mx-auto pt-3">
          <ProjectProgressBar />

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
      project: computed(() => AppState.activeProject)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>