<template>
  <div
    class="col-4 project-img card mt-4"
    @click="goToProjectPage"
    :style="`background-image: url(${project.coverImg})`"
  >
    <div>
      {{ project.location }}
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
.project-img {
  height: 200px;
  width: 30%;
  background-position: center;
  background-size: cover;
}
</style>