import Vue from 'vue'
import Toast from "../Toast";
// 创建组件构造器
const toastHonor = Vue.extend(Toast);

export default function ({text="要显示的内容",time=2000,type=undefined}={}) {
  return new Promise((reslove, reject) => {
    let toastComponent = new toastHonor({el: document.createElement('div')});
    toastComponent.text = text;
    toastComponent.time = time;
    toastComponent.type = type;

    //插入到body
    document.body.appendChild(toastComponent.$el)
    // 回调函数
    toastComponent.close = function () {
      reslove();
    };
  })
}