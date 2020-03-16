import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import axios from 'axios'
Vue.prototype.$http = axios
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
}).$mount('#app')
