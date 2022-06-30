<template>
  <div class="container-fluid dark-theme">
    <div class="row">
      <div class="col-12 text-center text-light">
        <h4>We've noticed you're new here</h4>
        <h4>Choose your account type</h4>
      </div>
    </div>
    <div class="row justify-content-center align-items-center">
      <div class="col-4">
        <div class="elevation-2 rounded bg-white selection-card">
          <h4>OnTracker for businesses</h4>
        </div>
      </div>
    </div>
    <div class="row justify-content-center align-items-center">
      <div class="col-4">
        <div class="elevation-2 rounded bg-white selection-card">
          <h4>OnTracker for employees</h4>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {}
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
  height: 20vh;
}
</style>