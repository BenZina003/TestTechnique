import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'Review Creator',
    component: () => import(/* webpackChunkName: "home" */ '../views/Review.vue')
  }
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
