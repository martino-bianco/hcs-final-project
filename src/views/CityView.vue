<template>
  <div>
    <TheMenuBar />
    <!-- <TheCityTemplate /> -->
    <TheCities />
  </div>
</template>

<script>
import TheCities from '../components/TheCities.vue'
import TheCityTemplate from '../components/TheCityTemplate.vue'
import TheMenuBar from '../components/TheMenuBar.vue'

export default { components: { TheMenuBar, TheCityTemplate, TheCities } }
</script>

<style scoped></style>
