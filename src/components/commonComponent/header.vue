<template>
  <div class="header" :class="{'is-fixed': isFixed, 'all-fixed': headerFixed}">
    <img style="display:none;" src="../../assets/images/country-loading.png">
    <div class="pc-max-width clearfix">
      <div class="logo left">
        <a href="/">
          <span class="img"><img src="../../assets/images/logo.png" /></span>
          <span class="img-text"><img src="../../assets/images/logo-text.png" /></span>
        </a>
      </div>
      <div class="right">
        <Hotline />
      </div>
    </div>
    <ul class="navs">
      <li v-for="(navs, index) in navList" :key="index">
        <router-link class="m" :class="{on:currentUrl === navs.url || detailsUrl === navs.url}"
          :to="navs.url">
          {{navs.name}}
          <i></i>
        </router-link>
        <div v-if="navs.down" class="project-select">
          <router-link :to="'/project/details/' + menu.country_id" v-for="(menu, key) in projectDown" :key="key">
            <img :src="menu.passport" /> 
            <span>{{menu.name}}</span>
          </router-link>
        </div>
      </li>
    </ul>
    <button class="wap-nav-botton" @click="showNav" :class="{on: showWapNav}">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <div class="wap-nav-list" :class="{on: showWapNav}">
      <router-link v-for="(navs, index) in navList" :to="navs.url" :key="index">{{navs.name}}</router-link>
    </div>
  </div>
</template>
<script>
import Hotline from './Hotline'
export default {
  components: {
    Hotline
  },
  data() {
    return {
      showWapNav: false,
      navList: [
        {
          name: "首 页",
          url: "/"
        },
        {
          name: "新加坡移民",
          url: "/emigrant/one"
        },
        {
          name: "护照精选",
          url: "/passport/"
        },
        {
          name: "护照项目",
          url: "/project/",
          down: true
        },
        {
          name: "移居狮城",
          url: "/city/"
        },
        {
          name: "银行开户",
          url: "/bank/"
        },
        {
          name: "资产配置",
          url: "/asset/"
        },
        {
          name: "关于我们",
          url: "/about/"
        }
      ],
      currentUrl: window.location.pathname,
      detailsUrl: this.$route ? this.$route.path.substring(0, 9) : "",
      projectDown: '',
      isFixed: false,
      scrollPx: 0,
      headerFixed: false
    };
  },
  methods: {
    showNav() {
      this.showWapNav = !this.showWapNav;
    }
  },
  mounted() {
    if (this.$route.name === 'Passport') {
      this.isFixed = true
    } else {
      this.isFixed = false
    }
    this.$http({
      method: "get",
      url: process.env.VUE_APP_API + "/v1/countries "
    }).then(res => {
      if (res.data.code === 200) {
        this.projectDown = res.data.data
      }
    });
    

    window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop >= 1) {
        this.headerFixed = true
      } else {
        this.headerFixed = false
      }
    })
  }
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
  @media(min-width: 767px) {
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
  transition: .8s;
  a {
    display:flex;
    flex-flow: row wrap;
    align-items: center;
    span {
      display: inline-block;
      width: 230px;
      transition: .8s;
      &.text {
        margin-left: 35px;
      }
    }
  }
  .img-text {
    width: 220px;
    margin-left: 40px; 
    transition: .8s;
    @media (max-width: 1040px) {
      display: none;
    }
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
    margin: 0 23px;
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
      .project-select {
        height: 240px;
        display: block;
        a:nth-child(1){
          animation: project1 .3s .2s forwards;
        }
        a:nth-child(2){
          animation: project2 .3s .4s forwards;
        }
        a:nth-child(3){
          animation: project3 .3s .6s forwards;
        }
        a:nth-child(4){
          animation: project4 .3s .8s forwards;
        }
        a:nth-child(5){
          animation: project5 .3s 1s forwards;
        }
        a:nth-child(6){
          animation: project6 .3s 1.2s forwards;
        }
        a:nth-child(7){
          animation: project7 .3s 1.4s forwards;
        }
        a:nth-child(8){
          animation: project8 .3s 1.6s forwards;
        }
      }

    }
  }
  .project-select {
    position: absolute;
    width: 100%;
    height: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: .4s;
    overflow: hidden;
    a {
      opacity: 0;
      display: inline-block;
      width: 120px;
      text-align: center;
      color: #FFE19A;
      margin: 35px 20px 0;
      transform: translateY(10px);
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
        width: 100px;
        transition: .3s;
      }
    }
  }
}
.wap-nav-botton {
  display: none;
  position: absolute;
  right: 15px;
  top: 20px;
  .icon-bar {
    display: block;
    width: 20px;
    height: 3px;
    background-color: #FFE19A;
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
  z-index: 99;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  transition: 0.4s;
  opacity: 0;
  &.on {
    display: block;
    top: 60px;
    opacity: 1;
    a {
      opacity: 0;
      &:nth-child(1) {
        animation: showNav1 0.2s forwards;
        animation-delay: 0.3s;
      }
      &:nth-child(2) {
        animation: showNav2 0.3s forwards;
        animation-delay: 0.5s;
        transform: translateY(30px);
      }
      &:nth-child(3) {
        animation: showNav3 0.4s forwards;
        animation-delay: 0.6s;
        transform: translateY(30px);
      }
      &:nth-child(4) {
        animation: showNav4 0.5s forwards;
        animation-delay: 0.7s;
        transform: translateY(30px);
      }
      &:nth-child(5) {
        animation: showNav5 0.6s forwards;
        animation-delay: 0.8s;
        transform: translateY(30px);
      }
      &:nth-child(6) {
        animation: showNav6 0.7s forwards;
        animation-delay: 0.9s;
        transform: translateY(30px);
      }
      &:nth-child(7) {
        animation: showNav7 0.8s forwards;
        animation-delay: 1s;
        transform: translateY(30px);
      }
      &:nth-child(8) {
        animation: showNav7 0.9s forwards;
        animation-delay: 1s;
        transform: translateY(30px);
      }
    }
  }
  a {
    display: block;
    color: #FFE19A;
    text-align: center;
    font-size: 18px;
    padding: 15px 0;
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

@media (max-width: 767px) {
  .header {
    position: fixed;
    height: 60px;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
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
    width: 120px;
    padding-top: 12px;
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
.all-fixed.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
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
</style>