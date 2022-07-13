<template>
  <div class="position-relative pb-2 mx-lg-5 my-3 border leprofile border-dark shadow bg-light">
    <div class="position-relative row mb-1">
      <div class="col-12">
        <img :src="profile.coverImg" class="header-img" />
        <img :src="profile.picture" class="profile-pic rounded-circle" />
        <div v-if="profile.graduated" class="grad-badge d-flex align-items-center justify-content-center"><i
            class="text-dark mdi mdi-school mdi-24px"></i></div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-end">
          <i class="mdi mdi-arrow-vertical-lock mdi-48px mx-2" style="opacity: 0;"></i>
          <a v-if="profile.github" :href="profile.github" target="_blank">
            <i class="mdi mdi-github mdi-48px mx-2" :title="profile.name + '\'s Github'"></i>
          </a>
          <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank">
            <i class="mdi mdi-linkedin mdi-48px mx-2" :title="profile.name + '\'s Linkedin'"></i>
          </a>
          <a v-if="profile.resume" :href="profile.resume" target="_blank">
            <i class="mdi mdi-file-account-outline mdi-48px mx-2" :title="profile.name + '\'s Resume'"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="row mt-5 mb-3">
      <div class="col-12">
        <div class="px-3 mx-5">
          <h4 class="my-1">{{ profile.class }}</h4>
          <h3 class="my-1">{{ profile.name }}</h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h4 class="fst-italic px-3 mx-5 mb-4">{{ profile.bio }}</h4>
      </div>
    </div>

    <button v-if="account.id === profile.id" class="btn btn-outline-dark edit-button" data-bs-toggle="modal"
      data-bs-target="#edit-profile-modal">Edit</button>
  </div>

  <Modal id="edit-profile-modal">
    <template #modal-header>
      <h2>Edit Profile</h2>
    </template>

    <template #modal-body>
      <ProfileForm :profile="profile" />
    </template>
  </Modal>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { AppState } from '../AppState.js'
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

    setup() {
      const editing = ref(false);
      return {
        editing,
        account: computed(() => AppState.account)
      }
    }
  }
</script>

<style lang="scss" scoped>
$dark: #111927;

.leprofile {
  border-radius: 10px;
}

.header-img {
  width: 100%;
  height: calc(15vw + 50px);
  object-fit: cover;
}

.profile-pic {
  height: 12vw;
  width: 12vw;
  object-fit: cover;

  border: 0.2vw solid black;

  position: absolute;
  bottom: -6vw;
  left: calc(1vw + 25px);
}

.grad-badge {
  height: 3vw;
  width: 3vw;

  position: absolute;
  bottom: -5.5vw;
  left: 11vw;

  border: 0.18vw solid black;
  border-radius: 50%;
  background-color: goldenrod;
}

a {
  text-decoration: none;

  i {
    color: $dark
  }
}

.edit-button {
  position: absolute;
  bottom: 5px;
  right: 5px;
}

@media only screen and (max-width: 992px) {
  .profile-pic {
    height: 30vw;
    width: 30vw;
    bottom: -15vw;
    border: 0.5vw solid black;
  }

  .grad-badge {
    height: 9vw;
    width: 9vw;
    bottom: -14vw;
    left: 29vw;
    border: 0.4vw solid black;
  }
}
</style>