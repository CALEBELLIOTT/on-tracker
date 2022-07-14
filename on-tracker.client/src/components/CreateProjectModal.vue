<template>
  <!-- Button trigger modal -->
  <h6 class="
      d-flex
      align-items-center
      text-primary
      mx-4
      nav nav-custom
      selectable
    " data-bs-toggle="modal" data-bs-target="#exampleModal">
    + New Project
  </h6>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content bg-dark">
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h3>Create A New Project With OnTracker</h3>
              </div>
            </div>
            <form @submit.prevent="createProject">
              <div class="row">
                <div class="col-md-6 p-2">
                  <label for="">Project Name</label>
                  <input required type="text" class="form-control" placeholder="Name..."
                    v-model="projectData.projectName" />
                </div>
                <div class="col-md-6 p-2">
                  <label for="">Project Cover Image</label>
                  <input required type="text" class="form-control" placeholder="Url..."
                    v-model="projectData.coverImg" />
                </div>
                <div class="col-md-6 p-2">
                  <label for="">Project Location</label>
                  <vue-google-autocomplete id="map" classname="form-control" placeholder="Project Address"
                    v-on:placechanged="getAddressData">
                  </vue-google-autocomplete>
                </div>
                <div class="col-md-6 p-2">
                  <label for="">Jobsite Images</label>
                  <input required type="text" class="form-control" placeholder="Urls..."
                    v-model="projectData.jobSiteImgs" />
                </div>
                <div class="col-md-6 p-2">
                  <label for="">Quoted Price</label>
                  <input required type="number" min="1" placeholder="1" class="form-control"
                    v-model="projectData.quotePrice" />
                </div>
                <div class="col-md-6 p-2">
                  <label for="">Due Date</label>
                  <input required type="date" placeholder="" class="form-control" v-model="projectData.dueDate" />
                </div>
                <div class="col-12 p-2">
                  <label for="">Project Description</label>
                  <textarea required name="" id="" cols="30" rows="5" placeholder="Description..." class="form-control"
                    v-model="projectData.description"></textarea>
                </div>
                <div class="col-12 d-flex justify-content-between">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" class="btn btn-success" data-bs-dismiss="modal">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue"
import { projectsService } from "../services/ProjectsService"
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import VueGoogleAutocomplete from "vue-google-autocomplete";
import { useRouter } from "vue-router";

export default {
  components: {
    VueGoogleAutocomplete
  },
  setup() {
    let projectData = ref({})
    let businessAddress = {}
    const router = useRouter()
    return {
      router,
      projectData,
      async createProject() {
        projectData.value.location = businessAddress
        try {
          const project = await projectsService.createProject(projectData.value)
          router.push({ to: 'Project', params: { id: project.id } })
        } catch (error) {
          Pop.toast(error.message)
          logger.log(error)
        }
      },
      getAddressData(data) {
        businessAddress = data
        console.log(businessAddress);
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>
