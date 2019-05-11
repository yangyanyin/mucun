import Vue from 'vue'
import VueRouter from 'vue-router'
const List = () => import('./views/PassportList.vue')
const Details = () => import('./views/PassportDetails.vue')
Vue.use(VueRouter)
export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/move-project',
			component: List,
		},
		{
			path: '/move-project/details/:id',
			component: Details
		}
	]
})