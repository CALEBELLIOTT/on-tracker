<template>
  <vue-horizontal>
    <div
      class="col-6 justify-content-center d-flex align-items-center"
      v-for="img in project.jobSiteImgs"
      :key="img"
    >
      <img
        class="img-fluid project-img rounded elevation-3"
        :src="img"
        alt=""
      />
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
  height: 80%;
}
</style>