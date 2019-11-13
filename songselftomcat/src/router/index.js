import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/web/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/webIndex',
      name: 'webIndex',
      component: (resolve)=>require(['@/components/web/index'],resolve)
    },{
      path: '/cssindex',
      name: 'cssindex',
      component: (resolve)=>require(['@/components/web/cssindex'],resolve)
    },
    {
      path: '/',
      redirect:'/webIndex'
    }
  ]
})
