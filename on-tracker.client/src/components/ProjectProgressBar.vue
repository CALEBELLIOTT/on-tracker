
    <template>
  <div class="component">
    <div class="progress mx-5">
      <div id="progress" :class="`progress-bar`" :style="`width : ${percentage}%;`" role="progressbar"
        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        {{ completedTasks() }}/{{ tasks.length }} tasks
      </div>
    </div>
  </div>
</template>
    
    
    <script>
import { computed, onMounted, watchEffect } from "vue"
import { AppState } from "../AppState"
import { tasksService } from "../services/TasksService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
  setup() {
    watchEffect(() => {
      try {
        if (AppState.projectTasks.length) {
          tasksService.getPercentage()
        }
      } catch (error) {
        Pop.toast(error.message)
        console.error(error)
      }
    })
    return {
      tasks: computed(() => AppState.projectTasks),
      percentage: computed(() => AppState.projectCompletion),

      completedTasks() {
        try {
          let count = 0
          AppState.projectTasks.forEach(t => {
            if (t.isCompleted) {
              count++
            }
          })
          return count
        } catch (error) {
          Pop.toast(error.message)
          logger.log(error)
        }
      }

    }
  }
}
</script>
    
    
    <style lang="scss" scoped>
    </style>

