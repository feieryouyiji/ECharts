import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Diagram from '@/components/Diagram'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/diagram',
      name: 'Diagram',
      component: Diagram
    }
  ]
})
