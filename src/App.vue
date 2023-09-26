<template>
  <router-view />
  <div id="cardContainer">
    <TheCardTemplate
      v-for="travelItem in travelsData"
      :key="travelItem.id"
      :travelData="travelItem"
    />
  </div>
</template>

<script>
import travelsData from '../public/travels.json'

export default {
  data() {
    return {
      travelsData: []
    }
  },
  mounted() {
    this.travelsData = travelsData
  }
}
</script>

<style scoped></style>
