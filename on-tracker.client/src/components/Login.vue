<template>
  <span class="d-flex align-items-center">
    <button
      class="btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0"
      @click="login"
      v-if="!user.isAuthenticated"
    >
      Login
    </button>

    <div class="dropdown my-3 my-lg-0" v-else>
      <div
        class="dropdown-toggle selectable"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        id="authDropdown"
      >
        <div v-if="account.picture">
          <img
            :src="account.picture"
            alt="account photo"
            height="40"
            class="rounded me-4"
          />
          <!-- <span class="mx-3 text-success lighten-30">{{ account.name }}</span> -->
        </div>
      </div>
      <div
        class="dropdown-menu p-0 list-group w-100 me-4"
        aria-labelledby="authDropdown"
      >
        <router-link :to="{ name: 'Account' }">
          <div class="list-group-item list-group-item-action hoverable">
            Manage Account
          </div>
        </router-link>
        <div
          class="list-group-item list-group-item-action hoverable text-danger"
          @click="logout"
        >
          <i class="mdi mdi-logout"></i>
          logout
        </div>
        <div class="text-center">
          <span class="name"
            ><b>{{ account.name }}</b></span
          >
        </div>
      </div>
    </div>
  </span>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { AuthService } from "../services/AuthService";
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup();
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin });
      },
    };
  },
};
</script>


<style lang="scss" scoped>
.dropdown-menu {
  user-select: none;
  display: flex;
  flex-grow: 1;
  transform: scale(0);
  transition: all 0.15s linear;
  padding: 4;
}

.dropdown-menu.show {
  transform: scale(1);
}

.hoverable {
  cursor: pointer;
}

.name {
  font-size: 10pt;
}
</style>
