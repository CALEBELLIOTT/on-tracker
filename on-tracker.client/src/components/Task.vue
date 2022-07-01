<template>
  <div class="col-12 d-flex justify-content-between">
    <input
      type="checkbox"
      :checked="task.isCompleted"
      @click="completeTask(task._id)"
    />
    <span class="px-4">{{ task.description }}</span>
    <span class="px-4">Hours: {{ task.estimatedTime }}</span>
  </div>
</template>


<script>
import { tasksService } from '../services/TasksService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
export default {
  props: { task: { type: Object, required: true } },
  setup(props) {
    return {

      async completeTask(id) {
        try {
          await tasksService.completeTask(id)
        } catch (error) {
          Pop.toast(error.message, 'error')
          logger.log(error)
        }
      },
    }
  }
}
</script>


<style lang="scss" scoped>
</style>