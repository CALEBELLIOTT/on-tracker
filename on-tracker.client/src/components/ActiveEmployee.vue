<template>
  <div class="">
    <div>
      <img :src="employee[0].account.picture || employee.account.picture" alt="">
    </div>
    <div>
      {{ employee.name }}

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
</style>