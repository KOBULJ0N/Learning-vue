import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routes'

const app = createApp(App)

import Pagination from 'v-pagination-3';
app.component('pagination', Pagination);

app.use(createPinia()).use(router)

app.mount('#app')
