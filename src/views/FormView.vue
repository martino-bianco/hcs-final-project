<template>
  <div id="menuContainer">
    <TheMenuBar />
  </div>
  <div id="formContainer">
    <TheForm />
  </div>
</template>

<script>
import TheForm from '../components/TheForm.vue'
import TheMenuBar from '../components/TheMenuBar.vue'

export default {
  components: { TheForm, TheMenuBar }
}
</script>

<style scoped>
#formContainer {
  margin-top: 130px;
}
</style>
