import { createApp } from 'vue'
import Vuex from './vuex'
import store from './store'
import App from './App.vue'

const app = createApp(App)

app.use(Vuex, store)

app.mount('#app')
