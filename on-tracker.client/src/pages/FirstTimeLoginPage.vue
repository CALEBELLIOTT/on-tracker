<template>
  <div class="container-fluid d-flex justify-content-around page-container">
    <div class="row mt-5">
      <div class="col-12 text-center">
        <h1>Welcome to <span class="text-primary">OnTracker<span class="sup">&reg;</span></span></h1>
        <div class="divider-line"></div>
        <h4 class="mt-2">We've noticed you're new here</h4>
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
.sup {
  vertical-align: super;
  font-size: 1rem;
}

.divider-line {
  height: 2px;
  background-color: #f27648;
  width: 50%;
  margin: auto;
}

.page-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  flex-grow: 1;
}

.selection-card {
  height: 30vh;
  transition: 300ms;
  border: solid 2px rgba(37, 36, 36, 1);
}

.selection-card:hover {
  cursor: pointer;
  transform: scale(1.01);
  transition: 300ms;
  border: solid 2px rgb(255, 132, 73);
}
</style>