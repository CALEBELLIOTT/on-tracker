<template>
  <div id="mapContainer" class="basemap"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "BaseMap",
  data() {

    return {
      accessToken: "pk.eyJ1Ijoic2tld2VyNDkwIiwiYSI6ImNsNHhhZnp3bTBjNWIzYnBwMGVnd2Frc28ifQ.HLbBCBYU_1Piw91ExBGBjA",
    };
  },
  mounted() {
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
    function addMarker([projectLocations]){
      projectLocations.forEach(pL => {
        new mapboxgl.Marker()
          .setLngLat([pL.longitude, pL.latitude])
          .addTo(map);
      });
    }

    const marker = new mapboxgl.Marker()
      .setLngLat([-116.215019, 43.618881])
      .addTo(map);

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
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
}
.marker {
  background-image: url("mapbox-icon.png");
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
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
