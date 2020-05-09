//配置路由相关的信息 导入vue-router插件
import VueRouter from 'vue-router'
import Vue from 'vue'
//导入组件
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
//懒加载组件
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')


//使用vue-router 需要导入vue
Vue.use(VueRouter)

//创建vuerouter 对象
const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title:'首页'
    },
    children:[
      {
        path:'news',
        component:HomeNews
      },
      {
        path:'message',
        component:HomeMessage
      }
    ]
  },
  {
    path: '/about',
    meta:{
      title:'关于'
    },
    component: About
  },
  {
    path: '/user/:userId',
    meta:{
      title:'用户'
    },
    component: User
  },
  {
    path: '/profile',
    meta:{
      title:'档案'
    },
    component: Profile
  }
]

const router = new VueRouter({
  //配置路由和组件之间的映射 应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
// 前置钩子 在组件跳转之前调用
router.beforeEach((to,from,next) => {
  document.title=to.meta.title
  next()
})
// 后置钩子 在组件跳转之后调用
router.afterEach((to,from) => {

})
//导出router 对象到vue实例中
export default router


