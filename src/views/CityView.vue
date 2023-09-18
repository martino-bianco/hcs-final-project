<template>
  <div id="menuContainer">
    <TheMenuBar />
  </div>
  <div id="backLink">
    <router-link to="/"><i class="fa-solid fa-arrow-left fa-2xl"></i></router-link>
  </div>

  <div id="container">
    <div id="leftColumn">
      <TheCities />
    </div>
    <div id="rightColumn">
      <div id="mapContainer">
        <!-- Toggle: TheMap oder MapBari -->
        <!-- <TheMap /> -->
        <MapBari :selectedCity="selectedCity" />
      </div>
    </div>
  </div>
</template>

<script>
import MapBari from '../components/MapBari.vue'
import TheCities from '../components/TheCities.vue'
import TheMap from '../components/TheMap.vue'
import TheMenuBar from '../components/TheMenuBar.vue'

export default {
  data() {
    return {
      selectedCity: {} // Define selectedCity with initial values or an empty object
    }
  },
  components: { TheMenuBar, TheCities, TheMap, MapBari }
}
</script>

<style scoped></style>
