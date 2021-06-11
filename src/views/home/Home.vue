<template>
  <Loading v-if="!loadingStatus" class="home" />
  <div v-else>
    <!-- banner -->
    <Banner :bannerImgList="bannerImg" class="home-banner" />

    <!-- 媒体 -->
    <Media />

    <!-- 新 -->
    <WapBanner />
    <HomeNav />
    <SingaporeStudyAbroad />
    <PopularItems />
    <WapStudyAbroad />
    <Other />
    <Services />
    <AssetManagement />
    <PopularInformation v-if="newDynamic.length > 0" :newDynamic="newDynamic" />
    <WapAdvantage />
    <SuccessCase v-if="newCase.length > 0" :newCase="newCase"/>

    <!-- 视频和关于我们 -->
    <VideoAbout></VideoAbout>

    <!-- 移民新闻 -->
    <NewModule v-if="newDynamic.length > 0" type="expert" :newDynamic="newDynamic" />

    <!-- 新加坡移民 -->
    <div class="singapore pc-max-width margin-t-80">
      <div class="public-title animation-show">
        <h3>新加坡移民</h3>
        <span>
          <i>
            <img src="../../assets/images/title-img1.png" />
          </i>
        </span>
        <p>SINGAPORE PROGRAMS</p>
      </div>
      <div class="content clearfix animation-show">
        <vue-accordion :items="items" accordionClass="list web-img"></vue-accordion>
        <ul class="wap-img clearfix">
          <li v-for="(items, index) in items" :key="index">
            <router-link :to="items.url">
              <img :src="items.image" alt />
              <div class="d">
                <h3>{{items.title}}</h3>
                <h4>{{items.text}}</h4>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- 家族办公室 -->
    <div class="office margin-t-80">
      <div class="t">
        <h3>家族办公室</h3>
        <p>一步实现全家移民，三代受益</p>
      </div>
      
      <div class="content pc-max-width">
        <h4>全球资产配置 I 最佳税务结构 I 海外身份规划 I 家族财富传承</h4>
        <p>被超高净值富豪家族所青睐的家族办公室分布在全球的各大金融中心，以前主要分布于欧洲(尤其是在瑞士的日内瓦、苏黎世和英国的伦敦)及美国，而随着亚太地区经济在全球占到的比重越来越高后，家族办公室在中国香港及新加坡迅速崛起。新加坡为了吸引全球富豪，积极发展家族办公室行业，并针对家族办公室给予了牌照相应的豁免和相关的税务优惠政策，加强人才招募，近年来吸引了许多亿万富豪来新加坡建立家族办公室，凸显了新加坡政府招揽富豪的野心，其世界金融的地位，料将持续向上提升。</p>
        <strong>在新加坡设立家族办公室的超级富豪</strong>
        <ul>
          <li>
            <img src="../../assets/images/character1.jpg" alt="桥水基金创始人瑞·达利欧" />
            桥水基金创始人瑞·达利欧
          </li>
          <li>
            <img src="../../assets/images/character2.jpg" alt="桥水基金创始人瑞·达利欧" />
            海底捞创始人张勇之妻舒萍
          </li>
          <li>
            <img src="../../assets/images/character3.jpg" alt="桥水基金创始人瑞·达利欧" />
            谷歌联合创始人谢尔盖·布林
          </li>
          <li>
            <img src="../../assets/images/character4.jpg" alt="桥水基金创始人瑞·达利欧" />
            戴森创始人詹姆斯·戴森
          </li>
        </ul>
        <router-link to="/emigrant/singapore">查看更多 ></router-link>
      </div>
    </div>

    <!-- 狮城留学 -->
    <StudyAbroad />

    <!-- 全球护照精选 -->
    <!-- <Passport></Passport> -->

    <!-- 绿卡项目 -->
    <div class="green-card margin-t-80">
       <div class="public-title animation-show">
        <h3>绿卡项目</h3>
        <span>
          <i>
            <img src="../../assets/images/title-img2.png" />
          </i>
        </span>
        <p>GREEN CARD PROGRAMS</p>
      </div>
      <div class="pc-max-width">
        <GreenBox />
      </div>
    </div>

    <!-- 我们的优势 -->
    <Advantage></Advantage>

    <!-- 成功案例 -->
    <div class="success-case margin-t-80" v-if="newCase.length > 0">
      <div class="public-title animation-show">
        <h3>成功案例</h3>
        <span>
          <i>
            <img src="../../assets/images/title-img2.png" />
          </i>
        </span>
        <p>Successful Cases</p>
      </div>
      <div class="pc-max-width content clearfix animation-show">
        <ul>
          <li v-for="(news, index) in newCase" :key="index">
            <router-link class="a" :to="'/news-details/' + news.id">
              <i>
                <img
                    v-lazy="{src: news.img, loading: require('../../assets/images/country-loading.png'), error: require('../../assets/images/country-loading.png')}"
                  />
              </i>
              
              <div class="d clearfix">
                <h3>{{news.title}}</h3>
                <p v-html="news.description"></p>
                <span class="left">{{news.created_at.split(' ')[0]}}</span>
                <span class="right"><router-link :to="'/news-details/' + news.id">了解详情</router-link></span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

  

    <!-- 我们得团队 -->
    <div class="team margin-t-80 pc-max-width">
      <div class="public-title animation-show">
        <h3>我们的团队</h3>
        <span>
          <i>
            <img src="../../assets/images/title-img1.png" />
          </i>
        </span>
        <p>Our Team</p>
      </div>
      <div class="content list">
        <OurTeam></OurTeam>
      </div>
    </div>

    <!-- 联系我们 -->
    <ContactUs class="home-contact-us" />
  </div>
