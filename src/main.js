/**
 * 网站的核心入口文件，负责核心模块的导入，第三方插件或者全局函数全局配置的导入
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource  from "vue-resource";


// 引入全局api接口配置
import index from "./config";

// 将api配置挂载到vue全局，这样在任何 .vue 文件中都可以全局使用
Vue.prototype.$config = index
Vue.config.productionTip = false
// 初始化挂载 VueResource
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
