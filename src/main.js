import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios' //测试一下

// import qs from 'qs'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 导入全局拦截的axiosJS

import "./axios"

// Vue.prototype.$qs=qs

Vue.prototype.$axios = axios  //测试一下

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
