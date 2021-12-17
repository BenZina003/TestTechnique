import Vue from 'vue';
import Vuex from 'vuex';

import reviewTypes from './reviewTypes';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    reviewTypes
  }
});
