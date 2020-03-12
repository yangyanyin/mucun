<template>
  <div class="contact-us pc-max-width margin-t-80">
    <div class="content animation-show clearfix">
      <div class="map left">
        地图
      </div>
      <div class="input-box right">
        <h3>免费咨询服务</h3>
        <p><i>电话:</i><strong>+65 6909 8015</strong></p>
        <p><i>邮箱:</i>sgpec@spgec.sg</p>
        <p><i>地址:</i>新加坡滨海林荫大道8号滨海金融中心14楼</p>
        <ul class="clearfix">
          <li class="name">
            <input class="name" type="text" placeholder="您的称呼" v-model="userName" />
            <span v-if="nameError">请输入称呼！</span>
          </li>
          <li class="tel">
            <input class="tel" type="tel" placeholder="您的电话" v-model="userTel" />
            <span v-if="telError">请输入电话！</span>
          </li>
          <li class="email">
            <input class="email" type="email" placeholder="您的电邮" v-model="userEmail" />
            <span v-if="emailErroe">请输入正确的邮箱！</span>
          </li>
        </ul>
        <a class="submit" @click="submitUserInfo">
          <template v-if="!messageLoading">立即咨询</template>
          <img v-else src="../../assets/images/message-loading.png" />
        </a>
      </div>
    </div>

    <!-- 国旗 -->
    <Flag />

     <!--咨询完成弹窗 -->
    <div class="message-success" :class="{on:messageSuccess}" v-if="messageSuccess">
      <div class="content">
        <span class="close">
          <img src="../../assets/images/close.png" @click="closeMessage" />
        </span>
        <img src="../../assets/images/index/message-img.jpg" />
        <p class="p1">感谢您使用我们的免费咨询服务</p>
        <p class="p1">我们稍后会联系您</p>
        <p class="p1">您也可以拨打</p>
        <p class="tel">(+65) 8866 5586</p>
        <p class="p2">进行直接咨询</p>
        <a href="/passport">了解更多</a>
      </div>
    </div>
  </div>
</template>
<script>
import Flag from '../commonComponent/NationalFlag'
export default {
  data () {
    return {
      userName: "",
      userTel: "",
      userEmail: "",
      nameError: false,
      telError: false,
      emailErroe: false,
      messageSuccess: false,
      messageLoading: false
    }
  },
  components: {
    Flag
  },
  methods: {
    submitUserInfo() {
      let _this = this;
      setTimeout(function() {
        _this.nameError = false;
        _this.telError = false;
        _this.emailErroe = false;
      }, 2000);
      if (this.userName === "") {
        this.nameError = true;
        return false;
      } else if (this.userTel === "") {
        this.telError = true;
        return false;
      } else if (this.userEmail === "") {
        this.emailErroe = true;
        return false;
      } else if (!this.isEmail(this.userEmail)) {
        this.emailErroe = true;
        return false;
      }
      let params = {
        name: this.userName,
        phone: this.userTel,
        email: this.userEmail
      };
      _this.messageLoading = true;
      setTimeout(function() {
        _this
          .$http({
            method: "post",
            url: process.env.VUE_APP_API + "/v1/contact",
            params
          })
          .then(res => {
            if (res.data.code === 200) {
              _this.userName = "";
              _this.userTel = "";
              _this.userEmail = "";
              _this.messageSuccess = true;
              _this.messageLoading = false;
            }
          });
      }, 2000);
    },
    closeMessage() {
      this.messageSuccess = false;
    },
    isEmail(email) {
      let regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    }
  }
}
</script>
<style scoped lang="less">

/** 联系我们 **/
.contact-us{
    .input-box {
        width: 33%;
        padding: 35px 40px;
        border-radius: 5px;;
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
        h3 {
            position: relative;
            font-size: 26px;
            padding-left: 18px;
            padding-bottom: 22px;
            &::after {
                content: '';
                position: absolute;
                left: 0;
                top: 5px;
                width: 4px;
                height: 26px;
                background: #447375;
            }
        }
        p {
            padding-bottom: 5px;
            i {
                color: #447375;
                padding-right: 5px;
            }
        }
        ul {
            padding-top: 35px;
        }
        li {
            display: block;
            height: 50px;
            padding: 15px 10px 15px 50px;
            margin-bottom: 20px;
            input {
                display: block;
                height: 20px;
                font-size: 16px;
                background: #fafafa;
            }
            &.name {
              background: #fafafa url('../../assets/images/user.png') no-repeat 10px 12px;
              background-size: 25px;
            }
            &.tel {
              background: #fafafa url('../../assets/images/tel.png') no-repeat 10px 12px;
              background-size: 25px;
            }
            &.email {
              background: #fafafa url('../../assets/images/email.png') no-repeat 10px 12px;
              background-size: 25px;
            }
        }
        .submit {
          display: block;
          height: 50px;
          margin-top: 20px;
          line-height: 30px;
          text-align: center;
          font-size: 16px;
          padding: 10px 0;
          color: #fff;
          background: #447375;
          border-radius: 5px;
          img{
            display: block;
            width: 30px;
            margin: auto;
            animation: proRotate .8s infinite both;
          } 
        }
    }
}


.message-success{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: rgba(0,0,0,0.6);
    .content{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 480px;
        height: 600px;
        margin: -300px 0 0 -240px;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        text-align: center;
        opacity: 0;
        transform: translateY(200px);
        .close{
            position: absolute;
            top: 10px;
            right: 10px;
            width: 15px;
            height: 15px;
            opacity: 0.7;
            color: #fff;
            font-size: 18px;
            cursor:pointer;
        }
        img{
            display: block;
            width: 100%;
            margin-bottom: 10px;
        }
        p{
            font-size: 18px;
            padding-top: 18px;
        }
        .tel{
            color: #447375;
            padding-top: 5px;
            font-size: 20px;
        }
        .p2{
            padding-top: 5px;
            font-size: 16px;
        }
        a{
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
    }
    &.on{
        .content{
            animation: showMessageSuccess .8s;
            animation-fill-mode: forwards;
        }
    }
     @media(max-width: 767px){
        padding: 0 10px;
        .content{
            width: 90%;
            left: 5%;
            height: 460px;
            margin: -230px 0 0 0;
            p{
                font-size: 16px;
                padding-top: 15px;
            }
            .p2{
                padding-top: 5px;
                font-size: 14px;
            }
            a{
                width: 80%;
                margin: 15px auto;
                height: 40px;
                line-height: 40px;
                border-radius: 20px;
                line-height: 40px;
                font-size: 16px;
            }
        }
    }
}

@keyframes showMessageSuccess{
    100%{
        opacity: 1;
        transform: translateY(0);
    }
}
</style>