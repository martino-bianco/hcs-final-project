<template>
  <div class="container">
    <div class="logo">
      <i @click="playClickSound" class="fa-solid fa-trailer fa-xl"></i>
      <i @click="playClickSound" class="fa-solid fa-van-shuttle fa-xl"></i>
      <router-link to="/">
        <span class="blog-name">{{ $t('blogName') }}</span>
      </router-link>
    </div>

    <nav id="nav">
      <ul>
        <li class="contact">
          <router-link to="/contact">{{ $t('contact') }}</router-link>
        </li>
        <li>
          <button style="width: 120px">
            <router-link to="/form">
              <i class="fa-solid fa-plus fa-lg"></i> {{ $t('newPost') }}</router-link
            >
          </button>
        </li>
        <li>
          <button @click="toggleLogin">
            <i class="fa-solid fa-right-to-bracket fa-lg"></i>
            {{ isLoggedIn ? 'Logout' : 'Login' }}
          </button>
        </li>
        <li id="language-switcher">
          <TheLanguageSwitcher />
        </li>
      </ul>
    </nav>
  </div>
  <hr />
</template>

<script>
import carBeep from '@/assets/CarBeep.mp3'

import TheLanguageSwitcher from './TheLanguageSwitcher.vue'

export default {
  components: {
    TheLanguageSwitcher
  },
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

.contact {
  margin-right: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  display: inline;
  margin-right: 20px;
  font-size: 20px;
  font-weight: bold;
}

button {
  cursor: pointer;
  font-size: 15px;
  min-width: 120px;
  min-height: 20px;
}

#language-switcher {
  display: inline;
  margin-right: 20px;
}
</style>
