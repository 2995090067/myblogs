import {requset} from "../request";

export function currentPages(currentPage) {
    return requset({
      url:'/blogs?currentPage='+currentPage,
    })

}