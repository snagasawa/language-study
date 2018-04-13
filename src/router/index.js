import Vue from 'vue';
import Router from 'vue-router';
import TextReader from '@/components/TextReader';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/text_reader',
      name: 'TextReader',
      component: TextReader,
    },
  ],
});
