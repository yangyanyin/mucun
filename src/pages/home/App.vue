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
      <div class="index-contact pc-max-width margin-t-80">
        <div class="content animation-show clearfix">
          <div class="map left">
            地图
          </div>
          <div class="input-box right">
            <h3>免费咨询服务</h3>
            <p><i>电话:</i><strong>123131</strong></p>
            <p><i>邮箱:</i>这是邮箱</p>
            <p><i>地址:</i>这是地址</p>
            <ul class="clearfix">
              <li>
                <input class="name" type="text" placeholder="您的称呼" v-model="userName" />
                <span v-if="nameError">请输入称呼！</span>
              </li>
              <li>
                <input class="tel" type="tel" placeholder="您的电话" v-model="userTel" />
                <span v-if="telError">请输入电话！</span>
              </li>
              <li>
                <input class="email" type="email" placeholder="您的电邮" v-model="userEmail" />
                <span v-if="emailErroe">请输入正确的邮箱！</span>
              </li>
            </ul>
            <a class="submit" @click="submitUserInfo">
              <template v-if="!messageLoading">立即咨询</template>
              <img v-else src="../../assets/images/message-loading.png" />
            </a>
          </div>
        </div>
        <ul class="flag">
            <li>
              <img src="../../assets/images/footer-country1.png" />
            </li>
            <li>
              <img src="../../assets/images/footer-country2.png" />
            </li>
            <li>
              <img src="../../assets/images/footer-country3.png" />
            </li>
            <li>
              <img src="../../assets/images/footer-country4.png" />
            </li>
            <li>
              <img src="../../assets/images/footer-country5.png" />
            </li>
            <li>
              <img src="../../assets/images/footer-country6.png" />
            </li>
            <li>
              <img src="../../assets/images/footer-country7.png" />
            </li>
        </ul>
      </div>
    </template>

    <!--咨询完成弹窗 -->
    <div class="message-success" :class="{on:messageSuccess}" v-if="messageSuccess">
      <div class="content">
        <span class="close">
          <img src="../../assets/images/close.png" @click="closeMessage" />
        </span>
        <img src="../../assets/images/index/message-img.jpg" />
        <p class="p1">感谢您使用我们的免费咨询服务</p>
        <p class="p1">我们稍后会联系您</p>
        <p class="p1">您也可以拨打</p>
        <p class="tel">(+65) 8866 5586</p>
        <p class="p2">进行直接咨询</p>
        <a href="/passport">了解更多</a>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../components/layout.vue";
import Banner from "./component/banner.vue";
import "./index.less";
import { animation, windowScroll, device } from "../../assets/js/config.js";
import loadingPage from "../../components/commonComponent/loadingPage.vue";

export default {
  name: "app",
  components: {
    Layout,
    Banner,
    loadingPage
  },
  data() {
    return {
      isLoadingsTatus: false,
      bannerImg: "",
      countryPassport: "",
      userName: "",
      userTel: "",
      userEmail: "",
      nameError: false,
      telError: false,
      emailErroe: false,
      messageSuccess: false,
      messageLoading: false
    };
  },
  methods: {
    submitUserInfo() {
      let _this = this;
      setTimeout(function() {
        _this.nameError = false;
        _this.telError = false;
        _this.emailErroe = false;
      }, 2000);
      if (this.userName === "") {
        this.nameError = true;
        return false;
      } else if (this.userTel === "") {
        this.telError = true;
        return false;
      } else if (this.userEmail === "") {
        this.emailErroe = true;
        return false;
      } else if (!this.isEmail(this.userEmail)) {
        this.emailErroe = true;
        return false;
      }
      let params = {
        name: this.userName,
        phone: this.userTel,
        email: this.userEmail
      };
      _this.messageLoading = true;
      setTimeout(function() {
        _this
          .$http({
            method: "post",
            url: process.env.VUE_APP_API + "/v1/contact",
            params
          })
          .then(res => {
            if (res.data.code === 200) {
              _this.userName = "";
              _this.userTel = "";
              _this.userEmail = "";
              _this.messageSuccess = true;
              _this.messageLoading = false;
            }
          });
      }, 2000);
    },
    closeMessage() {
      this.messageSuccess = false;
    },
    isEmail(email) {
      let regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }
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

