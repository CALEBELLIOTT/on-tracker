<template>
  <transition>
    <div class="container-fluid dark-theme" v-if="!account.businessId">
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
    <div class="container-fluid dark-theme text-light" v-else>
      <div class="row ">
        <div class="col-12 d-flex flex-column justify-content-center align-items-center">
          <h4 class="mb-5 mt-2">Tell us about yourself</h4>
          <form action="" @submit.prevent="editAccountInfo()">
            <label for="" class="mt-2">Your Name</label>
            <input v-model="userData.name" type="text" placeholder="Name..." class="form-control mb-2">
            <label for="" class="mt-2">Your Picture</label>
            <input v-model="userData.picture" type="text" placeholder="Img Url..." class="form-control mb-2">
            <label for="" class="mt-2">Your Skills</label>
            <input v-model="userData.skills" type="text" placeholder="Skills..." class="form-control mb-2">
            <label for="" class="mt-2">Your Certifications</label>
            <input v-model="userData.certifications" type="text" placeholder="Certifications..."
              class="form-control mb-2">
            <button type="submit" class="btn btn-light text-end my-4"><i class="mdi mdi-send"></i></button>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
import { computed, ref } from "vue"
import { AppState } from "../AppState"
import { router } from "../router"
import { accountService } from "../services/AccountService"
import { businessesService } from "../services/BusinessesService"
import { employeesService } from "../services/EmployeesService"
import Pop from "../utils/Pop"

export default {
  setup() {
    let businessData = ref({})
    let userData = ref({})
    return {
      businessData,
      userData,
      account: computed(() => AppState.account),
      async createBusiness() {
        try {
          await businessesService.createBusiness(businessData.value)
          await employeesService.createEmployee()
          router.push({ name: 'Home' })
        } catch (error) {
          Pop.toast(error.message)
          console.error(error)
        }
      },
      async editAccountInfo() {
        console.log(userData.value);
        try {
          await accountService.editAccountInfo(userData.value)
          await employeesService.editEmployee(userData.value, AppState.account.id)
          router.push('home')
        } catch (error) {
          Pop.toast(error.message, "error")
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