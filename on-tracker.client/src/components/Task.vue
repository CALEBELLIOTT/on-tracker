<template>
  <div class="col-12 d-flex justify-content-between pt-4">
    <input
      class="selectable"
      title="checkbox"
      type="checkbox"
      :checked="task.isCompleted"
      @click="completeTask(task._id)"
    />
    <span class="px-4">{{ task.description }}</span>
    <span class="px-4">Hours: {{ task.estimatedTime }}</span>
    <span class="mdi mdi-pencil selectable" title="Edit Task"></span>
    <span
      @click="deleteTask(task._id)"
      class="mdi mdi-trash-can selectable"
      title="Delete task"
    ></span>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { tasksService } from '../services/TasksService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
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
      async deleteTask(id) {
        try {
          if (await Pop.confirm()) {
            await tasksService.deleteTask(id)
            Pop.toast('Task has been deleted')
          }
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message, 'error')
        }
      },


    }
  }
}
</script>


<style lang="scss" scoped>
</style>