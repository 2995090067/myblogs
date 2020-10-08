import {requset} from "../request";

export function deleteBlogs(blogId) {
  return requset({
    url:'blogDelete/'+blogId,
    method:'GET',
    headers: {
      // 头部信息
      'Authorization' : localStorage.getItem('token')
    },

  })
}