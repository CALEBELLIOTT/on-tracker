<template>
  <navbar></navbar>
  <ActiveEmployee />
  <div class="container">
    <div class="row">
      <div class="col-md-6" v-for="e in employees" :key="e.id">
        <EmployeeCard :employee="e"></EmployeeCard>
      </div>
    </div>
  </div>


</template>


<script>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import { employeesService } from "../services/EmployeesService.js";
export default {
  setup() {
    onMounted(() => {
      employeesService.getAllEmployees()
    })
    return {
      employees: computed(() => AppState.employees)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>