
const  moutations = {
  //类似java set
  SET_TOKEN : (state,token)=> {
    state.token=token
    //放入浏览器的localStorage
    localStorage.setItem("token",token)

  },

  SET_USERINFO :(state,userInfo)=>{
    state.userInfo=userInfo
    // localStorage.setItem("userInfo",userInfo)
  // 一次会话的一次结果,这里不写X，以后失去userInfo可以调用接口去token里找userInfo
    //sessionStorage里不能存JSON对象，所以序列化变成JSON字符串
    sessionStorage.setItem("userInfo",JSON.stringify(userInfo))
  },

  REMOVE_INFO:(state)=>{
    // 移除登陆状态
    state.token=''
    state.userInfo={}
    localStorage.setItem("token",'')
    sessionStorage.setItem("userInfo",JSON.stringify(''))

  }

}
export default moutations