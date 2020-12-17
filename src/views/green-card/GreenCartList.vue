<template>
  <div>
    <Banner :bannerImgList="bannerData" :autoplay="3000" />

    <div class="pc-max-width">
      <div class="menu">
        <router-link to="/singapore-details"><i><img src="../../assets/images/country9.png" />新加坡绿卡项目</i></router-link>
        <router-link to="/philippines-details"><i><img src="../../assets/images/country10.png" />菲律宾绿卡项目</i></router-link>
        <router-link to="/malaysia-details"><i><img src="../../assets/images/country11.png" />马来西亚绿卡项目</i></router-link>
        <router-link to="/korea-details"><i><img src="../../assets/images/country12.png" />韩国绿卡项目</i></router-link>
        <router-link to="/canada-details"><i><img src="../../assets/images/country13.png" />加拿大绿卡项目</i></router-link>
        <router-link to="/japan-details"><i><img src="../../assets/images/country14.png" />日本绿卡项目</i></router-link>
        <router-link to="/portugal-details"><i><img src="../../assets/images/country15.png" />葡萄牙绿卡项目</i></router-link>
      </div>
      <div class="content">
        <!-- 新加坡 -->
        <div class="list animation-show">
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
        <div class="list animation-show">
          <img src="../../assets/images/card-philippines.jpg" class="bg" />
          <div class="info">
            <span>
              <img src="../../assets/images/Philippines-passport.png" />
            </span>
            <h3>菲律宾 / Philippines</h3>
            <p>永久居住的申请门槛低,存入2万美元即可获得</p>
            <router-link to="/philippines-details">查看详情 <img src="../../assets/images/cadr-router.png" /></router-link>
          </div>
        </div>

        <!-- 马来西亚 -->
        <div class="list animation-show">
          <img src="../../assets/images/card-malaysia.jpg" class="bg" />
          <div class="info">
            <span>
              <img src="../../assets/images/Malaysia-passport.png" />
            </span>
            <h3>马来西亚 / Malaysia</h3>
            <p>一人申请，第二家园项目</p>
            <router-link to="/malaysia-details">查看详情 <img src="../../assets/images/cadr-router.png" /></router-link>
          </div>
        </div>

        <!-- 韩国 -->
        <div class="list animation-show">
          <img src="../../assets/images/card-korea.jpg" class="bg" />
          <div class="info">
            <span>
              <img src="../../assets/images/korea-passport.png" />
            </span>
            <h3>韩国 / Korea</h3>
            <p>飞速定居，5年转永居后，存款全部退还，相等净花费为0</p>
            <router-link to="/korea-details">查看详情 <img src="../../assets/images/cadr-router.png" /></router-link>
          </div>
        </div>

        <!-- 加拿大 -->
        <div class="list animation-show">
          <img src="../../assets/images/card-canada.jpg" class="bg" />
          <div class="info">
            <span>
              <img src="../../assets/images/canada-passpor.png" />
            </span>
            <h3>加拿大 / Canada</h3>
            <p>一人申请，全家都可获得绿卡</p>
            <router-link to="/canada-details">查看详情 <img src="../../assets/images/cadr-router.png" /></router-link>
          </div>
        </div>

        <!-- 日本 -->
        <div class="list animation-show">
          <img src="../../assets/images/card-japan.jpg" class="bg" />
          <div class="info">
            <span>
              <img src="../../assets/images/japan-passport.png" />
            </span>
            <h3>日本 / Japan</h3>
            <p>一人申请，全家都可获得绿卡</p>
            <router-link to="/japan-details">查看详情 <img src="../../assets/images/cadr-router.png" /></router-link>
          </div>
        </div>

         <!-- 日本 -->
        <div class="list animation-show">
          <img src="../../assets/images/card-portugal.jpg" class="bg" />
          <div class="info">
            <span>
              <img src="../../assets/images/portugal-passport.png" />
            </span>
            <h3>葡萄牙 / Portugal</h3>
            <p>一人申请，全家都可获得绿卡</p>
            <router-link to="/portugal-details">查看详情 <img src="../../assets/images/cadr-router.png" /></router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 联系我们 -->
    <ContactUs />
  </div>
</template>

<script>
import { animation, windowScroll } from "../../assets/js/config.js";
import ContactUs from "../../components/commonComponent/ContactUs";
import Banner from "../../components/commonComponent/banner.vue";

export default {
  components: {
    ContactUs,
    Banner
  },
  data () {
    return {
      bannerData: [
        {img: require("../../assets/images/Singapore-banner.jpg")},
        {img: require("../../assets/images/Philippines-banner.jpg")},
        {img: require("../../assets/images/Malaysia-banner.jpg")},
        {img: require("../../assets/images/korea-banner.jpg")},
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
  padding: 0 50px;
  box-shadow: 0 3px 3px 0 #ababab;
  text-align: center;
  display: flex;
  justify-content: space-between;
  
  a {
    display: inline-flex;
    cursor: pointer;
    color: #111;
    align-items: center;
    height: 80px;
    border-bottom: 4px  solid #fff;
    img {
      display: block;
      margin: 0 auto 5px;
      width: 30px;
    }
    i {
      display: block;
      font-size: 14px;
      
    }
    &.router-link-active {
      color: #447375;
      font-weight: bold;
      border-bottom: 4px  solid #447375;
    }
    &:hover {
      color: #447375;
      border-bottom: 4px  solid #447375;
    }
  }
  @media (max-width: 767px) {
    display: none;
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
  @media (max-width: 767px) {
    height: 290px;
    margin: 30px 0 0;
    padding-bottom: 50px;
    border-radius: 0;
    img.bg {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      width: auto;
      height: 240px;
    }
    .info {
      left: 15px;
      bottom: 70px;
      padding-left: 100px;
      span {
        width: 80px;
      }
      h3 {
        font-size: 20px;
      }
      p {
        font-size: 13px;
      }
      a {
        left: -15px;
        right: 0;
        width: calc(100% + 15px);
        bottom: -70px;
        background: #447375;
        border-radius: 5px;
        height: 40px;
        line-height: 40px;
      }
    }
  }
}
</style>

