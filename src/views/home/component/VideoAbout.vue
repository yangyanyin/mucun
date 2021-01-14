<template>
  <!-- 视频和关于我们 -->
  <div class="pc-max-width home-about">
    <div class="animation-show clearfix" style="background: #F2F2F2;">
      <!-- <div class="left video" v-html="videoIframe"></div> -->
      <div class="left video">
        <img src="../../../assets/images/about-img.jpg" />
      </div>
      <div class="right about">
        <h3>选择我们</h3>
        <span>CHOOSE US</span>
        <p>新加坡侨水资本——Waterland Capital，立足新加坡深耕大中华地区，致力于为大中华地区高净值个人与家庭，提供全方位海外生活与投资的高端定制服务，从海外资产配置，身份规划，子女教育，管家服务，家族办公室等方面提供系统的一站式专业服务。作为新加坡业内领先的全方位海外生活规划机构，依托我们丰富的行业资源，高效、负责任地协助高净值人群稳健实现目标，是您值得信赖的选择。</p>
        <a class="contact" @click="changeContact">联系我们</a>
        <div class="icon big">
          <a target="_blank" href="https://www.facebook.com/sgpecsingapore">
            <img src="../../../assets/images/Facebook-icon.png" /></a>
          <a target="_blank" href="https://www.linkedin.com/company/singapore-global-passport-exchange-centre">
            <img src="../../../assets/images/LinkedIn-icon.png" /></a>
          <a target="_blank" href="https://twitter.com/SgpecP">
            <img src="../../../assets/images/Twitter-iocn.png" /></a>
        </div>
      </div>
    </div>
    <!-- About 联系我们弹窗 -->
    <div class="about-contact" v-if="contactStatus">
      <div class="content">
        <span class="close">
          <img src="../../../assets/images/close.png" @click="changeContact" />
        </span>
        <h3>请留下您的联系方式</h3>
        <p>也可以拨打（+65）8866 5586 <br /> 直接与我们取得联系</p>
        <ul>
          <li>
            <img src="../../../assets/images/telegram@2x.png" />
            <i>+65 8866 5586</i>
          </li>
          <li>
            <img src="../../../assets/images/whasapp@2x.png" />
            <i>
              +65 8866 5586
              <a target="_blank" href="https://api.whatsapp.com/send/?phone=6588665586&text&app_absent=0">点我，WhatsApp及时对话</a>
            </i>
          </li>
          <li>
            <img src="../../../assets/images/WeChat@2x.png">
            <i>
              <em><img src="../../../assets/images/WeChat.png" />扫一扫添加微信</em>
              <em><img src="../../../assets/images/WeChat2.png" />扫一扫关注公众号</em>
            </i>
          </li>
        </ul>
        <InputBox  @success="success"></InputBox>
      </div>
    </div>
    <!--咨询完成弹窗 -->
    <MessagePopup v-if="messageType" :status="messageType" @messageType="messageType = false"></MessagePopup>

    <!--  -->
    <div class="contact-window" :class="{'show': contactWindow}" v-if="contactWindow">
      <div class="content">
        <span class="close" @click="hideContactWindow">
          <img src="../../../assets/images/close.png" />
        </span>
        <h3>新加坡侨水资本 Waterland Capital</h3>
        <p>直营新加坡移民/银行开户/新加坡留学，家族办公室，欧盟&英联邦快速护照，不成功不收费。</p>
        <a @click="changeContact">点击客服了解更多详情</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import InputBox from '../../../components/commonComponent/InputBox'
import MessagePopup from '../../../components/commonComponent/MessagePopup'
export default {
  components: {
    InputBox,
    MessagePopup
  },
  data () {
    return {
      videoIframe: process.env.VUE_APP_VIDEO_URL,
      contactStatus: false,
      messageType: false
    }
  },
  computed: {
    ...mapState({
      contactWindowStatus: 'contactWindowStatus'
    }),
    contactWindow () {
      return this.contactWindowStatus
    }
  },
  methods: {
    ...mapMutations({
      changContactWindowStatus: 'changContactWindowStatus'
    }),
    changeContact () {
      this.contactStatus = !this.contactStatus
      this.hideContactWindow
      
    },
    success () {
      this.contactStatus = false
      this.messageType = true
    },
    hideContactWindow () {
      this.changContactWindowStatus(false)
    }
  },
  mounted () {}
}
</script>
<style scoped lang="less">
/* 视频和关于我们 */
.home-about {
  @media (max-width: 767px) {
    padding: 0;
  }
  .video {
    width: 58%;
    background: #F2F2F2;;
    img {
      display: block;
      width: 100%;
    }
    @media(max-width: 767px) {
      float: none;
      width: 100%;
    }
  }
  .about {
    width: 42%;
    background: #F2F2F2;
    padding: 35px 50px;
    h3 {
      display: block;
      font-size: 24px;
      padding-bottom: 10px;
      font-weight: bold;
      letter-spacing: 10px;
      border-bottom: 2px solid #447375;
    }
    span {
      display: block;
      color: #000;
      font-weight: bold;
      margin: 15px 0 20px;
    }
    p {
      line-height: 28px;
    }
    .contact {
      float: right;
      width: 100px;
      height: 40px;
      margin-top: 20px;
      border-radius: 20px;
      line-height: 36px;
      font-size: 16px;
      font-weight: bold;
      color: #444;
      text-align: center;
      cursor: pointer;
      border: 2px solid #000;
    }
    .icon {
      padding-top: 20px;
      a {
        display: inline-block;
        width: 24px;
        margin-right: 20px;
        &:last-child {
          margin: 0;
        }
        img {
          display: block;
          width: 100%;
          transition: .2s;
        }
        &:hover {
          img {
            transform: scale(1.2);
          }
        }
      }
    }
    @media(max-width: 767px) {
      width: 100%;
      float: none;
      height: auto;
      padding: 30px 20px;
      span {
        margin: 10px 0;
      }
      .contact {
        margin-top: 20px;
        width: 90px;
        height: 36px;
        font-size: 14px;
        line-height: 34px;
        border-radius: 18px;
        border-width: 1px;
      }
      .icon {
        padding-top: 20px;
      }
    }
  }
}

