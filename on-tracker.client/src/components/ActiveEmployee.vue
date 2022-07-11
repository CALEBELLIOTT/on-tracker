<template>

  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="bg-light rounded p-2 my-2">
          <div class="row">
            <div class="col-md-4 text-md-start text-center">
              <h3 class="my-2">{{ employee.account.name }}</h3>
              <img class="profile-img" :src="employee.account.picture || employee.account.picture" alt="">
            </div>
            <div class="col-md-4">
              <div class="d-flex flex-column justify-content-center my-2">
                <h3>certifications: {{ employee.certifications.toString() }}</h3>
                <h3>Skills: {{ employee.skills }}</h3>
              </div>
            </div>
            <div class="col-md-2">
              <div class="p-2">

              </div>
            </div>
          </div>
        </div>
      </div>
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
  width: 10rem;
  object-fit: cover;
}
</style>