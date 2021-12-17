const api = require('@/utils/api');

const state = () => ({
  reviewTypes: []
});


const getters = {
  getReviewTypes: (state) => (data) => {
    return state.reviewTypes;
  }
};


const actions = {
  async loadReviewTypes({ commit }) {
    console.log('load review types');
    try {
      const data = await api.loadReviewTypes();
      commit('setReviewTypes', data);
      console.log('Review types have been loaded in store');
    } catch (err) {
      console.log(err);
      console.log('Unable to load Review types');
    }
  }
};

const mutations = {
  setReviewTypes(state, array) {
    state.reviewTypes = array;
  },
};


export default {
  state,
  getters,
  mutations,
  actions
};
