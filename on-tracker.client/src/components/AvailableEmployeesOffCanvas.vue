<template>
  <div
    class="offcanvas offcanvas-end bg"
    tabindex="-1"
    id="availableEmployees"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header border-bottom border-white text-white">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">
        Available Employees
      </h5>
      <button
        type="button"
        class="btn text-white"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <i class="mdi mdi-close fs-5"></i>
      </button>
    </div>
    <div class="offcanvas-body">
      <AvailableEmployees v-for="e in employees" :key="e.id" :employee="e" />
    </div>
  </div>
</template>


<script>
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  setup() {
    return {
      employees: computed(() => AppState.activeProjectAvailableEmployees)
    }
  }
}
</script>


<style lang="scss" scoped>
.bg {
  background: rgba(0, 0, 0, 0.8);
}
</style>