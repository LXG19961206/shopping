import Vue from 'vue'
import App from './App.vue'
import toast from './pugins/toast'


Vue.config.productionTip = false;
Vue.prototype.$toast = toast.show
Vue.prototype.$confirm = toast.confirm


new App().$mount()
