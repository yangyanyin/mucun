import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import { vueAccordion } from 'vue-accordion'
Vue.component('vue-accordion', vueAccordion)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload)
Vue.prototype.$http = axios

Vue.use(VueLazyload, {
	preLoad: 1.3,
	attempt: 1
})

new Vue({
	router,
  	render: h => h(App),
}).$mount('#app')
