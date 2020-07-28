import {requset} from "../request";


export function lvLogin(loginDto) {

  //后端是requestbody接收，所以转换为JSON字符串，不能是JSON对象
  const LoginDto=JSON.stringify(loginDto)


  return requset({
    url: '/let',
    method: 'POST',

    data:LoginDto

  })
}