</template>

<script>
import Banner from './component/banner.vue'
import OurTeam from './component/OurTeam.vue'
import VideoAbout from './component/VideoAbout'
import Advantage from './component/Advantage'
import { animation, windowScroll } from '../../assets/js/config.js'
import ContactUs from '../../components/commonComponent/ContactUs'
import NewModule from './component/NewModule'
import GreenBox from './component/GreenBox'
import Media from './component/Media'
// import Passport from './component/Passport'
import StudyAbroad from './component/StudyAbroad'
import Loading from '../../components/commonComponent/loadingPage'
import HomeNav from './wapComponent/HomeNav'
import SingaporeStudyAbroad from './wapComponent/SingaporeStudyAbroad'
import PopularItems from './wapComponent/PopularItems'
import WapStudyAbroad from './wapComponent/WapStudyAbroad'
import Services from './wapComponent/Services'
import WapAdvantage from './wapComponent/WapAdvantage'
import SuccessCase from './wapComponent/SuccessCase'
import PopularInformation from './wapComponent/PopularInformation'
import AssetManagement from './wapComponent/AssetManagement'
import WapBanner from './wapComponent/WapBanner'
import Other from './wapComponent/Other'


export default {
  name: 'home',
  components: {
    Banner,
    ContactUs,
    NewModule,
    Loading,
    GreenBox,
    OurTeam,
    VideoAbout,
    Advantage,
    // Passport,
    StudyAbroad,
    Media,
    HomeNav,
    SingaporeStudyAbroad,
    PopularItems,
    WapStudyAbroad,
    Services,
    WapAdvantage,
    SuccessCase,
    PopularInformation,
    AssetManagement,
    Other,
    WapBanner
  },
  data() {
    return {
      bannerImg: "",
      items: [
        {
          title: "小额自雇移民项目",
          text: "条件宽松，无语言要求，精英首选方案",
          url: "/emigrant/one",
          image: require("../../assets/images/project1.jpg")
        },
        {
          title: "股权投资移民项目",
          text: "3个月，全家登陆花园城市",
          url: "/emigrant/tow",
          image: require("../../assets/images/project2.jpg")
        },
        {
          title: "GIP投资移民项目",
          text: "获批后再投资安全无风险",
          url: "/emigrant/three",
          image: require("../../assets/images/project4.jpg")
        }
      ],
      loadingStatus: false,
      newDynamic: [],
      newCase: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.loadingStatus = true
      let scroll = document.documentElement.scrollTop || document.body.scrollTop;
      windowScroll();
      setTimeout(() => {
        animation(scroll);
      }, 10);
    }, 2000)

    this.$http({
      method: "get",
      url: process.env.VUE_APP_API + "/v1/newsList",
      params: {
        size: 12
      }
    }).then(res => {
      if (res.data.code === 200) {
        let news = res.data.data.news_list
        for (let i = 0; i < news.length; i++) {
          if (news[i].name === '成功案例' ) {
            this.newCase = news[i].news.slice(0, 4)
          } else {
            this.newDynamic.push(news[i])
          }
        }
      }
    });
  }
};
</script>

