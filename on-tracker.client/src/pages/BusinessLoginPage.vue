<template>
  <div class="container-fluid" v-if="!account.businessId">
    <div class="row d-flex justify-content-center form-row">
      <div class="col-12 d-flex flex-column align-items-center mt-5">
        <h1>Create A Business With <span class="text-primary">OnTracker</span> </h1>
        <div class="divider-line"></div>
      </div>
      <div class="col-8">
        <form class="" @submit.prevent="createBusiness" action="">
          <div class="d-flex flex-column align-items-center">
            <h3 class="text-center">Tell us about your business</h3>
            <div class="col-md-10 d-flex flex-column">
              <div class="inputBox d-flex my-2">
                <input v-model="businessData.name" required type="text" class="border" />
                <span for="">Name</span>
              </div>
              <div class="inputBox d-flex my-2">
                <input v-model="businessData.coverImg" required type="text" class="border" />
                <span for="">Cover Image</span>
              </div>
              <div class="inputBox d-flex my-2">
                <input v-model="businessData.logo" required type="text" class="border" placeholder="" />
                <span for="">Logo</span>
              </div>
              <vue-google-autocomplete id="map" classname="form-control" placeholder="Business Address"
                v-on:placechanged="getAddressData">
              </vue-google-autocomplete>
            </div>
          </div>
          <div class="d-flex justify-content-end m-2">
            <button type="submit" class="btn btn-outline-primary" title="Add your Business ">
              <h3 class="m-2 my-0"><i class="mdi mdi-check"></i></h3>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="container-fluid" v-else>
    <div class="row">
      <div class="
            col-12
            d-flex
            flex-column
            justify-content-center
            align-items-center
          ">
        <h1 class="mt-5">Tell us about yourself</h1>
        <div class="divider-line"></div>
        <form class="mt-3" action="" @submit.prevent="editAccountInfo()">
          <label for="" class="mt-2">Your Name</label>
          <input v-model="userData.name" type="text" placeholder="Name..." class="form-control mb-2" />
          <label for="" class="mt-2">Your Picture</label>
          <input v-model="userData.picture" type="text" placeholder="Img Url..." class="form-control mb-2" />
          <label for="" class="mt-2">Your Skills</label>
          <input v-model="userData.skills" type="text" placeholder="Skills..." class="form-control mb-2" />
          <label for="" class="mt-2">Your Certifications</label>
          <input v-model="userData.certifications" type="text" placeholder="Certifications..."
            class="form-control mb-2" />
          <button type="submit" class="btn btn-outline-primary text-end my-4">
            <i class="mdi mdi-send"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "vue"
import { AppState } from "../AppState"
import { router } from "../router"
import { accountService } from "../services/AccountService"
import { businessesService } from "../services/BusinessesService"
import { employeesService } from "../services/EmployeesService"
import Pop from "../utils/Pop"
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {
  components: {
    VueGoogleAutocomplete
  },
  setup() {
    let businessData = ref({})
    let userData = ref({})
    let businessAddress = {}
    return {
      businessData,
      userData,
      account: computed(() => AppState.account),
      async createBusiness() {
        try {
          businessData.value.address = businessAddress
          console.log(businessData);
          await businessesService.createBusiness(businessData.value)
          await employeesService.createEmployee()
        } catch (error) {
          Pop.toast(error.message)
          console.error(error)
        }
      },
      async editAccountInfo() {
        console.log(userData.value);
        userData.value.businessId = AppState.account.businessId
        try {
          await accountService.editAccountInfo(userData.value)
          await employeesService.editEmployee(userData.value, AppState.account.id)
          router.push({ name: 'Home' })
        } catch (error) {
          Pop.toast(error.message, "error")
          console.error(error)
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
.form-card {
  background-color: rgb(251, 246, 239);
  height: 45vh;
}

.divider-line {
  height: 2px;
  background-color: #f27648;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.form-row {
  height: 100vh;
}

.button-1 {
  background-color: red;
  box-shadow: rgb(109, 7, 7) 4px 4px 0px;
  border-radius: 8px;
  transition: transform 200ms, box-shadow 200ms;
}

.button-1:active {
  transform: translateY(4px) translateX(4px);
  box-shadow: rgb(109, 7, 7) 0px 0px 0px;
}

input:invalid {
  animation: shake 300ms;
}

@keyframes shake {
  25% {
    transform: translateX(4px);
  }

  50% {
    transform: translateX(-4px);
  }

  75% {
    transform: translateX(4px);
  }
}

.inputBox {
  position: relative;
}

.inputBox input {
  width: 100%;
  border: 2px solid orange;
  padding: 8px;
  outline: none;
  border-radius: 5px;
}

.inputBox span {
  position: absolute;
  left: 0;
  padding: 10px;
  pointer-events: none;
  font-size: 1em;
  color: grey;
  text-transform: uppercase;
  transition: 0.5s;
}

.inputBox input:valid~span,
.inputBox input:focus~span {
  color: orange;
  transform: translateX(10px) translateY(-7px);
  font-size: 0.7em;
  padding: 0 10px;
  background: rgb(251, 246, 239);
  border-left: 1px solid orange;
  border-right: 1px solid orange;
  letter-spacing: 0.2em;
}

.inputBox input:valid~span,
.inputBox input:focus~span {
  background: orange;
  color: black;
  border-radius: 3px;
}

.inputBox input:valid,
.inputBox input:focus {
  border: 2px solid orange;
}
</style>