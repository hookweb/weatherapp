import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index.vue'
import Info from '@/components/info.vue'

Vue.use(Router)

/**
 * 网站的路由配置，网站的访问地址配置
 */

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/info/:id',
      name: 'Info',
      component: Info
    }
  ]
})
