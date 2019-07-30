import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Şampuan',
        price: '13',
        currency: 'TRY',
        image: 'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fsampuan.jpeg?v=1561027551321'
      },
      {
        id: 2,
        name: 'Deodorant',
        price: '26',
        currency: 'TRY',
        image: 'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fdeodorant.jpeg?v=1561027551696',
      },
      {
        id: 3,
        name: 'Diş Fırçası',
        price: '19.95',
        currency: 'TRY',
        image: 'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fdis-fircasi.jpeg?v=1561027551798',
      },
      {
        id: 4,
        name: 'Pahalı Şampuan',
        price: '135',
        currency: 'TRY',
        image: 'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fsampuan.jpeg?v=1561027551321',
      },
      {
        id: 5,
        name: 'Lüks Deodorant',
        price: '260',
        currency: 'TRY',
        image: 'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fdeodorant.jpeg?v=1561027551696',
      },
      {
        id: 6,
        name: 'Elit Diş Fırçası',
        price: '190.95',
        currency: 'TRY',
        image: 'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fdis-fircasi.jpeg?v=1561027551798'
      },
    ],
    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
  },

  getters: {
    getAllProducts: state => state.products,
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});
