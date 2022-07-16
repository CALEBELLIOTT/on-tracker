<template>
  <div class="container" v-if="employee.id">
    <div class="row mt-3">
      <div class="col-12 ">
        <div class=" rounded p-2 my-2 ">
          <div class="row">
            <div class="col-12">
              <div class="d-flex flex-column">
                <div class="d-flex">
                  <img class="profile-img" :src="employee.account.picture" alt="">
                  <div class="mx-2">
                    <h3>{{ employee.account.name }}<span class="text-muted fs-6"
                        v-if="employee.account.businessAccount"> (admin)</span></h3>
                    <p class=""> <span class="text-primary">Email: </span> {{ employee.account.email }}</p>
                    <p class=""> <span class="text-primary">skills: </span> {{ employee.skills }}</p>
                    <p class=""> <span class="text-primary">Certifications: </span> {{
                        employee.certifications.toString()
                    }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState.js"
import { onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { employeesService } from "../services/EmployeesService.js"
export default {
  setup() {

    return {
      employee: computed(() => AppState.activeEmployee),
      account: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
.profile-img {
  border-radius: 5%;
  height: 13rem;
  width: 13rem;
  object-fit: cover;
}

h3 {
  color: var(--bs-primary);
}
</style>