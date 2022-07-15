<template>
  <div
    class="col-10 mx-auto mt-1 align-item-center"
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