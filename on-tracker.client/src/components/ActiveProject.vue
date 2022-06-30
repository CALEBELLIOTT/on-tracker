<template>
  <div class="col-12 text-center">
    <div class="row pt-5">
      <div class="col-md-10 mx-auto bg-grey p-5 rounded">
        <div>{{ project.description }}</div>
      </div>
      <span class="d-flex justify-content-end"
        ><button class="btn btn-info">Task</button></span
      >
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-md-8 mx-auto bg-white elevation-4 py-4 rounded">
          <!-- NOTE create method to iterate through images -->
          <img class="img-fluid" :src="project.jobSiteImgs" alt="" />
        </div>
        <div class="col-md-10 mx-auto pt-3">
          <div class="progress">
            <div
              class="progress-bar w-75"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div class="text-center text-light pt-2">
            Progress Percentage here
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
export default {
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