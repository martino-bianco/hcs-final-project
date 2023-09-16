<template>
  <TheMenuBar />
  <div id="backLink">
    <router-link to="/"><i class="fa-solid fa-arrow-left fa-2xl"></i></router-link>
  </div>

  <div id="container">
    <div id="leftColumn">
      <TheCities />
    </div>
    <div id="rightColumn">
      <!-- Fixed map container -->
      <div class="map-container">
        <!-- Aufgabe: -->
        <!-- <TheMap :travelArray="travelArray" /> -->
        <TheMap />
      </div>
    </div>
  </div>
</template>

<script>
import TheCities from '../components/TheCities.vue'
import TheMap from '../components/TheMap.vue'
import TheMenuBar from '../components/TheMenuBar.vue'

export default { components: { TheMenuBar, TheCities, TheMap } }
</script>

<style scoped>
#backLink {
  margin: 30px;
  margin-bottom: -30px;
}

#container {
  display: flex;
}

#leftColumn {
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 55px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  min-height: 0; /* Add this to reset the min-height */
}

#rightColumn {
  flex: 1;
  padding: 16px;
  height: 1000px; /* Why does this solve my problem with the left? */
  margin-top: 40px;
  margin-left: 40px;
}
.map-container {
  position: sticky;
  top: 40px;
  width: 100%;
  height: 600px;
  z-index: 1;
}
</style>
