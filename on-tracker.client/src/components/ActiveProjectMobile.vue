<template>
  <div class="text-center mb-3">
    <h2>{{ project.projectName }}</h2>
  </div>
  <div>
    <ProjectProgressBar />
  </div>
  <div
    class="col-10 mx-auto mt-2 align-item-center"
    v-for="img in project.jobSiteImgs"
    :key="img"
  >
    <img class="img-fluid rounded" :src="img" alt="" />
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
export default {
  //   props: { project: { type: Object, required: true } },
  setup() {
    return {
      project: computed(() => AppState.activeProject)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>