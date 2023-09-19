<template>
  <div id="menuContainer">
    <TheMenuBar />
  </div>
  <div id="contactContainer">
    <TheContact />
  </div>
</template>
<script>
import TheMenuBar from '../components/TheMenuBar.vue'
import TheContact from '../components/TheContact.vue'

export default { components: { TheMenuBar, TheContact } }
</script>
<style scoped>
#contactContainer {
  margin: 130px;
}
</style>
