import Vue from 'vue';
import App from './App.vue';

import '@/styles/index.scss';
import router from '@/router';

Vue.config.productionTip = false;

new Vue({
  el: '#root',
  router,
  render: (h) => h(App),
});
