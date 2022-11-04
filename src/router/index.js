import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/mycreator',
      name: 'My Creator',
      component: () => import('../views/MyCreatorView.vue')
    },
    {
      path: '/today',
      name: 'Today',
      component: () => import('../views/TodayView.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/instagram',
      name: 'Instagram',
      component: () => import('../views/social/InstagramView.vue')
    },
    {
      path: '/facebook',
      name: 'Facebook',
      component: () => import('../views/social/FacebookView.vue')
    },
    {
      path: '/youtube',
      name: 'Youtube',
      component: () => import('../views/social/YoutubeView.vue')
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('../views/TestView.vue')
    }
  ]
})

export default router
