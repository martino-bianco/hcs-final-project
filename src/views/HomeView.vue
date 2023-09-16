<template>
  <div id="menuContainer">
    <TheMenuBar />
  </div>

  <div id="container">
    <div id="leftColumn">
      <ThePreviewCards />
    </div>
    <div id="rightColumn">
      <!-- Fixed map container -->
      <div id="mapContainer">
        <!-- <TheMap :travelArray="travelArray" /> -->
        <TheMap />
      </div>
    </div>
  </div>
</template>

<script>
import TheMap from '../components/TheMap.vue'
import TheMenuBar from '../components/TheMenuBar.vue'
import ThePreviewCards from '../components/ThePreviewCards.vue'

export default {
  components: { TheMenuBar, ThePreviewCards, TheMap },
  data() {
    return {
      travelArray: [] // Initialize travelArray with your JSON data here
    }
  },
  async mounted() {
    // Fetch your JSON data and set it to travelArray
    const response = await fetch('http://localhost:5173/travels.json')
    const result = await response.json()
    this.travelArray = result
  }
}
</script>

<style scoped>
#container {
  display: flex;
}

#leftColumn {
  flex: 1;
  padding: 16px;
}

#rightColumn {
  flex: 1;
  padding: 16px;
  margin-top: 40px;
  margin-right: 40px;
}

/* The magical duo: floating map and menu */
#mapContainer {
  position: sticky;
  top: 160px;
  width: 100%;
  height: -50px;
  z-index: 1;
}

#menuContainer {
  position: sticky;
  top: 0;
  background-color: white; /* Add your desired background color */
  z-index: 2; /* Ensure the menu appears above the map */
}
</style>
