<template>
  <div id="menuContainer">
    <TheMenuBar />
  </div>
  <div id="backLink">
    <router-link to="/"><i class="fa-solid fa-arrow-left fa-2xl"></i></router-link>
  </div>

  <div id="container">
    <div id="leftColumn">
      <TheCities :travelArray="travelArray" />
    </div>
    <div id="rightColumn">
      <div id="mapContainer" class="scroll-container">
        <TheMap :travelData="travelArray" :center="center" :zoom="9" />
      </div>
    </div>
  </div>
</template>

<script>
import TheCities from '../components/TheCities.vue'
import TheMap from '../components/TheMap.vue'
import TheMenuBar from '../components/TheMenuBar.vue'

export default {
  data() {
    return {
      center: [12.390828, 43.110717],
      travelArray: [],
      selectedCity: {} // Define selectedCity with initial values or an empty object
    }
  },
  async mounted() {
    const queryId = this.$route.params.id

    console.log(queryId)

    const response = await fetch('http://localhost:5173/travels.json')
    const result = await response.json()
    console.log(result)

    const paramId = this.$route.params.id

    // filter by ID
    // travelArraz will still be an array but with only 1 object, the object that matches the route param ID
    this.travelArray = result.filter(function (value) {
      if (value.id == paramId) {
        return true
      } else {
        return false
      }
    })
    const longitude = this.travelArray[0].longitude
    const latitude = this.travelArray[0].latitude
    this.center = [longitude, latitude]
    console.log('------------')
    console.log(this.travelArray)
    console.log(this.center)
  },
  components: { TheMenuBar, TheCities, TheMap }
}
</script>

<style scoped>
.scroll-container {
  height: 600px; /* Set the desired height for the scrollable container */
  overflow-y: auto; /* Enable vertical scrolling */
}
</style>
