import Vue from 'vue'
import App from './App.vue'


import VueRouter from 'vue-router'
Vue.use(VueRouter)

import DetailsOne from './component/DetailsOne.vue'
import DetailsTwo from './component/DetailsTwo.vue'
import DetailsThree from './component/DetailsThree.vue'
import DetailsFour from './component/DetailsFour.vue'

const router = new VueRouter({
  mode: 'history',
  base: '/emigrant',
	routes: [
		{
      path: '/one',
			component: DetailsOne,
    },
    {
      path: '/tow',
			component: DetailsTwo,
    },
    {
      path: '/three',
			component: DetailsThree,
    },
    {
      path: '/four',
			component: DetailsFour,
		}
	]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
