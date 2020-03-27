import Vue from 'vue'
import VueRouter from 'vue-router'

/** @page 首页 */ import Home from '../views/home/Home'
/** @page 关于我们 */ import About from '../views/about/About'
/** @page 银行开户 */ import Bank from '../views/bank/Bank'
/** @page 移居狮城 */ import City from '../views/city/City'
/** @page 资产配置 */ import Asset from '../views/asset/Asset'
/** @page 护照项目列表 */ import ProjectList from '../views/project/ProjectList'
/** @page 护照项目详情 */ import ProjectDetails from '../views/project/ProjectDetails'
/** @page 护照精选 */ import Passport from '../views/passport/Passport'
/** @page 新加坡移民 */ import Emigrant from '../views/emigrant/Emigrant'
/** @page 新加坡移民 One */ import EmigrantDetailsOne from '../views/emigrant/component/DetailsOne'
/** @page 新加坡移民 Tow */ import EmigrantDetailsTwo from '../views/emigrant/component/DetailsTwo'
/** @page 新加坡移民 Three */ import EmigrantDetailsThree from '../views/emigrant/component/DetailsThree'
/** @page 新加坡移民 Four */ import EmigrantDetailsFour from '../views/emigrant/component/DetailsFour'
/** @page 新闻列表 */ import NewsList from '../views/news/NewsList'
/** @page 新闻详情 */ import NewsDetails from '../views/news/NewsDetails'
/** @page 绿卡项目首页 */ import GreenCartList from '../views/green-card/GreenCartList.vue'
/** @page 绿卡项目菲律宾详情 */ import PhilippinesDetails from '../views/green-card/PhilippinesDetails.vue'
/** @page 绿卡项目马来西亚详情 */ import MalaysiaDetails from '../views/green-card/MalaysiaDetails.vue'
/** @page 绿卡项目新加坡详情 */ import SingaporeDetails from '../views/green-card/SingaporeDetails.vue'


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
    ]
  },
  {
    path: '/news-case',
    name: 'case',
    component: NewsList
  },
  {
    path: '/news-thematic',
    name: 'thematic',
    component: NewsList
  },
  {
    path: '/news-expert',
    name: 'expert',
    component: NewsList
  },
  {
    path: '/news-details/:id',
    name: 'NewsDetails',
    component: NewsDetails
  },
  {
    path: '/green-cart',
    name: 'GreenCartList',
    component: GreenCartList
  },
  {
    path: '/philippines-details',
    name: 'PhilippinesDetails',
    component: PhilippinesDetails
  },
  {
    path: '/malaysia-details',
    name: 'MalaysiaDetails',
    component: MalaysiaDetails
  },
  {
    path: '/singapore-details',
    name: 'SingaporeDetails',
    component: SingaporeDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
