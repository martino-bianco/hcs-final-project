<template>
  <TheMenuBar />
  <div id="container">
    <div id="leftColumn">
      <TheCities />
    </div>
    <div id="rightColumn">
      <TheMap />
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
  height: 800px; /* Adjust the height as needed */
  margin-top: 40px;
  margin-left: 40px; /* Adjust the margin to add space between columns */
}
</style>
