import { createApp } from 'vue'
import Vuex from './vuex'
import store from './store'
import App from './App.vue'

const app = createApp()

app.use(Vuex, store)

app.mount(App, '#app')
