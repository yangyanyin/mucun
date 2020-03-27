<template>
  <Layout>
    <Banner :bannerImgList="bannerData" />

    <div class="pc-max-width">
      <div class="menu">
        <a><i><img src="../../assets/images/country9.png" />新加坡绿卡项目</i></a>
        <a><i><img src="../../assets/images/country10.png" />菲律宾绿卡项目</i></a>
        <a><i><img src="../../assets/images/country11.png" />马来西亚绿卡项目</i></a>
      </div>
      <div class="content">
        <!-- 新加坡 -->
        <div class="list">
          <img src="../../assets/images/card-singapore.jpg" class="bg" />
          <div class="info">
            <span>
              <img src="../../assets/images/Singapore-passport.png" />
            </span>
            <h3>新加坡 / Singapore</h3>
            <p>最快45天登陆新加坡，精英首选</p>
            <router-link to="/singapore-details">查看详情 <img src="../../assets/images/cadr-router.png" /></router-link>
          </div>
        </div>

        <!-- 菲律宾 -->
        <div class="list">
          <img src="../../assets/images/card-philippines.jpg" class="bg" />
          <div class="info">
            <span>
              <img src="../../assets/images/Philippinespassport-passport.png" />
            </span>
            <h3>菲律宾 / Philippines</h3>
            <p>永久居住的申请门槛低,存入2万美元即可获得</p>
            <router-link to="/philippines-details">查看详情 <img src="../../assets/images/cadr-router.png" /></router-link>
          </div>
        </div>

        <!-- 马来西亚 -->
        <div class="list">
          <img src="../../assets/images/card-malaysia.jpg" class="bg" />
          <div class="info">
            <span>
              <img src="../../assets/images/Malaysia-passport.png" />
            </span>
            <h3>马来西亚 / Malaysia</h3>
            <p>一人申请，全家都可获得绿卡</p>
            <router-link to="/malaysia-details">查看详情 <img src="../../assets/images/cadr-router.png" /></router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 联系我们 -->
    <ContactUs />
  </Layout>
</template>

<script>
import Layout from "../../components/layout.vue";
import { animation, windowScroll } from "../../assets/js/config.js";
import ContactUs from "../../components/commonComponent/ContactUs";
import Banner from "../../components/commonComponent/banner.vue";

export default {
  components: {
    Layout,
    ContactUs,
    Banner
  },
  data () {
    return {
      bannerData: [
        {img: require("../../assets/images/Singapore-banner.jpg")},
        {img: require("../../assets/images/Philippines-banner.jpg")},
        {img: require("../../assets/images/Malaysia-banner.jpg")},
      ]
    }
  },
  mounted() {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    animation(scroll);
    windowScroll();
  }
};
</script>
<style lang="less" scoped>
.banner {
  display: block;
  img {
    display: block;
    width: 100%;
  }
}
.menu {
  position: relative;
  z-index: 1;
  height: 80px;
  margin: -40px 0 20px 0;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 3px 0 #ababab;
  text-align: center;
  a {
    display: inline-block;
    width: 25%;
    line-height: 80px;
    cursor: pointer;
    color: #111;
    img {
      display: inline-block;
      width: 40px;
      margin-right: 15px;
    }
    i {
      font-size: 16px;
    }
    &.router-link-active {
      i {
        color: #447375;
        padding: 28px 0;
        font-weight: bold;
        border-bottom: 4px  solid #447375;
      }
    }
    &:hover {
      i {
        color: #447375;
        padding: 28px 0;
        border-bottom: 4px  solid #447375;
      }
    }
  }
  @media (max-width: 767px) {
    white-space: nowrap;
    height: 70px;
    overflow-x: auto;
    padding: 0 10px;
    &::-webkit-scrollbar {
      width: 5px;
      height: 0px;
    } 
    a {
      line-height: inherit;
      width: auto;
      padding: 25px 10px;
      i {
        padding: 12px 0;
        font-size: 14px;
      }
      &.router-link-active {
        i {
          color: #447375;
          padding: 21px 0;
          font-weight: bold;
          border-bottom: 4px  solid #447375;
        }
      }
    }
  }
}

.list {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 40px;
  img {
    display: block;
    width: 100%;
  }
  .info {
    position: absolute;
    left: 35px;
    bottom: 0;
    right: 0;
    bottom: 40px;
    z-index: 1;
    padding-left: 120px; 
    span {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100px;
      box-shadow: 0 0 3px #484848;
    }
    h3 {
      color: #fff;
      font-size: 22px;
    }
    p {
      color: #fff;
      margin: 10px 0 5px 0;
      font-size: 15px;
    }
    a {
      position: absolute;
      right: 55px;
      bottom: 0;
      width: 160px;
      height: 50px;
      z-index: 1;
      border-radius: 50px;
      color: #fff;
      text-align: center;
      line-height: 50px;
      background: rgba(0, 0, 0, 0.6);
      img {
        display: inline-block;
        width: 14px;
        margin-left: 5px;
        transition: .3s;
      }
      &:hover {
        img {
          transform: translateX(10px);
        }
      }
    }
  }
}
</style>

