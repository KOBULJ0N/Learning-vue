import { createRouter, createWebHistory } from 'vue-router';
import AddVue from '../components/Add.vue';
import EditPage from '../views/EditPage.vue'
import home from '../views/home.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/addPage',
    name: 'addPage',
    component: AddVue,
  },
  {
    path: '/editPage/:id',
    name: 'editPage',
    component: EditPage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
