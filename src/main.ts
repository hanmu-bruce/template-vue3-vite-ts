import { createApp } from 'vue';
import 'virtual:windi.css';
import './style.css';
import 'normalize.css';
import ElementPlus from 'element-plus';

import 'element-plus/dist/index.css';
import App from './App.vue';
import store from './store';
import router from './router';
const app = createApp(App);
app.use(ElementPlus).use(store).use(router).mount('#app');
console.log('aaaaa');
const a = '';
