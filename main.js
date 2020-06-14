import Vue from 'vue'
import App from './App'
//引入 element ui 
import Element from 'element-ui'
Vue.use(Element)
console.log(Element);

Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
