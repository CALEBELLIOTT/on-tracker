<template>
  <div class="d-flex text-light align-items-center my-2">
    <div class="d-flex align-items-center me-5">
      <img class="profile-img" :src="employee.account.picture || employee.account.picture" alt="">
      <h2 class="mx-2"> {{ employee.account.name }} </h2>
    </div>
    <div class="d-flex flex-column text-light ms-5">
      <h2>certifications: {{ employee.certifications.toString() }}</h2>
      <h2>Skills: {{ employee.skills }}</h2>
    </div>
  </div>
  <hr class="text-light">
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState.js"
export default {
  setup() {
    return {
      employee: computed(() => AppState.activeEmployee),
      account: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
.profile-img {
  border-radius: 50%;
  height: 10rem;
}
</style>