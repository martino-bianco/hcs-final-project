<template>
  <div id="menuContainer">
    <TheMenuBar />
  </div>

  <div id="container">
    <div id="leftColumn">
      <ThePreviewCards />
    </div>
    <div id="rightColumn">
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

<style scoped></style>
