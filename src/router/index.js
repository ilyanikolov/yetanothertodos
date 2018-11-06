import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import Auth from '@/views/Auth';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    // {
    //   path: '*',
    //   redirect: '/auth',
    // },
    {
      path: '/tasks',
      name: 'home',
      component: Home,
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
    },
  ],
});

export default router;
