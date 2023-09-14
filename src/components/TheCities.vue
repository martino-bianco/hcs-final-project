<template>
  <div id="cardContainer">
    <TheCityTemplate
      v-for="travelObject in travelArray"
      :key="travelObject.id"
      :travelData="travelObject"
    />
  </div>
</template>

<script>
import TheCityTemplate from './TheCityTemplate.vue'

export default {
  components: { TheCityTemplate },
  data() {
    return {
      travelArray: []
    }
  },
  async mounted() {
    const response = await fetch('http://localhost:5173/travels.json')
    const result = await response.json()
    console.log(result)
    this.travelArray = result
  }
}
</script>

<style scoped>
#cardContainer {
  display: flex;
  flex-wrap: wrap; /* Wrap items to the next row if they don't fit */
  justify-content: space-between; /* Space between items */
  /* You can adjust other CSS properties as needed for styling */
}
</style>
