<template>
  <div class="container">
    <div class="logo">
      <i class="fa-solid fa-trailer fa-xl"></i><i class="fa-solid fa-van-shuttle fa-xl"></i>

      <span class="blog-name"><router-link to="/">Il mio giro in italia</router-link></span>
    </div>

    <nav id="nav">
      <ul>
        <li><router-link to="/contact">Contact</router-link></li>
        <li>
          <button><i class="fa-solid fa-plus fa-lg"></i> New Post</button>
        </li>
        <li>
          <button @click="toggleLogin">
            <i class="fa-solid fa-right-to-bracket fa-lg"></i> {{ isLoggedIn ? 'Logout' : 'Login' }}
          </button>
        </li>
      </ul>
    </nav>
  </div>
  <hr />
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn
    }
  }
}
</script>

<style scoped>
/* * { */
/* font-size: 32px; */
/* transition: all 0.3s ease-in-out; */
/* } */

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: aqua; */
  padding: 10px;
}

.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
}

.blog-name {
  margin-left: 40px;
  font-size: 20px;
  font-size: 24px;
  /* margin-right: 20px; */
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  display: inline;
  margin-right: 60px;
  font-size: 20px;
  font-weight: bold;
}

button {
  /* background-color: transparent; */
  /* border: none; */
  cursor: pointer;
  font-size: 15px;
  min-width: 100px;
  min-height: 20px;
}

/* ul li:hover {
    color: blueviolet;
  } */
</style>
