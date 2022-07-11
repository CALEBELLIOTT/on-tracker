
    <template>

  <div class="component">
    <div class="progress">
      <div id="progress" :class="`progress-bar`" :style="`width : ${percentage}%;`" role="progressbar"
        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
      </div>
    </div>
  </div>

</template>
    
    
    <script>
import { computed, onMounted, watchEffect } from "vue"
import { AppState } from "../AppState"
import { tasksService } from "../services/TasksService";
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
      percentage: computed(() => AppState.projectCompletion)
    }
  }
}
</script>
    
    
    <style lang="scss" scoped>
    </style>

