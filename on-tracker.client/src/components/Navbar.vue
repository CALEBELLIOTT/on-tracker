<template>
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
  <nav
    class="
      navbar navbar-expand-sm
      nav-color
      navbar-light
      border-bottom border-primary
      elevation-4
      mb-2
      pt-0
      pb-0
    "
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <router-link :to="{ name: 'Home' }">
          <img
            class="img-fluid logo"
            src="../assets/img/Ontracker logo OG.png"
            alt=""
          />
        </router-link>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item d-flex align-items-center">
            <a class="nav-link" href="#">
              <router-link
                :to="{ name: 'CreateProject' }"
                v-if="account.businessAccount"
              >
                <h6 class="text-primary mx-4 nav nav-custom">New Project</h6>
              </router-link></a
            >
          </li>
          <li class="nav-item d-flex align-items-center">
            <a class="nav-link" href="#">
              <router-link :to="{ name: 'EmployeesPage' }">
                <h6 class="text-primary mx-4 nav nav-custom">Employees</h6>
              </router-link>
            </a>
          </li>
          <li class="nav-item d-flex align-items-center">
            <a class="nav-link" href="#">
              <Login class="ms-5"></Login>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
