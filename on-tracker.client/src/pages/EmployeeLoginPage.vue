<template>
  <transition>
    <div class="container-fluid" v-if="!account.businessId">
      <div class="row">
        <div class="
            col-12
            d-flex
            flex-column
            justify-content-center
            align-items-center
          ">
          <h2 class="mb-5 mt-5">Select Your Workplace</h2>
          <div class="divider-line"></div>

          <!-- WHeel spin -->

          <div class="business-list mt-5">
            <h4 class=" text-center business" v-for="b in businesses" :key="b.id" :business="b"
              @click="assignBusiness(b.id)">
              {{ b.name }}
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid " v-else>
      <div class="row">
        <div class="
            col-12
            d-flex
            flex-column
            justify-content-center
            align-items-center
          ">
          <h4 class="my-5">Tell us about yourself</h4>
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
// FIXME plugins for wheel scroll
// import BScroll from '@better-scroll/core'
// import Wheel from '@better-scroll/wheel'
// BScroll.use(Wheel)

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
        } catch (error) {
          Pop.toast(error.message, "error")
          console.error(error)
        }
      },
      async editAccountInfo() {
        console.log(userData.value);
        userData.value.businessId = AppState.account.businessId
        userData.businessAccount = AppState.account.businessAccount
        try {
          await accountService.editAccountInfo(userData.value)
          await employeesService.editEmployee(userData.value, AppState.account.id)
          router.push({ name: 'Home' })
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
.divider-line {
  height: 2px;
  background-color: #f27648;
  width: 50%;
  margin: auto;
}

.business-list {
  border-radius: 5px;
  max-height: 45vh;
  transition: 500ms;
  overflow: scroll;
  overflow-x: hidden;
}

.business-list::-webkit-scrollbar {
  width: .5rem;
}

.business-list::-webkit-scrollbar-thumb {
  background-color: #f27648;
  border-radius: 5px;
}

.business-list::-webkit-scrollbar-track {
  background-color: #e9ecef;
  border-radius: 5px;
}

.business:hover {
  cursor: pointer;
  transform: scale(.9);
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