<template>
  <div class="container-fluid">
    <div class="row">
      <div class="
          col-12
          p-2
          d-flex
          justify-content-between
          border-primary
          shadow
          border-bottom
          nav-color
        ">
        <router-link :to="{ name: 'Home' }">
          <img class="img-fluid logo" src="../assets/img/Ontracker logo OG.png" alt="" />
        </router-link>

        <div class="d-flex align-items-center">
          <!-- <CreateProjectModal /> -->
          <router-link :to="{ name: 'CreateProject' }">
            <h6 v-if="account.businessAccount" class="text-primary mx-4 nav nav-custom">New Project</h6>
          </router-link>
          <router-link :to="{ name: 'EmployeesPage' }">
            <h6 class="text-primary mx-4 nav nav-custom">Employees</h6>
          </router-link>

          <Login class="ms-5"></Login>
        </div>
      </div>
    </div>
  </div>

  <!-- <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <div class="col-md-6 m-2">
        <img src="../assets/img/Ontracker logo OG.png" class="logo img-fluid" alt="logo" />
      </div>
    </router-link> -->
  <!-- <CreateProjectModal /> -->
  <!-- <router-link :to="{ name: 'About' }" class="d-flex align-items-center text-white selectable">
        <h4>About</h4>
      </router-link> -->
  <!-- 
      <router-link :to="{ name: 'EmployeesPage' }" class="d-flex align-items-center text-white selectable">
        <h4>Employees</h4>
      </router-link> -->
  <!-- LOGIN COMPONENT HERE -->
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';

export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account)
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  height: 4rem;
  object-fit: contain;
}

.nav-custom {
  border-bottom: 2px solid rgba(255, 255, 255, 0);
  transition: 500ms;
}

.nav-custom:hover {
  transition: 500ms;
  border-bottom: 2px solid;
}

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
  width: 80%;
}

nav {
  background-color: rgb(93, 92, 92);
}

.nav-color {
  background-color: rgb(255, 251, 251);
}
</style>
