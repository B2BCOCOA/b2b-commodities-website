import { createRouter, createWebHistory } from 'vue-router'
import { useLoader } from '../composables/useLoader'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPage.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesPage.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsPage.vue'),
    },
    {
      path: '/partners',
      name: 'partners',
      component: () => import('../views/PartnersPage.vue'),
    },
    {
      path: '/founder',
      name: 'founder',
      component: () => import('../views/FounderPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactPage.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, left: 0 }
  },
})

// Add loading indicator on navigation
router.beforeEach((to, from, next) => {
  const { setLoading } = useLoader()
  setLoading(true)
  next()
})

router.afterEach(() => {
  const { setLoading } = useLoader()
  // Hide loader after page load with a small delay to ensure rendering
  setTimeout(() => {
    setLoading(false)
  }, 100)
})

export default router
