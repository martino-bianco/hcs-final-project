<template>
  <div>
    <TheMenuBar />
    <div id="container">
      <div id="leftColumn" class="card-container">
        <div v-if="travelArray.length > 0">
          <!-- <img :src="getImageUrl(travelArray[0].image)" alt="Travel Image" class="card-image" /> -->
          <div class="card-details">
            <h1>{{ travelArray[0].city }}</h1>
            <h2>{{ travelArray[0].date }}</h2>
            <div id="text">{{ travelArray[0].text }}</div>
          </div>
        </div>
      </div>
      <div id="rightColumn">
        <TheMap />
      </div>
    </div>
  </div>
</template>

<script>
import TheMenuBar from '../components/TheMenuBar.vue'
import TheMap from '../components/TheMap.vue'

export default {
  components: { TheMenuBar, TheMap },
  data() {
    return {
      travelArray: []
    }
  },
  async mounted() {
    const response = await fetch('http://localhost:5173/travels.json')
    const result = await response.json()
    console.log(result)
    this.travelArray = result
  },
  methods: {
    getImageUrl(imageName) {
      return require(`@/public/${imageName}`)
    }
  }
}
</script>

<style scoped>
#container {
  display: flex;
}

#leftColumn {
  flex: 1;
}

#rightColumn {
  flex: 1;
  padding: 16px;
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 20px;
  margin: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.card-image {
  margin-bottom: 10px;
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.card-details {
  text-align: center;
}

h1 {
  margin: 0;
  font-size: 24px;
}

h2 {
  margin: 5px 0;
  font-size: 18px;
}

#text {
  margin: 5px 0;
  font-size: 16px;
}
</style>
