<template>
  <vue-horizontal>
    <div
      class="col-12 d-flex justify-content-center align-items-center"
      v-for="img in project.jobSiteImgs"
      :key="img"
    >
      <img class="col-12 project-img" :src="img" alt="" />
    </div>
  </vue-horizontal>
</template>


<script>
import { computed } from '@vue/reactivity';
import VueHorizontal from "vue-horizontal";
import { AppState } from '../AppState';
export default {
  components: { VueHorizontal },
  setup() {
    return {
      project: computed(() => AppState.activeProject)
    }
  }
}
</script>


<style lang="scss" scoped>
.project-img {
  height: 500px;
}
</style>