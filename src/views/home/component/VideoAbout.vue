<template>
  <!-- 视频和关于我们 -->
  <div class="pc-max-width home-about">
    <div class="animation-show clearfix" >
      <div class="left video" v-html="videoIframe"></div>
      <div class="right about">
        <h3>选择我们</h3>
        <span>CHOOSE US</span>
        <p>新加坡全球护照交流中心-SGPEC，总部位于国际金融中心新加坡，是多国政府和机构投资移民项目的官方授权持牌机构。SGPEC成立以来，在不断打造专业、诚信、高素质精英团队的基础上，经过精挑细选, 通过与多国顶尖合作方的强强联手，建立长久和稳固的合作关系，源源不断地向市场推出安全和稳妥的项目，一直坚守“恪守诚信，隐私至上”的企业精神，在市场上树立了良好的口碑，作为新加坡市场行业领先的专业移民机构，以高效快速，隐私保密著称业内。</p>
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
    <div class="about-contact" v-if="!contactStatus">
      <div class="content">
        <span class="close">
          <img src="../../../assets/images/close.png" @click="changeContact" />
        </span>
        <h3>请留下您的联系方式</h3>
        <p>也可以拨打（+65）8866 5586 <br /> 直接与我们取得联系</p>
        <InputBox v-if="successType" @success="success"></InputBox>
        <template v-else>
          <h4>咨询成功......</h4>
          <router-link to="passport">了解更多</router-link>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import InputBox from '../../../components/commonComponent/InputBox'
export default {
  components: {
    InputBox
  },
  data () {
    return {
      videoIframe: process.env.VUE_APP_VIDEO_URL,
      contactStatus: false,
      successType: false
    }
  },
  methods: {
    changeContact () {
      this.contactStatus = !this.contactStatus
    },
    success () {
      this.successType = !this.successType
    }
  }
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
    @media(max-width: 767px) {
      float: none;
      width: 100%;
    }
  }
  .about {
    width: 42%;
    height: 500px;
    background: #F2F2F2;
    padding: 40px 50px;
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
      margin: 20px 0 50px;
    }
    p {
      line-height: 28px;
    }
    .contact {
      float: right;
      width: 100px;
      height: 40px;
      margin-top: 50px;
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
      padding-top: 40px;
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
      margin: 50px 0 25px;
    }
    p {
      margin-bottom: 60px;
      color: #fff;
      font-size: 20px;
      line-height: 34px;
    }
    h4 {
      font-size: 30px;
      padding: 50px 0;
      color: #447375;
    }
    a {
      display: block;
      width: 240px;
      height: 60px;
      border-radius: 30px;
      background: #447375;
      line-height: 60px;
      color: #fff;
      margin: 20px auto 0;
      font-size: 18px;
    }
    @media (max-width: 767px) {
      width: 90%;
      left: 5%;
      height: 520px;
      margin: -260px 0 0;
      padding: 0 10px;
      h3 {
        font-size: 20px;
        margin: 30px 0 15px;
      }
      p {
        font-size: 16px;
        margin-bottom: 30px;
      }
    }
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