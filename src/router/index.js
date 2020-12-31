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
// const ProjectList = () => import(/* webpackChunkName: "project" */ '../views/project/ProjectList')
const CountryList = () => import(/* webpackChunkName: "project" */ '../views/project/CountryList')

/** @page 护照项目详情 */ 
const VanuatuDetail = () => import(/* webpackChunkName: "project" */ '../views/project/VanuatuDetail.vue')
const CyprusDetail = () => import(/* webpackChunkName: "project" */ '../views/project/CyprusDetail.vue')
const SaintKittsDetail = () => import(/* webpackChunkName: "project" */ '../views/project/SaintKittsDetail.vue')
const DominicaDetail = () => import(/* webpackChunkName: "project" */ '../views/project/DominicaDetail.vue')
const GrenadaDetail = () => import(/* webpackChunkName: "project" */ '../views/project/GrenadaDetail.vue')
const SaintLuciaDetail = () => import(/* webpackChunkName: "project" */ '../views/project/SaintLuciaDetail.vue')
const AntiguaDetai = () => import(/* webpackChunkName: "project" */ '../views/project/AntiguaDetai.vue')
const TurkeyDetai = () => import(/* webpackChunkName: "project" */ '../views/project/TurkeyDetai.vue')
const MontenegroDetail = () => import(/* webpackChunkName: "project" */ '../views/project/MontenegroDetail.vue')

/** @page 护照项目详情 */ 
const ProjectDetails = () => import(/* webpackChunkName: "project" */ '../views/project/ProjectDetails')

/** @page 护照精选 */ 
const Passport = () => import(/* webpackChunkName: "passport" */ '../views/passport/Passport')

/** @page 新加坡移民 */ 
const Emigrant = () => import(/* webpackChunkName: "emigrant" */ '../views/emigrant/Emigrant')

/** @page 新加坡移民 One */ 
const EmigrantSingapore = () => import(/* webpackChunkName: "emigrant" */ '../views/emigrant/component/Singapore.vue')

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


