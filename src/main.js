import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

// Import your translation files using import statements
import enLocale from './locales/en.json'
import itLocale from './locales/it.json'

const i18n = createI18n({
  locale: 'en', // Set the default locale
  fallbackLocale: 'en',
  messages: {
    en: enLocale, // Use the imported translation files
    it: itLocale
  }
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
