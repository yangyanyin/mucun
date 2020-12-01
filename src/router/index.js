import Vue from 'vue'
import VueRouter from 'vue-router'

/** @page 首页 */ 
const Home = () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')

/** @page 关于我们 */ 
const About = () => import(/* webpackChunkName: "about" */ '../views/about/About')

/** @page 银行开户 */ 
const Bank = () => import(/* webpackChunkName: "bank" */ '../views/bank/NewBank')

/** @page 资产配置 */ 
const Asset = () => import(/* webpackChunkName: "asset" */ '../views/asset/Asset')

/** @page 护照项目列表 */ 
const ProjectList = () => import(/* webpackChunkName: "project" */ '../views/project/ProjectList')

/** @page 护照项目详情 */ 
const ProjectDetails = () => import(/* webpackChunkName: "project" */ '../views/project/ProjectDetails')

/** @page 护照精选 */ 
const Passport = () => import(/* webpackChunkName: "passport" */ '../views/passport/Passport')

/** @page 新加坡移民 */ 
const Emigrant = () => import(/* webpackChunkName: "emigrant" */ '../views/emigrant/Emigrant')

/** @page 新加坡移民 One */ 
const EmigrantDetailsOne = () => import(/* webpackChunkName: "emigrant" */ '../views/emigrant/component/DetailsOne')

/** @page 新加坡移民 Tow */ 
const EmigrantDetailsTwo = () => import(/* webpackChunkName: "emigrant" */ '../views/emigrant/component/DetailsTwo')

/** @page 新加坡移民 Three */ 
const EmigrantDetailsThree = () => import(/* webpackChunkName: "emigrant" */ '../views/emigrant/component/DetailsThree')

/** @page 新加坡移民 Four */ 
const EmigrantDetailsFour = () => import(/* webpackChunkName: "emigrant" */ '../views/emigrant/component/DetailsFour')

/** @page 新闻列表 */ 
const NewsList = () => import(/* webpackChunkName: "news" */ '../views/news/NewsList')

/** @page 新闻详情 */ 
const NewsDetails = () => import(/* webpackChunkName: "news" */ '../views/news/NewsDetails')

/** @page 绿卡项目首页 */ 
const GreenCartList = () => import(/* webpackChunkName: "green-card" */ '../views/green-card/GreenCartList.vue')

/** @page 绿卡项目菲律宾详情 */ 
const PhilippinesDetails = () => import(/* webpackChunkName: "green-card" */ '../views/green-card/PhilippinesDetails.vue')

/** @page 绿卡项目马来西亚详情 */ 
const MalaysiaDetails = () => import(/* webpackChunkName: "green-card" */ '../views/green-card/MalaysiaDetails.vue')

/** @page 绿卡项目新加坡详情 */ 
const SingaporeDetails = () => import(/* webpackChunkName: "green-card" */ '../views/green-card/SingaporeDetails.vue')

/** @page 绿卡项目新加坡详情 */ 
const KoreaDetails = () => import(/* webpackChunkName: "green-card" */ '../views/green-card/KoreaDetails.vue')
const JapanDetails = () => import(/* webpackChunkName: "green-card" */ '../views/green-card/JapanDetails')
const PortugalDetails = () => import(/* webpackChunkName: "green-card" */ '../views/green-card/PortugalDetails.vue')

/** @page 留学 */ 
const OverseasStudy = () => import(/* webpackChunkName: "overseas-study" */ '../views/study/OverseasStudy.vue')
const Study1 = () => import(/* webpackChunkName: "overseas-study" */ '../views/study/base/Study1.vue')
const Study2 = () => import(/* webpackChunkName: "overseas-study" */ '../views/study/base/Study2.vue')
const Study3 = () => import(/* webpackChunkName: "overseas-study" */ '../views/study/base/Study3.vue')
const Study4 = () => import(/* webpackChunkName: "overseas-study" */ '../views/study/base/Study4.vue')
const Study5 = () => import(/* webpackChunkName: "overseas-study" */ '../views/study/base/Study5.vue')

