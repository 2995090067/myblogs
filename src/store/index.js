import Vue from 'vue'
import Vuex from 'vuex'


import mutations from '../store/mutations/moutations'
import getters from '../store/getters/getters'
import actions from '../store/actions/actions'
import modules from '../store/modules/modules'

Vue.use(Vuex)

const state={
  // token:''
  // userInfo

  // 用来存储登陆返回的token值
  token:localStorage.getItem("token"),
  //moutations里把JSON对象序列化了，这里反序列化
  userInfo: JSON.parse(sessionStorage.getItem("userInfo")),

}

const store = new Vuex.Store({
  state,
  mutations, //set
  getters, //get
  actions,
  modules
})
export default store
