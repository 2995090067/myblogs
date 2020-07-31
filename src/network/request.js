import axios from 'axios'
import router from "../router";
//这里使用element消息提示
import Element from 'element-ui'
// 与VueX交互
import store from '../store'

export function requset(config) {
  const instance = axios.create({
    baseURL: 'http://localhost:8082',

    responseType: 'json',
    // withCredentials:true,
    // authorization:'',

    // 延迟5秒
    timeout: 5000
  })

  instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

  // 拦截响应
  instance.interceptors.request.use(config => {

    // let token = this.$store.state.token;
    // if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.Authorization = `token ${store.state.token}`;
    // }

    console.log("hello,欢迎进入。。。。request")
    console.log(config)
    //1.比如config中的一些不符合服务器要求
    //2.每次发送请求，都希望界面中显示一个请求图标
    //3.某些网络请求，比如登录（token），必须携带一些特殊信息
    return config
  }, error => {
    console.log(error);
  })
  instance.interceptors.response.use(res => {
    //服务器响应过了，获取结果
    console.log("进入response，res");
    console.log(res);
    //这个才是服务返回的真正的东西
    if (res.data.code === 200) {
      console.log("成功200")
      return res

    } else {
      //饿了吗错误消息提示,以及超时时常
      Element.Message.error('密码错误', {duration: 3 * 1000})
      return Promise.reject(res.data.msg)
    }

  }, error => {
    console.log(error);
    // 服务器响应方式错误,这里的response是element-ui的
    if (error.response.data) {
      error.message = error.response.data.msg
    }
    //未经授权
    if (error.response.status === 401) {
      // 移除userinfo，移除登录状态
      store.commit('REMOVE_INFO')
      // 重新返回登录
      router.push('/logininfo')
    }
    Element.Message.error(error.message, {duration: 3 * 1000})
    return Promise.reject(error)
  })
  // 返回的就是Promise
  return instance(config)
  // 其他地方调用可以直接.then

}
