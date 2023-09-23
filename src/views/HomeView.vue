<template>
  <div id="menuContainer" :class="{ blurry: menuBlur }">
    <TheMenuBar />
  </div>

  <div id="container">
    <div id="leftColumn1">
      <ThePreviewCards />
    </div>
    <div id="rightColumn">
      <div id="mapContainer" :class="{ blurry: mapBlur }">
        <TheMap :travelData="travelArray" />
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
      travelArray: [],
      menuBlur: true,
      mapBlur: true
    }
  },
  async mounted() {
    const response = await fetch('http://localhost:5173/travels.json')
    const result = await response.json()
    this.travelArray = result

    // MenuBlur
    setTimeout(() => {
      this.menuBlur = false
    }, 1500)

    // MapBlur:
    setTimeout(() => {
      this.mapBlur = false
    }, 3000)
  }
}
</script>

<style scoped>
#menuContainer,
#mapContainer {
  filter: blur(10px);
  transition: filter 1s ease;
}

#menuContainer:not(.blurry),
#mapContainer:not(.blurry) {
  filter: blur(0);
}
</style>
