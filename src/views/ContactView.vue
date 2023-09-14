<template>
  <div>
    <TheMenuBar />
    <TheContact />
  </div>
</template>
<script>
import TheMenuBar from '../components/TheMenuBar.vue'
import TheContact from '../components/TheContact.vue'

export default { components: { TheMenuBar, TheContact } }
</script>
