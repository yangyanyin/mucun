<template>
  <div class="footer">
    <div class="wx-tel clearfix">
      <div class="tel">
        <img class="tel-img" src="../../assets/images/index/contact-tel.png" />
        <p class="tel-number">(+65) 8866 5586</p>
        <img class="whats-app-img" src="../../assets/images/whats-app.png" />
        <p class="tel-number">(+65) 8866 5586</p>
      </div>
      <div class="wx">
        <img class="wx-img" src="../../assets/images/index/WeChat.png" />
        <p class="wx-text">扫一扫添加微信</p>
      </div>
    </div>
    <div class="nav-country">
      <div class="contact">
        <span>(+65) 8866 5586</span>
        <span>
          微信
          <img src="../../assets/images/index/WeChat.png" />
        </span>
        <span>
          <img src="../../assets/images/whats-app.png" />
          <p>(+65) 8866 5586</p>
        </span>
      </div>
      <div class="nav">
        <a href="/passport/">护照精选</a>
        <a href="/project/">护照项目</a>
        <a href="/city/">移居狮城</a>
        <a href="/bank/">银行开户</a>
        <a href="/asset/">资产配置</a>
        <a href="/about/">关于我们</a>
      </div>
      <ul class="country">
        <li class="brick-item">
          <img src="../../assets/images/footer-country1.png" />
        </li>
        <li class="brick-item">
          <img src="../../assets/images/footer-country2.png" />
        </li>
        <li class="brick-item">
          <img src="../../assets/images/footer-country3.png" />
        </li>
        <li class="brick-item">
          <img src="../../assets/images/footer-country4.png" />
        </li>
        <li class="brick-item">
          <img src="../../assets/images/footer-country5.png" />
        </li>
        <li class="brick-item">
          <img src="../../assets/images/footer-country6.png" />
        </li>
        <li class="brick-item">
          <img src="../../assets/images/footer-country7.png" />
        </li>
      </ul>
    </div>
    <p class="copyright">2019 Singapore Global Passport Exchange Centre Pte Ltd. All Rights Reserved.</p>

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
  .nav-country {
    background: #f8f8f8;
    text-align: center;
    padding: 50px 0;
    .contact {
      span {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        color: #bd8c67;
        font-size: 28px;
        padding-left: 60px;
        position: relative;
        margin-right: 50px;
        &:first-child {
          font-weight: bold;
          background: url("../../assets/images/footer-tel.png") no-repeat left
            center;
          background-size: 40px;
        }
        &:nth-child(2) {
          padding-left: 45px;
          background: url("../../assets/images/footer-wx.png") no-repeat left
            center;
          background-size: 28px;

          img {
            position: absolute;
            width: 156px;
            height: 0;
            left: 0;
            top: 40px;
            transition: 0.2s;
          }
          &:hover {
            img {
              height: 156px;
            }
          }
        }
        &:nth-child(3) {
          margin: 0;
          padding: 0;
          p {
            position: absolute;
            left: 0;
            top: 40px;
            height: 0;
            width: 250px;
            text-align: left;
            color: #30bf39;
            padding-left: 65px;
            background: #fff url("../../assets/images/whats-app-bg.png")
              no-repeat 15px 15px;
            background-size: 40px;
            font-size: 22px;
            border-radius: 5px;
            transition: 0.2s;
            opacity: 0;
            line-height: 70px;
          }
          img {
            width: auto;
            height: 30px;
          }
          &:hover {
            p {
              opacity: 1;
              height: 70px;
            }
          }
        }
      }
    }

    li {
      display: inline-block;
    }
    .nav {
      padding: 45px 0;
      a {
        display: inline-block;
        color: #bd8c67;
        margin: 0 25px;
        font-size: 18px;
        &:hover {
          font-weight: bold;
        }
      }
    }
    .country {
      li {
        display: inline-block;
        width: 55px;
        margin: 0 15px;
        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
  .copyright {
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #bfbfbf;
    font-size: 16px;
  }
  @media (max-width: 767px) {
    .nav-country {
      padding: 20px 0;
      .contact {
        display: none;
      }
      .nav {
        padding: 10px 0;
        a {
          font-size: 12px;
          margin: 0 5px;
        }
      }
      .country {
        margin-top: 20px;
        li {
          width: 35px;
          margin: 0 7px 10px;
        }
      }
    }
    .copyright {
      height: auto;
      padding: 20px 0;
      line-height: normal;
      font-size: 12px;
    }
  }
}
.return-top {
  position: fixed;
  right: 40px;
  width: 35px;
  border: 1px solid #bd8c67;
  padding: 6px;
  bottom: 100px;
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
.wx-tel {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 25%;
  height: 100%;
  text-align: center;
  background: #1b2a44;
  color: #b28565;
  .tel-img {
    display: inline-block;
    width: 65px;
    margin-top: 10px;
  }
  .tel-number {
    font-size: 30px;
    margin-top: 20px;
  }
  .whats-app-img {
    margin-top: 20px;
    width: 100px;
  }
  .wx-img {
    display: block;
    margin: 60px auto 0;
    width: 155px;
  }
  .wx-text {
    display: inline-block;
    margin-top: 20px;
    padding-left: 35px;
    background: url("../../assets/images/index/contact-wx.png") no-repeat left
      center;
    background-size: 25px;
  }
  @media (max-width: 767px) {
    display: block;
    position: static;
    background: none;
    width: 100%;
    padding: 30px 0;
    .tel {
      float: left;
      width: 50%;
    }
    .wx {
      width: 50%;
      float: right;
    }
    .tel-img {
      width: 40px;
    }
    .tel-number {
      font-size: 20px;
      margin-top: 5px;
    }
    .wx-img {
      display: block;
      margin: 0 auto;
      width: 140px;
    }
    .wx-text {
      margin-top: 15px;
    }
  }
}
</style>