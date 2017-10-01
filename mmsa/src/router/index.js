import Vue from 'vue'
import Router from 'vue-router'
import Assessment from '@/components/Assessment'
import List from '@/components/List'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Assessment/:company',
      name: 'Assessment',
      component: Assessment,
      props: true
    },
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
