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
        <!-- Aufgabe: -->
        <!-- <TheMap :travelArray="travelArray" /> -->
        <MapBari :travelArray="selectedCity" />
      </div>
    </div>
  </div>
</template>

<script>
import MapBari from '../components/MapBari.vue'
import TheCities from '../components/TheCities.vue'

import TheMenuBar from '../components/TheMenuBar.vue'

export default { components: { TheMenuBar, TheCities, MapBari } }
</script>

<style scoped></style>
