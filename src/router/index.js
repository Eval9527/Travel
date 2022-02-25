import {createRouter, createWebHistory}  from 'vue-router'

const routes = [
  {
    path:'/',
    name:"Home",
    component:()=>import('@/pages/home/Home.vue')
  },
  {
    path:'/city',
    name:"city",
    component:()=>import('@/pages/city/city.vue')
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
