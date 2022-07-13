<template>
  <navbar />

  <div class="container-fluid">
    <div class="mt-3 me-0">
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Tasks
      </button>
    </div>
    <div>
      <button
        class="btn btn-primary mt-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#availableEmployees"
        aria-controls="offcanvasRight"
      >
        Available Employees
      </button>
    </div>

    <!-- OffCanvas -->
    <AvailableEmployeesOffCanvas />
    <!--  -->

    <div class="projects-container mt-2 mb-3">
      <ActiveProject />
    </div>

    <!-- Note Component -->
    <div class="row align-items-center flex-column">
      <div
        class="
          col-md-10
          grey-card
          elevation-2
          rounded
          d-flex
          justify-content-center
        "
      >
        <div class="col-md-10 m-2">
          <h1
            class="text-center text-white border-bottom border-5 border-white"
          >
            <b><em>Notes</em></b>
          </h1>

          <div class="d-flex justify-content-center">
            <form @submit.prevent="createNote">
              <textarea
                class="form-control"
                placeholder="Add a note..."
                name=""
                id=""
                cols="80"
                rows="1"
                v-model="noteData.body"
              ></textarea>
              <div class="d-flex justify-content-center mt-2">
                <button
                  class="btn btn-dark text-light rounded mb-3"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="text-light text-center pt-5">
        <h2><b>TeamMembers</b></h2>
      </div>
      <div class="row pt-5 py-5">
        <div>
          <div class="col-12 bg-white elevation-4 rounded border border-4 p-5">
            <span v-for="t in teamMembers" :key="t.id" class=""
              ><img
                :title="t.employee.account.name"
                class="img-fluid profile-img"
                alt=""
                :src="t.employee.account.picture"
            /></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Employee Cards and Mapbox  -->
  </div>
</template>


<script>
import { computed, onMounted, ref, watch, watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { projectsService } from '../services/ProjectsService'
import { AppState } from '../AppState'
import { notesService } from '../services/NotesService'
import { employeesService } from "../services/EmployeesService"
import { teamMemberService } from "../services/TeamMembersService"
export default {

  setup() {
    let noteData = ref({})
    const route = useRoute()
    onMounted(async () => {
      try {
        await projectsService.getAllProjects()
        await projectsService.getProjectById(route.params.id)
        await notesService.getNotes(route.params.id)
        await teamMemberService.getBusinessTeamMembers()
        await teamMemberService.getProjectTeamMembers(route.params.id)
        await employeesService.getAvailableEmployees()
        console.log(AppState.activeProjectTeamMembers);
      } catch (error) {
        logger.log(error)
        Pop.toast(error.message, 'error')
      }
    }
    )

    return {
      noteData,
      employees: computed(() => AppState.employees),
      project: computed(() => AppState.activeProject),
      notes: computed(() => AppState.projectNotes),
      teamMembers: computed(() => AppState.activeProjectTeamMembers),


      async createNote() {
        try {
          noteData.value.projectId = route.params.id
          await notesService.createNote(noteData.value)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }

      }

    }
  }
}
</script>


<style lang="scss" scoped>
.projects-container {
  max-height: 80vh;
  overflow: scroll;
  overflow-x: hidden;
}
.small-profile-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50em;
}

.profile-img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 50em;
}

.employee-cards {
  height: 35vh;
}

.map-card {
  height: 35vh;
  transform: translateY(3.85vh);
}

.map-card-img {
  object-fit: cover;
  height: 35vh;
}

.notes-section {
  height: 12vh;
  overflow-y: scroll;
  // background-color: white;
}
</style>