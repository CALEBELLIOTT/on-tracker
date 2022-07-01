<template>
  <div class="container-fluid dark-theme">
    <div class="row d-flex justify-content-center form-row align-items-center">
      <div class="col-8">
        <div class="form-card d-flex flex-column justify-content-around rounded p-2">
          <form class="" @submit.prevent="createBusiness" action="">
            <div class="d-flex flex-column align-items-center">
              <h3 class="text-center">Tell us about your business</h3>
              <div class="col-md-10 d-flex flex-column">
                <div class="d-flex my-2">
                  <label for="">Name</label>
                  <input v-model="businessData.name" required type="text" class="border-bottom mx-2 form-control "
                    placeholder="Business Name...">
                </div>
                <div class="d-flex my-2">
                  <label for="">Cover Image</label>
                  <input v-model="businessData.coverImg" required type="text" class="border-bottom mx-2 form-control "
                    placeholder="Upload your Image...">
                </div>
                <div class="d-flex my-2">
                  <label for="">Logo</label>
                  <input v-model="businessData.logo" required type="text" class="border-bottom mx-2 form-control "
                    placeholder="Upload your Logo...">
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end m-2">
              <button type="submit" title="Add your Business ">
                <h3 class="m-2"><i class="mdi mdi-check "></i></h3>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue"
import { router } from "../router"
import { businessesService } from "../services/BusinessesService"
import { employeesService } from "../services/EmployeesService"
import Pop from "../utils/Pop"

export default {
  setup() {
    let businessData = ref({})
    return {
      businessData,
      async createBusiness() {
        try {
          await businessesService.createBusiness(businessData.value)
          await employeesService.createEmployee()
          router.push({ name: 'Home' })
        } catch (error) {
          Pop.toast(error.message)
          console.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.form-card {
  background-color: rgb(251, 246, 239);
  height: 45vh;
}

.form-row {
  height: 100vh;
}
</style>