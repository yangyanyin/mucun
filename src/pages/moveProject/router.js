import Vue from 'vue'
import VueRouter from 'vue-router'
const List = () => import('./views/PassportList.vue')
const Details = () => import('./views/PassportDetails.vue')
Vue.use(VueRouter)
export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/project',
			component: List,
		},
		{
			path: '/project/details/:id',
			component: Details
		}
	]
})