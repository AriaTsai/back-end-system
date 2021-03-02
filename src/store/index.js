import Vue from 'vue'
import Vuex from 'vuex'
import { apiProductListAll } from '@/js/api.js'
import orderModules from './order'
Vue.use(Vuex)


const productModules = {
  namespaced: true,
  state: {
    productList: [],
  },
  mutations: {
    setProductList(state, data) {
      state.productList = data
    }
  },
  actions: {
    init_ProductList({ commit }) {
      apiProductListAll()
        .then(res => {
          commit('setProductList', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    order: orderModules,
    product: productModules
  }
})
