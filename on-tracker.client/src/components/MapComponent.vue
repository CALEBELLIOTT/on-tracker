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

export default {
  name: "BaseMap",
  data() {

    return {
      accessToken: "pk.eyJ1Ijoic2tld2VyNDkwIiwiYSI6ImNsNHhhZnp3bTBjNWIzYnBwMGVnd2Frc28ifQ.HLbBCBYU_1Piw91ExBGBjA",
    };
  },
  setup() {


  },
  mounted() {
    watchEffect(() => {
      console.log(AppState.activeBusinessProjects);
      addMarkers()
    })
    mapboxgl.accessToken = this.accessToken;

    let map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-116.215019, 43.618881],
      zoom: 13,
      // maxBounds: [
      //   [-117.215019, 43.618881],
      //   [-116.215019, 42.618881],
      // ],
    });

    //first attempt at a marker loader, need array of locations
    async function addMarkers() {
      let fitBounds = { maxLongitude: 0, maxLatitude: 0, minLongitude: 0, minLatitude:0}
      // await projectsService.getBusinessProjects()
      console.log(AppState.activeBusinessProjects);
      AppState.activeBusinessProjects.forEach(p => {
        const el = document.createElement('div')
        el.className = 'marker'
        // let router = useRouter();
        // el.addEventListener('click', () => {
        //   router.push({ name: 'ProjectDetailsPage', params: { id: p.id } })
        // })
        el.style.backgroundImage = 'https://thiscatdoesnotexist.com/'
        el.style.width = `30px`
        el.style.height = '40px'
        el.style.backgroundSize = '100%'
        let coords = [p.location.longitude, p.location.latitude]
        if (p.location.longitude > fitBounds.maxLongitude || fitBounds.maxLongitude == 0){
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
                `<h4 class='text-primary text-start'>${p.projectName}</h4><p class='text-muted text-start'>${p.description}</p>`
              ))
          .addTo(map);
        map.fitBounds([
          [fitBounds.minLongitude - .1, fitBounds.minLatitude - .1], // southwestern corner of the bounds
          [fitBounds.maxLongitude + .1, fitBounds.maxLatitude + .1] // northeastern corner of the bounds
        ])
      });
      let elements = document.getElementsByClassName('marker')
      console.log(elements);
    }




    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        placeholder: 'OnTrack Search in Boise',
        mapboxgl: mapboxgl,
        marker: false
      })
    );
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

  <!-- <template>
  <div id="map"></div>
</template>


<script>
import mapboxgl from "mapbox-gl"
export default {
  setup(){
    // TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2tld2VyNDkwIiwiYSI6ImNsNHhhZnp3bTBjNWIzYnBwMGVnd2Frc28ifQ.HLbBCBYU_1Piw91ExBGBjA';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [43.610, 116.2023],
      zoom: 13
    });

    // Add the control to the map.
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      })
    );
    return {
      
    }
  }
}
</script>


<style lang="scss" scoped>

</style> -->
