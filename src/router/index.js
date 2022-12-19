import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/Index.vue')
    },
    {
      path: '/campaign/:slug',
      name: 'detail_campaign',
      component: () => import('../views/campaign/Show.vue')
    },
    {
      path: '/campaigns',
      name: 'campaigns',
      component: () => import('../views/campaign/Index.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/category/Index.vue')
    }
  ]
})

export default router
