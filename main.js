import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'


console.log(axios)

//配置session
axios.defaults.withCredentials=true;
//注册 
Vue.prototype.axios=axios

const app = new Vue({
    ...App
})
app.$mount()
