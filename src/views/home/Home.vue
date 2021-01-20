<template>
  <Loading v-if="!loadingStatus" class="home" />
  <div v-else>
    <!-- banner -->
    <Banner :bannerImgList="bannerImg" />

    <!-- 媒体 -->
    <div class="pc-max-width">
      <div class="media-content clearfix">
        <h3 class="left">媒体报道</h3>
        <ul class="right">
          <li>
            <a target="_blank" href="http://finance.china.com.cn/jiaoyu/20200910/5367456.shtml"><img src="../../assets/images/media-img1.png"></a>
          </li>
          <li>
            <a target="_blank" href="https://gd.ifeng.com/c/v002zk7Qk--jElpeoYodb-_OqSikQ9gZgWUv9GfR7T-_oHjzeI__"><img src="../../assets/images/media-img2.png"></a>
          </li>
          <li>
            <a target="_blank" href="https://edu.163.com/20/1125/17/FS9VIVUK0029985J.html"><img src="../../assets/images/media-img4.png"></a>
          </li>
          <li>
            <a target="_blank" href="https://biznews.sohu.com/a/436022953_120181749"><img src="../../assets/images/media-img5.png"></a>
          </li>
          <li>
            <a target="_blank" href="https://www.marketwatch.com/press-release/what-is-the-benefits-of-global-citizenship-programs-and-where-to-find-the-service-in-singapore-2020-09-21"><img src="../../assets/images/media-img6.png"></a>
          </li>
          <li>
            <a target="_blank" href="http://www.wboc.com/story/42658134/what-is-the-benefits-of-global-citizenship-programs-and-where-to-find-the-service-in-singapore"><img src="../../assets/images/media-img7.png"></a>
          </li>
          <li>
            <a target="_blank" href="https://www.honolulunewsnow.com/news/story/217323/what-is-the-benefits-of-global-citizenship-programs-and-where-to-find-the-service-in-singapore.html"><img src="../../assets/images/media-img8.png"></a>
          </li>
        </ul>
      </div>
    </div>

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

    <!-- 全球护照精选 -->
    <Passport></Passport>

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
              <img
                    v-lazy="{src: news.img, loading: require('../../assets/images/country-loading.png'), error: require('../../assets/images/country-loading.png')}"
                  />
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
    <ContactUs />
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
import Passport from './component/Passport'
import Loading from '../../components/commonComponent/loadingPage'

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
    Passport
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
          url: "/emigrant/four",
          image: require("../../assets/images/project4.jpg")
        },
        {
          title: "家族办公室移民项目",
          text: "资产配置| 资产管理 | 财富继承| 全家移民",
          url: "/emigrant/three",
          image: require("../../assets/images/project3.jpg")
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
// 媒体报道
.media-content {
  position: relative;
  top: -58px;
  z-index: 99;
  border: 1px solid #E5E5E5;
  background: #fff;
  h3 {
    position: relative;
    padding: 0 35px;
    line-height: 114px;
    font-size: 20px;
    font-weight: bold;
    &:after {
      content: '';
      position: absolute;
      width: 1px;
      height: 50px;
      right: 0;
      top: 32px;
      background: #E5E5E5;
    }
  }
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: calc(100% - 170px);
    height: 114px;
    img {
      display: block;
      height: 54px;
    }
  }
  @media(max-width:1120px) {
    ul img {
      height: 40px;
    }
  }
  @media(max-width: 767px) {
    top: -30px;
    border-radius: 5px;
    h3 {
      display: none;
      padding: 0 10px;
      font-size: 14px;
    }
    ul {
      display: block;
      width: 100%;
      height: auto;
      padding: 10px;
      white-space: nowrap;
      text-align: left;
      overflow: auto;
      li {
        display: inline-block;
        margin: 0 5px;
        img {
          height: 34px;
        }
      }
    }
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
        img {
          display: block;
          width: 100%;
        }
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
            height: 144px;
            line-height: 24px;
            overflow: hidden;     
            display: -webkit-box;
            -webkit-line-clamp: 6;
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
    @media (max-width: 767px) {
      white-space: nowrap;
      overflow: auto;
      padding: 30px 0 20px;
      &::-webkit-scrollbar {
        height: 0px;
      } 
      ul {
        width: 920px;
        margin: 0 -10px;
      }
      li {
        float: left;
        width: 230px;
        padding: 0 5px;
        white-space: initial;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        a.a {
          .d {
            padding: 15px;
            h3 {
              display: block;
              font-size: 16px;
              height: 24px;
              -webkit-line-clamp: 1;
            }
            p {
              height: 55px;
              font-size: 12px;
              line-height: 18px;
              -webkit-line-clamp: 3;
            }
            span {
              font-size: 12px;
              a {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
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
</style>
<style lang="less">
.home.loading {
  position: static;
  padding: 200px 0;
  transform: translate(0, 0);
}
</style>