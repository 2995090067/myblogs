import {requset} from "../request";

export function blogedit(Blog) {
  return requset({
    url: '/blog/edit',
    method: 'POST',
    headers: {
      // 头部信息
      'Authorization': localStorage.getItem('token')
    },
    data: Blog
  })
}