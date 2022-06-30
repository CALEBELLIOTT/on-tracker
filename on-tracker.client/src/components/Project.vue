<template>
  <div
    class="
      col-4
      project-img
      card
      p-0
      mt-4
      selectable
      justify-content-end
      text-center
    "
    @click="goToProjectPage"
    :style="`background-image: url(${project.coverImg})`"
  >
    <div class="happy">
      <h1>
        {{ project.location }}
      </h1>
    </div>
  </div>
</template>


<script>
import { useRouter } from 'vue-router'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
export default {
  props: { project: { type: Object, required: true } },
  setup(props) {
    const router = useRouter()
    return {
      goToProjectPage() {
        try {
          router.push({
            name: "Project",
            params: { id: props.project.id }
          })
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message, 'error')
        }
      }

    }
  }
}
</script>



<style lang="scss" scoped>
.happy {
  background-color: rgba(128, 128, 128, 0.639);
}
.project-img {
  height: 200px;
  width: 30%;
  background-position: center;
  background-size: cover;
}
</style>