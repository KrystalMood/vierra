import './assets/main.css'
import '@material-design-icons/font/filled.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App).use(router).mount('#app')
