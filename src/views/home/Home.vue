<template>
  <Loading v-if="!loadingStatus" />
  <Layout v-else>
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
            <a target="_blank" href="http://gd.ifeng.com/a/20200819/14436830_0.shtml"><img src="../../assets/images/media-img2.png"></a>
          </li>
          <li>
            <a target="_blank" href=""><img src="../../assets/images/media-img3.png"></a>
          </li>
          <li>
            <a target="_blank" href="https://edu.163.com/20/0831/17/FLCIBC020029985J.html"><img src="../../assets/images/media-img4.png"></a>
          </li>
          <li>
            <a target="_blank" href="https://biznews.sohu.com/a/419853542_120181749"><img src="../../assets/images/media-img5.png"></a>
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
    <div class="passport margin-t-80">
      <div class="pc-max-width">
        <div class="public-title animation-show">
          <h3>护照项目</h3>
          <span>
            <i>
              <img src="../../assets/images/title-img1.png" />
            </i>
          </span>
          <p>Global citizenship programs</p>
        </div>
        <div class="content clearfix">
          <div
            class="left list animation-show"
            v-for="(countrys, index) in countryPassport"
            :key="index"
          >
            <div class="brick-item">
              <a :href="'/project/details/'+countrys.country_id">
                <img
                  v-lazy="{src: countrys.img, loading: require('../../assets/images/country-loading.png'), error: require('../../assets/images/country-loading.png')}"
                />
                <div class="more">
                  <span>{{countrys.en_name}}</span>
                  <i>{{countrys.visa_free_number}}</i>
                  <p>visa-free sccre</p>
                </div>
              </a>
              <div class="name" :class="{on: index < 2}">
                <div class="rec" v-if="index < 2">
                  推荐指数
                  <i>
                    <img src="../../assets/images/star.png" />
                  </i>
                  <i>
                    <img src="../../assets/images/star.png" />
                  </i>
                  <i>
                    <img src="../../assets/images/star.png" />
                  </i>
                  <i>
                    <img src="../../assets/images/star.png" />
                  </i>
                  <i>
                    <img src="../../assets/images/star.png" />
                  </i>
                </div>
                <a :href="'/project/details/'+countrys.country_id">
                  <strong>{{countrys.name}}</strong>
                </a>
                <p v-html="countrys.introduction"></p>
                <img class="card" :src="countrys.passport" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 绿卡项目 -->
    <div class="green-card">
       <div class="public-title animation-show">
        <h3>绿卡项目</h3>
        <span>
          <i>
            <img src="../../assets/images/title-img2.png" />
          </i>
        </span>
        <p>Green card program</p>
      </div>
      <div class="pc-max-width">
        <GreenBox />
      </div>
    </div>

    <!-- 办理三部曲 -->
    <div class="trilogy">
      <div class="pc-max-width">
        <div class="public-title animation-show">
          <h3>办理三部曲</h3>
          <p>为了确保每一位客户在办理期间万无一失，SGPEC制定具有特色的办理三部曲，即“发现需求”、“确定方案”、“与众不同”。</p>
          <!-- <p>为了确保每一位客户在办理期间万无一失，SGPEC制定具有特色的办理三部曲，即“发现需求”、“确定方案”、“与众不同”，为您提供最佳的一站式海外投资移民服务，协助您获得公民身份。</p> -->
        </div>
        <div class="step clearfix">
          <div class="left animation-show">
            <img src="../../assets/images/step-img1.png" />
            <div>
              <img src="../../assets/images/step-img1.png" />
              <p>
                <strong>第一步 / 了解需求</strong>
                深入研究客户的需求，评估客户个人情况，选择最适合且符合申请条件的项目，提供详细深入的建议。
              </p>
            </div>
            
          </div>
          <div class="left animation-show web-img">
            <div>
              <img src="../../assets/images/step-img2.png" />
              <p>
                <strong>第二步 / 确定方案</strong>
                针对不同客户的需求制定方案，严格筛选项目以确保您的投资安全，给您带来最佳收益。
              </p>
            </div>
            <img src="../../assets/images/step-img2.png" />
          </div>
          <div class="left animation-show wap-img">
            <img src="../../assets/images/step-img2.png" />
            <div>
              <img src="../../assets/images/step-img2.png" />
              <p>
                <strong>第二步 / 确定方案</strong>
                针对不同客户的需求制定方案，严格筛选项目以确保您的投资安全，给您带来最佳收益。
              </p>
            </div>
          </div>
          
          <div class="left animation-show">
            <img src="../../assets/images/step-img3.png" />
            <div>
              <img src="../../assets/images/step-img3.png" />
              <p>
                <strong>第三步 / 与众不同</strong>
                立志做到同行专业水准之上，注重客户隐私、海外资产配置等，尽职监管整个申请流程。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 成功案例 -->
    <div class="success-case" v-if="newCase.length > 0">
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

    <!-- 我们的优势 -->
    <Advantage></Advantage>

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

    <!--  -->
    <div class="contact-window" :class="{'show': contactWindow}" v-if="contactWindow">
      <div class="content">
        <span class="close" @click="hideContactWindow">
          <img src="../../assets/images/close.png" />
        </span>
        <h3>新加坡全球护照交流中心</h3>
        <p>直营新加坡移民/银行开户/新加坡留学，家族办公室，欧盟&英联邦快速护照，不成功不收费。</p>
        <a>点击客服了解更多详情</a>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '../../components/layout.vue'
