<template>
  <div class="pc-max-width">
    <div class="contact">
      <p>新加坡侨水资本： <br />直营新加坡移民/银行开户/新加坡留学，家族办公室，欧盟&英联邦快速护照，不成功不收费。</p>
      <a @click="changeContact">点击客服了解更多详情</a>
    </div>


    <!-- About 联系我们弹窗 -->
    <div class="about-contact" v-if="contactStatus">
      <div class="content">
        <span class="close">
          <img src="../assets/images/close.png" @click="changeContact" />
        </span>
        <h3>请留下您的联系方式</h3>
        <p>也可以拨打（+65）8866 5586 <br /> 直接与我们取得联系</p>
        <ul>
          <li>
            <img src="../assets/images/telegram@2x.png" />
            <i>+65 8866 5586</i>
          </li>
          <li>
            <img src="../assets/images/whasapp@2x.png" />
            <i>+65 8866 5586</i>
          </li>
          <li>
            <img src="../assets/images/WeChat@2x.png">
            <i>
              <em><img src="../assets/images/WeChat.png" />扫一扫添加微信</em>
              <em><img src="../assets/images/WeChat2.png" />扫一扫关注公众号</em>
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
import InputBox from './commonComponent/InputBox'
import MessagePopup from './commonComponent/MessagePopup'
export default {
  components: {
    InputBox,
    MessagePopup
  },
  data () {
    return {
      contactStatus: false,
      messageType: false
    }
  },
  methods: {
    changeContact () {
      this.contactStatus = !this.contactStatus
    },
    success () {
      this.contactStatus = false
      this.messageType = true
    }
  }
}
</script>
<style scoped lang="less">
.contact {
  height: 150px;
  margin-top: 50px;
  padding: 25px 35px;
  background: url('../assets/images/singapore-contact-bg.png') no-repeat top right;
  background-size: 100%;
  p {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 16px;
    color: #fff;
    line-height: 30px;
  }
  a {
    display: inline-block;
    position: relative;
    margin-top: 10px;
    border-bottom: 1px solid #ffe19a;
    color: #ffe19a;
    cursor: pointer;
    &:after {
      content: '';
      position: absolute;
      top: 7px;
      right: -15px;
      width: 6px;
      height: 6px;
      border-top: 1px solid #ffe19a;
      border-right: 1px solid #ffe19a;
      transform: rotate(45deg);
    }
  }
  @media (max-width: 767px) {
    margin-top: 20px;
    padding: 20px 15px;
    background: url('../assets/images/singapore-contact-bg.png') no-repeat center center;
    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
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
<style lang="less">
.about-contact .input-box li {
  background-color: #fff !important;
  border: 1px solid #E8E8E8;
  border-radius: 8px;
  input {
    background: #fff !important;
  }
}
</style>