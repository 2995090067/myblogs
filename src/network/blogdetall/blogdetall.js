import {requset} from "../request";

export function blogdetall(blogId) {

  //请求问题
  alert('/blog/'+blogId)
  return requset({

    url: '/blog/'+blogId,

    method:'GET',


  })
}