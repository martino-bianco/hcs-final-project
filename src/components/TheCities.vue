<template>
  <div>
    <div v-if="travelArray.length > 0">
      <div v-for="travelObject in travelArray" :key="travelObject.id">
        <div v-if="travelObject.id === +$route.params.id">
          <!-- Convert id to number -->
          <img :src="travelObject.image" alt="Image" style="width: 100%; height: auto" />
          <h1>{{ travelObject.city }}</h1>
          <div id="subline">
            <div id="date-author">
              <span id="date">{{ travelObject.date }}</span>
              <div id="author">
                <img id="headShot" :src="travelObject.authorpic" alt="" />
                <p id="authorName">{{ travelObject.author }}</p>
              </div>
            </div>
          </div>
          <div>{{ travelObject.text }}</div>
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
  /* background-color: aqua; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 20px 0; */
}

#date-author {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#date {
  margin-right: 100px;
}

#author {
  display: flex;
  align-items: center;
}

#authorName {
  margin: 0;
  font-size: 16px;
  text-align: right;
}

#headShot {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  filter: grayscale(100%);
}
</style>
