import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddTask from '@/views/AddTask.vue';
import AboutView from '@/views/AboutView.vue';
import TaskList from '@/components/TaskList.vue';  // Asegúrate de que la ruta sea correcta
import CombinedView from '@/components/CombinedView.vue';  // Asegúrate de que la ruta sea correcta

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/addtask',
    name: 'addtask',
    component: AddTask
  },
  {
    path: '/tasklist',
    name: 'tasklist',
    component: TaskList
  },
  {
    path: '/combinedview',
    name: 'combinedview',
    component: CombinedView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;