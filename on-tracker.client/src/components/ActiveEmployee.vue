<template>
  <div class="">
    <div>
      <img :src="employee.account.picture || employee.account.picture" alt="">
    </div>
    <div class="text-light">
      <h2> {{ employee.account.name }} </h2>

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
      employee: computed(() => AppState.activeEmployee[0]),
      account: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>