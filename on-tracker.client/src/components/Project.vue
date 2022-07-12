<template>
  <div
    class="
      col-4
      selection-card
      project-img
      card
      m-4
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
      <h3>
        {{project.dueDate}}
      </h3>
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
  height: 250px;
  width: 30%;
  background-position: center;
  background-size: cover;
}

.selection-card {
  height: 30vh;
  transition: 500ms;
  border: solid 4px rgba(37, 36, 36, 1);
}

.selection-card:hover {
  cursor: pointer;
  transform: scale(1.05);
  transition: 500ms;
  border: solid 4px rgb(255, 132, 73);
}
</style>