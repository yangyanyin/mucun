import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('./App.vue')
Vue.use(VueRouter)
export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Home,
		}
	]
})