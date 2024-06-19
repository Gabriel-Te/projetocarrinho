import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
      
    },
    mutations: {
      loadProducts (state, products) {
        state.products = products
      }

      loadBag (state, products) {
        state.products = products
      }
    },
    actions: {

    },
    modules: {
    }
})
