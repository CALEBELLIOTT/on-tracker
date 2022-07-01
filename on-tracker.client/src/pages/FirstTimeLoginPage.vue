<template>
  <div class="container-fluid d-flex justify-content-around dark-theme">
    <div class="row mt-5">
      <div class="col-12 text-center text-light">
        <h4>We've noticed you're new here</h4>
        <h4>Choose your account type</h4>
      </div>
    </div>
    <div class="row justify-content-center align-items-center">
      <div class="col-md-5">
        <div class="
            d-flex
            justify-content-center
            align-items-center
            elevation-2
            rounded
            bg-white
            selection-card
          " @click="navigateToBusiness">
          <h4>OnTracker for businesses</h4>
        </div>
      </div>
    </div>
    <div class="row mb-5 justify-content-center align-items-center">
      <div class="col-md-5">
        <div class="
            d-flex
            justify-content-center
            align-items-center
            elevation-2
            rounded
            bg-white
            selection-card
          " @click="navigateToEmployee">
          <h4>OnTracker for employees</h4>
        </div>
      </div>
    </div>
  </div>
  <createProjectModal></createProjectModal>
</template>


<script>
import { useRouter } from "vue-router"
import { router } from "../router"

export default {
  setup() {
    return {
      navigateToEmployee() {
        router.push({ name: 'EmployeeLogin' })
      },
      navigateToBusiness() {
        router.push({ name: 'BusinessLogin' })
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.dark-theme {
  background-color: rgba(37, 36, 36, 1);
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  flex-grow: 1;
}

.selection-card {
  height: 30vh;
  transition: 500ms;
  border: solid 4px rgba(37, 36, 36, 1);
}

.selection-card:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 500ms;
  border: solid 4px rgb(255, 132, 73);
}
</style>