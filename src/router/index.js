import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
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
    },
    {
      path: '/category/:slug',
      name: 'detail_category',
      component: () => import('../views/category/Show.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/Register.vue'),
      meta: {
        authPage: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/Login.vue'),
      meta: {
        authPage: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard/Index.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile/Index.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/donasi',
      name: 'donasi',
      component: () => import('../views/donasi/Index.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile/password',
      name: 'profile.password',
      component: () => import('../views/profile/Password.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/*",
      component: 404,
    },
  ]
})
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.matched.some(record => record.meta.authPage)) {
    if (!auth.isLoggedIn) {
      next()
    } else {
      next('dashboard')
    }
  } else if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.isLoggedIn) {
      next('/login')
    } else {
      next()
      return
    }
  } else next()
})


export default router
