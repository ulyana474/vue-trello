import { createApp, watch } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'font-awesome/css/font-awesome.min.css'
import { createPinia } from 'pinia'


const pinia = createPinia()

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia)
  .mount('#app')

