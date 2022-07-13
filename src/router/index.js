import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
const Home = () => import('@/views/Home')
const My = () => import('@/views/My')
const Infomation = () => import('@/views/Infomation')
const login = () => import('@/views/login')
const Search = () => import('@/views/Search')
const City = () => import('@/views/City')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'my', component: My },
      { path: 'infomation', component: Infomation },
      { path: 'search', component: Search }
    ]
  },
  {
    path: '/login',
    component: login
  },
  { path: '/city', component: City }
]
const router = new VueRouter({
  routes
})

export default router
