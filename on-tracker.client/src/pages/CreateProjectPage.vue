
<template>
  <Navbar></Navbar>

  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mt-5 text-center">
        <h1 class="">
          Create A Project With <span class="text-primary">OnTracker</span>
        </h1>
        <p class="text-muted">
          Using OnTracker, you can track a projects progress, location, and
          manage employees - all from an easy to use interface.
        </p>
      </div>
      <div class="divider-line"></div>

      <div class="col-12 mt-2">
        <form @submit.prevent="createProject">
          <div class="row">
            <div class="col-md-6 p-2">
              <label for="">Project Name</label>
              <input
                required
                type="text"
                class="form-control"
                placeholder="Name..."
                v-model="projectData.projectName"
              />
            </div>
            <div class="col-md-6 p-2">
              <label for="">Project Cover Image</label>
              <input
                required
                type="text"
                class="form-control"
                placeholder="Url..."
                v-model="projectData.coverImg"
              />
            </div>
            <div class="col-md-6 p-2">
              <label for="">Project Location</label>
              <vue-google-autocomplete
                id="project"
                classname="form-control"
                placeholder="Project Address"
                v-on:placechanged="getAddressData"
              >
              </vue-google-autocomplete>
            </div>
            <div class="col-md-6 p-2">
              <label for="">Jobsite Images</label>
              <input
                required
                type="text"
                class="form-control"
                placeholder="Urls..."
                v-model="projectData.jobSiteImgs"
              />
            </div>
            <div class="col-md-6 p-2">
              <label for="">Quoted Price</label>
              <input
                required
                type="number"
                min="1"
                placeholder="1"
                class="form-control"
                v-model="projectData.quotePrice"
              />
            </div>
            <div class="col-md-6 p-2">
              <label for="">Due Date</label>
              <input
                required
                type="date"
                placeholder=""
                class="form-control"
                v-model="projectData.dueDate"
              />
            </div>
            <div class="col-12 p-2">
              <label for="">Project Description</label>
              <textarea
                required
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Description..."
                class="form-control"
                v-model="projectData.description"
              ></textarea>
            </div>
            <div class="col-12 d-flex justify-content-between">
              <button type="button" class="btn btn-secondary">Close</button>
              <button type="submit" class="btn btn-success">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "vue";
import { projectsService } from "../services/ProjectsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import VueGoogleAutocomplete from "vue-google-autocomplete";
import { AppState } from "../AppState";
import { useRouter } from "vue-router";
export default {
  components: {
    VueGoogleAutocomplete
  },
  setup() {
    const router = useRouter()
    let projectData = ref({})
    let projectAddress = {}
    let businessId = computed(() => AppState.activeBusiness.value)
    return {
      projectData,
      async createProject() {
        projectData.value.location = projectAddress
        projectData.value.businessId = AppState.activeBusiness.id
        try {
          const project = await projectsService.createProject(projectData.value)
          router.push({ name: 'Project', params: { id: project.id } })
        } catch (error) {
          Pop.toast(error.message)
          logger.log(error)
        }
      },
      getAddressData(data) {
        projectAddress = data
        console.log(businessId);
        console.log(projectAddress);
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.divider-line {
  height: 2px;
  background-color: #f27648;
  width: 50%;
  margin: auto;
}
</style>
