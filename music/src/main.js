import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 ui
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible/flexible.js'
// 样式初始化
import './assets/css/index.css'
import 'normalize.css/normalize.css';


Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
