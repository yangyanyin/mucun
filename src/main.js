import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import { vueAccordion } from 'vue-accordion'
import ElementUI from 'element-ui';
import QRCode from 'qrcodejs2';
import { loadLanguageAsync, i18n } from './lang/setup-lang'
import 'element-ui/lib/theme-chalk/index.css';
import "swiper/dist/css/swiper.min.css";
Vue.component('vue-accordion', vueAccordion)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload)
Vue.prototype.$http = axios
Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
  const lang = process.env.VUE_APP_LANG
  loadLanguageAsync(lang).then(() => next())

})
Vue.use(VueLazyload, {
	preLoad: 1.3,
	attempt: 1
})
Vue.config.productionTip = false
Vue.prototype.qrCode = QRCode
new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
