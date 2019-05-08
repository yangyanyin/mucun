import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
