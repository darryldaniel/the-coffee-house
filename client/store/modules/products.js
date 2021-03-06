import { getAllProducts, addProduct } from '../../api/products';

const state = {
  all: [],
  addProductResult: {
    success: true,
    message: ''
  }
};

const getters = {
  addProductResultMessage(state) {
    return state.addProductResult.message;
  },
  addProductResult(state) {
    return state.addProductResult.success;
  }
}

const actions = {
  getAllProducts: async ({ commit }) => {
    const { data } = await getAllProducts();
    commit('setProducts', data.products);
  },
  addProduct: async ({ commit }, payload) => {
    const { data } = await addProduct(payload);
    commit('setAddProductResult', data.addProduct);
  }
};

const mutations = {
  setProducts(state, products) {
    state.all = products;
  },
  setAddProductResult(state, addProductResult) {
    state.addProductResult = addProductResult;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}