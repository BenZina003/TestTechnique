import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueI18n from 'vue-i18n';
import messages from './assets/messages.json';

//TO BE REPLACED WITH REAL SERVICE
const { worker } = require('./mocks/browser');
worker.start();

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'fr',
  fallbackLocale: 'fr',
  messages
});


Vue.config.productionTip = false;


new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app');
