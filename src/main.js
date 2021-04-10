import { createApp } from 'vue'
import App from './App.vue'
import VueDisqus from 'vue-disqus'

import './assets/css/style.css'
import './assets/css/index.css'

import router from './router';

createApp(App).use(router).mount('#app');
