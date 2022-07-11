<template>
  <div class="col-12 d-flex justify-content-between pt-4">
    <input class="selectable" title="checkbox" type="checkbox" :checked="task.isCompleted"
      @click="completeTask(task._id)" />
    <span :id="`taskInfo${task._id}`" @blur="editTask(task._id)" contenteditable="true" class="px-4">
      {{ task.description }}</span>
    <span :id="`taskTime${task._id}`" @blur="editTask(task._id)" contenteditable="true" class="px-4">Hours: {{
        task.estimatedTime
    }}</span>
    <span @click="deleteTask(task._id)" class="mdi mdi-trash-can selectable" title="Delete task"></span>
  </div>
</template>


<script>
import { computed, ref } from '@vue/reactivity'
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
          }
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message, 'error')
        }
      },

      async editTask(id) {
        try {
          const newText = document.getElementById('taskInfo' + id).innerText;
          const newHour = document.getElementById('taskTime' + id).innerText;
          logger.log(newText)
          await tasksService.editTask(id, newText)
          Pop.toast('Task Updated')
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message)
        }
      }


    }
  }
}
</script>


<style lang="scss" scoped>
</style>