/** @page 绿卡项目新加坡详情 */ 
const Canada = () => import(/* webpackChunkName: "green-card" */ '../views/canada/Canada.vue')
const CanadaIndex = () => import(/* webpackChunkName: "green-card" */ '../views/canada/CanadaIndex.vue')
const CanadaProject1 = () => import(/* webpackChunkName: "green-card" */ '../views/canada/CanadaProject1.vue')
const CanadaProject2 = () => import(/* webpackChunkName: "green-card" */ '../views/canada/CanadaProject2.vue')
const CanadaProject3 = () => import(/* webpackChunkName: "green-card" */ '../views/canada/CanadaProject3.vue')
const CanadaProject4 = () => import(/* webpackChunkName: "green-card" */ '../views/canada/CanadaProject4.vue')



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      page: 'home'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      page: 'about'
    }
  },
  {
    path: '/bank',
    name: 'Bank',
    component: Bank,
    meta: {
      page: 'bank'
    }
  },
  {
    path: '/asset',
    name: 'Asset',
    component: Asset,
    meta: {
      page: 'asset'
    }
  },
  {
    path: '/project',
    name: 'ProjectList',
    component: ProjectList,
    meta: {
      page: 'project'
    }
  },
  {
    path: '/project/details/:id',
    name: 'ProjectDetails',
    component: ProjectDetails,
    meta: {
      page: 'project'
    }
  },
  {
    path: '/passport',
    name: 'Passport',
    component: Passport,
    meta: {
      page: 'passport'
    }
  },
  {
    path: '/emigrant',
    name: 'Emigrant',
    component: Emigrant,
    meta: {
      page: 'emigrant'
    },
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
    component: NewsList,
    meta: {
      page: 'news'
    }
  },
  {
    path: '/news-thematic',
    name: 'thematic',
    component: NewsList,
    meta: {
      page: 'news'
    }
  },
  {
    path: '/news-expert',
    name: 'expert',
    component: NewsList,
    meta: {
      page: 'news'
    }
  },
  {
    path: '/news-details/:id',
    name: 'NewsDetails',
    component: NewsDetails,
    meta: {
      page: 'news'
    }
  },
  {
    path: '/green-cart',
    name: 'GreenCartList',
    component: GreenCartList,
    meta: {
      page: 'green'
    }
  },
  {
    path: '/philippines-details',
    name: 'PhilippinesDetails',
    component: PhilippinesDetails,
    meta: {
      page: 'green'
    }
  },
  {
    path: '/malaysia-details',
    name: 'MalaysiaDetails',
    component: MalaysiaDetails,
    meta: {
      page: 'green'
    }
  },
  {
    path: '/singapore-details',
    name: 'SingaporeDetails',
    component: SingaporeDetails,
    meta: {
      page: 'green'
    }
  },
  {
    path: '/korea-details',
    name: 'KoreaDetails',
    component: KoreaDetails,
    meta: {
      page: 'green'
    }
  },
  {
    path: '/japan-details',
    name: 'JapanDetails',
    component: JapanDetails,
    meta: {
      page: 'green'
    }
  },
  {
    path: '/portugal-details',
    name: 'PortugalDetails',
    component: PortugalDetails,
    meta: {
      page: 'green'
    }
  },
  {
    path: '/overseas-study',
    name: 'OverseasStudy',
    component: OverseasStudy,
    children: [
      {
        path: 'one',
        name: 'Study1',
        component: Study1,
      },
      {
        path: 'tow',
        name: 'Study2',
        component: Study2,
      },
      {
        path: 'three',
        name: 'Study3',
        component: Study3,
      },
      {
        path: 'four',
        name: 'Study4',
        component: Study4,
      },
      {
        path: 'five',
        name: 'Study5',
        component: Study5,
      }
    ]
  },
  {
    path: '/canada-details',
    name: 'canada',
    component: Canada,
    children: [
      {
        path: '/',
        name: 'index',
        component: CanadaIndex
      },
      {
        path: 'one',
        name: 'one',
        component: CanadaProject1
      },
      {
        path: 'two',
        name: 'two',
        component: CanadaProject2
      },
      {
        path: 'three',
        name: 'three',
        component: CanadaProject3
      },
      {
        path: 'four',
        name: 'four',
        component: CanadaProject4
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  beforeRouteUpdate (to, from, next) {
    this.name = to.params.name
    next()
  },
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
