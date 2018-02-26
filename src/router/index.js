import Vue from 'vue'
import Router from 'vue-router'
import { route } from '../utils/route'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  routes: [
    route('/login', 'login', 'pages/login'),
    route('/', null, 'layouts/main', [
      route('/', 'home', 'pages/home', null, 'auth'),
      route('/users', 'users', 'pages/users', null, 'auth')
    ])
  ]
})
