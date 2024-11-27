import { createRouter, createWebHistory } from 'vue-router'
import { NAVIGATION_LIST } from '../constants/navigation'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: `${NAVIGATION_LIST.TOP}`,
      name: 'home',
      component: () => import('../components/Templates/TodoListTemplate.vue')
    },
    {
      path: `${NAVIGATION_LIST.CREATE}`,
      name: 'create',
      component: () => import('../components/Templates/TodoCreateTemplate.vue')
    },
    {
      path: `${NAVIGATION_LIST.EDIT}`,
      name: 'edit',
      component: () => import('../components/Templates/TodoEditTemplate.vue')
    },
    {
      path: `${NAVIGATION_LIST.DETAIL}`,
      name: 'detail',
      component: () => import('../components/Templates/TodoDetailTemplate.vue')
    }
  ]
})

export default router
