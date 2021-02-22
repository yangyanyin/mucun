<template>
  <div
    class="header"
    :class="{ 'is-fixed': isFixed, 'all-fixed': headerFixed }"
  >
    <img style="display: none" src="../../assets/images/country-loading.png" />
    <div class="pc-max-width clearfix">
      <div class="logo left">
        <a href="/">
          <span class="img"><img src="../../assets/images/logo.png" /></span>
          <span class="img-text"
            ><img src="../../assets/images/logo-text.png"
          /></span>
        </a>
      </div>
      <div class="right">
        <Hotline />
      </div>
    </div>
    <ul class="navs">
      <li
        v-for="(navs, index) in navList"
        :key="index"
        :class="{ 'service-btn': navs.downText }"
      >
        <router-link class="m" :to="navs.url">
          {{ navs.name }}
          <i></i>
        </router-link>
        <div v-if="navs.down" class="project-select">
          <router-link
            :to="menu.url"
            v-for="(menu, key) in projectDown[navs.page]"
            :key="key"
          >
            <img :src="menu.passport" />
            <span>{{ menu.name }}</span>
          </router-link>
        </div>
        <div v-if="navs.downText" class="service-select">
          <router-link :to="menu.url" v-for="(menu, key) in service" :key="key">
            <img :src="menu.passport" />
            <span>{{ menu.name }}</span>
          </router-link>
        </div>
      </li>
    </ul>
    <button class="wap-nav-botton" @click="showNav" :class="{ on: showWapNav }">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <div class="wap-nav-list" :class="{ on: showWapNav }">
      <ul>
        <li v-for="(navs, index) in wapNavList" :key="index">
          <router-link class="main-link" v-if="navs.url" :to="navs.url" @click.native="showNav">{{
            navs.name
          }}</router-link>
          <span class="main-link" v-else @click="showChildDome(index)">
            {{ navs.name }} 
          </span>
          <transition name="fade">
            <div class="child" v-if="downIndex.indexOf(index) >= 0">
              <router-link
                v-for="(child, key) in navs.childNav"
                :key="key"
                :to="child.url"
                @click.native="showNav"
                :class="{flag: child.flag}"
                >
                  <em v-if="child.recommend"><i>推荐</i></em>
                  <img v-if="child.flag" :src="child.flag" :alt="child.name" />
                  {{ child.name }}
                </router-link
              >
            </div>
          </transition>
          <i class="down" v-if="!navs.url"></i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Hotline from "./Hotline";
