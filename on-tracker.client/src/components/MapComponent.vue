<template>
  <div id="mapContainer" class="basemap"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import { onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { AppState } from "../AppState";
import { router } from "../router";
import { businessesService } from "../services/BusinessesService";
import { projectsService } from "../services/ProjectsService";
import pin from "../assets/img/PinLogo.png"
export default {
  name: "BaseMap",
  data() {

    return {
      pin,
      accessToken: "pk.eyJ1Ijoic2tld2VyNDkwIiwiYSI6ImNsNHhhZnp3bTBjNWIzYnBwMGVnd2Frc28ifQ.HLbBCBYU_1Piw91ExBGBjA",
      navigateToProjectPage(id) {
        console.log(id)
      }
    };
  },
  setup() {


  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;
    let fitBounds = { maxLongitude: 0, maxLatitude: 0, minLongitude: 0, minLatitude: 0 }


    let map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [-116.215019, 43.618881],
      // bounds: bounds,
      // fitBoundsOptions: { padding: { top: 10, bottom: 25, left: 15, right: 5 } },
      zoom: 13,
      // maxBounds: [
      //   [-117.215019, 43.618881],
      //   [-116.215019, 42.618881],
      // ],
    });
    watchEffect(() => {
      console.log(AppState.activeBusinessProjects);
      console.log(AppState.activeBusiness)
      addBusinessMarker()
      addMarkers()
    })




    async function addMarkers() {
      console.log(AppState.activeBusinessProjects);
      if (AppState.account.businessAccount) {
        AppState.activeBusinessProjects.forEach(p => {
          const el = document.createElement('div')
          el.className = 'marker'
          el.style.backgroundImage = 'https://thiscatdoesnotexist.com/'
          el.style.width = `30px`
          el.style.height = '40px'
          el.style.backgroundSize = '100%'
          let coords = [p.location.longitude, p.location.latitude]
          if (p.location.longitude > fitBounds.maxLongitude || fitBounds.maxLongitude == 0) {
            fitBounds.maxLongitude = p.location.longitude
          }
          if (p.location.longitude < fitBounds.minLongitude || fitBounds.minLongitude == 0) {
            fitBounds.minLongitude = p.location.longitude
          }
          if (p.location.latitude > fitBounds.maxLatitude || fitBounds.maxLatitude == 0) {
            fitBounds.maxLatitude = p.location.latitude
          }
          if (p.location.latitude < fitBounds.minLatitude || fitBounds.minLatitude == 0) {
            fitBounds.minLatitude = p.location.latitude
          }
          console.log(coords);
          let marker = new mapboxgl.Marker(el)
            .setLngLat(coords)
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(
                  `<div class="text-start"><h4 class='text-primary text-start py-0'>${p.projectName}</h4><p class='text-muted text-start py-0'>${p.description}</p><form action="#/project/${p.id}">
                  <button type="submit" class="btn btn-outline-primary py-0"/>See Project Details</button></form></div>`
                ))
            .addTo(map);
          const bbox = [
            [fitBounds.minLongitude, fitBounds.minLatitude], // southwestern corner of the bounds
            [fitBounds.maxLongitude, fitBounds.maxLatitude], // northeastern corner of the bounds
          ]
          map.fitBounds(bbox, {
            padding: 100
          })

        });
        let elements = document.getElementsByClassName('marker')
        console.log(elements);
      }
      else {
        AppState.teamMemberAccount.forEach(p => {
          const el = document.createElement('div')
          el.className = 'marker'
          el.style.backgroundImage = 'https://thiscatdoesnotexist.com/'
          el.style.width = `30px`
          el.style.height = '40px'
          el.style.backgroundSize = '100%'
          let coords = [p.project.location.longitude, p.project.location.latitude]
          if (p.project.location.longitude > fitBounds.maxLongitude || fitBounds.maxLongitude == 0) {
            fitBounds.maxLongitude = p.project.location.longitude
          }
          if (p.project.location.longitude < fitBounds.minLongitude || fitBounds.minLongitude == 0) {
            fitBounds.minLongitude = p.project.location.longitude
          }
          if (p.project.location.latitude > fitBounds.maxLatitude || fitBounds.maxLatitude == 0) {
            fitBounds.maxLatitude = p.project.location.latitude
          }
          if (p.project.location.latitude < fitBounds.minLatitude || fitBounds.minLatitude == 0) {
            fitBounds.minLatitude = p.project.location.latitude
          }
          console.log(coords);
          let marker = new mapboxgl.Marker(el)
            .setLngLat(coords)
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(
                  `<div class="text-start"><h4 class='text-primary text-start py-0'>${p.projectName}</h4><p class='text-muted text-start py-0'>${p.description}</p><form action="#/project/${p.id}">
                  <button type="submit" class="btn btn-outline-primary py-0"/>See Project Details</button></form></div>`
                ))
            .addTo(map);
          const bbox = [
            [fitBounds.minLongitude, fitBounds.minLatitude], // southwestern corner of the bounds
            [fitBounds.maxLongitude, fitBounds.maxLatitude], // northeastern corner of the bounds
          ]
          map.fitBounds(bbox, {
            padding: 100
          })

        });
        let elements = document.getElementsByClassName('marker')
        console.log(elements);
      }
    }
    async function addBusinessMarker() {
      let business = AppState.activeBusiness
      const el = document.createElement('div')
      el.className = 'businessMarker'
      el.style.backgroundImage = `url('${business.logo}')`
      el.style.borderRadius = '50%'
      el.style.width = `60px`
      el.style.height = '60px'
      el.style.backgroundSize = '100%'
      let coords = [business.address?.longitude, business.address?.latitude]

      console.log(coords);
      let marker = new mapboxgl.Marker(el)
        .setLngLat(coords)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<h2 class='text-primary text-start'>${business.name}</h2>`
            ))
        .addTo(map);
      fitBounds.maxLatitude = business.address.latitude
      fitBounds.minLatitude = business.address.latitude
      fitBounds.minLongitude = business.address.longitude
      fitBounds.maxLongitude = business.address.longitude
      console.log(coords)

      let elements = document.getElementsByClassName('businessMarker')
      console.log(elements);
    }



    // map.addControl(
    //   new MapboxGeocoder({
    //     accessToken: mapboxgl.accessToken,
    //     placeholder: 'OnTrack Search in Boise',
    //     mapboxgl: mapboxgl,
    //     marker: false
    //   })
    // );
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-right");
  }
}

</script>
<style scoped>
.basemap {
  width: 100%;
  height: 50vh;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
</style>
