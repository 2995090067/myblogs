import {requset} from "../request";

export function blogdetall(blogId) {

  //get请求加上动态参数
  alert('/blog/'+blogId)
  return requset({

    url: '/blog/'+blogId,

    method:'GET',


  })
}