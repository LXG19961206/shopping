import Vue from 'vue'
import App from './App'


import searchInput from './components/searchInput/searchInput.vue'
import productCard from './components/productCard/productCard'
import Mint from "./mint-ui.js"
import toast from "./pugins/toast.js"
Vue.use(Mint);
Vue.prototype.$toast = toast
Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
