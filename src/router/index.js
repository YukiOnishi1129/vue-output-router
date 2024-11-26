import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Templates/TodoListTemplate.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../components/Templates/TodoCreateTemplate.vue')
    }
  ]
})

export default router
