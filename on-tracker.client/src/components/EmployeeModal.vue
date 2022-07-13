<template>
  <div class="modal fade" id="teamMemberModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <b> Assign an Employee to a Project</b>
          <button title="Close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="createTeamMember" class="d-flex justify-content-around">
          <div class="modal-body">
            <b class="ms-2"> Employee : </b>
            <select name="employee" id="employee" v-model="employeeData.employeeId">
              <option :value="e.id" class="" v-for="e in employees" :key="e.id">
                {{ e.account.name }}
              </option>
            </select>
            <b class="ms-3">Project :</b>
            <select name="project" id="project" class="m-4" v-model="employeeData.projectId">
              <option :value="p.id" class="d" v-for="p in projects" :key="p.id">
                {{ p.projectName }}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Assign</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from '@vue/reactivity'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { teamMemberService } from '../services/TeamMembersService'
import { employeesService } from '../services/EmployeesService'
export default {
  setup() {
    const employeeData = ref({})
    return {
      employeeData,
      async createTeamMember() {
        try {
          console.log(employeeData.value)
          await teamMemberService.createTeamMember(employeeData.value)
        } catch (error) {
          Pop.toast(error.message)
          logger.log(error)
        }
      },
      employees: computed(() => AppState.employees),
      projects: computed(() => AppState.activeBusinessProjects)

    }
  }
}
</script>


<style lang="scss" scoped>
</style>