<template>
  <div class="row">
    <div class="col-12">
      <div class="bg-light rounded m-2 p-2 d-flex align-items-center employee-card" @click="setActiveEmployee()">
        <div class="row">
          <div class="col-md-4">
            <img :src="employee.account.picture" class="img-fluid" alt="">
          </div>
          <div class="col-md-7">
            <div class="d-flex flex-column mx-2">
              <p class=""><b>{{ employee.account.name }}</b></p>
              <p>{{ employee.skills }}</p>
              <p> <span v-for="c in employee.certifications" :key="c">{{ c }}</span></p>
            </div>
          </div>
          <div class="col-md-1">
            <h3 v-if="account.businessAccount && account.id != employee.account.id"><i
                class="mdi mdi-trash-can selectable" @click="fireEmployee"></i>
            </h3>
            <h3 v-if="account.id == employee.account.id"><i class="mdi mdi-trash-can selectable" @click="quitJob"></i>
            </h3>
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
img {
  border-radius: 50%;
}

.employee-card {
  border: 3px solid rgba(12, 65, 255, 0);
  transition: 500ms;
}

.employee-card:hover {
  cursor: pointer;
  border: 3px rgb(255, 132, 73) solid;
  transition: 500ms;
}
</style>