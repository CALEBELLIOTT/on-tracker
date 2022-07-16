<template>
  <div
    class="offcanvas offcanvas-end bg text-light"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header text-center border-bottom border-2">
      <h5 id="offcanvasRightLabel">Tasks</h5>
      <div v-if="activeProject.completed"> - Completed</div>

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
        <form @submit.prevent="postTask" id="post" value="reset">
          <div class="m-3 col-md-11 d-flex inputBox">
            <input
              class="form-control rounded"
              type="text"
              v-model="taskData.description"
            />
            <span>Description</span>
          </div>
          <div class="col-md-12 d-flex m-3">
            <div class="inputBox d-flex col-9">
              <input
                class="form-control rounded"
                type="number"
                v-model="taskData.estimatedTime"
              />
              <span>Estimated time</span>
            </div>
            <button
              class="btn btn-primary ms-4 border-white border-2"
              type="submit"
            >
              <i class="mdi mdi-arrow-up-circle-outline fs-5 text-white"></i>
            </button>
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
        await tasksService.getPercentage()
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
          document.getElementById("post").reset();
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message, 'error')
        }
      },
      activeProject: computed(() => AppState.activeProject),
      tasks: computed(() => AppState.projectTasks)
    }

  }
}
</script>


<style lang="scss" scoped>
.bg {
  background: rgba(0, 0, 0, 0.8);
}

.inputBox {
  position: relative;
}

.inputBox input {
  width: 100%;
  border: 2px solid #f27648;
  padding: 8px;
  outline: none;
  border-radius: 5px;
}

.inputBox span {
  position: absolute;
  left: 0;
  padding: 10px;
  pointer-events: none;
  font-size: 1em;
  color: grey;
  text-transform: uppercase;
  transition: 0.5s;
}

.inputBox input:valid ~ span,
.inputBox input:focus ~ span {
  color: #f27648;
  transform: translateX(10px) translateY(-7px);
  font-size: 0.7em;
  padding: 0 10px;
  background: rgb(251, 246, 239);
  border-left: 1px solid #f27648;
  border-right: 1px solid #f27648;
  letter-spacing: 0.2em;
}

.inputBox input:valid ~ span,
.inputBox input:focus ~ span {
  background: #f27648;
  color: black;
  border-radius: 3px;
}

.inputBox input:valid,
.inputBox input:focus {
  border: 2px solid #f27648;
}

.post-button {
  outline-color: white;
}
</style>