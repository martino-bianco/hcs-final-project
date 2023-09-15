<template>
  <div>
    <TheMenuBar />
    <div v-if="travelArray.length > 0">
      <div v-for="travelObject in travelArray" :key="travelObject.id">
        <div v-if="travelObject.id === +$route.params.id">
          <!-- Convert id to number -->
          <img :src="travelObject.image" alt="Image" style="width: 100%; height: auto" />
          <h1>{{ travelObject.city }}</h1>
          <h2>{{ travelObject.date }}</h2>
          <div>{{ travelObject.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TheCityTemplate from './TheCityTemplate.vue'

export default {
  // components: { TheCityTemplate },
  data() {
    return {
      travelArray: []
    }
  },

  async mounted() {
    const queryId = this.$route.params.id

    console.log(queryId)

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
