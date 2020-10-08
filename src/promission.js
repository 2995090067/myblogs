// 添加路由前置拦截
import router from "./router";

router.beforeEach((to, from, next) => {
//路由判断登录，根据配置文件的参数

  if (to.matched.some(record => record.meta.requireAuth)) {
    //判断是否需要登录权限

    const token = localStorage.getItem("token")
    console.log('token 值')
    console.log(token)

    if (token) { // 判断当前的token是否存在 ； 登录存入的token
      if (to.path === '/login') {

      } else {
        next()
      }
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})