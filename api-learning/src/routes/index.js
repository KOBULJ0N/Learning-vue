import { createRouter, createWebHistory } from 'vue-router';
import AddPage from '../views/AddPage.vue';
import EditPage from '../views/EditPage.vue';
import home from '../views/home.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/test/add/page',
    name: 'addPage',
    component: AddPage,
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
