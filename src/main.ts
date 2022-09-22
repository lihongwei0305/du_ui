import {createApp} from 'vue'
import App from './App.vue'

import './assets/markdown.css';
import router from './router'
import duui from '../packages/index'

import Preview from './components/Preview.vue';

const APP = createApp(App)
APP.component('Preview', Preview)
APP.use(router)
APP.use(duui)
APP.mount('#app')
