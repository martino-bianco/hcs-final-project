<template>
  <!-- <div id="cardContainer">
    <TheCityTemplate
      v-for="travelObject in travelArray"
      :key="travelObject.id"
      :travelData="travelObject"
    />
  </div> -->
  <!-- <div>Hello!</div> -->
  <!-- <div>{{ travelObject.name }}</div> -->
  <!-- <div v-for="travelObject in travelArray" :key="travelObject.id">
    {{ travelObject.city }}
  </div> -->
  <div v-if="travelArray.length > 0">
    <div>{{ travelArray[0].city }}</div>
  </div>
  <!-- <div>{{ travelArray[0].city }}</div> -->
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
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
