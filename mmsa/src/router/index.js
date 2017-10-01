import Vue from 'vue'
import Router from 'vue-router'
import Assessment from '@/components/Assessment'
import List from '@/components/List'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Assessment/:company',
      name: 'Assessment',
      component: Assessment,
      props: true
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
/*
    ,
    {
      path: '*',
      redirect: '/'
    },

    {
      path: '/login/:token',
      name: 'Login',
      component: Login,
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      props: false
    } */
  ]
})
