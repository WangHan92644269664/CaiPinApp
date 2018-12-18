import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Edit from '../pages/Edit'
import Rank from '../pages/Rank'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component:Home
    },
    {
      path:'/rank',
      component:Rank
    },
    {
      path:'/edit/:id',
      component:Edit
    }
  ]
})
