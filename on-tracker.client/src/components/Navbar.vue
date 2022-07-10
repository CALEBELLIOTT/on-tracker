<template>
  <nav class="d-flex">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <div class="col-md-6 m-2">
        <img src="../assets/img/Ontracker logo OG.png" alt="logo">
      </div>
    </router-link>


    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button> -->



    <div class="col-md-5 d-flex justify-content-between">

      <CreateProjectModal />



      <router-link :to="{ name: 'About' }" class="d-flex align-items-center text-white  selectable ">
        <h4>
          About
        </h4>
      </router-link>



      <router-link :to="{ name: 'EmployeesPage' }" class="d-flex align-items-center text-white  selectable ">
        <h4>
          Employees
        </h4>
      </router-link>


      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>

  </nav>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';

export default {
  setup() {
    return {
      user: computed(() => AppState.user)
    };
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {

  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

img {
  width: 80%
}

nav {
  background-color: rgb(93, 92, 92);
}
</style>
