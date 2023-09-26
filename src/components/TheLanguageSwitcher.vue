<template>
  <div id="language-switcher">
    <select @change="changeLanguage">
      <option value="en">English</option>
      <option value="it">Italiano</option>
    </select>
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguage(event) {
      const selectedLanguage = event.target.value

      this.$i18n.locale = selectedLanguage
    }
  }
}
</script>

<style>
#language-switcher {
  min-height: 20px;
}

select {
  font-size: 15px;
  width: 20%;
  padding: 1px;
  margin-right: 20px;
  cursor: pointer;
}
</style>
