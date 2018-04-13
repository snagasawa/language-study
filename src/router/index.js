import Vue from 'vue';
import Router from 'vue-router';
import TextReader from '@/components/TextReader';
import VoiceRecognition from '@/components/VoiceRecognition';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/text_reader',
      name: 'TextReader',
      component: TextReader,
    },
    {
      path: '/voice_recognition',
      name: 'VoiceRecognition',
      component: VoiceRecognition,
    },
  ],
});
