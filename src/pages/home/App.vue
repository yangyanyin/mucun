<template>
  <Layout>
    <loadingPage v-if="!isLoadingsTatus" />
    <template v-else>
      <!-- banner -->
      <Banner :bannerImgList="bannerImg" />

      <!-- 视频 -->
      <div class="video pc-max-width">
        <div class="animation-show">
          <Flag />
        </div>
        <div class="animation-show">
          <video width="100%" controls>
            <source src="../../assets/images/video.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <!-- 为什么选择我们 -->
      <div class="choose-us margin-t-80 ">
        <div class="pc-max-width">
          <div class="title animation-show">
            <h3>选|择|我|们</h3>
            <span>CHOOSE US</span>
          </div>
          <div class="content animation-show">
            <p>新加坡全球护照交流中心是新加坡华人圈最具影响力的移民公司，是政府官方牌照直接办理。</p>
            <p>对新加坡移民最新的移民政策了解，通相关的政府部门有着密切的关系。优秀的移民文案经验丰富，可以为申请人量身定做全面、成熟的移民规划，至今保持了100%的成功率。</p>
            <p>新加坡全球护照交流中心立足狮城，放眼亚洲，专业服务于亚洲成功精英。</p>
            <ul class="clearfix">
              <li><img src="../../assets/images/us-img1.png" /></li>
              <li><img src="../../assets/images/us-img1-1.png" /></li>
              <li><img src="../../assets/images/us-img2.png" /></li>
              <li><img src="../../assets/images/us-img2-2.png" /></li>
              <li><img src="../../assets/images/us-img3.png" /></li>
              <li><img src="../../assets/images/us-img3-3.png" /></li>
              <li><img src="../../assets/images/us-img4-4.png" /></li>
              <li><img src="../../assets/images/us-img4.png" /></li>
              <li><img src="../../assets/images/us-img5-5.png" /></li>
              <li><img src="../../assets/images/us-img5.png" /></li>
              <li><img src="../../assets/images/us-img6-6.png" /></li>
              <li><img src="../../assets/images/us-img6.png" /></li>
            </ul>
          </div>
        </div>
      </div>

      

      <!-- 新加波移民 -->
      <div class="singapore pc-max-width margin-t-80">
        <div class="public-title animation-show">
          <h3>新加波移民</h3>
          <span>
            <i><img src="../../assets/images/title-img1.png" /></i>
          </span>
          <p>SINGAPORE PROGRAMS</p>
        </div>
        <div class="content clearfix animation-show">
          <vue-accordion :items="items" accordionClass="list"></vue-accordion>
        </div>
      </div>

      <!-- 移民专家 -->
      <div class="expert pc-max-width margin-t-80">
        <div class="public-title animation-show">
          <h3>新加波移民专家</h3>
          <span>
            <i><img src="../../assets/images/title-img1.png" /></i>
          </span>
          <p>Singapore MIGRATION EXPERT</p>
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
              <i><img src="../../assets/images/title-img1.png" /></i>
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
                  <img class="card" :src="countrys.passport" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 护照专题 -->
      <div class="thematic pc-max-width margin-t-80">
        <div class="public-title animation-show">
          <h3>护照专题</h3>
          <span>
            <i><img src="../../assets/images/title-img1.png" /></i>
          </span>
          <p>Passport topics</p>
        </div>
        <div class="content clearfix">
        </div>
      </div>

      <!-- 成功案例 -->
      <div class="success-case pc-max-width margin-t-80">
        <div class="public-title animation-show">
          <h3>成功案例</h3>
          <span>
            <i><img src="../../assets/images/title-img1.png" /></i>
          </span>
          <p>Successful Cases</p>
        </div>
        <div class="content clearfix">
        </div>
      </div>

      <!-- 我们的优势 -->
      <div class="advantage margin-t-80">
        <div class="pc-max-width">
          <div class="public-title animation-show">
            <h3>我们的优势</h3>
            <span>
              <i><img src="../../assets/images/title-img2.png" /></i>
            </span>
            <p>Our Advantages</p>
          </div>
          <div class="content">
            <div class="list">
              <img src="../../assets/images/advantage-icon1.png" />
              <p>官方牌照直营<br />不成功不收费</p>
            </div>
            <div class="list">
              <img src="../../assets/images/advantage-icon2.png" />
              <p>官方牌照直营<br />不成功不收费</p>
            </div>
            <div class="list">
              <img src="../../assets/images/advantage-icon3.png" />
              <p>官方牌照直营<br />不成功不收费</p>
            </div>
            <div class="list">
              <img src="../../assets/images/advantage-icon4.png" />
              <p>官方牌照直营<br />不成功不收费</p>
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

      <!--  -->
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
import Flag from "../../components/commonComponent/NationalFlag";

export default {
  name: "app",
  components: {
    Layout,
    Banner,
    loadingPage,
    ContactUs,
    Flag
  },
  data() {
    return {
      isLoadingsTatus: false,
      bannerImg: "",
      countryPassport: "",
      items: [
        {
          title: '小额自雇移民项目',
          text: '条件宽松，无语言要求，精英首选方案。',
          url: '/emigrant/one',
          image: require('../../assets/images/project1.jpg')
        },
        {
          title: '股权投资移民项目',
          text: '条件宽松，无语言要求，精英首选方案。',
          url: '/emigrant/tow',
          image: require('../../assets/images/project2.jpg')
        },
        {
          title: '家族办公室移民项目',
          text: '条件宽松，无语言要求，精英首选方案。',
          url: '/emigrant/three',
          image: require('../../assets/images/project3.jpg')
        },
        {
          title: 'GIP投资移民项目',
          text: '条件宽松，无语言要求，精英首选方案。',
          url: '/emigrant/four',
          image: require('../../assets/images/project4.jpg')
        }
      ]
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