<style lang="less" scoped>
.home-banner {
  @media(max-width: 767px) {
    display: none;
  }
}
/** 成功案例 **/
.success-case {
  padding-top: 60px;
  background: url('../../assets/images/success-case-bg.png') no-repeat top center;
  background-size: 1920px;
  @media (max-width: 767px) {
    background-size: 1000px;
    padding: 30px 10px 0;
    display: none;
  }
  .public-title {
    h3 {
      color: #fff;
    }
    span {
      &:after,
      &:before {
        background: #fff;
      }
      i {
        background: no-repeat;
      }
    }
    p {
      color: #fff;
    }
  }
  .content {
    padding-top: 50px;
    li {
      float: left;
      width: 25%;
      padding: 0 10px;
      a.a {
        position: relative;
        display: block;
        box-shadow: 0px 4px 18px -6px #d0d0d0;
        transition: .3s;
        background: #fff;
        @media (min-width: 767px) {
          &:hover {
            transform: scale(1.03);
          }
        }
        i {
          display: block;
          height: 160px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        // img {
        //   display: block;
        //   width: 100%;
        // }
        .d {
          padding: 25px;
          h3 {
            font-weight: bold;
            font-size: 18px;
            color: #111;
            overflow: hidden;     
            height: 50px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          p {
            margin: 5px 0 10px;
            color: #b9b9b9;
            height: 120px;
            line-height: 24px;
            overflow: hidden;     
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
          }
          span {
            color: #b9b9b9;
            a {
              color: #b9b9b9;
            }
          }
        }
      }
    }
    // @media (max-width: 767px) {
    //   white-space: nowrap;
    //   overflow: auto;
    //   padding: 30px 0 20px;
    //   &::-webkit-scrollbar {
    //     height: 0px;
    //   } 
    //   ul {
    //     width: 920px;
    //     margin: 0 -10px;
    //   }
    //   li {
    //     float: left;
    //     width: 230px;
    //     padding: 0 5px;
    //     white-space: initial;
    //     &:first-child {
    //       padding-left: 0;
    //     }
    //     &:last-child {
    //       padding-right: 0;
    //     }
    //     a.a {
    //       .d {
    //         padding: 15px;
    //         h3 {
    //           display: block;
    //           font-size: 16px;
    //           height: 24px;
    //           -webkit-line-clamp: 1;
    //         }
    //         p {
    //           height: 55px;
    //           font-size: 12px;
    //           line-height: 18px;
    //           -webkit-line-clamp: 3;
    //         }
    //         span {
    //           font-size: 12px;
    //           a {
    //             font-size: 12px;
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  }
}

/** 绿卡项目 **/
.green-card {
  padding: 60px 0;
  background: url('../../assets/images/green-card-bg.png') no-repeat top center;
  background-size: 1920px;
  @media (max-width: 767px) {
    padding: 30px 10px;
    background-size: 1100px;
    display: none;
  }
  .public-title {
    h3 {
      color: #fff;
    }
    span {
      &:after,
      &:before {
        background: #fff;
      }
      i {
        background: no-repeat;
      }
    }
    p {
      color: #fff;
    }
  }
}
</style>
<style lang="less">
/** 新加坡移民 **/
.singapore {
  @media (min-width: 767px) {
    .list {
      width: 100%;
      margin-top: 40px;
      overflow: hidden;
      height: 520px;
      @media (max-width: 1100px) {
        height: 450px;
      }
      ul {
        width: 100%;
        height: 100%;
        display: table;
        table-layout: fixed;
        margin: 0;
        padding: 0;
      }
    }
    ul li {
      display: table-cell;
      vertical-align: bottom;
      position: relative;
      width: 50%;
      background-repeat: no-repeat;
      background-position: center center;
      transition: all 500ms ease;
      height: 100%;
      background-position: center center;
    }
    ul li a {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      z-index: 3;
      text-align: left;
      vertical-align: bottom;
      padding: 30px 30px 0;
      box-sizing: border-box;
      color: #fff;
      text-decoration: none;
      transition: all 200ms ease;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 110px;
        background: rgba(0, 0, 0, 0.4);
      }
    }
    ul li a * {
      margin: 0;
      width: 100%;
      text-overflow: ellipsis;
      position: relative;
      z-index: 5;
      white-space: nowrap;
      overflow: hidden;
      -webkit-transition: all 400ms ease;
      transition: all 400ms ease;
    }
    ul li a p {
      position: absolute;
      bottom: 25px;
    }
    ul li a h2 {
      font-size: 24px;
      position: absolute;
      bottom: 50px;
    }
    ul:hover li {
      width: 15%;
    }
    ul:hover li:hover {
      width: 60%;
    }
    ul:hover li:hover a * {
      opacity: 1;
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @media (max-width: 767px) {
    display: none;
    ul {
      margin: 0 -5px;
      padding-top: 10px;
    }
    li {
      position: relative;
      width: calc(50% - 10px);
      float: left;
      margin: 10px 5px 0;
      background-size: 100%;
      img {
        display: block;
        width: 100%;
      }
      .d {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        padding: 10px;
        height: 81px;
        background: rgba(0, 0, 0, 0.4);
        h3 {
          font-size: 16px;
          padding-bottom: 5px;
          color: #fff;
        }
        h4 {
          color: #fff;
          font-size: 12px;
        }
      }
    }
  }
}

.office {
  padding: 50px 0;
  background: #447375;
  @media (max-width: 767px) {
    display: none;
  }
  .t {
    position: relative;
    text-align: center;
    &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 22px;
      width: 500px;
      height: 1px;
      margin-left: -250px;
      background: #fff;
    }
    h3 {
      position: relative;
      z-index: 1;
      display: inline-block;
      padding: 0 30px;
      color: #fff;
      font-size: 30px;
      background: #447375;
    }
    p {
      padding-top: 2px;
      color: #fff;
      opacity: .8;
    }
  }
  .content {
    h4 {
      padding: 25px 0;
      text-align: center;
      color: #fff;
      font-size: 18px;
    }
    p {
      color: #fff;
      line-height: 28px;
    }
    strong {
      display: block;
      padding: 30px 0;
      text-align: center;
      color: #fff;
    }
    ul {
      li {
        display: inline-block;
        width: 21%;
        margin-right: 5.333%;
        text-align: center;
        color: #fff;
        &:last-child {
          margin-right: 0;
        }
        img {
          display: block;
          width: 100%;
          margin-bottom: 15px;
          border-radius: 6px;
        }
      }
    }
    a {
      display: block;
      width: 180px;
      height: 50px;
      margin: 30px auto 0;
      color: #4F7274;
      font-size: 16px;
      text-align: center;
      line-height: 50px;
      background: #FFFFFF;
      opacity: 0.6;
      border-radius: 25px;
      transition: .3s;
      &:hover {
        opacity: .8;
      }

    }
  }
}

.team, .home-contact-us {
  @media (max-width: 767px) {
    display: none;
  }
}
</style>
<style lang="less">
.home.loading {
  position: static;
  padding: 200px 0;
  transform: translate(0, 0);
}
</style>