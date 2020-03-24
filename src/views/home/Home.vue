<template>
  <Loading v-if="!loadingStatus" />
  <Layout v-else>
    <!-- banner -->
    <Banner :bannerImgList="bannerImg" />

    <!-- 视频 -->
    <div class="video pc-max-width">
      <div class="animation-show">
        <Flag />
      </div>
      <div class="animation-show">
        <video width="100%" controls="controls" autoplay="autoplay" muted>
          <source src="../../assets/images/video.mp4" type="video/mp4" />Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <!-- 为什么选择我们 -->
    <div class="choose-us margin-t-80">
      <div class="pc-max-width">
        <div class="title animation-show">
          <h3>选|择|我|们</h3>
          <span>CHOOSE US</span>
        </div>
        <div class="content animation-show">
          <p>新加坡全球护照交流中心是新加坡华人圈最具影响力的移民公司，是政府官方牌照直接办理。</p>
          <p>对新加坡移民最新的移民政策了解，通相关的政府部门有着密切的关系。优秀的移民文案经验丰富，可以为申请人量身定做全面、成熟的移民规划，至今保持了100%的成功率。</p>
          <p>新加坡全球护照交流中心立足狮城，放眼亚洲，专业服务于亚洲成功精英。</p>
          <ul class="clearfix character">
            <li>
              <img src="../../assets/images/us-img1.png" />
            </li>
            <li>
              <img src="../../assets/images/us-img1-1.png" />
            </li>
            <li>
              <img src="../../assets/images/us-img2.png" />
            </li>
            <li>
              <img src="../../assets/images/us-img2-2.png" />
            </li>
            <li>
              <img src="../../assets/images/us-img3.png" />
            </li>
            <li>
              <img src="../../assets/images/us-img3-3.png" />
            </li>
            <li>
              <img src="../../assets/images/us-img4-4.png" />
            </li>
            <li>
              <img src="../../assets/images/us-img4.png" />
            </li>
            <li>
              <img src="../../assets/images/us-img5-5.png" />
            </li>
            <li>
              <img src="../../assets/images/us-img5.png" />
            </li>
            <li>
              <img src="../../assets/images/us-img6-6.png" />
            </li>
            <li>
              <img src="../../assets/images/us-img6.png" />
            </li>
          </ul>
        </div>
      </div>
    </div>

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

    <!-- 移民专家 -->
    <div class="expert pc-max-width margin-t-80" v-if="newsData.expert.news.length > 0">
      <div class="public-title animation-show">
        <h3>新加坡移民专家</h3>
        <span>
          <i>
            <img src="../../assets/images/title-img1.png" />
          </i>
        </span>
        <p>Singapore MIGRATION EXPERT</p>
      </div>
      <NewModule type="expert" :newsList="newsData.expert" />
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
          <p>global passport selection</p>
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

    <!-- 护照专题 -->
    <div class="thematic pc-max-width margin-t-80" v-if="newsData.thematic.news.length > 0">
      <div class="public-title animation-show">
        <h3>护照专题</h3>
        <span>
          <i>
            <img src="../../assets/images/title-img1.png" />
          </i>
        </span>
        <p>Passport topics</p>
      </div>
      <NewModule type="thematic" :newsList="newsData.thematic" />
    </div>

    <!-- 成功案例 -->
    <div class="success-case margin-t-80" v-if="newsData.case.news.length > 0">
      <div class="public-title animation-show">
        <h3>成功案例</h3>
        <span>
          <i>
            <img src="../../assets/images/title-img2.png" />
          </i>
        </span>
        <p>Successful Cases</p>
      </div>
      <ul class="pc-max-width content clearfix animation-show">
        <li v-for="(news, index) in 4" :key="index">
          <router-link class="a" to="/news-details/1">
            <img src="../../assets/images/new-img.png" />
            <div class="d clearfix">
              <h3>这里是标题</h3>
              <p>这里是描述描述描述描述描述描述描述描述描述描述描述这里是描述描述描述描述描述描述描述描述描述描述描述这里是描述描述描述描述描述描述描述描述描述描述描述这里是描述描述描述描述描述描述描述描述描述描述描述这里是描述描述描述描述描述描述描述描述描述描述描述...</p>
              <span class="left">2020-11-11</span>
              <span class="right"><router-link to="/news-details/1">了解详情</router-link></span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- 我们的优势 -->
    <div class="advantage">
      <div class="pc-max-width">
        <div class="public-title animation-show">
          <h3>我们的优势</h3>
          <span>
            <i>
              <img src="../../assets/images/title-img2.png" />
            </i>
          </span>
          <p>Our Advantages</p>
        </div>
        <div class="content animation-show">
          <div class="list">
            <img src="../../assets/images/advantage-icon1.png" />
            <p>
              官方牌照直营
              <br />不成功不收费
            </p>
          </div>
          <div class="list">
            <img src="../../assets/images/advantage-icon2.png" />
            <p>
              官方牌照直营
              <br />不成功不收费
            </p>
          </div>
          <div class="list">
            <img src="../../assets/images/advantage-icon3.png" />
            <p>
              官方牌照直营
              <br />不成功不收费
            </p>
          </div>
          <div class="list">
            <img src="../../assets/images/advantage-icon4.png" />
            <p>
              官方牌照直营
              <br />不成功不收费
            </p>
          </div>
        </div>
      </div>
      <div class="label">
        <ul class="pc-max-width">
          <li>护照项目100%成功率</li>
          <li>费用100%透明</li>
          <li>隐私安全</li>
          <li>资料全程加密</li>
          <li>绝对安全管控</li>
        </ul>
      </div>
    </div>

    <!-- 联系我们 -->
    <ContactUs />
  </Layout>
</template>

