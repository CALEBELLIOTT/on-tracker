<template>
  <button
    class="btn btn-primary"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
  >
    Tasks
  </button>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Offcanvas right</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="col-12 d-flex">
        <input class="ms-2" type="checkbox" />
      </div>
    </div>
    <footer>
      <form @submit.prevent="postTask">
        <input
          class="form-control m-2 rounded"
          type="text"
          placeholder="Add Task..."
          v-model="taskData.description"
        />
        <input
          class="form-control"
          type="number"
          v-model="taskData.estimatedTime"
          placeholder="Estimated hours"
        />
        <button class="btn btn-success" type="submit">Post</button>
      </form>
    </footer>
  </div>
</template>


<script>
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { tasksService } from '../services/TasksService'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
export default {
  setup() {
    const route = useRoute()
    const taskData = ref({})
    return {
      taskData,

      async postTask() {
        try {
          taskData.value.projectId = route.params.id
          await tasksService.postTask(taskData.value)
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message, 'error')
        }
      },
      async completeTask() {
        try {
          await tasksService.completeTask(taskData.id)
        } catch (error) {
          Pop.toast(error.message, 'error')
          logger.log(error)
        }
      }
    }

  }
}
</script>


<style lang="scss" scoped>
</style>