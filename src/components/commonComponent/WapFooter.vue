<template>
  <div class="wap-footer">
    <div class="hotline">
      咨询热线：<span>+65 8866 5586</span> 
      <p>7X24小时服务热线</p>
    </div>

    <ul>
      <li>
        <img src="../../assets/images/advisory-icon1.png" />
        <p>
          +65 8866 5586
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=6588665586&text&app_absent=0"
            >点我，WhatsApp及时对话</a
          >
        </p>
      </li>
      <li>
        <img src="../../assets/images/advisory-icon2.png" />
        <p>+65 8866 5586</p>
      </li>
      <li>
        <img src="../../assets/images/advisory-icon3.png" />
        <p>
          <em><img src="../../assets/images/WeChat.png" />扫一扫添加微信</em>
          <em><img src="../../assets/images/WeChat2.png" />扫一扫关注公众号</em>
        </p>
      </li>
      <li>
        <img src="../../assets/images/advisory-icon4.png" />
        <p>inquiry@waterlandcap.com</p>
      </li>
      <li>
        <img src="../../assets/images/advisory-icon5.png" />
        <p>新加坡滨海林荫道8号滨海湾金融中心1号大楼（渣打银行）14楼03A单元</p>
      </li>
    </ul>

    <div class="link">
      <router-link to="/about">关于我们</router-link> | <a @click="clickMessage('联系我们')">联系我们</a> | <a @click="showTerms">隐私条款</a>
    </div>
    <p class="add">
      公司地址：
      <br />
      8 Marina Boulevard #14-03A ,Marina Bay Financial Centre Tower 1 S018981
      <br />
      新加坡滨海林荫道8号滨海湾金融中心1号大楼（渣打银行）14楼03A单元
    </p>
    <p >© 2021 Waterland Capital Pte Ltd. All Rights Reserved.</p>


    <!-- return top -->
    <div class="return-top" v-if="showReturnTop" @click="returnTop">
      <img src="../../assets/images/return-top.png" />
    </div>

    <Terms v-if="termsType" @closeTerms="showTerms" />

    <NewMessageType v-if="messageType" :messageType="messageType" @clickMessage="clickMessage"  />

  </div>
</template>
<script>
import Terms from '../../views/terms/Terms'
import NewMessageType from '../../components/commonComponent/NewMessageType'
export default {
  components: {
    Terms,
    NewMessageType
  },
  data () {
    return {
      showReturnTop: false,
      termsType: false,
      messageType: ''
    }
  },
  methods: {
    showTerms () {
      this.termsType = !this.termsType
    },
    clickMessage (type) {
      this.messageType = type
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
    window.addEventListener("scroll", this.scrollTop)
  }
}
</script>
<style scoped lang="less">
.wap-footer {
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
  padding: 35px 0 100px;
  background: #f7f7f7;
  text-align: center;
  .hotline {
    color: #447375;
    font-size: 12px;
    span {
      font-size: 18px;
      font-weight: bold;
    }
    p {
      margin-top: 5px;
      font-size: 12px;
      color: #3E3E3E;
    }
  }

  ul {
    text-align: center;
    padding-top: 30px;
    li {
      position: relative;
      display: inline-block;
      width: 30px;
      height: 30px;
      margin: 0 11px;
      img {
        display: block;
        width: 100%;
      }
      &:nth-child(1) {
        p {
          width: 180px;
          background: #fff url("../../assets/images/down-tel2.png") no-repeat
            25px 8px;
          background-size: 20px;
          a {
            display: block;
            color: #000;
            font-size: 13px;
            line-height: 20px;
            font-weight: normal;
            text-decoration: underline;
            margin-left: -20px;
          }
        }
      }
      &:nth-child(2) {
        p {
          background: #fff url("../../assets/images/down-tel1.png") no-repeat
            9px 10px;
          background-size: 20px;
        }
      }
      &:nth-child(3) {
        p {
          width: 240px;
          padding: 0;
          background: #fff;
          em {
            display: inline-block;
            font-size: 12px;
            img {
              width: 100px;
            }
          }
        }
      }
      &:nth-child(4) {
        p {
          width: 200px;
          padding: 0 10px;
        }
      }
      &:nth-child(5) {
        p {
          right: -50px;
          width: 200px;
          line-height: 22px;
          padding: 4px 15px;
        }
      }
      p {
        position: absolute;
        right: -100px;
        z-index: 999;
        width: 145px;
        opacity: 0;
        height: 0;
        margin-top: 10px;
        color: #444;
        line-height: 36px;
        border-radius: 5px;
        font-size: 12px;
        overflow: hidden;
        padding-left: 20px;
        background: #fff;
        -webkit-transition: 0.3s;
        transition: 0.3s;
      }
      &:hover {
        &:after {
          content: "";
          position: absolute;
          z-index: 999;
          left: 8px;
          bottom: -15px;
          width: 10px;
          height: 10px;
          background: #fff;
          border-top: 1px solid #a5a5a5;
          border-left: 1px solid #a5a5a5;
          transform: rotate(45deg);
        }
        p {
          height: 36px;
          opacity: 1;
          box-shadow: 0 0 2px #000;
        }
        &:nth-child(1) {
          p {
            height: 70px;
          }
        }
        &:nth-child(3) {
          p {
            height: 147px;
            em {
              margin-top: 10px;
            }
          }
        }
        &:nth-child(5) {
          p {
            height: 74px;
          }
        }
      }
    }
  }

  .link {
    padding-top: 25px;
    a {
      display: inline-block;
      margin: 0 5px;
      color: #3E3E3E;
    }
  }
  p {
    margin-top: 20px;
    font-size: 12px;
    padding: 0 20px;
    color: #747474;
    line-height: 24px;
  }
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