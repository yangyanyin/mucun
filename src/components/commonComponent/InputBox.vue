<template>
  <div class="input-box">
    <h3>免费咨询服务</h3>
    <p>
      <i>电话:</i>
      <strong>+65 6909 8015</strong>
    </p>
    <p>
      <i>邮箱:</i>sgpec@spgec.sg
    </p>
    <p>
      <i>地址:</i>新加坡滨海林荫大道8号滨海金融中心14楼
    </p>
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
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      userTel: "",
      userEmail: "",
      nameError: false,
      telError: false,
      emailErroe: false,
      messageSuccess: false,
      messageLoading: false
    };
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
};
</script>
<style scoped lang="less">
.input-box {
  padding: 35px 40px;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
  h3 {
    position: relative;
    font-size: 26px;
    padding-left: 18px;
    padding-bottom: 22px;
    &::after {
      content: "";
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
    span {
      display: block;
      padding-top: 16px;
      font-size: 12px;
      color: #447375;
      opacity: 0.8;
    }
    &.name {
      background: #fafafa url("../../assets/images/user.png") no-repeat 10px
        12px;
      background-size: 25px;
    }
    &.tel {
      background: #fafafa url("../../assets/images/tel.png") no-repeat 10px 12px;
      background-size: 25px;
    }
    &.email {
      background: #fafafa url("../../assets/images/email.png") no-repeat 10px
        12px;
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
    img {
      display: block;
      width: 30px;
      margin: auto;
      animation: proRotate 0.8s infinite both;
    }
  }
  @media (max-width: 767px) {
    float: none;
    width: 100%;
    margin-top: 15px;
    padding: 15px 20px;
    h3 {
      font-size: 22px;
      padding-bottom: 15px;
      &::after {
        height: 20px;
      }
    }
    ul {
      padding-top: 17px;
    }
  } 
}
</style>