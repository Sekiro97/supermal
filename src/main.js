import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper' //轮播图组件
import 'swiper/css/swiper.min.css' //轮播图组件所用css

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
