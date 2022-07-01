<template>
<!-- component of active employee -->

<!-- employee nav bar -->

<!-- list of all business employees -->
  <div class="">
  </div>
</template>


<script>
import { onMounted } from "@vue/runtime-core"
export default {
  setup(){
    onMounted(()=>{
      employeesService.getAllEmployees()
    })
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>