export default {
  components: {
    Hotline,
  },
  data() {
    return {
      showWapNav: false,
      navList: [
        {
          name: "首页",
          url: "/",
          page: "home",
        },
        {
          name: "新加坡移民",
          url: "/emigrant/four",
          page: "emigrant",
        },
        {
          name: "狮城留学",
          url: "/overseas-study/one",
          page: "overseaSstudy",
        },
        {
          name: "资产配置",
          url: "/asset",
          page: "asset",
        },
        {
          name: "绿卡项目",
          url: "/green-cart",
          down: true,
          page: "green",
        },
        {
          name: "增值服务",
          url: "/project",
          downText: true,
          page: "service",
        },
        {
          name: "成功案例",
          url: "/news-case",
          page: "news",
        },
        {
          name: "关于我们",
          url: "/about",
          page: "about",
        },
      ],
      detailsUrl: this.$route.meta.page,
      projectDown: {
        project: [
          {
            url: "/project/vanuatu",
            passport:
              "https://cms.aicassets.com/images/default/5e7acd99c5e39.png",
            name: "瓦努阿图",
          },
          {
            url: "/project/saint-kitts",
            passport:
              "https://cms.aicassets.com/images/default/5e8ed460ea158.png",
            name: "圣基茨和尼维斯",
          },
          {
            url: "/project/cyprus",
            passport:
              "https://cms.aicassets.com/images/default/5cde1f501a3b8.png",
            name: "塞浦路斯",
          },
          {
            url: "/project/dominica",
            passport:
              "https://cms.aicassets.com/images/default/5cde1f5ccd217.png",
            name: "多米尼克",
          },
          {
            url: "/project/grenada",
            passport:
              "https://cms.aicassets.com/images/default/5cde1f6790489.png",
            name: "格林纳达",
          },
          {
            url: "/project/saint-lucia",
            passport:
              "https://cms.aicassets.com/images/default/5cde1f4771698.png",
            name: "圣卢西亚",
          },
          {
            url: "/project/turkey",
            passport:
              "https://cms.aicassets.com/images/default/5e8ed46f3c25e.png",
            name: "土耳其",
          },
          {
            url: "/project/antigua",
            passport:
              "https://cms.aicassets.com/images/default/5e7d8efad383b.png",
            name: "安提瓜和巴布达",
          },
          {
            url: "/project/montenegro",
            passport: require("../../assets/images/passport/montenegro-passport.jpg"),
            name: "黑山",
          },
        ],
        green: [
          {
            url: "/singapore-details",
            passport: require("../../assets/images/Singapore-passport.png"),
            name: "新加坡",
          },
          {
            url: "/philippines-details",
            passport: require("../../assets/images/Philippines-passport.png"),
            name: "菲律宾",
          },
          {
            url: "/malaysia-details",
            passport: require("../../assets/images/Malaysia-passport.png"),
            name: "马来西亚",
          },
          {
            url: "/korea-details",
            passport: require("../../assets/images/korea-passport.png"),
            name: "韩国",
          },
          {
            url: "/canada-details",
            passport: require("../../assets/images/canada-passpor.png"),
            name: "加拿大",
          },
          {
            url: "/japan-details",
            passport: require("../../assets/images/japan-passport.png"),
            name: "日本",
          },
          {
            url: "/portugal-details",
            passport: require("../../assets/images/portugal-passport.png"),
            name: "葡萄牙",
          },
        ],
      },
      service: [
        {
          url: "/project",
          name: "海外护照项目",
        },
        {
          url: "/passport",
          name: "签证服务",
        },
        {
          url: "/bank",
          name: "新加坡银行开户",
        },
        {
          url: "/stock",
          name: "海外股票账户",
        },
        {
          url: "/estate",
          name: "新加坡房产",
        },
        {
          url: "/company",
          name: "新加坡注册公司",
        },
      ],
      isFixed: false,
      scrollPx: 0,
      headerFixed: false,
      wapNavList: [
        {
          name: "新加坡移民",
          childNav: [
            {
              name: "家族办公室移民项目",
              url: "/emigrant/four",
              recommend: true,
            },
            {
              name: "股权投资移民项目",
              url: "/emigrant/tow",
            },
            {
              name: "GIP投资移民项目",
              url: "/emigrant/three",
            },
            {
              name: "小额自雇移民项目",
              url: "/emigrant/one",
            },
          ],
        },
        {
          name: "狮城留学",
          childNav: [
            {
              name: "新加坡学前教育",
              url: "/overseas-study/four",
              recommend: true,
            },
            {
              name: "新加坡公立学校",
              url: "/overseas-study/tow",
            },
            {
              name: "新加坡国际学校",
              url: "/overseas-study/three",
            },
            {
              name: "留学讲座",
              url: "/overseas-study/five",
            },
          ],
        },
        {
          name: "绿卡项目",
          childNav: [
            {
              name: "新加坡绿卡项目",
              url: "/singapore-details",
              flag: require("../../assets/images/country9.png"),
            },
            {
              name: "菲律宾绿卡项目",
              url: "/philippines-details",
              flag: require("../../assets/images/country10.png"),
            },
            {
              name: "马来西亚绿卡项目",
              url: "/malaysia-details",
              flag: require("../../assets/images/country11.png"),
            },
            {
              name: "韩国绿卡项目",
              url: "/korea-details",
              flag: require("../../assets/images/country12.png"),
            },
            {
              name: "加拿大绿卡项目",
              url: "/canada-details",
              flag: require("../../assets/images/country13.png"),
            },
            {
              name: "日本绿卡项目",
              url: "/japan-details",
              flag: require("../../assets/images/country14.png"),
            },
            {
              name: "葡萄牙绿卡项目",
              url: "/portugal-details",
              flag: require("../../assets/images/country15.png"),
            },
          ],
        },
        {
          name: "护照项目",
          childNav: [
            {
              name: "圣基茨和尼维斯",
              url: "/project/saint-kitts",
              flag: require("../../assets/images/country5.png"),
            },
            {
              name: "土耳其",
              url: "/project/turkey",
              flag: require("../../assets/images/country7.png"),
            },
            {
              name: "圣卢西亚",
              url: "/project/saint-lucia",
              flag: require("../../assets/images/country6.png"),
            },
            {
              name: "瓦努阿图",
              url: "/project/vanuatu",
              flag: require("../../assets/images/country8.png"),
            },
            {
              name: "塞浦路斯",
              url: "/project/cyprus",
              flag: require("../../assets/images/country4.png"),
            },
            {
              name: "多米尼克",
              url: "/project/dominica",
              flag: require("../../assets/images/country1.png"),
            },
            {
              name: "格林纳达",
              url: "/project/grenada",
              flag: require("../../assets/images/country2.png"),
            },
            {
              name: "黑山",
              url: "/project/montenegro",
              flag: require("../../assets/images/country16.png"),
            },
            {
              name: "安提瓜和巴布达",
              url: "/project/antigua",
              flag: require("../../assets/images/country3.png"),
            },
          ],
        },
        {
          name: "增值服务",
          childNav: [
            // {
            //   url: "/project",
            //   name: "海外护照项目",
            // },
            // {
            //   url: "/passport",
            //   name: "签证服务",
            // },
            {
              url: "/bank",
              name: "新加坡银行开户",
            },
            {
              url: "/stock",
              name: "海外股票账户",
            },
            {
              url: "/estate",
              name: "新加坡房产",
            },
            {
              url: "/company",
              name: "新加坡注册公司",
            },
          ],
        },
        {
          name: "资产配置",
          url: "/asset",
          page: "asset",
        },
        {
          name: "成功案例",
          url: "/news-case",
          page: "news",
        },
        {
          name: "关于我们",
          url: "/about",
          page: "about",
        },
      ],
      downIndex: [0, 1, 2]
    };
  },
  methods: {
    showNav() {
      this.showWapNav = !this.showWapNav;
    },
    showChildDome (type) {
      for (let i = 0; i < this.downIndex.length; i++) {
        if (type === this.downIndex[i]) {
          this.downIndex.splice(i, 1)
          return false
        }
      }
      this.downIndex.push(type)
    }
  },
  mounted() {
    if (this.$route.name === "Passport") {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }

    window.addEventListener("scroll", () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop >= 1) {
        this.headerFixed = true;
      } else {
        this.headerFixed = false;
      }
    });
  },
};
</script>
<style lang="less" scoped>
.header {
  position: relative;
  width: 100%;
  height: 120px;
  background: #0f1f24;
  z-index: 999;
  transition: 1s;
  @media (min-width: 767px) {
    &.is-fixed {
      position: fixed;
      top: 0;
      left: 0;
    }
  }
  @media (max-width: 767px) {
    .hotline {
      display: none;
    }
  }
}
.logo {
  display: block;
  padding-top: 25px;
  transition: 0.8s;
  a {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    span {
      display: inline-block;
      width: 230px;
      transition: 0.8s;
      &.text {
        margin-left: 35px;
      }
    }
  }
  .img-text {
    width: 220px;
    margin-left: 20px;
    transition: 0.8s;
  }
  img {
    display: block;
    width: 100%;
  }
}

