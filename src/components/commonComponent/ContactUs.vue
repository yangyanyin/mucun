<template>
  <div class="contact-us pc-max-width margin-t-80">
    <div class="content clearfix">
      <div class="map left">
        <div class="img">
          <img src="../../assets/images/map-img.gif" />
        </div>
      </div>
      <div class="right contact-input">
        <h3>免费咨询服务 <i>+65 8866 5586</i></h3>
        <ul>
          <li>
            <img src="../../assets/images/advisory-icon1.png" />
            <p>+65 8866 5586</p>
          </li>
          <li>
            <img src="../../assets/images/advisory-icon2.png" />
            <p>+65 8866 5586</p>
          </li>
          <li>
            <img src="../../assets/images/advisory-icon3.png" />
            <p>
              <em
                ><img src="../../assets/images/WeChat.png" />扫一扫添加微信</em
              >
              <em
                ><img
                  src="../../assets/images/WeChat2.png"
                />扫一扫关注公众号</em
              >
            </p>
          </li>
          <li>
            <img src="../../assets/images/advisory-icon4.png" />
            <p>inquiry@waterlandcap.com</p>
          </li>
          <li>
            <img src="../../assets/images/advisory-icon5.png" />
            <p>
              新加坡滨海林荫道8号滨海湾金融中心1号大楼（渣打银行）14楼03A单元
            </p>
          </li>
        </ul>
        <label class="input">
          <span>称呼</span>
          <input type="text" @focus="inputFocus" v-model="name" placeholder="请输入您的称呼" />
          <i v-if="nameError">请输入您的称呼</i>
        </label>
        <label class="input">
          <span>电话</span>
          <input type="text" @focus="inputFocus" v-model="tel" placeholder="请输入您的电话" />
          <i v-if="telError">请输入您的电话</i>
        </label>
        <label class="input">
          <span>微信</span>
          <input type="text" @focus="inputFocus" v-model="weChat" placeholder="请输入您的微信" />
          <i v-if="weChatError">请输入您的微信</i>
        </label>
        <textarea v-model="content" placeholder="请输入您的留言内容，我想了解「哪个国家」的移民项目"></textarea>
        <button @click="submitForm">
          <template v-if="!messageLoading">立即咨询</template>
          <img v-else src="../../assets/images/message-loading.png" />
        </button>
      </div>
    </div>

    <!-- 国旗 -->
    <Flag />
  </div>
</template>
<script>
import Flag from "../commonComponent/NationalFlag"
export default {
  components: {
    Flag
  },
  data () {
    return {
      name: '',
      tel: '',
      weChat: '',
      content: '',
      nameError: false,
      telError: false,
      weChatError: false,
      messageLoading: false
    }
  },
  methods: {
    inputFocus () {
      this.nameError = false
      this.telError = false
      this.weChatError = false
    },
    submitForm () {
      if (this.name === '') {
        this.nameError = true
        return false
      }
      if (this.tel === '') {
        this.telError = true
        return false
      }
      if (this.weChat === '') {
        this.weChatError = true
        return false
      }
      const params = {
        name: this.name,
        phone: this.tel,
        we_chat: this.weChat,
        text: this.content
      }
      if (this.messageLoading) return
      this.messageLoading = true
      setTimeout(() => {
        this.$http({
          method: "post",
          url: process.env.VUE_APP_API + "/v1/contact",
          params
        }).then(res => {
          if (res.data.code === 200) {
            this.name = ''
            this.tel = ''
            this.weChat = ''
            this.content = ''
            this.messageLoading = false
          }
        })
      }, 1000)
    }
  }
}
</script>
<style scoped lang="less">
/** 联系我们 **/
.contact-us {
  .map {
    width: 67%;
    padding-right: 40px;
    div {
      overflow: hidden;
    }
    img {
      display: block;
      height: 520px;
    }
  }
  .contact-input {
    width: 33%;
    padding: 30px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
    h3 {
      position: relative;
      font-size: 20px;
      padding-left: 15px;
      padding-bottom: 22px;
      color: #447375;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 5px;
        width: 4px;
        height: 18px;
        background: #447375;
      }
      i {
        position: relative;
        float: right;
        padding: 4px 0 0 22px;
        font-size: 14px;
        color: #447375;
        &:after {
          content: "";
          position: absolute;
          left: 0;
          top: 3px;
          width: 18px;
          height: 18px;
          background: #fafafa url("../../assets/images/tel.png") no-repeat 0 0;
          background-size: 18px;
        }
      }
    }
    ul {
      text-align: center;
      padding-top: 5px;
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
            background: #fff url("../../assets/images/down-tel1.png") no-repeat
              9px 10px;
            background-size: 20px;
          }
        }
        &:nth-child(2) {
          p {
            background: #fff url("../../assets/images/down-tel2.png") no-repeat
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
            width: 200px;
            line-height: 22px;
            padding: 4px 15px;
          }
        }
        p {
          position: absolute;
          right: -20px;
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
    label.input {
      display: block;
      position: relative;
      height: 50px;
      line-height: 50px;
      margin-top: 20px;
      background: #FAFAFA;
      border-radius: 5px;
      span {
        display: inline-block;
        padding: 0 20px;
        color: #6f6f6f;
      }
      input {
        display: inline-block;
        background: #fafafa;
        width: calc(100% - 68px);
        &::placeholder {
          color: #CACACA;
        }
      }
      i {
        position: absolute;
        left: 68px;
        top: 0px;
        color: #FF3E3E;
      }
    }
    textarea {
      display: block;
      width: 100%;
      height: 90px;
      margin-top: 20px;
      padding: 14px 20px;
      border: none;
      background: #FAFAFA;
    }
    button {
      display: block;
      width: 100%;
      height: 50px;
      margin-top: 15px;
      color: #fff;
      background: #447375;
      border-radius: 5px;
      img {
        display: block;
        width: 30px;
        margin: auto;
        animation: proRotate 0.8s infinite both;
      }
    }
    @media (max-width: 767px) {
      width: 100%;
      float: none;
      margin-top: 15px;
      padding: 15px 20px;
      h3 {
        font-size: 22px;
        padding-bottom: 15px;
        &::after {
          height: 20px;
        }
      }
      ul li {
        &:nth-child(1) {
          p {
            right: -100px;
          }
        }
        &:nth-child(3) {
          p {
            right: -80px;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    .map {
      float: none;
      width: 100%;
      padding: 0;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>