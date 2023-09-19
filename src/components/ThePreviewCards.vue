<template>
  <div id="cardContainer">
    <TheCardTemplate
      v-for="travelObject in travelArray"
      :key="travelObject.id"
      :travelData="travelObject"
      @mouseover="handleMouseOver(travelObject.id)"
      @mouseout="handleMouseOut()"
      :style="{ filter: travelObject.isHovered ? 'blur(0)' : 'blur(5px)' }"
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
  methods: {
    handleMouseOver(cardId) {
      this.travelArray.forEach((travelObject) => {
        if (travelObject.id === cardId) {
          travelObject.isHovered = true
        } else {
          travelObject.isHovered = false
        }
      })
    },
    handleMouseOut() {
      // Set isHovered to false for all cards when mouseout
      this.travelArray.forEach((travelObject) => {
        travelObject.isHovered = false
      })
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

    // Initialize isHovered property to false for all cards
    this.travelArray.forEach((travelObject) => {
      travelObject.isHovered = false
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
