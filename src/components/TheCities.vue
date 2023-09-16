<template>
  <div id="cityContainer">
    <div v-if="travelArray.length > 0">
      <div v-for="travelObject in travelArray" :key="travelObject.id">
        <div v-if="travelObject.id === +$route.params.id">
          <h1>{{ travelObject.title }}</h1>
          <div id="subline">
            <div id="date-author">
              <h2 id="date">{{ travelObject.date }}</h2>
              <div id="author">
                <img id="headShot" :src="travelObject.authorpic" alt="" />
                <h2 id="authorName">{{ travelObject.author }}</h2>
              </div>
            </div>
          </div>
          <!-- Convert id to number -->
          <img id="cityImage" :src="travelObject.image" alt="Image" />

          <div id="cityText">{{ travelObject.text }}</div>
          <div id="whereDetails">{{ travelObject.city }}, {{ travelObject.country }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  width: 600px;
}
</style>
