import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routes'
import i18n from './i18n';
const app = createApp(App)

import Pagination from 'v-pagination-3';
app.component('pagination', Pagination);

app.use(createPinia()).use(router).use(i18n);

app.mount('#app')
