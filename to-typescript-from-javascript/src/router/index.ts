import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FormView',
      component: () => import('@/components/FormView.vue'),
    },
    {
      path: '/RoutingView:id?',
      name: 'RoutingView',
      component: () => import('../components/RoutingView.vue'),
    },
  ],
})

export default router
