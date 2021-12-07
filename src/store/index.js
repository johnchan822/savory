import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },

  actions: {
    getProducts(context) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      axios.get(url).then((res) => {
        // console.log(res);
        context.commit('PRODUCTS', res.data.products);
      });
    },
  },
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
    },
  },

});