.navs {
  width: 100%;
  position: absolute;
  z-index: 9;
  left: 0;
  bottom: -50px;
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  li {
    display: inline-block;
    margin: 0 22px;
    &.service-btn {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        top: 20px;
        right: -10px;
        width: 5px;
        height: 5px;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        transform: rotate(-45deg);
      }
    }
    @media (max-width: 920px) {
      margin: 0 14px;
    }
    a.m {
      position: relative;
      display: block;
      font-size: 14px;
      color: #ffffff;
      text-align: center;
      height: 50px;
      line-height: 50px;
      transition: 0.3s;
      i {
        position: absolute;
        width: 0;
        bottom: 0;
        left: 50%;
        background: #fff;
        height: 3px;
        display: block;
        transition: 0.25s;
        border-radius: 2px;
        -webkit-transition: 0.25s;
      }
      &:last-child {
        margin-right: 0;
      }
      &:first-child {
        margin-left: 0;
      }
      &:hover {
        i {
          width: 95%;
          left: 0;
        }
      }
      &.on {
        i {
          width: 100%;
          left: 0;
        }
      }
    }
    &:hover {
      .service-select {
        height: 200px;
      }
      .project-select {
        height: 240px;
        display: block;
        a:nth-child(1) {
          animation: project1 0.3s 0.2s forwards;
        }
        a:nth-child(2) {
          animation: project2 0.3s 0.4s forwards;
        }
        a:nth-child(3) {
          animation: project3 0.3s 0.6s forwards;
        }
        a:nth-child(4) {
          animation: project4 0.3s 0.8s forwards;
        }
        a:nth-child(5) {
          animation: project5 0.3s 1s forwards;
        }
        a:nth-child(6) {
          animation: project6 0.3s 1.2s forwards;
        }
        a:nth-child(7) {
          animation: project7 0.3s 1.4s forwards;
        }
        a:nth-child(8) {
          animation: project8 0.3s 1.6s forwards;
        }
        a:nth-child(9) {
          animation: project9 0.3s 1.8s forwards;
        }
      }
    }
  }
  .project-select {
    position: absolute;
    width: 100%;
    height: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    transition: 0.4s;
    overflow: hidden;
    a {
      opacity: 0;
      display: inline-block;
      width: 110px;
      text-align: center;
      color: #ffe19a;
      margin: 35px 10px 0;
      transform: translateY(10px);
      @media (max-width: 1160px) {
        width: 100px;
        margin: 35px 5px;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
      span {
        font-size: 12px;
      }
      img {
        display: block;
        margin: 0 auto 20px;
        width: 90px;
        transition: 0.3s;
      }
    }
  }
  .service-select {
    position: absolute;
    top: 45px;
    left: -40px;
    width: 140px;
    height: 0;
    text-align: left;
    background: #fff;
    border-radius: 5px;
    transition: 0.3s;
    overflow: hidden;
    box-shadow: 0 0 2px #6d6b6b;
    a {
      display: block;
      padding: 0 15px;
      line-height: 32px;
      color: #444;
      font-size: 12px;
      &:hover {
        color: #447375;
      }
    }
  }
}
.wap-nav-botton {
  display: none;
  position: fixed;
  right: 15px;
  top: 20px;
  .icon-bar {
    display: block;
    width: 20px;
    height: 3px;
    background-color: #ffe19a;
    margin-bottom: 5px;
    -webkit-transform: scale(1, 0.5);
    transform: scale(1, 0.5);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }
  .icon-bar:nth-last-of-type(1) {
    margin-bottom: 0;
  }
  &.on {
    width: 20px;
    height: 20px;
    .icon-bar {
      position: absolute;
      height: 2px;
    }
    .icon-bar:nth-child(1) {
      left: -1px;
      top: 9px;
      animation: buttons1 1s forwards;
    }
    .icon-bar:nth-child(2) {
      left: 0;
      top: 9px;
      animation: buttons2 1s forwards;
    }
    .icon-bar:nth-child(3) {
      display: none;
    }
  }
}
@keyframes buttons1 {
  100% {
    transform: rotate(45deg);
    opacity: 1;
  }
}
@keyframes buttons2 {
  100% {
    transform: rotate(-45deg);
    opacity: 1;
  }
}
.wap-nav-list {
  position: fixed;
  top: -100%;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: calc(100% - 60px);
  padding: 30px;
  background: #0D1619;
  transition: 0.4s;
  opacity: 0;
  overflow: auto;
  &.on {
    display: block;
    top: 60px;
    opacity: 1;
  }
  li {
    padding: 10px 0;
    position: relative;
    .main-link {
      display: block;
      color: #FFE39C;
      font-size: 12px;
      
    }
    i.down {
      position: absolute;
      right: 0;
      top: 12px;
      width: 12px;
      height: 12px;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 1px;
        background: #FFE39C;
        transform: translateY(-50%);
      }
      &:before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        width: 1px;
        height: 100%;
        background: #FFE39C;
        transform: translateX(-50%);
      }
    }
    .child {
     & ~ i {
        &:before {
          display: none;
        }
      }
      padding-top: 10px;
      a {
        display: inline-block;
        width: calc(50% - 5px);
        line-height: 30px;
        margin: 5px 5px 0 0;
        font-size: 12px;
        color: #fff;
        text-align: center;
        background: rgba(255, 255, 255, 0.1);
        &.flag {
          text-align: left;
          padding-left: 12px;
        }
        &:nth-child(even) {
          margin-right: 0;
        }
        img {
          display: inline-block;
          position: relative;
          top: -2px;
          width: 17px;
          margin-right: 5px;
        }
        em {
          display: inline-block;
          width: 23px;
          height: 11px;
          line-height: 11px;
          background: #FFE19A;
          border-radius: 90px;
          color: #233135;
          i {
            display: inline-block;
            width: 46px;
            margin: 0 -11px;
            transform: scale(.5);
          }
        }
      }
    }
  }
  
}
@keyframes showNav1 {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes showNav2 {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes showNav3 {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes showNav4 {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes showNav5 {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes showNav6 {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes showNav7 {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes showNav8 {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes showNav9 {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes project1 {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes project2 {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes project3 {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes project4 {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes project5 {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes project6 {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes project7 {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes project8 {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes project9 {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 767px) {
  .header {
    position: fixed;
    height: 60px;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99999999;
    .pc-max-width {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 0 15px;
      height: 60px;
      z-index: 991;
      background: #080b0f;
    }
  }
  .logo {
    .img {
      width: 110px;
    }
    padding-top: 12px;
    .img-text {
      width: 140px;
      margin-left: 10px;
    }
  }
  .navs {
    display: none;
  }
  .wap-nav-botton {
    display: block;
    z-index: 992;
    background: none;
  }
}
</style>
<style lang="less">
@media (min-width: 767px) {
  .all-fixed.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    min-width: 992px;
    .logo {
      padding-top: 10px;
      a {
        span {
          width: 100px;
        }
        .img-text {
          width: 150px;
          margin-left: 20px;
        }
      }
    }
    .hotline {
      padding-top: 15px;
      h3 {
        img {
          width: 160px;
        }
      }
      span {
        width: 20px;
        margin-left: 25px;
        &:last-child {
          width: 24px;
        }
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>