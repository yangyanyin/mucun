<template>
  <Layout>
    <loadingPage v-if="!loadingSuccess" />
    <template v-else>
      <Banner :bannerImgList="bannerData" :autoplay="4000" />
      <div class="country-main">
        <div class="pc-max-width">
          <div class="country-nav">
            <div class="list">
              <a
                v-for="(navs, index) in navs"
                :key="index"
                :class="{on: index === defaultNav}"
                @click="tabClick(index)"
              ><i>{{navs}}</i></a>
            </div>
          </div>
          <div class="country-list">
            <div
              class="content clearfix brick-item animation-show"
              v-for="(countrs, index) in countryList"
              :key="index"
            >
              <div class="left img">
                <router-link :to="'/project/details/'+ countrs.country_id">
                  <img
                    v-lazy="{src: countrs.img, loading: require('../../assets/images/country-loading.png'), error: require('../../assets/images/country-loading.png')}"
                  />
                  <div class="more">
                    <span>{{countrs.en_name}}</span>
                    <i>{{countrs.visa_free_number}}</i>
                    <p>visa-free sccre</p>
                  </div>
                </router-link>
              </div>
              <div class="right info">
                <h3 class="name">
                  <img v-if="index === 0" src="../../assets/images/country8.png" />
                  <img v-if="index === 1" src="../../assets/images/country5.png" />
                  <img v-if="index === 2" src="../../assets/images/country4.png" />
                  <img v-if="index === 3" src="../../assets/images/country1.png" />
                  <img v-if="index === 4" src="../../assets/images/country2.png" />
                  <img v-if="index === 5" src="../../assets/images/country6.png" />
                  <img v-if="index === 6" src="../../assets/images/country7.png" />
                  <img v-if="index === 7" src="../../assets/images/country3.png" />
                  {{countrs.name}}护照
                </h3>
                <ul class="clearfix">
                  <li>
                    <img src="../../assets/images/country/country-list-icon1.png" />
                    <span>居住要求</span>
                    <h3>{{countrs.require}}</h3>
                  </li>
                  <li>
                    <img src="../../assets/images/country/country-list-icon2.png" />
                    <span>免签国家/地区</span>
                    <h3>{{countrs.visa_free_number}}</h3>
                  </li>
                  <li>
                    <img src="../../assets/images/country/country-list-icon3.png" />
                    <span>移民周期</span>
                    <h3>{{countrs.migrate_cycle}}</h3>
                  </li>
                  <li>
                    <img src="../../assets/images/country/country-list-icon4.png" />
                    <span>证件类型</span>
                    <h3>{{countrs.ID_type}}</h3>
                  </li>
                </ul>
                <ol v-if="countrs.tags.length > 0">
                  <li v-for="(tags, index) in countrs.tags" :key="index">{{tags}}</li>
                </ol>
                <a :href="'/project/details/'+ countrs.country_id">查看详情</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "../../components/layout.vue";
