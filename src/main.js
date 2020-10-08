import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios' //测试一下

// import qs from 'qs'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//用作博客编辑器
import  mavonEditor from 'mavon-editor'

import 'mavon-editor/dist/css/index.css'


// 导入全局拦截的axiosJS

import "./axios"

//導入路由前端登錄權限判斷
import "./promission"

// Vue.prototype.$qs=qs

Vue.prototype.$axios = axios  //测试一下

Vue.config.productionTip = false

Vue.use(ElementUI)

// 使用插件编辑器
Vue.use(mavonEditor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
