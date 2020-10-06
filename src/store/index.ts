import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      productData: [{}]
    },
    mutations: {
      getProduct(state,func?:(item:any)=>{}){
        state.productData = func 
        ? (require('../fakeData/product') as Array<object>).filter(elem =>func(elem)) 
        : (require('../fakeData/product') as Array<object>)
      }
    },
    actions: {
    }
})
export default store