/**  @page 学校 */
const SchoolMain = () => import(/* webpackChunkName: "school" */ '../views/school/SchoolMain.vue')
const MindChamps = () => import(/* webpackChunkName: "school" */ '../views/school/MindChamps.vue')
const Etonhouse = () => import(/* webpackChunkName: "school" */ '../views/school/Etonhouse.vue')
const Ebridge = () => import(/* webpackChunkName: "school" */ '../views/school/Ebridge.vue')
const MapleBear = () => import(/* webpackChunkName: "school" */ '../views/school/MapleBear.vue')
const MyFirstSkool = () => import(/* webpackChunkName: "school" */ '../views/school/MyFirstSkool.vue')
const Odyssey = () => import(/* webpackChunkName: "school" */ '../views/school/Odyssey.vue')
const Pats = () => import(/* webpackChunkName: "school" */ '../views/school/Pats.vue')
const WhiteLodge = () => import(/* webpackChunkName: "school" */ '../views/school/WhiteLodge.vue')
const TanglingTrust = () => import(/* webpackChunkName: "school" */ '../views/school/TanglingTrust.vue')
const UnitedWorldCollegeSouthEastAsia = () => import(/* webpackChunkName: "school" */ '../views/school/UnitedWorldCollegeSouthEastAsia.vue')
const HwaChong = () => import(/* webpackChunkName: "school" */ '../views/school/HwaChong.vue')
const SJIInternational = () => import(/* webpackChunkName: "school" */ '../views/school/SJIInternational.vue')
const SingaporeAustralianInternational = () => import(/* webpackChunkName: "school" */ '../views/school/SingaporeAustralianInternational.vue')
const CanadianInternational = () => import(/* webpackChunkName: "school" */ '../views/school/CanadianInternational.vue')
const SingaporeAmerican = () => import(/* webpackChunkName: "school" */ '../views/school/SingaporeAmerican.vue')
const ACSInternational = () => import(/* webpackChunkName: "school" */ '../views/school/ACSInternational.vue')

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
    name: 'country-list',
    component: CountryList,
    meta: {
      page: 'project'
    }
  },
  {
    path: '/project/vanuatu',
    name: 'vanuatu-detail',
    component: VanuatuDetail
  },
  {
    path: '/project/cyprus',
    name: 'cyprus-detail',
    component: CyprusDetail
  },
  {
    path: '/project/saint-kitts',
    name: 'saint-kitts-detail',
    component: SaintKittsDetail
  },
  {
    path: '/project/dominica',
    name: 'dominica-detail',
    component: DominicaDetail
  },
  {
    path: '/project/grenada',
    name: 'grenada-detail',
    component: GrenadaDetail
  },
  {
    path: '/project/saint-lucia',
    name: 'saint-lucia-detail',
    component: SaintLuciaDetail
  },
  {
    path: '/project/antigua',
    name: 'antigua-detail',
    component: AntiguaDetai
  },
  {
    path: '/project/turkey',
    name: 'turkey-detail',
    component: TurkeyDetai
  },
  {
    path: '/project/montenegro',
    name: 'montenegro-detail',
    component: MontenegroDetail
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
        path: 'singapore',
        name: 'EmigrantSingapore',
        component: EmigrantSingapore,
      },
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
  },
  {
    path: '/',
    name: 'school',
    component: SchoolMain,
    children: [
      {
        path: 'mindc-champs',
        name: '迈杰思学前教育',
        component: MindChamps,
        meta: {
          type: '学前教育'
        }
      },
      {
        path: 'etonhouse',
        name: '伊顿国际学校',
        component: Etonhouse,
        meta: {
          type: '学前教育'
        }
      },
      {
        path: 'e-bridge',
        name: 'E-bridge伊桥幼儿园',
        component: Ebridge,
        meta: {
          type: '学前教育'
        }
      },
      {
        path: 'maple-bear',
        name: '加拿大枫叶小熊',
        component: MapleBear,
        meta: {
          type: '学前教育'
        }
      },
      {
        path: 'my-first-skool',
        name: 'My First Skool',
        component: MyFirstSkool,
        meta: {
          type: '学前教育'
        }
      },
      {
        path: 'odyssey',
        name: 'Odyssey',
        component: Odyssey,
        meta: {
          type: '学前教育'
        }
      },
      {
        path: 'pat-s',
        name: 'Pat’s 培思幼儿园',
        component: Pats,
        meta: {
          type: '学前教育'
        }
      },
      {
        path: 'white-lodge',
        name: 'White lodge International preschool',
        component: WhiteLodge,
        meta: {
          type: '学前教育'
        }
      },
      {
        path: 'tangling-trust',
        name: '东陵信托学校',
        component: TanglingTrust,
        meta: {
          type: '新加波国际学校'
        }
      },
      {
        path: 'united-world-college-south-east-asia',
        name: '东南亚世界联合书院',
        component: UnitedWorldCollegeSouthEastAsia,
        meta: {
          type: '新加波国际学校'
        }
      },
      {
        path: 'hwa-chong',
        name: '华中国际学校',
        component: HwaChong,
        meta: {
          type: '新加波国际学校'
        }
      },
      {
        path: 'sji-international',
        name: '圣若瑟书院国际学校',
        component: SJIInternational,
        meta: {
          type: '新加波国际学校'
        }
      },
      {
        path: 'singapore-australian-international',
        name: '新加坡澳大利亚国际学院',
        component: SingaporeAustralianInternational,
        meta: {
          type: '新加波国际学校'
        }
      },
      {
        path: 'canadian-international',
        name: '新加坡加拿大国际学校',
        component: CanadianInternational,
        meta: {
          type: '新加波国际学校'
        }
      },
      {
        path: 'singapore-american',
        name: '新加坡美国学校',
        component: SingaporeAmerican,
        meta: {
          type: '新加波国际学校'
        }
      },
      {
        path: 'acs-international',
        name: '英华国际学校',
        component: ACSInternational,
        meta: {
          type: '新加波国际学校'
        }
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
