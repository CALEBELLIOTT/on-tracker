<template>
  <div class="row">
    <div class="col-12">
      <div class="bg-light rounded m-2 p-2 d-flex align-items-center">
        <div class="row">
          <div class="col-md-4">
            <img :src="employee.account.picture" class="img-fluid" alt="">
          </div>
          <div class="col-md-7">
            <div class="d-flex flex-column mx-2">
              <p class=""><b>{{ employee.account.name }}</b></p>
              <p>{{ employee.skills }}</p>
              <p> <span v-for="c in employee.certifications" :key="c">{{ c }}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: { employee: { type: Object, required: true } },
  setup(props){
    return {
      async quitJob() {
        await employeesService.removeEmployee(props.employee.id)
        await accountService.removeBusinessId(AppState.account.id)
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>