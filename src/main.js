import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import { vueAccordion } from 'vue-accordion'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "swiper/dist/css/swiper.min.css";
Vue.component('vue-accordion', vueAccordion)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload)
Vue.prototype.$http = axios

Vue.use(ElementUI);

Vue.use(VueLazyload, {
	preLoad: 1.3,
	attempt: 1
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
