<template>
  <navbar></navbar>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="d-flex flex-column align-items-center mt-5">
          <h1 class="m-0"><span class="text-primary">{{ business.name }}'s</span> Employees</h1>
          <p v-if="!account.businessAccount" class="text-muted m-0">View information about {{ business.name }}'s
            employees.</p>
          <p v-if="account.businessAccount" class="text-muted mt-0">View and manage information about {{ business.name
          }}'s
            employees.</p>
          <div class="divider-line"></div>
        </div>
      </div>
    </div>
    <div class="row" v-if="account.businessAccount">
      <div class="col-12">
        <div class="mt-5">
          <h3>Assign an employee to a project</h3>
          <p class="text-muted m-0">Using our assign to project tool, you can assign your employees to a project your
            business has created.</p>
          <p class="">Click the button below to get started</p>
          <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
            data-bs-target="#teamMemberModal">
            Assign to Project
          </button>
        </div>

      </div>
    </div>

    <div class="row">

      <div class="col-md-6">
        <div class="mt-5 d-flex flex-column align-items-center">
          <h3>Employees</h3>
          <EmployeeCard v-for="e in employees" :key="e.id" :employee="e"></EmployeeCard>
        </div>
      </div>

      <div class="col-md-6">
        <div class="mt-5 d-flex flex-column align-items-center">
          <ActiveEmployee></ActiveEmployee>
        </div>
      </div>

    </div>



    <!-- <ActiveEmployee />
    <div class="container" v-if="employees[0]?.id">
      <div class="row">
        <div class="col-md-6" v-for="e in employees" :key="e.id">
          <EmployeeCard :employee="e"></EmployeeCard>
        </div>
      </div>
    </div> -->


  </div>


  <EmployeeModal></EmployeeModal>
</template>


<script>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import { employeesService } from "../services/EmployeesService.js";
import { projectsService } from '../services/ProjectsService.js';
import { logger } from '../utils/Logger.js';
export default {
  setup() {
    onMounted(async () => {
      await employeesService.getAllEmployees()
      await projectsService.getAllProjects()
      await projectsService.getBusinessProjects(AppState.activeBusiness.id)
      // logger.log(AppState.activeBusinessProjects)
    })
    return {
      employees: computed(() => AppState.employees),
      business: computed(() => AppState.activeBusiness),
      account: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>