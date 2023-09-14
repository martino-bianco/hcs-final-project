<template>
  <div>
    <router-link to="/"><i class="fa-solid fa-arrow-left fa-2xl"></i></router-link>
  </div>

  <div id="TheCity">
    <div class="image-container">
      <img
        id="topImage"
        :src="travelData.image"
        alt="Card Image"
        style="width: 100%; height: auto"
      />
    </div>
    <div class="card-details">
      <h1>{{ travelData.city }}, {{ travelData.country }}</h1>
      <h2>{{ travelData.date }}</h2>

      <div id="text">{{ travelData.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    travelData: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
#TheCity {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  /* background-color: red; */
  /* POLAROID EFFECT: */
  padding: 20px;
  margin: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
.image-container {
  margin-bottom: 10px;
}

h1 {
  margin: 0;
  font-size: 24px;
}

h2 {
  margin: 5px 0;
  font-size: 18px;
}
</style>
