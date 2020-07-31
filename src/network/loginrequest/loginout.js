import {requset} from "../request";

export  function  loginOut(){

return requset({
  url:'/logout',
  headers:{
    'Authorization':localStorage.getItem('token')
  }

})



}