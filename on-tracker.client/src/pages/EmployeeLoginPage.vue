<template>
  <div class="container-fluid"></div>
</template>


<script>
import { onMounted } from "vue"
import { businessesService } from "../services/BusinessesService"

export default {
  setup() {
    onMounted(async () => {
      await businessesService.getAllBusinesses()
    })
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>