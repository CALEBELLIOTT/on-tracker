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
      <form @submit="postTask">
        <input
          class="form-control m-2 rounded"
          type="text"
          placeholder="Add Task..."
        />
        <button class="btn btn-success" type="button" @click="postTask">
          Post
        </button>
      </form>
    </footer>
  </div>
</template>


<script>
import { useRoute } from 'vue-router'
import { tasksService } from '../services/TasksService'
import Pop from '../utils/Pop'
export default {
  setup() {
    const route = useRoute()
    return {

      async postTask() {
        try {
          await tasksService.postTask()
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
</style>