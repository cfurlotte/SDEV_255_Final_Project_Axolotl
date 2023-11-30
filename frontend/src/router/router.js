import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '../components/IndexPage.vue'; // Adjust the import path as needed.
import AboutUs from '../components/AboutUs.vue'
import CoursesPage from '../components/CoursesPage.vue'
import LogIn from '../components/LogIn.vue'
import AdminPage from '../components/AdminPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: IndexPage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs
  },
  {
    path: '/courses',
    name: 'Courses',
    component: CoursesPage
  },
  {
    path: '/log-in',
    name: 'Log In',
    component: LogIn
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPage
  }
  // ... more routes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes, // This is where the 'routes' array should be used.
});

export default router;
