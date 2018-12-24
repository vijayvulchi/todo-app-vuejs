// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Todo from './components/Todo'
// import App from './App'
// import Hello from './components/Hello'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  template: '<Todo/>',
  components: { Todo }
  // components: { App }
  // components: { Hello }
})
