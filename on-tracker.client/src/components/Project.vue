<template>
  <!-- <div class="
      col-4
      selection-card
      project-img
      card
      m-4
      selectable
      justify-content-end
      text-center
    " @click="goToProjectPage" :style="`background-image: url(${project.coverImg})`">
    <div class="happy">
      <h1>
        {{ project.projectName }}
      </h1>
      <h3>
        {{
            new Date(project.dueDate).toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })
        }}
      </h3>
    </div>
  </div> -->

  <div class="row">
    <div class="col-12">
      <button class="btn btn-outline-primary" @click="goToClientView(project.id)">
        Client View
      </button>
      <div class="
          selection-card
          d-flex
          flex-column
          white-background
          p-2
          m-2
          rounded
        " @click="goToProjectPage">
        <div class="d-flex justify-content-between">
          <h3 class="text-primary text-center">
            {{ project.projectName }}
          </h3>
          <i v-if="project.creatorId == account.id" @click="deleteProject" class="close-spill mdi mdi-close-circle f-20"
            title="Delete Project"></i>
        </div>
        <p class="text-muted mb-0">
          {{ project.location.street_number }} {{ project.location.route }}
        </p>
        <p :class="getDateStyle()">
          <i class="mdi mdi-alert-circle-outline"></i>Due:
          {{
          new Date(project.dueDate).toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
          })
          }}
        </p>
        <div class="col-12 bg-danger rounded text-center" v-if="project.cancelled">Cancelled</div>
        <div class="col-12 bg-success rounded text-center" v-if="project.completed">Completed</div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { projectsService } from '../services/ProjectsService'
import { AppState } from '../AppState'
export default {
  props: { project: { type: Object, required: true } },
  setup(props) {
    const router = useRouter()
    return {
      isCritical: false,
      goToProjectPage() {
        try {
          router.push({
            name: "Project",
            params: { id: props.project.id }
          })
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message, 'error')
        }
      },
      goToClientView(id) {
        console.log(id);
        router.push({
          name: 'ClientView',
          params: { id }
        })
      },
      getDateStyle() {
        let projectDate = new Date(props.project.dueDate)
        let criticalDate = new Date()
        criticalDate.setDate(criticalDate.getDate() + 5);
        if (projectDate < criticalDate) {
          return ('text-warning p-0')
        }
      },
      async deleteProject() {
        try {
          if (await Pop.confirm()) {

            await projectsService.deleteProject(props.project.id)
          }
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message, 'error')
        }
      },
      account: computed(() => AppState.account),

    }
  }
}
</script>



<style lang="scss" scoped>
.happy {
  background-color: rgba(128, 128, 128, 0.639);
}

.project-img {
  height: 250px;
  width: 90%;
  background-position: center;
  background-size: cover;
}

.selection-card {
  transition: 250ms;
  border: solid 1.5px rgba(37, 36, 36, 1);
  width: max-content;
}

.selection-card:hover {
  cursor: pointer;
  transition: 250ms;
  border: solid 1.5px rgb(255, 132, 73);
}

.white-background {
  background-color: #ffffff;
}
.close-spill {
  transform: translateY(-5px);
}
</style>