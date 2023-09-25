<template>
  <div id="app">
    <div id="menuContainer">
      <TheMenuBar />
    </div>
    <div id="backLink">
      <router-link to="/"><i class="fa-solid fa-arrow-left fa-2xl"></i></router-link>
    </div>
    <div id="container">
      <div id="leftColumn" class="scroll-container">
        <TheCities :travelArray="travelArray" />
      </div>
      <div id="rightColumn">
        <div id="mapContainer">
          <TheMap :travelData="travelArray" :center="center" :zoom="9" :initialZoom="4.5" />
        </div>
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
      center: [12.948895586334427, 41.966501605840534],
      travelArray: [],
      selectedCity: {}
    }
  },
  async mounted() {
    const response = await fetch('http://localhost:5173/travels.json')
    const result = await response.json()

    const paramId = this.$route.params.id

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
  },
  components: { TheMenuBar, TheCities, TheMap }
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

#container {
  display: flex;
  flex: 1;
  overflow: hidden;
}

#leftColumn {
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  overflow-y: auto;
  margin-top: 120px;
}
.scroll-container {
  max-height: 100%;
  scrollbar-width: none;
}

.scroll-container::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

#rightColumn {
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#mapContainer {
  width: 100%;
  max-height: 100%;
  overflow: hidden;
}
</style>
