<template>
  <div class="footer" :class="{'is-fixed': isFixed}">
    <div class="pc-max-width clearfix">
      <div class="left">
        <Hotline />
        <div class="footer-nav clearfix">
          <div class="menu left">
            <router-link to="/emigrant/singapore">新加坡移民</router-link>
            <router-link to="/project/">护照项目</router-link>
            <router-link to="/passport/">签证服务</router-link>
            <router-link to="/overseas-study/one">狮城留学</router-link>
          </div>
          <div class="menu left">
            <router-link to="/bank/">银行开户</router-link>
            <router-link to="/asset/">资产配置</router-link>
            <router-link to="/news-thematic">新闻资讯</router-link>
            <!-- <router-link to="/news-expert">新加坡移民专家</router-link> -->
          </div>
          <div class="menu left">
            <router-link to="/news-case">成功案例</router-link>
            <router-link to="/about">关于我们</router-link>
            <a @click="showTerms">隐私条款</a>
          </div>
        </div>
        <div class="address">
          <p>公司地址：</p>
          <p>8 Marina Boulevard #14-03A ,Marina Bay Financial Centre Tower 1 S018981</p>
          <p>新加坡滨海林荫道8号滨海湾金融中心1号大楼（渣打银行）14楼03A单元</p>
        </div>
      </div>
      <div class="right wechat">
        <div class="left">
          <img @click="showWeChat(1)" v-if="WeChatAll.indexOf(1) < 0" src="../../assets/images/WeChat-bg.png" />
          <img v-else src="../../assets/images/WeChat.png" />
          <p><img src="../../assets/images/footer-wx2.png"> 扫一扫添加微信</p>
        </div>
        <div class="left">
          <img @click="showWeChat(2)" v-if="WeChatAll.indexOf(2) < 0" src="../../assets/images/WeChat2-bg.png" />
          <img v-else src="../../assets/images/WeChat2.png" />
          <p><img src="../../assets/images/footer-wx2.png"> 扫一扫关注公众号</p>
        </div>
      </div>
    </div>
    <div class="copyright">© 2021 Waterland Capital Pte Ltd. All Rights Reserved.</div>
    <!-- return top -->
    <div class="return-top" v-if="showReturnTop" @click="returnTop">
      <img src="../../assets/images/return-top.png" />
    </div>

    <Terms v-if="termsType" @closeTerms="showTerms" />

  </div>
</template>
<script>
import Hotline from './Hotline'
import Terms from '../../views/terms/Terms'
export default {
  components: {
    Hotline,
    Terms
  },
  data() {
    return {
      showReturnTop: false,
      isFixed: false,
      termsType: false,
      WeChatAll: []
    };
  },
  methods: {
    showTerms () {
      this.termsType = !this.termsType
    },
    showWeChat (type) {
      this.WeChatAll.push(type)
    },
    returnTop() {
      let scrTop = 0;
      let iSpeed = 0;
      let backTopTimer = null;
      backTopTimer = setInterval(function() {
        scrTop = document.body.scrollTop || document.documentElement.scrollTop;
        iSpeed = scrTop / 5;
        if (scrTop === 0) {
          clearInterval(backTopTimer);
        }
        document.body.scrollTop = scrTop - iSpeed;
        document.documentElement.scrollTop = scrTop - iSpeed;
      }, 10);
    },
    scrollTop() {
      let scroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (scroll > 500) {
        this.showReturnTop = true;
      } else {
        this.showReturnTop = false;
      }
    }
  },
  mounted() {
    if (this.$route.name === 'Passport') {
      this.isFixed = true
    } else {
      this.isFixed = false
    }
    window.addEventListener("scroll", this.scrollTop);
  }
};
</script>
<style lang="less" scoped>
.footer {
  padding-top: 100px;
  background:#0f1f24 url('../../assets/images/footer-bg.png') no-repeat top center;
  background-size: 1800px;
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 767px) {
    &.is-fixed {
      display: none;
    }
  }
  .hotline {
    padding: 0 0 40px 0;
    border-bottom: 1px solid #3a474c;
  }
}
.hotline {
  color: #efd492;
  display:flex;
  flex-flow: row wrap;
  align-items: center;
  border-bottom: 1px solid #3a474c;
  padding-bottom: 40px;
  h3 {
    display: inline-block;
    font-size: 30px;
    font-weight: bold;
    margin: 0 5px 0 10px;
  }
  span {
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
  }
}
.footer-nav {
  padding: 45px 0 40px 0;
  border-bottom: 1px solid #3a474c;
  div {
    margin-right: 90px;
    line-height: 30px;
  }
  a {
    display: block;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      color: #efd492;
    }
  }
}
.address {
  color: #fff;
  padding-top: 40px;
  line-height: 28px;
}
.wechat {
  div {
    margin-left: 30px;
  }
  img {
    width: 155px;
  }
  p {
    color: #fff;
    padding: 20px 0 0;
    text-align: center;
    img {
      position: relative;
      top: -1px;
      display: inline-block;
      width: 18px;
      margin-right: 5px;
    }
  }
}

.copyright {
  margin-top: 50px;
  height: 60px;
  border-top: 1px solid #27363a;
  line-height: 60px;
  color: #fff;
  font-size: 12px;
  opacity: .5;
  text-align: center;
}
.return-top {
  position: fixed;
  right: 70px;
  bottom: 100px;
  width: 35px;
  border-radius: 5px;
  cursor: pointer;
  background: #bd8c67;
  img {
    display: block;
    width: 100%;
  }
  @media (max-width: 767px) {
    right: 10px;
    bottom: 80px;
  }
}
</style>