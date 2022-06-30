<template>
  <div class="container-fluid dark-theme text-light">
    <div class="row ">
      <div class="col-12 d-flex flex-column justify-content-center align-items-center">
        <h4 class="mb-5">Select Your Business</h4>
        <div class="business-list mt-5">
          <h4 class="text-light text-center business" v-for="b in businesses" :key="b.id" :business="b"
            @click="assignBusiness(b.id)">
            {{ b.name }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "vue"
import { AppState } from "../AppState"
import { accountService } from "../services/AccountService"
import { businessesService } from "../services/BusinessesService"
import Pop from "../utils/Pop"

export default {
  setup() {
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
      async assignBusiness(id) {
        try {
          await accountService.setBusinessId(id)
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
.business-list {
  height: 25vh;
  transition: 500ms;

}

.business:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 500ms linear;
}
</style>