<template>
  <!-- <div class="container-fluid">

    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div
            class="col-md-12 justify-content-around bg-light rounded m-2 p-2 d-flex align-items-center shadow employee-card"
            @click="setActiveEmployee()">
            <div class="d-none d-md-block col-md-4">
              <img :src="employee.account.picture" class="shadow profile-img" alt="">
            </div>
            <div class="col-md-7 column">
              <div class=" col-md-12 d-flex flex-column mx-2">
                <div class="col-md-12 d-flex justify-content-between border-bottom border-2 border-dark ">
                  <h3><b>{{ employee.account.name }}</b></h3>
                  <h3 v-if="account.businessAccount && account.id != employee.account.id"><i
                      class="mdi mdi-trash-can selectable" title="Fire Employee" @click="fireEmployee"></i>
                  </h3>
                  <h3 v-if="account.id == employee.account.id"><i class="mdi mdi-trash-can selectable" title="Quit Job"
                      @click="quitJob"></i>
                  </h3>
                </div>
                <div class="col-md-12 d-flex justify-content-around mt-4">

                  <div class="col-md-2">
                    <h5 class=" border-bottom border-2 border-dark">Skills:</h5>
                    <p> {{ employee.skills }}</p>
                  </div>
                  <div class="col-md-5">
                    <h5 class=" border-bottom border-2 border-dark">Certifications:</h5>
                    <p> <span v-for="c in employee.certifications" :key="c">{{ c }}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="p-2 employees-container">
          <div class="d-flex align-items-center card-utility employee-card">
            <img class="profile-img" :src="employee.account.picture" alt="" @click="setActiveEmployee()">
            <div class="d-flex flex-column mx-2 card-utility">
              <h4 class=" text-primary m-0" @click="setActiveEmployee()">{{ employee.account.name }}<span
                  class="text-muted fs-6" v-if="employee.account.businessAccount"> (admin)</span>
              </h4>
              <p class="text-muted">{{ employee.account.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
import { computed } from "vue"
import { AppState } from "../AppState"
import { accountService } from "../services/AccountService"
import { employeesService } from "../services/EmployeesService"

export default {
  props: { employee: { type: Object, required: true } },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      async fireEmployee() {
        await employeesService.removeEmployee(props.employee.id)
        await accountService.removeBusinessId(props.employee.account.id)
      },
      async quitJob() {
        await employeesService.removeEmployee(props.employee.id)
        await accountService.removeBusinessId(AppState.account.id)
      },
      async setActiveEmployee() {
        await employeesService.setActiveEmployee(props.employee.id)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
h5 {
  color: var(--bs-primary);
}

// .card-utility {
//   border: 2px solid rgba(12, 65, 255, 0);
//   transition: 500ms;
// }

// .card-utility:hover {
//   cursor: pointer;
//   border: 2px rgb(255, 132, 73) solid;
//   transition: 500ms;
// }


.employees-container {
  max-height: 35vh;
  overflow-y: scroll;
}

.employees-container::-webkit-scrollbar {
  width: 0.5rem;
}

.employees-container::-webkit-scrollbar-thumb {
  background-color: #f27648;
  border-radius: 5px;
}

.employees-container::-webkit-scrollbar-track {
  background-color: #e9ecef;
  border-radius: 5px;
}

.card-utility img:hover {
  border: rgb(255, 132, 73) 2px solid;
  cursor: pointer;
  transition: 300ms;
}

.card-utility img {
  transition: 300ms;
  transition-property: border;
}

.card-utility h4:hover {
  cursor: pointer;
}

.card-utility .profile-img {
  height: 8rem;
  width: 8rem;
  object-fit: cover;
  border-radius: 50%;
}

@media(max-width: 769px) {
  .profile-img {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>