<template>
  <Layout>
    <loadingPage v-if="!isLoadingsTatus" />
    <template v-else>
      <!-- banner -->
      <Banner :bannerImgList="bannerImg" />

      <!-- 为什么选择我们 -->
      <div class="choose-us pc-max-width margin-t-80">
          <div class="title">
            <h3>选|择|我|们</h3>
            <p>CHOOSE US</p>
          </div>
        <div class="content">
          
        </div>
      </div>

      <!-- 移民专家 -->
      <div class="expert pc-max-width">
        <div class="public-title animation-show">
          <h3>新加波移民专家</h3>
          <span>
          </span>
          <p>global passport selection</p>
        </div>
        <div class="content clearfix">
        </div>
      </div>

      <!-- 全球护照精选 -->
      <div class="passport margin-t-80">
        <div class="pc-max-width">
          <div class="public-title animation-show">
            <h3>护照项目</h3>
            <span>
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
                    <i><img src="../../assets/images/star.png"></i>
                    <i><img src="../../assets/images/star.png"></i>
                    <i><img src="../../assets/images/star.png"></i>
                    <i><img src="../../assets/images/star.png"></i>
                    <i><img src="../../assets/images/star.png"></i>
                  </div>
                  <a :href="'/project/details/'+countrys.country_id">
                    <strong>{{countrys.name}}</strong>
                  </a>
                  <p v-html="countrys.introduction"></p>
                  <img :src="countrys.passport" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 护照专题 -->
      <div class="thematic pc-max-width">
        <div class="public-title animation-show">
          <h3>护照专题</h3>
          <span>
          </span>
          <p>global passport selection</p>
        </div>
        <div class="content clearfix">
        </div>
      </div>

      <!-- 成功案例 -->
      <div class="success-case pc-max-width">
        <div class="public-title animation-show">
          <h3>成功案例</h3>
          <span>
          </span>
          <p>global passport selection</p>
        </div>
        <div class="content clearfix">
        </div>
      </div>

      <!-- 我们的优势 -->
      <div class="advantage pc-max-width">
        <div class="public-title animation-show">
          <h3>我们的优势</h3>
          <span>
          </span>
          <p>global passport selection</p>
        </div>
        <div class="content clearfix">
        </div>
      </div>

      <!-- 联系我们 -->
      <ContactUs />
    </template>
  </Layout>
</template>

<script>
import Layout from "../../components/layout.vue";
import Banner from "./component/banner.vue";
import "./index.less";
import { animation, windowScroll, device } from "../../assets/js/config.js";
import loadingPage from "../../components/commonComponent/loadingPage.vue";
import ContactUs from "../../components/commonComponent/ContactUs";

export default {
  name: "app",
  components: {
    Layout,
    Banner,
    loadingPage,
    ContactUs
  },
  data() {
    return {
      isLoadingsTatus: false,
      bannerImg: "",
      countryPassport: ""
    };
  },
  methods: {
 
  },
  mounted() {
    this.$http({
      method: "get",
      url: process.env.VUE_APP_API + "/v1/index"
    }).then(res => {
      if (res.data.code === 200) {
        this.bannerImg = res.data.data.banners[device()];
        // this.isLoadingsTatus = true
        setTimeout(function() {
          animation(scroll);
        }, 10);
      }
    });

    this.$http({
      method: "get",
      url: process.env.VUE_APP_API + "/v1/countries "
    }).then(res => {
      if (res.data.code === 200) {
        this.isLoadingsTatus = true;
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
    windowScroll();
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  }
};
</script>

