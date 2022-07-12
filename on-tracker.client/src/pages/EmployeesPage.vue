<template>
  <navbar></navbar>
  <ActiveEmployee />
  <div class="container" v-if="employees[0]?.id">
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
import { projectsService } from '../services/ProjectsService.js';
export default {
  setup() {
    onMounted(async () => {
      await employeesService.getAllEmployees()
      await projectsService.getAllProjects()
      await projectsService.getBusinessProjects()

    })
    return {
      employees: computed(() => AppState.employees),

    }
  }
}
</script>


<style lang="scss" scoped>
</style>