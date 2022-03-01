import {createRouter, createWebHistory}  from 'vue-router'

const routes = [
  {
    path:'/',
    name:"Home",
    component:()=>import('@/pages/home/Home.vue')
  },
  {
    path:'/city',
    name:"City",
    component:()=>import('@/pages/city/City.vue')
  },
  {
    path:'/detail/:id',
    name:"Detail",
    component:()=>import('@/pages/detail/Detail.vue')
  },
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router