import Banner from './component/banner.vue'
import OurTeam from './component/OurTeam.vue'
import VideoAbout from './component/VideoAbout'
import Advantage from './component/Advantage'
import { animation, windowScroll, device } from '../../assets/js/config.js'
import ContactUs from '../../components/commonComponent/ContactUs'
import NewModule from './component/NewModule'
import GreenBox from './component/GreenBox'
import Loading from '../../components/commonComponent/loadingPage'

export default {
  name: 'home',
  components: {
    Layout,
    Banner,
    ContactUs,
    NewModule,
    Loading,
    GreenBox,
    OurTeam,
    VideoAbout,
    Advantage
  },
  data() {
    return {
      bannerImg: "",
      countryPassport: "",
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
      newCase: [],
      contactWindow: false
    }
  },
  methods: {
    hideContactWindow () {
      this.contactWindow = false
    }
  },
  mounted() {
    setTimeout(() => {
      this.loadingStatus = true
      let scroll = document.documentElement.scrollTop || document.body.scrollTop;
      windowScroll();
      setTimeout(() => {
        this.contactWindow = true
        animation(scroll);
      }, 10);
    }, 2000)

    this.$http({
      method: "get",
      url: process.env.VUE_APP_API + "/v1/index"
    }).then(res => {
      if (res.data.code === 200) {
        this.bannerImg = res.data.data.banners[device()];
        
      }
    });

    this.$http({
      method: "get",
      url: process.env.VUE_APP_API + "/v1/countries "
    }).then(res => {
      if (res.data.code === 200) {
        let countrys = res.data.data;
        this.countryPassport = countrys;
      }
    });

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
      text-align: left;
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

/** 全球护照精选 **/
.passport {
  background: #f7f7f7;
  padding: 80px 0;
  .public-title span i {
    background: none;
  }
  .content {
    margin: 30px -10px 0;
  }
  .list {
    width: 50%;
    padding: 20px 10px 0;
    text-align: center;
    .brick-item {
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
    }
    a {
      display: block;
      overflow: hidden;
      position: relative;
      img {
        transition: 0.5s;
        width: 100%;
      }
      .more {
        position: absolute;
        z-index: 9;
        top: 50%;
        left: 50%;
        width: 110px;
        text-align: center;
        color: #fff;
        margin-left: -55px;
        border: 1px solid #fff;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        text-transform: uppercase;
        padding: 10px 0;
        opacity: 0;
        transition: 0.5s;
        background: rgba(0, 0, 0, 0.5);
        transform: scale(0.7) translateY(-50%);
        span {
          font-size: 14px;
        }
        i {
          position: relative;
          display: block;
          margin: 22px auto;
          width: 36px;
          height: 36px;
          line-height: 34px;
          font-size: 16px;
          &:after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 36px;
            height: 36px;
            border: 1px solid #fff;
            transform: rotate(45deg);
          }
        }
        p {
          font-size: 12px;
        }
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
        .more {
          opacity: 1;
          transform: scale(1) translateY(-50%);
        }
      }
    }
    .name {
      position: relative;
      background: #fff;
      height: 130px;
      text-align: left;
      padding-left: 30px;
      padding-top: 15px;
      &.on {
        height: 150px;
      }
      .rec {
        font-size: 16px;
        color: #f0c671;
        font-weight: bold;
        i {
          position: relative;
          top: 1px;
          display: inline-block;
          width: 17px;
          margin-left: 3px;
          &:first-child {
            margin-left: 7px;
          }
          img {
            display: block;
            width: 100%;
          }
        }
      }
      strong {
        display: block;
        padding: 12px 0 5px 0;
        font-size: 20px;
        color: #111;
      }
      p {
        line-height: 24px;
      }
      img.card {
        position: absolute;
        right: 35px;
        bottom: 35px;
        width: 17%;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
  }
  @media (max-width: 767px) {
    margin: 0;
    padding: 20px 0;
    .content {
      margin: 0;
      padding-top: 20px;
      .list {
        width: 100%;
        padding: 0;
        margin-top: 10px;
        .name {
          height: 105px;
          padding-left: 20px;
          &.on {
            height: 125px;
            img.card {
              right: 20px;
              bottom: 55px;
            }
          }
          strong {
            font-size: 18px;
            padding: 5px 0 3px;
          }
          p {
            line-height: 18px;
            font-size: 13px;
          }
          .rec {
            font-size: 14px;
            i {
              width: 14px;
              margin-left: 2px;
            }
          }
          img.card {
            right: 20px;
          }
        }
      }
    }
  }
}

/** 办理三部曲 **/
.trilogy {
  background: #f7f7f7;
  padding: 100px 0 80px;
  .public-title {
    h3 {
      letter-spacing: 15px;
    }
    p {
      position: relative;
      padding-top: 30px;
      line-height: 26px;
      font-size: 16px;
    }
  }
  .step {
    margin-top: 50px;
    div.left {
      background: #fff;
      width: 33.33%;
      img {
        display: block;
        width: 100%;
      }
      > div {
        position: relative;
        img {
          opacity: 0;
        }
        p {
          position: absolute;
          top: 0;
          left: 0;
          padding: 40px;
          strong {
            position: relative;
            display: block;
            font-size: 24px;
            font-weight: normal;
            margin-bottom: 40px;
            &:after {
              content: '';
              position: absolute;
              left: 0;
              top: 50px;
              width: 30px;
              height: 4px;
              background: #447375;
            }
          }
          @media (max-width: 1100px) {
            padding: 30px;
            strong {
              margin-bottom: 35px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    padding: 40px 0 0;
    .public-title {
      p {
        padding-top: 15px;
        line-height: 22px;
      }
    }
    .step {
      margin: 0 -10px;
      margin-top: 30px;
      div.left {
        float: none;
        width: 100%;
        padding-bottom: 10px;
        > div {
          img {
            display: none;
          }
          p {
            position: static;
            padding: 15px;
            strong {
              font-size: 18px;
              margin-bottom: 20px;
              &:after {
                top: 33px;
                height: 2px;
              }
            }
          }
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

.contact-window {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  &.show {
    display: block;
    .content {
      animation: contactWindow 2s both;
    }
  }
  .content {
    position: absolute;
    top: 200%;
    left: 50%;
    margin: -300px 0 0 -240px;
    width: 480px;
    height: 600px;
    padding: 70px;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    background: url('../../assets/images/contact-window-bg.png') no-repeat top center;
    background-size: 100%;
    .close {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 15px;
      height: 15px;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
      img {
        display: block;
        width: 100%;
      }
    }
    h3 {
      position: relative;
      padding-bottom: 20px;
      font-size: 20px;
      color: #fff;
      &:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 40px;
        height: 3px;
        margin-left: -20px;
        background: #fff;
      }
    }
    p {
      margin-top: 30px;
      font-size: 26px;
      line-height: 50px;
      color: #fff;
    }
    a {
      display: inline-block;
      width: 244px;
      height: 50px;
      margin-top: 50px;
      line-height: 50px;
      background: #FFE19A;
      border-radius: 30px;
      color: #1D4647;
      font-size: 17px;
    }
    @media (max-width: 767px) {
      left: 10px;
      right: 10px;
      width: auto;
      height: auto;
      transform: translateY(-50%);
      margin: auto;
      padding: 50px 30px;
      h3 {
        font-size: 16px;
        margin-bottom: 15px;
        &:after {
          bottom: 0px;
        }
      }
      p {
        margin-top: 20px;
        font-size: 16px;
        line-height: 26px;
      }
      a {
        width: 200px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        margin-top: 30px;
      }
    }
  }
}
@keyframes contactWindow {
  20% {
    top: 42%;
  }
  40% {
    top: 58%;
  }
  60% {
    top: 47%;
  }
  80% {
    top: 53%;
  }
  100% {
    top: 50%;
  }
}
</style>