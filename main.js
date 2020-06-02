import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import lxg from './static/axios/dist/lxg.js'
Vue.prototype.lxg=lxg
import axios from './static/axios/dist/axios.min.js'
console.log(axios)

//配置session
axios.defaults.withCredentials=true;
//注册 
Vue.prototype.axios=axios

const app = new Vue({
    ...App
})
app.$mount()
