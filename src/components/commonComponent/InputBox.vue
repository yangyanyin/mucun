<template>
  <div class="input-box">
    
    <ul class="clearfix">
      <li class="name" :class="{on: inputType === 'name'}">
        <input class="name" type="text" placeholder="您的称呼" @focus="inputFocus('name')" @blur="inputBlur" v-model="userName" />
        <span v-if="nameError">请输入称呼！</span>
      </li>
      <li class="tel" :class="{on: inputType === 'tel'}">
        <input class="tel" type="tel" placeholder="您的电话" @focus="inputFocus('tel')" @blur="inputBlur" v-model="userTel" />
        <span v-if="telError">请输入电话！</span>
      </li>
      <li class="email" :class="{on: inputType === 'email'}">
        <input class="email" type="email" placeholder="您的电邮" @focus="inputFocus('email')" @blur="inputBlur" v-model="userEmail" />
        <span v-if="emailErroe">请输入正确的邮箱！</span>
      </li>
    </ul>
    <a class="submit" @click="submitUserInfo">
      <template v-if="!messageLoading">立即咨询</template>
      <img v-else src="../../assets/images/message-loading.png" />
    </a>

    <!--咨询完成弹窗 -->
    <MessagePopup v-if="messageType" :status="messageType" @messageType="messageType = false"></MessagePopup>
  </div>
</template>
<script>
import MessagePopup from './MessagePopup'
export default {
  components: {
    MessagePopup
  },
  data() {
    return {
      userName: "",
      userTel: "",
      userEmail: "",
      nameError: false,
      telError: false,
      emailErroe: false,
      messageType: false,
      messageLoading: false,
      inputType: ''
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
              _this.messageType = true;
              _this.messageLoading = false;
              _this.$emit('success')
            }
          });
      }, 2000);
    },
    isEmail(email) {
      let regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    },
    inputFocus(type) {
      this.inputType = type
    },
    inputBlur() {
      this.inputType = ''
    }
  }
};
</script>
<style scoped lang="less">
.input-box {
  ul {
    padding-top: 32px;
  }
  li {
    display: block;
    height: 50px;
    padding: 15px 10px 15px 50px;
    margin-bottom: 20px;
    border-radius: 5px;
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
    &.on {
      background-color: #f3f3f3;
      input {
        background-color: #f3f3f3;
      }
    }
  }
  .submit {
    display: block;
    height: 50px;
    margin-top: 15px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    padding: 10px 0;
    color: #fff;
    background: #447375;
    border-radius: 5px;
    transition: .3s;
    cursor: pointer;
    &:hover {
      background: #265456;
    }
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
    ul {
      padding-top: 17px;
    }
  } 
}
</style>