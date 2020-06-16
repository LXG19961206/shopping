import Vue from 'vue'
import App from './App'


import searchInput from './components/searchInput/searchInput.vue'
import productCard from './components/productCard/productCard'
import Mint from "./mint-ui.js"
Vue.use(Mint);

Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
