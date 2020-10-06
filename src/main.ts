import Vue from 'vue'
import App from './App.vue'
import toast from './pugins/toast'
import $store from './store/index'


Vue.config.productionTip = false;
Vue.prototype.$toast = toast.show
Vue.prototype.$confirm = toast.confirm
Vue.prototype.$store = $store

new App().$mount()
