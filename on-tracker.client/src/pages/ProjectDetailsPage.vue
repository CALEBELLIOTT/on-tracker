<template>
  <navbar />
  <nav>
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >
          Home
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          Project Notes
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="messages-tab"
          data-bs-toggle="tab"
          data-bs-target="#messages"
          type="button"
          role="tab"
          aria-controls="messages"
          aria-selected="false"
        >
          Team Members
        </button>
      </li>
    </ul>

    <!-- Tab panes -->
  </nav>

  <div class="mt-3 me-0">
    <button
      class="btn btn-primary cool-button"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
    >
      <b>T</b>
    </button>
  </div>
  <div>
    <button
      class="btn btn-primary cool-button2"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#availableEmployees"
      aria-controls="offcanvasRight"
    >
      <i class="mdi mdi-account-multiple-plus-outline fs-5 px-2"></i>
    </button>
  </div>

  <!-- OffCanvas -->
  <AvailableEmployeesOffCanvas />
  <!--  -->

  <div class="tab-content">
    <div
      class="tab-pane active"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <div class="mt-2 mb-3 mx-5">
        <ActiveProject />
        <ProjectProgressBar />
      </div>
    </div>
    <div
      class="tab-pane"
      id="profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <div class="row mb-0 pt-3">
        <div class="col-md-10 mx-auto text-center text-dark rounded">
          <h1 class="text-center border-bottom border-5 border-white">
            <b><em>Notes</em></b>
          </h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div
          class="
            col-md-10
            m-2
            elevation-4
            rounded
            pt-2
            border-2 border border-primary
          "
        >
          <div
            class="
              notes-section
              d-flex
              justify-content-center
              align-items-center
            "
            v-if="notes.length == 0"
          >
            <h6 class="text-muted">Add a note to your project!</h6>
          </div>
          <div class="notes-section" v-else>
            <ProjectNotes v-for="n in notes" :key="n.id" :note="n" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="">
          <form @submit.prevent="createNote">
            <div class="col-md-9 mx-auto d-flex pt-2">
              <textarea
                class="form-control"
                placeholder="Add a note..."
                name=""
                id=""
                cols="80"
                rows="1"
                v-model="noteData.body"
              ></textarea>
              <div>
                <button
                  class="btn btn-dark text-light rounded ms-5"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div
      class="tab-pane"
      id="messages"
      role="tabpanel"
      aria-labelledby="messages-tab"
    >
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
  </div>

  <!-- Note Component -->
  <div class="row align-items-center flex-column mx-5"></div>

  <!-- Employee Cards and Mapbox  -->
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
  height: 50vh;
  overflow-y: scroll;
  // background-color: white;
}

.cool-button {
  border-radius: 5%;
  position: absolute;

  left: 0em;
  z-index: 2;
  margin-bottom: 0.2em;
  width: 60px;
}

.cool-button2 {
  border-radius: 5%;
  position: absolute;
  left: 0em;
  top: 11.5em;
  z-index: 2;
  width: 60px;
}

.cool-button:hover {
  transform: scale(1.04);
  transition: 300ms;
}

.cool-button2:hover {
  transform: scale(1.04);
  transition: 300ms;
}
.btn-left,
.btn-right {
  padding: 8px;
  height: 100%;
}

.btn-left {
  background: linear-gradient(to left, #ffffff00 0, #fff 50%, #fff);
  padding-right: 16px;
}

.btn-right {
  background: linear-gradient(to right, #ffffff00 0, #fff 50%, #fff);
  padding-left: 16px;
}

.tabs {
  border-bottom: 1px solid #e2e8f0;
}

.tab {
  padding: 8px 24px 6px 24px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
}

.tab.selected {
  border-bottom: 2px solid black;
}

@media (min-width: 768px) {
  main {
    padding: 48px;
  }
}
</style>