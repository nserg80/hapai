import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import { outsideClick, focus } from '@/plugins/directives';
import '@/assets/styles/main.scss'


const app = createApp(App)
app.directive('outside-click', outsideClick)
app.directive('focus', focus)
app.use(createPinia()).use(router).mount('#app')

