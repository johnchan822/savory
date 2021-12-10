import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    products: [],
    product: {},
    categories: [],
    carts: [],
    cartsItemCount: 0,
    isLoading: false,
    isSwal: false,
  },
  actions: {
    // 取得所有商品資料
    getProducts(context) {
      context.commit('LOADING', true);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      axios.get(url).then((res) => {
        context.commit('PRODUCTS', res.data.products);
        context.commit('CATEGORIES', res.data.products);
        context.commit('SWAL', true);
        context.commit('LOADING', false);
      });
    },
    // 取得單一商品資料
    getProduct(context, id) {
      context.commit('LOADING', true);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      axios.get(url).then((res) => {
        context.commit('PRODUCT', res.data.product);
        context.commit('SWAL', true);
        context.commit('LOADING', false);
      });
    },
    // 取得購物車資料
    getCart(context) {
      context.commit('LOADING', true);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      axios.get(url)
        .then((res) => {
          context.commit('CARTS', res.data.data);
          context.commit('CARTSCOUNT', res.data.data.carts.length);
          context.commit('SWAL', true);
          context.commit('LOADING', false);
        });
    },
    // 增加購物車資料
    addToCart(context, { id, qty }) {
      context.commit('LOADING', true);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const item = {
        product_id: id,
        qty,
      };
      axios.post(url, { data: item }).then((res) => {
        if (res.data.success === true) {
          context.dispatch('getCart');
          context.commit('LOADING', false);
          context.commit('SWAL', true);
        }
      });
    },
    // 刪除單筆購物車
    delCartItem(context, cart) {
      context.commit('LOADING', true);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${cart.id}`;
      axios.delete(url)
        .then(() => {
          context.dispatch('getCart');
          context.commit('LOADING', false);
          context.commit('SWAL', true);
        });
    },
    // 刪除全部資料
    dellAllCart(context) {
      context.commit('LOADING', true);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      axios.delete(url)
        .then(() => {
          context.dispatch('getCart');
          context.commit('LOADING', false);
          context.commit('SWAL', true);
        });
    },

    // 更新單筆購物車資料
    upateCartItem(context, { product, qtys }) {
      context.commit('LOADING', true);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${product}`;
      const item = {
        product_id: product,
        qty: qtys,
      };
      axios.put(url, { data: item })
        .then(() => {
          context.dispatch('getCart');
          context.commit('LOADING', false);
          context.commit('SWAL', true);
        });
    },
  },
  mutations: {
    SWAL(state, payload) {
      state.isSwal = payload;
    },
    LOADING(state, payload) {
      state.isLoading = payload;
    },
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    PRODUCT(state, payload) {
      state.product = payload;
      console.log(payload);
    },
    CATEGORIES(state, payload) {
      const categories = new Set();
      payload.forEach((item) => {
        categories.add(item.category);
        state.categories = [...categories];
        state.categories.unshift('全部');
      });
    },
    CARTS(state, payload) {
      state.carts = payload;
    },
    CARTSCOUNT(state, payload) {
      state.cartsItemCount = payload;
    },

  },
});

export default store;
