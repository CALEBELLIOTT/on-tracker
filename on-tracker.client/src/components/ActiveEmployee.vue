<template>
  <div class="container" v-if="employee.id">
    <div class="row mt-3">
      <div class="col-12 ">
        <div class="bg-light rounded p-2 my-2 shadow">
          <div class="row">
            <div class="col-md-4 text-md-start text-center">
              <img class="shadow profile-img m-2" :src="employee.account.picture || employee.account.picture" alt="" />
            </div>
            <div class="col-md-6">
              <div class="d-flex flex-column justify-content-center my-2">
                <h2 class="my-3 border-bottom border-dark border-2"><b>{{ employee.account.name }}</b></h2>

                <div class="d-flex justify-content-around">
                  <div class="col-md-2 my-3">
                    <h3 class="border-bottom border-2 border-dark">Skills: </h3>
                    <h5>{{ employee.skills }}</h5>
                  </div>

                  <div class="col-md-4 my-3">
                    <h3 class="border-bottom border-2 border-dark">Certifications:</h3>
                    <h5>{{ employee.certifications.toString() }}</h5>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="border-bottom border-3 border-dark m-4"></div>
  <div class="col-md-12 d-flex justify-content-center my-4">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#teamMemberModal">
      Assign a Project
    </button>
  </div>
  <!-- Modal -->
  <EmployeeModal />
  <!-- Modal -->
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