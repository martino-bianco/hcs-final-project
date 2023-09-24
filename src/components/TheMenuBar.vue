<template>
  <div class="container">
    <div class="logo">
      <i @click="playClickSound" class="fa-solid fa-trailer fa-xl"></i
      ><i @click="playClickSound" class="fa-solid fa-van-shuttle fa-xl"></i>
      <router-link to="/">
        <span class="blog-name">{{ $t('blogName') }}</span>
      </router-link>
    </div>

    <!-- Language Switcher Thingie -->
    <nav id="nav">
      <ul>
        <li>
          <router-link to="/contact">{{ $t('contact') }}</router-link>
        </li>
        <li>
          <button style="width: 120px">
            <i class="fa-solid fa-plus fa-lg"></i> {{ $t('newPost') }}
          </button>
        </li>
        <li>
          <button @click="toggleLogin">
            <i class="fa-solid fa-right-to-bracket fa-lg"></i>
            {{ isLoggedIn ? 'Logout' : 'Login' }}
          </button>
        </li>
        <li class="language-switcher">
          <select @change="changeLanguage" style="width: 100px">
            <option value="en">English</option>
            <option value="it">Italiano</option>
          </select>
        </li>
      </ul>
    </nav>
  </div>
  <hr />
</template>

<script>
import carBeep from '@/assets/CarBeep.mp3'

export default {
  data() {
    return {
      isLoggedIn: false,
      clickSound: new Audio(carBeep)
    }
  },
  methods: {
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn
    },
    playClickSound() {
      this.clickSound.play()
    },
    changeLanguage(event) {
      const selectedLanguage = event.target.value
      // Change the locale to the selected language
      this.$i18n.locale = selectedLanguage
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}

.language-switcher select {
  font-size: 16px;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  display: inline;
  margin-right: 20px; /* Adjust the margin as needed */
  font-size: 20px;
  font-weight: bold;
}

button {
  cursor: pointer;
  font-size: 15px;
  min-width: 120px; /* Set a fixed width for the button */
  min-height: 20px;
}

/* Adjust the position of the Contact link */
/* li:nth-child(1) {
  margin-right: 60px; 
} */
</style>