import { animation, windowScroll } from "../../assets/js/config.js";
import loadingPage from "../../components/commonComponent/loadingPage.vue";
import Banner from "../../components/commonComponent/banner.vue";
export default {
  name: "app",
  components: {
    Layout,
    loadingPage,
    Banner
  },
  data() {
    return {
      navs: [],
      defaultNav: 0,
      countryList: "",
      loadingSuccess: false,
      bannerImg: [
        require("../../assets/images/n-list-banner1.jpg"),
        require("../../assets/images/n-list-banner2.jpg"),
        require("../../assets/images/n-list-banner3.jpg"),
        require("../../assets/images/n-list-banner4.jpg"),
        require("../../assets/images/n-list-banner5.jpg"),
        require("../../assets/images/n-list-banner6.jpg")
      ],
      bannerData: []
    };
  },
  methods: {
    tabClick(index) {
      let countryList = document.getElementsByClassName("content");
      let divBox = countryList[index].offsetTop - 100;
      document.body.scrollTop = divBox;
      document.documentElement.scrollTop = divBox;
      this.defaultNav = index;
    }
  },
  mounted() {
    this.$http({
      method: "get",
      url: process.env.VUE_APP_API + "/v1/countries "
    }).then(res => {
      if (res.data.code === 200) {
        this.countryList = res.data.data;
        for (let i = 0; i < this.countryList.length; i++) {
          this.navs.push(this.countryList[i].name);
          this.bannerData[i] = {};
          // this.bannerData[i].name = this.countryList[i].name;
          this.bannerData[i].img = this.bannerImg[i];
        }
        this.loadingSuccess = true;
        setTimeout(function() {
          let scroll =
            document.documentElement.scrollTop || document.body.scrollTop;
          animation(scroll);
          windowScroll();
        }, 10);
      }
    });
  }
};
</script>
<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
.country-main {
  background: #f3f3f3;
  padding-bottom: 80px;
  @media (max-width: 767px) {
    padding-bottom: 40px;
  }
}
.country-nav {
  position: relative;
  z-index: 99;
  width: 100%;
  height: 80px;
  margin: -40px 0 20px 0;
  line-height: 80px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 3px 0 #ababab;
  @media (min-width: 767px) {
    .list {
      display: flex;
      justify-content: space-around;
      -webkit-justify-content: space-around;
      flex-flow: row wrap;
    }
  }

  a {
    display: inline-block;
    text-align: center;
    line-height: 80px;
    cursor: pointer;
    color: #111;
    i {
      font-size: 16px;
    }
    &.on {
      i {
        color: #447375;
        padding: 28px 0;
        font-weight: bold;
        border-bottom: 4px  solid #447375;
      }
    }
    @media (min-width: 767px) {
      &:hover {
        i {
          color: #447375;
          padding: 28px 0;
          border-bottom: 4px  solid #447375;
        }
      }
    }
  }
  @media (max-width: 767px) {
    white-space: nowrap;
    height: 60px;
    line-height: inherit;
    overflow-x: auto;
    padding: 0 10px;
    margin: -25px 0 20px 0;
    &::-webkit-scrollbar {
      width: 5px;
      height: 0px;
    } 
    a {
      line-height: inherit;
      width: auto;
      padding: 20px 10px;
      i {
        padding: 0;
        font-size: 14px;
      }
      &.on {
        position: relative;
        i {
          color: #447375;
          padding: 0;
          font-weight: bold;
          border-bottom: none;
        }
        &:after {
          content: '';
          position: absolute;
          left: 10px;
          right: 10px;
          bottom: 0;
          height: 4px;
          background: #447375;
        }
      }
    }
  }
}
.country-list {
  .content {
    position: relative;
    padding: 30px;
    background: #fff;
    margin-bottom: 40px;
    padding-right: 48%;
    .img {
      width: 100%;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
        transition: 0.5s;
      }
      a {
        display: block;
        position: relative;
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
          transform: translateY(-50%);
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
          @media (max-width: 767px) {
            display: none;
          }
        }
        &:hover {
          img {
            transform: scale(1.1);
          }
        }
      }
    }
    .info {
      position: absolute;
      top: 30px;
      right: 30px;
      height: calc(100% - 60px);
      width: calc(48% - 60px);
      h3.name {
        display: block;
        height: 68px;
        padding-top: 2px;
        color: #111111;
        font-size: 24px;
        border-bottom: 1px solid #bd8c67;
        text-align: center;
        img {
          display: inline-block;
          position: relative;
          top: -1px;
          width: 38px;
          margin-right: 20px;
        }
      }
      ul {
        display: flex;
        justify-content: space-around;
        -webkit-justify-content: space-around;
        flex-flow: row wrap;
        text-align: center;
        padding-top: 24px;
        li {
          display: inline-block;
          img {
            display: block;
            margin: auto;
          }
          span {
            display: block;
            padding: 15px 0;
            color: #828282;
            font-size: 16px;
          }
          h3 {
            color: #bd8c67;
            font-size: 22px;
          }
        }
      }
      ol {
        display: flex;
        justify-content: center;
        -webkit-justify-content: center;
        flex-flow: row wrap;
        text-align: center;
        padding: 30px 0;
        li {
          display: block;
          width: 92px;
          height: 28px;
          margin: 0 10px;
          background: url("../../assets/images/country/claim-bg.png") no-repeat;
          background-size: 100%;
          line-height: 28px;
          padding-left: 15px;
          color: #fff;
        }
      }
      a {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 56px;
        line-height: 56px;
        text-align: center;
        color: #bd8c67;
        font-size: 18px;
        border: 1px solid #bd8c67;
        transition: 0.4s;
        &:hover {
          background: #bd8c67;
          color: #fff;
        }
      }
      @media (max-width: 1200px) {
        display: block;
        h3.name {
          font-size: 20px;
          height: 58px;
          img {
            width: 28px;
            top: -2px;
            margin-right: 10px;
          }
        }
        ul {
          padding: 15px 0 20px 0;
          li {
            span {
              padding: 8px;
            }
            h3 {
              font-size: 20px;
            }
          }
        }
        ol {
          padding: 0;
        }
        a {
          margin-top: 20px;
          height: 40px;
          line-height: 40px;
          font-size: 16px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .content {
      margin: 10px 0 0 0;
      padding: 10px 10px 20px;
      .info {
        position: static;
        width: 100%;
        padding: 0 5px;
        h3.name {
          height: auto;
          padding: 20px 0 15px 0;
        }
        ul {
          li {
            span {
              font-size: 14px;
            }
            h3 {
              font-size: 18px;
            }
          }
        }
        ol {
          li {
            font-size: 12px;
            width: 85px;
            height: 26px;
            line-height: 26px;
            margin: 0 5px;
          }
        }
        a {
          display: block;
          position: static;
          width: 100%;
        }
      }
    }
  }
}
</style>