<template>
  <div id="cityContainer">
    <div v-if="travelObject">
      <h1>{{ travelObject.title }}</h1>
      <div id="subline">
        <div id="date-author">
          <h2 id="date">{{ travelObject.date }}</h2>
          <router-link to="/contact">
            <div id="author">
              <img id="headShot" :src="travelObject.authorpic" alt="" />
              <h2 id="authorName">{{ travelObject.author }}</h2>
            </div>
          </router-link>
        </div>
      </div>

      <div id="cityImageContainer">
        <img id="cityImage" :src="travelObject.image" alt="Image" class="centered-image" />
      </div>

      <div id="cityText">{{ travelObject.text }}</div>
      <div id="whereDetails">{{ travelObject.city }}, {{ travelObject.country }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    travelArray: Array
  },
  computed: {
    travelObject() {
      const paramId = +this.$route.params.id
      return this.travelArray.find((travelObject) => travelObject.id === paramId)
    }
  }
}
</script>

<style scoped>
#subline {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

#date-author {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#author {
  display: flex;
  align-items: center;
}

#authorName {
  margin: 0;
  margin-left: 20px;
  text-align: right;
}

#headShot {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  filter: grayscale(100%);
}

#cityImage {
  max-width: 500px;
  height: auto;
  border-radius: 10px;
}

#cityText {
  margin-top: 40px;
  font-size: 24px;
}

#whereDetails {
  font-size: 32px;
  margin-top: 20px;
}

.centered-image {
  display: block;
  margin: 0 auto;
}
</style>
