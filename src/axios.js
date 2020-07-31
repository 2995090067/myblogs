import axios from 'axios'
import router from "./router";

import Element from 'element-ui'

import store from "./store";

// //设置全局路径。。。

axios.defaults.baseURL = "http://localhost:8082"
// 拦截响应
// instance.interceptors.request.use(config=>{
axios.interceptors.request.use(config => {
  console.log("hello,欢迎进入。。。。request")
  console.log(config)
  //1.比如config中的一些不符合服务器要求
  //2.每次发送请求，都希望界面中显示一个请求图标
  //3.某些网络请求，比如登录（token），必须携带一些特殊信息
  return config
}, e => {
  console.log(e);
})
axios.interceptors.response.use(response => {
      //服务器响应过了，获取结果
      console.log("进入response，res");
      let res = response.data
      console.log("=================")
      console.log(res)
      console.log("=================")

      if (res.code === 200) {
        return response
      } else {

        Element.Message.error('错了哦，密码错误', {duration: 3 * 1000})

        return Promise.reject(response.data.msg)
      }
    },
    error => {
      console.log(error);
      if (error.response.data) {
        error.message = error.response.data.msg
      }
      //如果未经授权
      if (error.response.status === 401) {
        //移除登录状态
        store.commit("REMOVE_INFO")
        router.push("/login")
      }

      Element.Message.error(error.message, {duration: 3 * 1000})
      return Promise.reject(error)
    }
)
