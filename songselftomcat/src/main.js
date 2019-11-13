// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, DatePicker, Menu, Layout, /*Icon,*/ Collapse, Steps, Message, Alert, Drawer, message  } from 'ant-design-vue';
import '../static/fonts/iconfont.css'
import '@/utils/vueCps.js'

/*
 跟'ant-design-vue.d.ts 文件'
 如果暴漏出来的是类对象  即可  通过use 的方法
 如果暴漏出来的是非类对象  通过Vue.prototype.$message = message 这种方法进行组件的注入
 */
Vue.use(Button)
  .use(DatePicker)
  .use(Layout)
  .use(Menu)
  // .use(Icon)
  .use(Collapse)
  .use(Steps)
  .use(Message)
  .use(Alert)
  .use(Drawer)
;Vue.prototype.$message = message ;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