<script>
import Layout from "../../components/layout.vue";
import Banner from "./component/banner.vue";
import { animation, windowScroll, device } from "../../assets/js/config.js";
import ContactUs from "../../components/commonComponent/ContactUs";
import Flag from "../../components/commonComponent/NationalFlag";
import NewModule from './component/NewModule'
import Loading from '../../components/commonComponent/loadingPage'

export default {
  name: "app",
  components: {
    Layout,
    Banner,
    ContactUs,
    Flag,
    NewModule,
    Loading
  },
  data() {
    return {
      bannerImg: "",
      countryPassport: "",
      items: [
        {
          title: "小额自雇移民项目",
          text: "条件宽松，无语言要求，精英首选方案。",
          url: "/emigrant/one",
          image: require("../../assets/images/project1.jpg")
        },
        {
          title: "股权投资移民项目",
          text: "条件宽松，无语言要求，精英首选方案。",
          url: "/emigrant/tow",
          image: require("../../assets/images/project2.jpg")
        },
        {
          title: "家族办公室移民项目",
          text: "条件宽松，无语言要求，精英首选方案。",
          url: "/emigrant/three",
          image: require("../../assets/images/project3.jpg")
        },
        {
          title: "GIP投资移民项目",
          text: "条件宽松，无语言要求，精英首选方案。",
          url: "/emigrant/four",
          image: require("../../assets/images/project4.jpg")
        }
      ],
      loadingStatus: false,
      newsData: {
        case: '',
        thematic: '',
        expert: ''
      }
    }
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.loadingStatus = true
      let scroll = document.documentElement.scrollTop || document.body.scrollTop;
      windowScroll();
      setTimeout(function() {
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
        for (let i = 0; i < countrys.length; i++) {
          countrys[i].introduction = countrys[i].introduction.replace(
            /[ ]/g,
            "<br />"
          );
        }
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
          if (news[i].name === '护照专题' ) {
            this.newsData.thematic = news[i]
          }
          if (news[i].name === '新加坡移民专家' ) {
            this.newsData.expert = news[i]
          }
          if (news[i].name === '成功案例' ) {
            this.newsData.case = news[i]
          }
        }
      }
    });
  }
};
</script>

<style lang="less" scoped>
/** 选择我们 **/
.choose-us {
  text-align: center;
  padding-top: 60px;
  background: url("../../assets//images/choose-us-bg.png") no-repeat top center;
  background-size: 100%;
  h3 {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 16px;
  }
  span {
    display: block;
    padding-top: 10px;
    font-weight: 600;
    letter-spacing: 3px;
  }
  .content {
    margin-top: 35px;
    p {
      font-size: 16px;
      line-height: 34px;
      padding: 0 100px;
    }
    ul {
      padding-top: 120px;
      li {
        float: left;
        width: 16.66%;
        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 767px) {
    background: #fff;
    padding: 0;
    h3 {
      font-size: 20px;
      letter-spacing: 14px;
    }
    span {
      padding-top: 5px;
    }
    .content {
      text-align: left;
      margin-top: 10px;
      p {
        display: inline;
        padding: 0;
        font-size: 14px;
        line-height: 28px;
      }
      ul {
        padding-top: 20px;
        li {
          width: 33.33%;
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

/** 成功案例 **/
.success-case {
  padding-top: 60px;
  background: url('../../assets/images/success-case-bg.png') no-repeat top center;
  background-size: 1920px;
  @media (max-width: 767px) {
    padding-top: 30px;
    background-size: 1000px;
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
        &:hover {
          transform: scale(1.03);
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
      padding: 30px 5px 20px;
      white-space: nowrap;
      overflow: auto;
      &::-webkit-scrollbar {
        height: 0px;
      } 
      li {
        display: inline-block;
        float: none;
        width: 66%;
        padding: 0 5px;
        white-space: normal;
        a.a {
          box-shadow: 0px 2px 4px #d0d0d0;
          .d {
            padding: 15px;
            h3 {
              font-size: 16px;
            }
            p {
              font-size: 12px;
              line-height: 18px;
            }
            span {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}

/** 我们的优势 **/
.advantage {
  position: relative;
  height: 730px;
  padding: 70px 0;
  background: url("../../assets//images/advantage-bg.png") no-repeat top center;
  background-size: 100% 730px;
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
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 50px 80px;
    .list {
      width: 140px;
      &:hover {
        img {
          transform: scale(1.06);
        }
      }
      img {
        display: block;
        width: 100%;
        transition: .3s;
      }
      p {
        text-align: center;
        padding-top: 10px;
        color: #fff;
        font-size: 17px;
        line-height: 30px;
      }
    }
  }
  .label {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 140px;
    line-height: 140px;
    background: rgba(0, 0, 0, 0.3);
    ul {
      // @media (min-width: 767px) {
      //   display: flex;
      //   flex-flow: row wrap;
      //   justify-content: space-between;
      // }
      text-align: center;
      li {
        display: inline-block;
        padding-left: 26px;
        margin: 0 25px;
        color: #fff;
        font-size: 20px;
        background: url("../../assets/images/hook.png") no-repeat left center;
        background-size: 18px;
        @media (max-width: 1100px) {
          font-size: 18px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    height: 550px;
    padding: 40px 0;
    background-size: auto 550px;
    .content {
      padding: 0;
      justify-content: center;

      .list {
        width: 150px;
        padding: 0 25px;
        margin: 10px 10px 0;
        p {
          font-size: 14px;
          line-height: 24px;
          padding: 0;
        }
      }
    }
    .label {
      height: 70px;
      padding-top: 10px;
      line-height: 24px;
      text-align: center;
      ul {
        li {
          padding: 0 20px;
          margin: 0;
          font-size: 14px;
          background-size: 14px;
        }
      }
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