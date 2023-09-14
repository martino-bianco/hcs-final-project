<template>
  <router-view />
  <TheMenuBar />
  <div id="container">
    <div id="leftColumn">
      <ThePreviewCards />
    </div>
    <div id="rightColumn">
      <TheMap />
    </div>
  </div>
</template>

<script>
import TheMap from '../components/TheMap.vue'
import TheMenuBar from '../components/TheMenuBar.vue'
import ThePreviewCards from '../components/ThePreviewCards.vue'

export default {
  components: { TheMenuBar, ThePreviewCards, TheMap }
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
  height: 800px;
  margin-top: 40px;
  margin-right: 40px;
}
</style>
