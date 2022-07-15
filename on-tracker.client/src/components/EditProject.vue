<template>
  <div class="col-md-12 p-5">
    <div class="row bg-white m-4 p-4 elevation-3">
      <div class="col-md-12">
        <form @submit.prevent="">
          <div class="row d-flex justify-content-around">
            <div class="col-md-6 p-3">
              <label for="">Project Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Name..."
                v-model="projectData.projectName"
              />
            </div>
            <div class="col-md-6 p-3">
              <label for="">Project Cover Image</label>
              <input
                type="text"
                class="form-control"
                placeholder="Url..."
                v-model="projectData.coverImg"
              />
            </div>
            <div class="col-md-6 p-3">
              <label for="">Project Location</label>
              <vue-google-autocomplete
                id="project"
                classname="form-control"
                placeholder="Project Address"
                v-on:placechanged="getAddressData"
              >
              </vue-google-autocomplete>
            </div>
            <div class="col-md-6 p-3">
              <label for="">Job Site Images</label>
              <input
                type="text"
                class="form-control"
                placeholder="Url..."
                v-model="jobImg"
              />
            </div>
            <div class="col-md-6 p-3">
              <label for="">Quoted Price</label>
              <input
                type="number"
                class="form-control"
                placeholder="Url..."
                v-model="projectData.quotePrice"
              />
            </div>
            <div class="col-md-6 p-3">
              <label for="">Due Date</label>
              <input
                type="date"
                class="form-control border border-primary"
                v-model="projectData.dueDate"
              />
            </div>
            <div class="col-md-12 p-3">
              <textarea
                placeholder="Description"
                class="form-control"
                name=""
                id=""
                cols="147"
                rows="5"
                v-model="projectData.description"
              ></textarea>
            </div>
            <div>
              <button class="btn btn-success" type="submit">Update</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from '@vue/reactivity';
import VueGoogleAutocomplete from "vue-google-autocomplete";
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { projectsService } from '../services/ProjectsService';
import { useRoute } from 'vue-router';
export default {

  components: {
    VueGoogleAutocomplete
  },
  setup() {
    let projectData = ref({ jobSiteImgs: [] })
    let jobImg = ref('')
    let projectAddress = {}
    const route = useRoute()

    return {
      projectData,
      jobImg,
      route,

      async editProject() {
        try {
          projectData.value.location = projectAddress
          await projectsService.editProject(route.params.id, projectData.value)
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
.inputs {
  max-width: 500px;
}
</style>