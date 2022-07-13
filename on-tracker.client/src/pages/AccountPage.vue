<template>
  <navbar />
  <div class="container mt-4">
    <div class="row gutters">
      <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div class="card h-100 elevation-3">
          <div class="card-body">
            <div class="account-settings">
              <div class="user-profile">
                <div class="user-avatar">
                  <img :src="account.picture" :alt="account.name" />
                </div>
                <h5 class="user-name">{{ account.name }}</h5>
                <h6 class="user-email">{{ account.email }}</h6>
              </div>
              <div class="about">
                <h5>About</h5>
                <p>{{ account.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
        <form @submit.prevent="editAccountInfo">
          <div class="card h-100 elevation-3">
            <div class="card-body">
              <div class="row gutters">
                <div class="col-md-12">
                  <h6 class="mb-2 text-primary">Account Details</h6>
                </div>

                <div class="col-md-6 mt-3">
                  <div class="form-group">
                    <label for="fullName">Name</label>
                    <input
                      type="text"
                      class="form-control border-primary"
                      placeholder="Enter name..."
                      v-model="accountData.name"
                    />
                  </div>
                </div>
                <div class="col-md-6 mt-3">
                  <div class="form-group">
                    <label for="eMail">Email</label>
                    <input
                      type="email"
                      class="form-control border-primary"
                      placeholder="Enter email..."
                      v-model="accountData.email"
                    />
                  </div>
                </div>
              </div>
              <div class="row gutters">
                <div class="col-md-12 mt-3">
                  <label for="picture">Picture</label>
                  <input
                    type="text"
                    class="form-control border-primary"
                    placeholder="Picture Url..."
                    v-model="accountData.picture"
                  />
                </div>
                <div class="col-md-12 mt-3">
                  <label for="description">Description</label>
                  <textarea
                    class="form-control border-primary"
                    placeholder="Describe yourself..."
                  ></textarea>
                </div>
              </div>
              <div class="row gutters">
                <div class="col-md-12 d-flex justify-content-end">
                  <div class="text-right mt-3">
                    <button type="submit" class="btn button-1">Update</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="container mt-4 pb-5">
    <div class="row gutters">
      <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
        <div class="card h-100 elevation-3">
          <div class="card-body">
            <form @submit.prevent="editBusiness">
              <div class="row gutters">
                <div class="col-md-12">
                  <h6 class="mb-2 text-primary">Business Details</h6>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="fullName">Name</label>
                    <input
                      type="text"
                      class="form-control border-primary"
                      placeholder="Enter name"
                      v-model="businessData.name"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="eMail">Cover Image</label>
                    <input
                      type="text"
                      class="form-control border-primary"
                      v-model="businessData.coverImg"
                      placeholder="Cover Image URL"
                    />
                  </div>
                </div>
              </div>
              <div class="row gutters">
                <div class="col-md-12 pt-3"></div>
                <label for="">Logo URL</label>
                <div class="col-md-12">
                  <input
                    type="text"
                    class="form-control border-primary"
                    v-model="businessData.logo"
                    placeholder="Logo URL"
                  />
                </div>
                <!-- <div class="col-md-6">
                <div class="form-group">
                  <label for="Street">Street</label>
                  <input
                    type="name"
                    class="form-control"
                    id="Street"
                    placeholder="Enter Street"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="ciTy">City</label>
                  <input
                    type="name"
                    class="form-control"
                    id="ciTy"
                    placeholder="Enter City"
                  />
                </div>
              </div>
              <div class="col-md-6 mt-3">
                <div class="form-group">
                  <label for="sTate">State</label>
                  <input
                    type="text"
                    class="form-control"
                    id="sTate"
                    placeholder="Enter State"
                  />
                </div>
              </div>
              <div class="col-md-6 mt-3">
                <div class="form-group">
                  <label for="zIp">Zip Code</label>
                  <input
                    type="text"
                    class="form-control"
                    id="zIp"
                    placeholder="Zip Code"
                  />
                </div>
              </div> -->
              </div>
              <div class="row gutters">
                <div class="col-md-12 d-flex justify-content-start">
                  <div class="text-right mt-3">
                    <button type="submit" class="btn button-1">Update</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div class="card h-100 elevation-3">
          <div class="card-body">
            <div class="account-settings">
              <div class="user-profile">
                <div class="user-avatar">
                  <img :src="account.picture" :alt="account.name" />
                </div>
                <h5 class="user-name">{{ account.name }}</h5>
                <h6 class="user-email">{{ account.email }}</h6>
              </div>
              <div class="about">
                <h5>About</h5>
                <p>{{ account.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from 'vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { accountService } from '../services/AccountService'
import { businessesService } from '../services/BusinessesService'
export default {
  name: 'Account',
  setup() {
    const accountData = ref({});
    const businessData = ref({})
    watchEffect(() => {
      accountData.value = AppState.account
      businessData.value = AppState.activeBusiness
    })
    return {
      accountData,
      businessData,
      async editAccountInfo() {
        try {
          await accountService.editAccountInfo(accountData.value, AppState.account.id)
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message)
        }
      },
      async editBusiness() {
        try {
          await businessesService.editBusiness(businessData.value, AppState.activeBusiness.id)
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message)
        }
      },
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding-top: 40px;
  color: #2e323c;
  background: #f5f6fa;
  position: relative;
  height: 100%;
}

.account-settings .user-profile {
  margin: 0 0 1rem 0;
  padding-bottom: 1rem;
  text-align: center;
}

.account-settings .user-profile .user-avatar {
  margin: 0 0 1rem 0;
}

.account-settings .user-profile .user-avatar img {
  width: 90px;
  height: 90px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
}

.account-settings .user-profile h5.user-name {
  margin: 0 0 0.5rem 0;
}

.account-settings .user-profile h6.user-email {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 400;
  color: #9fa8b9;
}

.account-settings .about {
  margin: 2rem 0 0 0;
  text-align: center;
}

.account-settings .about h5 {
  margin: 0 0 15px 0;
  color: #007ae1;
}

.account-settings .about p {
  font-size: 0.825rem;
}

.card {
  background: #ffffff;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  border: 0;
  margin-bottom: 1rem;
}

.button-1 {
  background-color: orange;
  box-shadow: rgb(157, 85, 22) 2px 3px 0px;
  border-radius: 8px;
  transition: transform 200ms, box-shadow 200ms;
}

.button-1:active {
  transform: translateY(4px) translateX(2px);
  box-shadow: rgb(109, 7, 7) 0px 0px 0px;
}
</style>
