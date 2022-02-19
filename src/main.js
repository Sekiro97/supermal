import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper' //轮播图组件
import 'swiper/css/swiper.min.css' //轮播图组件所用css

Vue.use(VueAwesomeSwiper) //轮播图组件

//使用事件总线
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