.about-contact {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9099;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  .content {
    position: absolute;
    width: 480px;
    height: 600px;
    top: 50%;
    left: 50%;
    margin: -300px 0 0 -240px;
    padding: 0 70px;
    background: #fff url('../../../assets/images/contact-bg.png') no-repeat top center;
    background-size: 100%;
    border-radius: 10px;
    text-align: center;
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 15px;
      height: 15px;
      opacity: 0.7;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
      img {
        display: block;
        width: 100%;
      }
    }
    h3 {
      display: block;
      font-size: 24px;
      color: #fff;
      margin: 40px 0 15px;
    }
    p {
      margin-bottom: 30px;
      color: #fff;
      font-size: 18px;
      line-height: 30px;
    }
    ul {
      li {
        position: relative;
        display: inline-block;
        width: 30px;
        height: 30px;
        margin: 0 15px;
        img {
          display: block;
          width: 100%;
        }
        i {
          position: absolute;
          right: -20px;
          z-index: 999;
          width: 160px;
          height: 0;
          margin-top: 10px;
          color: #444;
          line-height: 40px;
          border-radius: 5px;
          overflow: hidden;
          padding-left: 20px;
          -webkit-transition: 0.3s;
          transition: 0.3s;
          a {
            display: block;
            color: #444;
            line-height: 18px;
            margin-left: -15px;
            font-size: 13px;
            text-decoration: underline;
          }
        }
        &:nth-child(1) {
          i {
            background: #fff url('../../../assets/images/down-tel1.png') no-repeat 10px 10px;
            background-size: 20px;
          }
        }
        &:nth-child(2) {
          i {
            background: #fff url('../../../assets/images/down-tel2.png') no-repeat 10px 10px;
            background-size: 20px;
          }
        }
        &:nth-child(3) {
          i {
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
        &:hover {
          &:after {
            content: '';
            position: absolute;
            z-index: 999;
            left: 5px;
            bottom: -11px;
            width: 0px;
            height: 0px;
            border-width: 10px;
            border-style: solid;
            border-color: transparent transparent #fff;
          }
          i {
            height: 40px;
            box-shadow: 0 0 2px #000;
          }
          &:nth-child(2) {
            i {
              width: 170px;
              height: 70px;
            }
          }
          &:last-child {
            i {
              height: 147px;
              em {
                margin-top: 10px;
              }
            }
          }
        }
      }
    }
    @media (max-width: 767px) {
      width: 90%;
      left: 5%;
      height: 470px;
      margin: -235px 0 0;
      padding: 0 10px;
      h3 {
        font-size: 20px;
        margin: 15px 0 10px;
      }
      p {
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 15px;
      }
    }
  }
}

.contact-window {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  &.show {
    display: block;
    .content {
      animation: contactWindow 2s both;
    }
  }
  .content {
    position: absolute;
    top: 200%;
    left: 50%;
    margin: -300px 0 0 -240px;
    width: 480px;
    height: 600px;
    padding: 70px;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    background: #245051 url('../../../assets/images/contact-window-bg.png') no-repeat top center;
    background-size: 100%;
    .close {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 15px;
      height: 15px;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
      img {
        display: block;
        width: 100%;
      }
    }
    h3 {
      position: relative;
      padding-bottom: 20px;
      font-size: 20px;
      color: #fff;
      &:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 40px;
        height: 3px;
        margin-left: -20px;
        background: #fff;
      }
    }
    p {
      margin-top: 30px;
      font-size: 26px;
      line-height: 50px;
      color: #fff;
    }
    a {
      display: inline-block;
      width: 244px;
      height: 50px;
      margin-top: 50px;
      line-height: 50px;
      background: #FFE19A;
      border-radius: 30px;
      color: #1D4647;
      font-size: 17px;
      cursor: pointer;
    }
    @media (max-width: 767px) {
      left: 10px;
      right: 10px;
      width: auto;
      height: auto;
      transform: translateY(-50%);
      margin: auto;
      padding: 50px 30px;
      h3 {
        font-size: 16px;
        margin-bottom: 15px;
        &:after {
          bottom: 0px;
        }
      }
      p {
        margin-top: 20px;
        font-size: 16px;
        line-height: 26px;
      }
      a {
        width: 200px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        margin-top: 30px;
      }
    }
  }
}
@keyframes contactWindow {
  20% {
    top: 42%;
  }
  40% {
    top: 58%;
  }
  60% {
    top: 47%;
  }
  80% {
    top: 53%;
  }
  100% {
    top: 50%;
  }
}
</style>
<style lang="less">
.home-about {
  .video {
    iframe {
      display: block;
      width: 100%;
      height: 500px;
      margin: auto;
    }
    @media (max-width: 767px) {
      iframe {
        height: 300px;
      }
    }
  }
}
.about-contact .input-box li {
  background-color: #fff !important;
  border: 1px solid #E8E8E8;
  border-radius: 8px;
  input {
    background: #fff !important;
  }
}
</style>