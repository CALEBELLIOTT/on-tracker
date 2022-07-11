<template>
  <navbar />

  <div class="container-fluid dark-theme">
    <div class="row">
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
          <div class="notes-section m-4 bg-light rounded">
            <ProjectNotes v-for="n in notes" :key="n.id" :note="n" />
          </div>
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
    </div>

    <!-- Employee Cards and Mapbox  -->
    <div class="row justify-content-around">
      <div class="col-md-3 d-flex justify-content-center flex-column mt-4">
        <h4 class="text-center text-light">Current</h4>
        <h4 class="text-center text-light">Employees</h4>
        <div
          class="
            employee-cards
            elevation-2
            rounded
            grey-card
            m-4
            d-flex
            flex-column
            justify-content-center
          "
        >
          <div class="col-12 d-flex justify-content-around p-2">
            <span
              ><img
                class="small-profile-img"
                src="https://th.bing.com/th/id/R.3223efb84d9394750bcb90dadfefc5b2?rik=zhNwcP5qVVgiFQ&pid=ImgRaw&r=0"
                alt=""
            /></span>
            <span>
              <h2 class="text-white">
                <b><em>Bob</em></b>
              </h2>
            </span>
            <span><i class="text-white mdi mdi-delete f-24"></i></span>
          </div>
          <div class="col-12 d-flex justify-content-around p-2">
            <span
              ><img
                class="small-profile-img"
                src="https://th.bing.com/th/id/R.3223efb84d9394750bcb90dadfefc5b2?rik=zhNwcP5qVVgiFQ&pid=ImgRaw&r=0"
                alt=""
            /></span>
            <span>
              <h2 class="text-white">
                <b><em>Bob</em></b>
              </h2>
            </span>
            <span><i class="text-white mdi mdi-delete f-24"></i></span>
          </div>
          <div class="col-12 d-flex justify-content-around p-2">
            <span
              ><img
                class="small-profile-img"
                src="https://th.bing.com/th/id/R.3223efb84d9394750bcb90dadfefc5b2?rik=zhNwcP5qVVgiFQ&pid=ImgRaw&r=0"
                alt=""
            /></span>
            <span>
              <h2 class="text-white">
                <b><em>Bob</em></b>
              </h2>
            </span>
            <span><i class="text-white mdi mdi-delete f-24"></i></span>
          </div>
        </div>
      </div>
      <div class="col-md-3 d-flex justify-content-center flex-column mt-4">
        <h4 class="text-center text-light">Available</h4>
        <h4 class="text-center text-light">Employees</h4>
        <div
          class="
            employee-cards
            d-flex
            flex-column
            elevation-2
            rounded
            grey-card
            m-4
            justify-content-center
          "
        >
          <div class="col-12 d-flex justify-content-around p-2">
            <span
              ><img
                class="small-profile-img"
                src="https://th.bing.com/th/id/R.3223efb84d9394750bcb90dadfefc5b2?rik=zhNwcP5qVVgiFQ&pid=ImgRaw&r=0"
                alt=""
            /></span>
            <span>
              <h2 class="text-white">
                <b><em>Bob</em></b>
              </h2>
            </span>
            <span><i class="text-white mdi mdi-checkbox-marked f-22"></i></span>
          </div>
          <div class="col-12 d-flex justify-content-around p-2">
            <span
              ><img
                class="small-profile-img"
                src="https://th.bing.com/th/id/R.3223efb84d9394750bcb90dadfefc5b2?rik=zhNwcP5qVVgiFQ&pid=ImgRaw&r=0"
                alt=""
            /></span>
            <span>
              <h2 class="text-white">
                <b><em>Bob</em></b>
              </h2>
            </span>
            <span><i class="text-white mdi mdi-checkbox-marked f-22"></i></span>
          </div>
          <div class="col-12 d-flex justify-content-around p-2">
            <span
              ><img
                class="small-profile-img"
                src="https://th.bing.com/th/id/R.3223efb84d9394750bcb90dadfefc5b2?rik=zhNwcP5qVVgiFQ&pid=ImgRaw&r=0"
                alt=""
            /></span>
            <span>
              <h2 class="text-white">
                <b><em>Bob</em></b>
              </h2>
            </span>
            <span><i class="text-white mdi mdi-checkbox-marked f-22"></i></span>
          </div>
        </div>
      </div>

      <div class="col-md-6 d-flex justify-content-center flex-column mt-4">
        <div
          class="
            map-card
            elevation-2
            rounded
            bg-light
            m-4
            d-flex
            align-items-center
          "
        >
          <img
            class="img-fluid p-2 map-card-img"
            src="https://www.s-lec.eu/wp-content/uploads/map.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
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
export default {

  setup() {
    let noteData = ref({})
    const route = useRoute()
    onMounted(async () => {
      try {
        await projectsService.getProjectById(route.params.id)
        await notesService.getNotes(route.params.id)
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