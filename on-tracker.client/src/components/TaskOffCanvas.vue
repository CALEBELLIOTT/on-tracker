<template>
  <div
    class="offcanvas offcanvas-end bg text-light"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header text-center border-bottom border-2">
      <h5 id="offcanvasRightLabel">Tasks</h5>

      <button
        type="button"
        class="btn-close text-light"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <span class="mdi mdi-close" title="Close"></span>
      </button>
    </div>
    <div class="offcanvas-body">
      <ProjectProgressBar />
      <Task v-for="t in tasks" :key="t.id" :task="t" />
    </div>
    <footer>
      <div class="row d-flex">
        <form @submit.prevent="postTask">
          <div class="col-11 m-3">
            <div>
              <input
                class="form-control rounded"
                type="text"
                placeholder="Add Task..."
                v-model="taskData.description"
              />
            </div>
          </div>
          <div class="col-11 d-flex m-3">
            <input
              class="form-control rounded"
              type="number"
              v-model="taskData.estimatedTime"
              placeholder="Estimated hours"
            />
            <button class="btn btn-success ms-2" type="submit">Post</button>
          </div>
        </form>
      </div>
    </footer>
  </div>
</template>


<script>
import { computed, ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { tasksService } from '../services/TasksService'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { onMounted, watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    const route = useRoute()
    const taskData = ref({})
    onMounted(async () => {
      try {
        await tasksService.getTasks(route.params.id)
      } catch (error) {
        logger.log(error),
          Pop.toast(error.message, 'error')
      }
    })
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

      tasks: computed(() => AppState.projectTasks)
    }

  }
}
</script>


<style lang="scss" scoped>
.bg {
  background: rgba(0, 0, 0, 0.8);
}
</style>