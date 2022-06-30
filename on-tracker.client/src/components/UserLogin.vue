<template>
  <div class="container-fluid dark-theme text-light">
    <div class="row">
      <div class="col-12 bg-secondary d-flex justify-content-center">
        <img
          class="img-fluid login-logo p-2"
          src="../assets/img/Ontracker logo OG.png"
          alt=""
        />
      </div>
      <div class="col-5">
        <div>
          <img class="img-fluid" src="https://thiscatdoesnotexist.com" alt="" />
          <h5>
            On Tracker is a project management system designed to increase
            productivity
          </h5>
          <p class="text-muted">
            On Tracker is utilized by hundreds of companies around the world!
          </p>
          <h5 class="text-end">
            On Tracker is a project management system designed to increase
            productivity
          </h5>
          <p class="text-end text-muted">
            On Tracker is utilized by hundreds of companies around the world!
          </p>
          <h5>
            On Tracker is a project management system designed to increase
            productivity
          </h5>
          <p class="text-muted">
            On Tracker is utilized by hundreds of companies around the world!
          </p>
        </div>
      </div>
      <div class="col-7 d-flex flex-column">
        <button class="btn btn-light login-button">login or sign up</button>
        <h4 class="text-center"><u> Our Happy Customers</u></h4>
        <div class="row">
          <div class="col-12 d-flex p-2 align-items-center">
            <img
              class="profile-img"
              src="https://thiscatdoesnotexist.com"
              alt=""
            />
            <h5 class="mx-2">"I use on tracker everyday"</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-12 d-flex justify-content-end p-2 align-items-center">
            <img
              class="profile-img"
              src="https://thiscatdoesnotexist.com"
              alt=""
            />
            <h5 class="mx-2">"I use on tracker everyday"</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-12 d-flex p-2 align-items-center">
            <img
              class="profile-img"
              src="https://thiscatdoesnotexist.com"
              alt=""
            />
            <h5 class="mx-2">"I use on tracker everyday"</h5>
          </div>
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
.login-logo {
  height: 7rem;
}
.login-button {
  height: 5em;
  width: 15em;
}
.profile-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50em;
}
.review-div {
  width: 100%;
}
</style>