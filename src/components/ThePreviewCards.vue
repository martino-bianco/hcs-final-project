<template>
  <div id="cardContainer">
    <!-- v-for -->
    <!-- <TheCardTemplate :travelData="travelArray[0]" />
    <TheCardTemplate :travelData="travelArray[1]" />
    <TheCardTemplate :travelData="travelArray[2]" />
    <TheCardTemplate :travelData="travelArray[3]" /> -->

    <TheCardTemplate
      v-for="travelObject in travelArray"
      :key="travelObject.id"
      :travelData="travelObject"
    />
  </div>
</template>

<script>
import TheCardTemplate from './TheCardTemplate.vue'

export default {
  components: { TheCardTemplate },
  data() {
    return {
      travelArray: []
    }
  },
  async mounted() {
    const response = await fetch('http://localhost:5173/travels.json')
    const result = await response.json()

    this.travelArray = result.sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)

      return dateB - dateA
    })
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
