<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="availableEmployees"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
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
</style>