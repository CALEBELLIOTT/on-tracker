<template>
  <div class="container">
    <!-- component of active employee -->

    <!-- employee nav bar -->

    <div class="row">
      <div class="col-6" v-for="e in employees" :key="e.id">
        <EmployeeCard :employee="e"></EmployeeCard>
      </div>
    </div>
  </div>

</template>


<script>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
export default {
  setup() {
    onMounted(() => {
      console.log(AppState.account);
    })
    return {
      employees: computed(() => AppState.employees)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>