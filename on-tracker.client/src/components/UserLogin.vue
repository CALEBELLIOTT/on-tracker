<template>
  <div class="container-fluid ">
    <div class="row">
      <div class="col-12 p-2 d-flex justify-content-between border-primary shadow border-bottom">
        <img class="img-fluid login-logo p-2" src="../assets/img/Ontracker logo OG.png" alt="" />
        <button class="btn btn-outline-primary p-0 px-4 h-50 align-self-center" @click="launchLogin">login</button>
      </div>
      <div class="col-12 hero-img d-flex flex-column justify-content-center text-muted">
        <div class="text-center">
          <h1>Plan With Confidence</h1>
          <h2>Execute With Efficiency</h2>
          <div class="w-15">
            <p>The best way to handle your day to day business, in an easy to use interface.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center mt-3">
        <h3 class="text-primary">Organize Your Business's Logistics</h3>
      </div>
      <div class="col-md-4 text-center mt-md-3 mt-5 p-4">
        <h1>
          <i class="mdi mdi-map-marker"></i>
        </h1>
        <p class="mt-5">Map out jobSites, all while keeping employees in the loop</p>
      </div>
      <div class="col-md-4 text-center mt-2 p-4">
        <h1>
          <i class="mdi mdi-account-group"></i>
        </h1>
        <p class="mt-5">Collaborate with employees and track their tasks as they are completed</p>
      </div>
      <div class="col-md-4 text-center mt-2 p-4">
        <h1>
          <i class="mdi mdi-check-bold"></i>
        </h1>
        <p class="mt-5">Keep both employees and clients up to date on the progress of jobs</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <h3 class="text-primary">Don't take our word for it...</h3>
      </div>
      <div class="col-md-4">
        <div>
          <img class="long-img img-fluid rounded p-4" src="../assets/img/kevin-grieve-QCdRhVj7N8w-unsplash.jpg" alt="">
        </div>
      </div>
      <div class="col-md-8 d-flex flex-column mt-5 justify-content-around">
        <div class="user-quote my-2">
          <h4>Jack Jameson <span class="position"> Project Manager (Spring Lawn Care)</span></h4>
          <p class="text-muted mt-4 mx-4">I use OnTracker way too much. It's insane.</p>
        </div>
        <div class="user-quote my-2">
          <h4>Jamie Jackson<span class="position"> Vice President (Jackson Construction)</span></h4>
          <p class="text-muted mt-4 mx-4">Using OnTracker has revolutionized the way that my company works. I couldn't
            say enough good things about it.</p>
        </div>
        <div class="user-quote my-2">
          <h4>Jason Jeremiah<span class="position"> CEO (TrackOnner)</span></h4>
          <p class="text-muted mt-4 mx-4">I literally have withdrawls from OnTracker.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-center mt-3">
        <h3 class="text-primary">Join Our Family of Supported Businesses</h3>
      </div>
      <div class="col-12">
        <div class="businesses-container p-2 m-3 bg-primary rounded">
          <!-- NOTE mobile views -->
          <img v-if="businesses.length <= 3" v-for="b in businesses" :key="b.id" :src="b.logo" alt="" class="d-md-none">
          <div v-if="businesses.length >= 4" class="d-flex align-items-center">
            <img v-for="b in businesses" :key="b.id" :src="b.logo" alt="" class="d-md-none">
            <p class="text-center justify-self-center">and {{ calculateBusinessesRemaining(3) }} more!</p>
          </div>
          <!-- NOTE desktop views -->
          <img v-if="businesses.length <= 15" v-for="b in businesses" :key="b.id" :src="b.logo" alt=""
            class="d-none d-md-inline-block">
          <div v-if="businesses.length >= 16" class="d-flex align-items-center">
            <img v-for="b in businesses" :key="b.id" :src="b.logo" alt="" class="d-none d-md-inline-block">
            <p class="text-center justify-self-center">and {{ calculateBusinessesRemaining(3) }} more!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="mx-3 bg-light rounded p-2 my-5">
          <h3 class="text-center">Why Plan with Us</h3>
          <p class="text-muted">- Completely Free, Always <br>- 24/7 Customer Support <br>- Access to the Network of
            Businesses Who
            Utilize OnTracker <br>- Guaranteed ROI <br>- Proven Increase In Productivity</p>
        </div>
      </div>
      <div class="col-md-6 d-flex flex-column align-items-center">
        <h3 class="text-primary my-md-5 ">Join Now!</h3>
        <button @click="launchLogin" class="btn btn-outline-primary mb-md-none mb-5">Login/ Signup</button>
      </div>
    </div>
  </div>


</template>


<script>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState";
import { AuthService } from "../services/AuthService";
import { businessesService } from "../services/BusinessesService";
export default {
  setup() {
    onMounted(async () => {
      await businessesService.getAllBusinesses()
    })
    return {
      businesses: computed(() => AppState.allBusinesses),
      async launchLogin() {
        AuthService.loginWithPopup();
      },
      calculateBusinessesRemaining(numShown) {
        return AppState.allBusinesses.length - numShown
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.hero-img {
  min-height: 50vh;
  background-image: url(../assets/img/ave-calvar-M6XsJwIi6jg-unsplash.jpg);
  background-size: cover;
  background-position: left;
}

.hero-img h1 {
  transform: translateY(-1.7rem);
}



@media(min-width: 769px) {

  .hero-img h1,
  h2 {
    transform: translateX(-14rem);
  }

  .hero-img h1 {
    transform: translateX(-18rem);
  }

  .hero-img p {
    transform: translateX(-14rem)
  }
}


.long-img {
  height: 100vh;
  object-fit: cover;
  object-position: left;
}

// TODO make these colors variables once you figure out how
.user-quote p::before {
  content: open-quote;
  color: #f27648;
  font-size: 2rem;
}

.user-quote p::after {
  content: close-quote;
  color: #f27648;
  font-size: 2rem;
}

.user-quote .position {
  font-size: .75rem;
  margin-left: 1rem;
  color: #f27648;
}

.businesses-container img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50em;
}

.businesses-container p {}

.login-logo {
  height: 4rem;
}

.login-button {
  height: 4em;
  width: 12em;
}

.profile-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50em;
}

.business-img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 50em;
}

.review-div {
  width: 100%;
}

.businesses-section {
  height: 7em;
}

.business-slideshow {
  height: 100px;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.business-slide {
  width: 13208px;
  position: absolute;
  overflow-x: hidden;
  display: flex;
  top: 0;
  left: 0;
  animation: moveSlideshow 250s linear infinite;
}

.business-slide img {
  display: inline-block;
  vertical-align: middle;
  width: 180px;
  height: 90px;
  margin: 0 2rem;
  object-fit: contain;
  object-position: top;
}
</style>