<template>
  <navbar />
  <div class="container mt-4">
    <div class="row gutters">
      <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
          <div class="card-body">
            <div class="account-settings">
              <div class="user-profile">
                <div class="user-avatar">
                  <img :src="account.picture" :alt="account.name">
                </div>
                <h5 class="user-name">{{account.name}}</h5>
                <h6 class="user-email">{{account.email}}</h6>
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
        <div class="card h-100">
          <div class="card-body">
            <div class="row gutters">
              <div class="col-md-12">
                <h6 class="mb-2 text-primary">Account Details</h6>
              </div>
              <div class="col-md-6 mt-3">
                <div class="form-group">
                  <label for="fullName">Name</label>
                  <input type="text" class="form-control" placeholder="Enter name...">
                </div>
              </div>
              <div class="col-md-6 mt-3">
                <div class="form-group">
                  <label for="eMail">Email</label>
                  <input type="email" class="form-control" placeholder="Enter email...">
                </div>
              </div>
            </div>
            <div class="row gutters">
              <div class="col-md-12 mt-3">
                <label for="picture">Picture</label>
                <input type="text" class="form-control" placeholder="Picture Url...">
              </div>
              <div class="col-md-12 mt-3">
                <label for="description">Description</label>
                <textarea class="form-control" placeholder="Describe yourself..."></textarea>
              </div>
            </div>
            <div class="row gutters ">
              <div class="col-md-12 d-flex justify-content-end">
                <div class="text-right mt-3">
                  <button type="button" id="submit" name="submit" class="btn btn-secondary me-3">Cancel</button>
                  <button type="button" id="submit" name="submit" class="btn btn-primary">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-4">
    <div class="row gutters">
      <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
          <div class="card-body">
            <div class="row gutters">
              <div class="col-md-12">
                <h6 class="mb-2 text-primary">Business Details</h6>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="fullName">Name</label>
                  <input type="text" class="form-control" placeholder="Enter name">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="eMail">Email</label>
                  <input type="email" class="form-control" placeholder="Enter email">
                </div>
              </div>
            </div>
            <div class="row gutters">
              <div class="col-md-12">
                <h6 class="mt-3 mb-2 text-primary">Address</h6>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="Street">Street</label>
                  <input type="name" class="form-control" id="Street" placeholder="Enter Street">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="ciTy">City</label>
                  <input type="name" class="form-control" id="ciTy" placeholder="Enter City">
                </div>
              </div>
              <div class="col-md-6 mt-3">
                <div class="form-group">
                  <label for="sTate">State</label>
                  <input type="text" class="form-control" id="sTate" placeholder="Enter State">
                </div>
              </div>
              <div class="col-md-6 mt-3">
                <div class="form-group">
                  <label for="zIp">Zip Code</label>
                  <input type="text" class="form-control" id="zIp" placeholder="Zip Code">
                </div>
              </div>
            </div>
            <div class="row gutters ">
              <div class="col-md-12 d-flex justify-content-start">
                <div class="text-right mt-3">
                  <button type="button" id="submit" name="submit" class="btn btn-secondary me-3">Cancel</button>
                  <button type="button" id="submit" name="submit" class="btn btn-primary">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
        <div class="card h-100">
          <div class="card-body">
            <div class="account-settings">
              <div class="user-profile">
                <div class="user-avatar">
                  <img :src="account.picture" :alt="account.name">
                </div>
                <h5 class="user-name">{{account.name}}</h5>
                <h6 class="user-email">{{account.email}}</h6>
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
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
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
</style>
