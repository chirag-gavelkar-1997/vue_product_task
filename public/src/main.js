import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';

import router  from './routers'




createApp(App).use(router).use(ElementPlus).mount('#app')
