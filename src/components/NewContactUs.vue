<template>
  <div class="new-contact-us margin-t-80">
    <div class="contact pc-max-width">
      <h3>{{text}}</h3>
      <p>立即点击，资深专家全程一对一指导，简单高效快捷！</p>
      <button @click="changeContact">联系我们</button>
    </div>
    <div class="stock-f margin-t-80">
      <ContentImg />
      <ContactUs />
    </div>
    <!-- About 联系我们弹窗 -->
    <div class="about-contact" v-if="contactStatus">
      <div class="content">
        <span class="close">
          <img src="../assets/images/close.png" @click="changeContact" />
        </span>
        <h3>请留下您的联系方式</h3>
        <p>也可以拨打<a href="tel:6588665586">（+65）8866 5586</a> <br /> 直接与我们取得联系</p>
        <ul>
          <li>
            <img src="../assets/images/telegram@2x.png" />
            <i><a href="tel:6588665586">+65 8866 5586</a></i>
          </li>
          <li>
            <img src="../assets/images/whasapp@2x.png" />
            <i>+65 8866 5586
              <a target="_blank" href="https://api.whatsapp.com/send/?phone=6588665586&text&app_absent=0">点我，WhatsApp及时对话</a>
            </i>
          </li>
          <li>
            <img src="../assets/images/WeChat@2x.png">
            <i>
              <em>
                <img @click="showWeChat(1)" v-if="WeChatAll.indexOf(1) < 0" src="../assets/images/WeChat-bg.png" />
                <img src="../assets/images/WeChat.png" />扫一扫添加微信
              </em>
              <em>
                <img @click="showWeChat(2)" v-if="WeChatAll.indexOf(2) < 0" src="../assets/images/WeChat2-bg.png" />
                <img src="../assets/images/WeChat2.png" />扫一扫关注公众号
              </em>
            </i>
          </li>
        </ul>
        <InputBox  @success="success"></InputBox>
      </div>
    </div>
    <!--咨询完成弹窗 -->
    <MessagePopup v-if="messageType" :status="messageType" @messageType="messageType = false"></MessagePopup>
  </div>
</template>
<script>
import ContentImg from './ContentImg'
import ContactUs from "./commonComponent/ContactUs"
import MessagePopup from './commonComponent/MessagePopup'
import InputBox from './commonComponent/InputBox'
export default {
  components: {
    ContentImg,
    ContactUs,
    InputBox,
    MessagePopup,
  },
  props: {
    text: String
  },
  data () {
    return {
      contactStatus: false,
      messageType: false,
      WeChatAll: []
    }
  },
  methods: {
    changeContact () {
      this.contactStatus = !this.contactStatus
    },
    success () {
      this.contactStatus = false
      this.messageType = true
    },
    showWeChat (type) {
      this.WeChatAll.push(type)
    }
  }
}
</script>
<style lang="less" scoped>
.contact {
  height: 240px;
  background: url('../assets/images/stock-image4.jpg') no-repeat top center;
  background-size: auto 240px;
  text-align: center;
  h3 {
    padding-top: 55px;
    font-size: 18px;
    color: #FFE19A;
  }
  p {
    font-size: 17px;
    padding-top: 11px;
    letter-spacing: 5px;
    color: #fff;
  }
  button {
    display: block;
    width: 189px;
    height: 60px;
    margin: 22px auto 0;
    border: 1px solid #FAE2A3;
    border-radius: 90px;
    font-size: 18px;
    color: #FFE19A;
    line-height: 60px;
    background: none;
    font-weight: 400px;
    letter-spacing: 2px;
    transition: .3s;
    &:hover {
      background: #FFE19A;
      color: #000;
    }
  }
  @media (max-width: 767px) {
    margin: 0 10px;
    h3 {
      padding: 30px 15px 0;
      font-size: 16px;
      line-height: 30px;
      color: #FFE19A;
    }
    p {
      font-size: 14px;
      padding-top: 6px;
      line-height: 30px;
      letter-spacing: 5px;
      color: #fff;
    }
    button {
      width: 140px;
      height: 40px;
      line-height: 40px;
      margin: 15px auto 0;
      font-size: 14px;
    }
  }
}
.stock-f {
  padding-top: 10px;
  background: #F7F7F7;
}
.about-contact {
  position: fixed !important;
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
    background: #fff url('../assets/images/contact-bg.png') no-repeat top center;
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
            background: #fff url('../assets/images/down-tel1.png') no-repeat 10px 10px;
            background-size: 20px;
          }
        }
        &:nth-child(2) {
          i {
            background: #fff url('../assets/images/down-tel2.png') no-repeat 10px 10px;
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
</style>