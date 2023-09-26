<template>
  <div>
    <div id="wrapper">
      <div id="explanation">
        This is the final project for <br />
        <div id="HCSContainer" class="wiggle-link">
          <a href="https://hamburgcodingschool.com/" target="_blank"> Hamburg Coding School </a>
        </div>
        by
      </div>

      <div id="myName">Martin Dörr</div>
      <div id="theLogos">
        <a href="https://www.linkedin.com/in/martin-dörr-2971b3119" target="_blank">
          <i class="fa-brands fa-linkedin fa-2xl icon-spin-y"></i>
        </a>
        <a href="https://github.com/martino-bianco" target="_blank">
          <i class="fa-brands fa-github fa-2xl icon-spin-y"></i>
        </a>
        <a href="mailto:martin.g.doerr@gmail.com">
          <i class="fa-solid fa-envelope fa-2xl icon-spin-y"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#wrapper {
  text-align: center;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 60px auto 20px;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  font-size: 26px;
  font-weight: bold;
}

a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  margin: 20px;
}

#HCSContainer {
  font-size: 50px;
}

#myName {
  font-size: 32px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 40px;
}

#theLogos {
  margin-top: 20px;
  margin: 40px;
  font-size: larger;
}

#HCSContainer {
  margin: 30px;
}
#explanation {
  font-size: 28px;
}
</style>
