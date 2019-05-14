import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'
import VConsole from '../../assets/js/vconsole.js'
Vue.prototype.$http = axios
new Vue({
	router,
	VConsole,
  	render: h => h(App),
}).$mount('#app')
