<template>
  <div class="container-fluid dark-theme">
    <div class="row d-flex justify-content-center form-row align-items-center">
      <div class="col-8">
        <div class="form-card d-flex flex-column justify-content-around rounded p-2">
          <form class="" @submit.prevent="createBusiness" action="">
            <div class="d-flex flex-column align-items-center">
              <h3 class="text-center">Tell us about your business</h3>
              <div class="col-10 d-flex flex-column">
                <div class="d-flex my-2">
                  <label for="">name</label>
                  <input v-model="businessData.name" type="text" class="border-bottom mx-2 form-control "
                    placeholder="name...">
                </div>
                <div class="d-flex my-2">
                  <label for="">Cover Image</label>
                  <input v-model="businessData.coverImg" type="text" class="border-bottom mx-2 form-control "
                    placeholder="url...">
                </div>
                <div class="d-flex my-2">
                  <label for="">Logo</label>
                  <input v-model="businessData.logo" type="text" class="border-bottom mx-2 form-control "
                    placeholder="url...">
                </div>
              </div>
            </div>
            <button type="submit">
              <h3 class="text-end m-2"><i class="mdi mdi-check selectable"></i></h3>
            </button>
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