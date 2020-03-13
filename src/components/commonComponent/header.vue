<template>
  <div class="header">
    <div class="pc-max-width clearfix">
      <div class="logo left">
        <a href="/">
          <span class="img"><img src="../../assets/images/logo.png" /></span>
          <span class="text"><img src="../../assets/images/logo-text.png" /></span>
        </a>
      </div>
      <div class="hotline right">
        咨询热线: 
        <h3>+65 6909 8015</h3>
        <span><img src="../../assets/images/footer-iphone.png" /></span>
        <span>
          <img src="../../assets/images/footer-email.png" />
          <p>sgpec@spgec.sg</p>
        </span>
        <span class="wx"><img src="../../assets/images/footer-wx.png" />
          <p><img src="../../assets/images/WeChat.png" /></p>
        </span>
      </div>
    </div>
    <ul class="navs">
      <li v-for="(navs, index) in navList" :key="index">
        <a class="m" :class="{on:currentUrl === navs.url || detailsUrl === navs.url}"
          :href="navs.url">
          {{navs.name}}
          <i></i>
        </a>
        <div v-if="navs.down" class="project-select">
          <a href="" v-for="(menu, key) in projectDown" :key="key">
            <img :src="menu.passport" />
            <span>{{menu.name}}</span>
          </a>
        </div>
      </li>
    </ul>
    <button class="wap-nav-botton" @click="showNav" :class="{on: showWapNav}">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <div class="wap-nav-list" :class="{on: showWapNav}">
      <a v-for="(navs, index) in navList" :href="navs.url" :key="index">{{navs.name}}</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showWapNav: false,
      navList: [
        {
          name: "首 页",
          url: "/"
        },
        {
          name: "新加波移民",
          url: "/emigrant/"
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
      projectDown: ''
    };
  },
  methods: {
    showNav() {
      this.showWapNav = !this.showWapNav;
    }
  },
  mounted() {
    this.$http({
      method: "get",
      url: process.env.VUE_APP_API + "/v1/countries "
    }).then(res => {
      if (res.data.code === 200) {
        this.projectDown = res.data.data
      }
    });
  }
};
</script>
<style lang="less" scoped>
.header {
  position: relative;
  width: 100%;
  height: 120px;
  background: #0f1f24;
}
.logo {
  display: block;
  padding-top: 25px;
  a {
    display:flex;
    flex-flow: row wrap;
    align-items: center;
    span {
      display: inline-block;
      width: 230px;
      &.text {
        margin-left: 35px;
      }
    }
  }
  img {
    display: block;
    width: 100%;
  }
}

.hotline {
  color: #efd492;
  display:flex;
  flex-flow: row wrap;
  align-items: center;
  padding-top: 50px;
  h3 {
    display: inline-block;
    font-size: 18px;
    margin: 0 5px 0 10px;
  }
  span {
    position: relative;
    display: inline-block;
    width: 24px;
    margin-left: 30px;
    &:last-child {
      width: 28px;
    }
    
    img {
      display: block;
      width: 100%;
    }
    &.wx { 
      p {
        right: -5px;
        img {
          width: 100px;
        }
        &:after {
          content: '';
          right: 5px;
        }
      }
    }
    p {
      display: none;
      position: absolute;
      top: 35px;
      right: -20px;
      z-index: 999;
      padding: 10px;
      border-radius: 5px;
      background: #fff;
      color: #111;
      &:after {
        content: '';
        position: absolute;
        right: 21px;
        top: -19px;
        width: 0px;
        height: 0px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent #fff;
      }
    }
    &:hover {
      p {
        display: block;
      }
    }
  }
}

.navs {
  width: 100%;
  height: 60px;
  position: absolute;
  z-index: 9;
  left: 0;
  bottom: -60px;
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  li {
    display: inline-block;
    margin: 0 23px;
    a.m {
      position: relative;
      display: block;
      font-size: 16px;
      color: #ffffff;
      text-align: center;
      height: 60px;
      line-height: 60px;
      transition: 0.3s;
      i {
        position: absolute;
        width: 0;
        bottom: 0;
        left: 50%;
        background: #fff;
        height: 4px;
        display: block;
        transition: 0.25s;
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
          width: 95%;
          left: 0;
        }
      }
    }
    &:hover {
      .project-select {
        display: block;
      }
    }
  }
  .project-select {
    display: none;
    position: absolute;
    width: 100%;
    left: 0;
    padding: 35px 0 25px;
    background: rgba(0, 0, 0, 0.7);
    transition: .4s;
    a {
      display: inline-block;
      width: 120px;
      text-align: center;
      color: #FFE19A;
      margin: 0 30px;
      img {
        display: block;
        margin: 0 auto 20px;
        width: 100px;
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
    background-color: #bd8c67;
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
    }
  }
  a {
    display: block;
    color: #bd8c67;
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