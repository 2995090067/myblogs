import Vue from 'vue'
import VueRouter from 'vue-router'

// 懶加載
let BolgDetall = () => import('../views/blogdetall/BlogDetall');
let BlogEdit = () => import('../views/blogedit/BlogEdit');
let Blogs = () => import('../views/blogs/Blogs')
let Login = () => import('../views/login/Login')

// 测试
let UserTest= () => import('../views/login/UserTest')
let LoginInfo=()=>import('../views/login/LoginInfo')

// 展示
let Element = () => import('../views/element/Element')

// Vue实例加载element-ui
Vue.use(VueRouter)

const routes = [
  {
    // 此處重定向
    path: '/',
    redirect: '/blogs'
  },

  // 添加路由
  {
    path: 'blog/add',
    component: BlogEdit
  },

  {
    path: '/blog/:blogId/edit',
    component: BlogEdit

  },

  {
    path: '/blog/:blogId',
    component: BolgDetall
  },

  {
    path: '/blogs',
    component: Blogs
  },

  {
    path: '/login',
    component: Login
  },

  {
    path: '/element',
    component: Element
  },
  {
    path: '/usertest',
    component: UserTest
  },
  {
    path: '/logininfo',
    component:LoginInfo
  }
]
// 创建路由对象
const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
// 导出
export default router
