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
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../components/Templates/TodoEditTemplate.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../components/Templates/TodoDetailTemplate.vue')
    }
  ]
})

export default router
