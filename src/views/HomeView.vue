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

    // Menu unblurrs timer:
    setTimeout(() => {
      this.menuBlur = false
    }, 1500)

    // Map unblurrs timer:
    setTimeout(() => {
      this.mapBlur = false
    }, 3000)
  }
}
</script>

<style scoped>
#container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

#leftColumn1 {
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin-top: 100px;
  border-radius: 10px;
  overflow-y: auto;
  max-height: calc(100vh - 100px);
}

/* Removing scroll bars i guess */
#leftColumn1::-webkit-scrollbar,
#mapContainer::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

#leftColumn1 {
  scrollbar-width: none;
}

#rightColumn {
  flex: 1;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

#mapContainer {
  width: 100%;
  max-height: calc(100vh - 100px);
  margin-top: 70px;
}

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
