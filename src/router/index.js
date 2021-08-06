import Vue from 'vue'
import Router from 'vue-router'
import indexpage from '@/pages/indexpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexpage',
      component: indexpage
    }
  ]
})
