import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login')
    },
    {
      path: '/',
      component: () => import('../layouts/main'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../pages/home'),
          meta: {
            middleware: 'auth'
          }
        },
        {
          path: '/users',
          name: 'users',
          component: () => import('../pages/users'),
          meta: {
            middleware: 'auth'
          }
        }
      ]
    }
  ]
})
