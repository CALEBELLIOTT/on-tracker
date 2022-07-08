<template>
  <transition>
    <div class="container-fluid dark-theme text-light" v-if="!account.businessId">
      <div class="row ">
        <div class="col-12 d-flex flex-column justify-content-center align-items-center">
          <h4 class="mb-5 mt-2">Select Your Workplace</h4>
          <div class="business-list mt-5">
            <h4 class="text-light text-center business" v-for="b in businesses" :key="b.id" :business="b"
              @click="assignBusiness(b.id)">
              {{ b.name }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <transition>
    <div class="container-fluid dark-theme text-light" v-if="account.businessId">
      <div class="row ">
        <div class="col-12 d-flex flex-column justify-content-center align-items-center">
          <h4 class="mb-5 mt-2">Tell us about yourself</h4>
          <form action="" @submit.prevent="editAccountInfo()">
            <label for="" class="mt-2">Your Name</label>
            <input v-model="userData.name" type="text" placeholder="Name..." class="form-control mb-2">
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
import { computed, onMounted, ref } from "vue"
import { AppState } from "../AppState"
import { router } from "../router"
import { accountService } from "../services/AccountService"
import { businessesService } from "../services/BusinessesService"
import { employeesService } from "../services/EmployeesService"
import Pop from "../utils/Pop"

export default {
  setup() {
    const userData = ref({})
    onMounted(async () => {
      try {
        await businessesService.getAllBusinesses()
      } catch (error) {
        Pop.toast(error.message, "error")
        console.error(error)
      }
    })
    return {
      businesses: computed(() => AppState.allBusinesses),
      account: computed(() => AppState.account),
      userData,
      async assignBusiness(id) {
        try {
          await accountService.setBusinessId(id)
          await employeesService.createEmployee()
          // router.push({ name: 'Home' })
        } catch (error) {
          Pop.toast(error.message, "error")
          console.error(error)
        }
      },
      async editAccountInfo() {
        console.log(userData.value);
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.business-list {
  height: 25vh;
  transition: 500ms;

}

.business:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 500ms linear;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>