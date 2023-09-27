<template>
  <div id="cardContainer">
    <TheCardTemplate
      v-for="travelObject in travelArray"
      :key="travelObject.id"
      :travelData="travelObject"
      @mouseover="hoveredCardId = travelObject.id"
      @mouseout="hoveredCardId = null"
      :style="cardStyle(travelObject.id)"
    />
  </div>
</template>

<script>
import TheCardTemplate from './TheCardTemplate.vue'

export default {
  components: { TheCardTemplate },
  data() {
    return {
      travelArray: [],
      hoveredCardId: null
    }
  },
  methods: {
    cardStyle(cardId) {
      return {
        filter: this.hoveredCardId === cardId ? 'blur(0)' : 'blur(3px)'
      }
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
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
