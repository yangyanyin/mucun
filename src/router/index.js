import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import About from '../views/about/About'
import Bank from '../views/bank/Bank'
import City from '../views/city/City'
import Asset from '../views/asset/Asset'
import ProjectList from '../views/project/ProjectList'
import ProjectDetails from '../views/project/ProjectDetails'
import Passport from '../views/passport/Passport'
import Emigrant from '../views/emigrant/Emigrant'
import EmigrantDetailsOne from '../views/emigrant/component/DetailsOne'
import EmigrantDetailsTwo from '../views/emigrant/component/DetailsTwo'
import EmigrantDetailsThree from '../views/emigrant/component/DetailsThree'
import EmigrantDetailsFour from '../views/emigrant/component/DetailsFour'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/bank',
    name: 'Bank',
    component: Bank
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/asset',
    name: 'Asset',
    component: Asset
  },
  {
    path: '/project',
    name: 'ProjectList',
    component: ProjectList
  },
  {
    path: '/project/details/:id',
    name: 'ProjectDetails',
    component: ProjectDetails
  },
  {
    path: '/passport',
    name: 'Passport',
    component: Passport
  },
  {
    path: '/emigrant',
    name: 'Emigrant',
    component: Emigrant,
    children: [
      {
        path: 'one',
        name: 'EmigrantDetailsOne',
        component: EmigrantDetailsOne,
      },
      {
        path: 'tow',
        name: 'EmigrantDetailsTwo',
        component: EmigrantDetailsTwo,
      },
      {
        path: 'three',
        name: 'EmigrantDetailsThree',
        component: EmigrantDetailsThree,
      },
      {
        path: 'four',
        name: 'EmigrantDetailsFour',
        component: EmigrantDetailsFour,
      }
    ],
    scrollBehavior (to, from) {
      return { x: 0, y: 0 }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})




export default router
