import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import '@styles/reset.css'
import '@styles/border.css'
import '@styles/iconfont.css'
import '@styles/varibles.scss'
import '@styles/mixins.styl'

const app = createApp(App)

app
  .use(router)
  .use(store)
  .mount('#app')
