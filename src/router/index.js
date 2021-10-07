import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/views/home/Home')
const User = () => import('@/views/user/User')
const Community = () => import('@/views/community/Community')
const Category = () => import('@/views/category/Category')
const Cart = () => import('@/views/cart/Cart')
const Details = () => import('@/views/details/Details')
const NewDetails = () => import('@/views/community/childcomps/NewDetails')
const SubmitOrder = () => import('@/views/order/SubmitOrder')
const Order = () => import('@/views/order/Order')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/community',
    component: Community
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/details',
    component: Details
  },
  {
    path: '/newDetails',
    component: NewDetails
  },
  {
    path: '/SubmitOrder',
    component: SubmitOrder
  },
  {
    path: '/Order',
    component: Order
  }
]

const router = new VueRouter({
  routes
})

export default router


//解决路由重复点击报错
const originalPush = VueRouter.prototype.replace
   VueRouter.prototype.replace = function replace(location) {
   return originalPush.call(this, location).catch(err => err)
}