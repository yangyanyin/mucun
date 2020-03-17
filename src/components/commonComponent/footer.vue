<template>
  <div class="footer">
    <div class="pc-max-width clearfix">
      <div class="left">
        <div class="hotline">
          咨询热线: 
          <h3>+65 6909 8015</h3>
          <span><img src="../../assets/images/footer-iphone.png" /></span>
          <span><img src="../../assets/images/footer-email.png" /></span>
          <span><img src="../../assets/images/footer-wx.png" /></span>
        </div>
        <div class="footer-nav clearfix">
          <div class="menu left">
            <a href="">关于我们</a>
            <a href="">常见问题</a>
            <a href="">成功案例</a>
            <a href="">本站搜索</a>
          </div>
          <div class="menu left">
            <a href="">欧盟护照</a>
            <a href="">英联邦护照</a>
            <a href="">新加坡移民</a>
            <a href="">热点新闻</a>
          </div>
        </div>
        <div class="address">
          <p>公司地址：</p>
          <p>8 Marina Boulevard #14-03A ,Marina Bay Financial Centre Tower 1 S018981</p>
          <p>新加坡滨海林荫大道8号滨海金融中心14楼</p>
        </div>
      </div>
      <div class="right wechat">
        <div class="left">
          <img src="../../assets/images/WeChat.png" />
          <p>扫一扫关注公众号</p>
        </div>
        <div class="left">
          <img src="../../assets/images/WeChat.png" />
          <p>扫一扫添加微信</p>
        </div>
      </div>
    </div>
    <div class="copyright">© 2020 Singapore Global Passport Exchange Centre Pte Ltd. All Rights Reserved.</div>
    <!-- return top -->
    <div class="return-top" v-if="showReturnTop" @click="returnTop">
      <img src="../../assets/images/return-top.png" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showReturnTop: false
    };
  },
  methods: {
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
      let scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scroll > 500) {
        this.showReturnTop = true;
      } else {
        this.showReturnTop = false;
      }
    }
  },
  mounted() {
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
    padding-top: 30px;
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
    font-size: 18px;
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
  @media (max-width: 767px) {
    padding-bottom: 20px;
    h3 {
      font-size: 16px;
    }
    span {
      margin-left: 20px;
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
  }
  @media (max-width: 767px) {
    padding: 0;
    div {
      margin: 0;
      float: none;
      &:last-child{
        a:last-child {
          border: none;
        }
      }
    }
    a {
      display: block;
      font-size: 14px;
      padding: 6px 0;
      border-bottom: 1px solid #3a474c;
    }
  }
}
.address {
  color: #fff;
  padding-top: 40px;
  line-height: 28px;
  @media (max-width: 767px) {
    text-align: center;
    line-height: 24px;
    padding-top: 20px;
  }
}
.wechat {
  div {
    margin-left: 30px;
  }
  p {
    color: #fff;
    padding: 20px 0 0 25px;
    background: url('../../assets/images/footer-wx2.png') no-repeat left 23px;
    background-size: 18px;
  }
  @media (max-width: 767px) {
    width: 100%;
    margin-top: 20px;
    text-align: center;
    div {
      display: inline-block;
      margin: 0;
      float: none;
      padding: 0 10px;
    }
  }
}

.copyright {
  margin-top: 50px;
  height: 60px;
  border-top: 1px solid #27363a;
  line-height: 60px;
  color: #fff;
  opacity: .8;
  text-align: center;
  @media (max-width: 767px) {
    line-height: 20px;
    text-align: center;
    padding-top: 7px;
    margin-top: 25px;
  }
}
.return-top {
  position: fixed;
  right: 70px;
  bottom: 100px;
  width: 35px;
  border: 1px solid #bd8c67;
  padding: 6px;
  border-radius: 5px;
  cursor: pointer;
  background: #bd8c67;
  opacity: 0.8;
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