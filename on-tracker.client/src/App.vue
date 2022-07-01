<template>
  <main class="dark-theme">
    <router-view />
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.dark-theme {
  background-color: rgba(37, 36, 36, 1);
  display: flex;
  min-height: 100%;
  flex-direction: column;
  flex-grow: 1;
}
.text-dark-theme {
  color: rgba(37, 36, 36, 1);
}
</style>
