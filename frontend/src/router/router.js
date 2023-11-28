import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '../components/IndexPage.vue'; // Adjust the import path as needed.

const routes = [
  {
    path: '/',
    name: 'Home',
    component: IndexPage
  },
  // ... more routes
];

const router = createRouter({
  history: createWebHistory(),
  routes, // This is where the 'routes' array should be used.
});

export default router;
