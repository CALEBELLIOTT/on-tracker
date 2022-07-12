<template>
  <div class="p-2 mx-lg-5 my-lg-3 border border-dark rounded shadow d-flex selectable no-select bg-light clip-text"
    @click="goToProfile(profile._id)">
    <div class="position-relative me-2 me-lg-5">
      <img :src="profile.picture" class="profile-pic rounded-circle" />
      <div v-if="profile.graduated" class="grad-badge d-flex align-items-center justify-content-center"><i
          class="text-dark mdi mdi-school mdi-24px"></i></div>
    </div>
    <div class="d-flex flex-column justify-content-center">
      <h3 class="m-0 my-lg-1">{{ profile.class }}</h3>
      <h1 class="mt-1 mb-0 my-lg-1">{{ profile.name }}</h1>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { logger } from '../utils/Logger.js';
export default
  {
    props:
    {
      profile:
      {
        type: Object,
        required: true
      }
    },

    setup(props) {
      const router = useRouter();
      return {
        goToProfile(id) {
          logger.log("profile results go to profile prop", id)
          router.push({ name: 'Profile', params: { id } });
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.clip-text {
  overflow-x: hidden;
}

.profile-pic {
  height: 10vw;
  width: 10vw;
  object-fit: cover;

  border: 0.2vw solid black;

  position: relative;
}

.grad-badge {
  height: 2.5vw;
  width: 2.5vw;

  position: absolute;
  bottom: 0.5vw;
  left: 7.7vw;

  border: 0.18vw solid black;
  border-radius: 50%;
  background-color: goldenrod;
}

@media only screen and (max-width: 992px) {
  .profile-pic {
    height: 20vw;
    width: 20vw;
    border: 0.7vw solid black;
  }

  .grad-badge {
    height: 7.5vw;
    width: 7.5vw;
    bottom: -0.5vw;
    left: 13vw;
    border: 0.55vw solid black;
  }
}
</style>