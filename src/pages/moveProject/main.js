import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'
Vue.prototype.$http = axios
new Vue({
	router,
  	render: h => h(App),
}).$mount('#app')
