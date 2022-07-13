<template>
  <div class="col-12 pt-4">
    <input
      class="selectable form-control"
      title="checkbox"
      type="checkbox"
      :checked="task.isCompleted"
      @click="completeTask(task._id)"
    />
    <span
      :id="`taskInfo${task._id}`"
      @blur="editTask(task._id)"
      contenteditable="true"
      class="px-4 bg"
    >
      {{ task.description }}</span
    >

    <span
      @click="deleteTask(task._id)"
      class="mdi mdi-trash-can selectable"
      title="Delete task"
    ></span>
  </div>
  <div class="px-5 font-grey">
    <span class="px-1"><i class="mdi mdi-clock-outline"></i></span>
    <span>Hours:</span>
    <span
      :id="`taskTime${task._id}`"
      @blur="editTask(task._id)"
      contenteditable="true"
      class="px-2"
    >
      {{ task.estimatedTime }}</span
    >
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
          await tasksService.editTask(id, newText, newHour)
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
.font-grey {
  color: #9c98a5;
}

.bg {
  background: #f27648;
  border-radius: 45px;
}

input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;

  margin: 0;
}

input[type="checkbox"] {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
}

.form-control + .form-control {
  margin-top: 1em;
}

input[type="checkbox"] {
  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
}

input[type="checkbox"] {
  /* ...existing styles */
  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}

input[type="checkbox"]::before {
  background-color: CanvasText;
}

input[type="checkbox"]::before {
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

input[type="checkbox"]:focus {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);
}
</style>