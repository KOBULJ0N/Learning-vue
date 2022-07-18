import { createRouter, createWebHistory } from 'vue-router';
import AddPage from '../views/AddPage.vue';
import EditPage from '../views/EditPage.vue';
import home from '../views/home.vue';

const routes = [
  {
    path: '/',
    redirect: '/home/1',
  },

  {
    path: '/test/add/page',
    name: 'addPage',
    component: AddPage,
  },
  {
    path: '/edit/page/:id',
    name: 'editPage',
    component: EditPage,
  },

  { path: '/home/:id', name: 'users', component: home, },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
