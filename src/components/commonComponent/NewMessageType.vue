<template>
  <div class="popup">
    <div class="close" @click="clickMessage('')">
      <img src="../../assets/images/close-black.png" alt="close" />
    </div>
    <div class="content">
      <h3>{{popopTitle[messageType].title}}</h3>
      <em>{{popopTitle[messageType].text}}</em>
      <input type="text" v-model="fomrData.name" placeholder="称呼" />
      <p v-if="fomrDataErr.name">请输入您的称呼</p>

      <input type="text" v-model="fomrData.tel" placeholder="电话" />
      <p v-if="fomrDataErr.tel">请输入您的电话</p>

      <template v-if="messageType !== '留学专家'">
        <input type="text" v-model="fomrData.weChat" placeholder="微信" />
        <p v-if="fomrDataErr.weChat">请输入您的微信</p>

        <textarea v-model="fomrData.content" placeholder="请输入您的留言内容，我想了解「哪个国家」的移民项目"></textarea>
        <p v-if="fomrDataErr.content">请输入内容</p>

      </template>

      <template v-else>
        <input type="text" v-model="fomrData.mailbox" placeholder="邮箱" />
        <p v-if="fomrDataErr.mailbox">请输入您的邮箱</p>

        <select v-model="fomrData.age">
          <option value="年龄">年龄</option>
          <option value="18岁以上">18岁以上</option>
          <option value="18岁以下">18岁以下</option>
        </select>
        <p v-if="fomrDataErr.nageame">请选择年龄</p>

        <select v-model="fomrData.englishLevel">
          <option value="英语等级">英语等级</option>
          <option value="PETS－1">PETS－1</option>
          <option value="PETS－2">PETS－2</option>
          <option value="PETS－3">PETS－3</option>
          <option value="PETS－4">PETS－4</option>
          <option value="PETS－5">PETS－5</option>
          <option value="PETS－5">无英语级别</option>
          <option value="PETS－5">其他语种</option>
        </select>
        <p v-if="fomrDataErr.englishLevel">请选择英语等级</p>

        <select v-model="fomrData.education">
          <option value="最高学历">最高学历</option>
          <option value="初中">初中</option>
          <option value="高中">高中</option>
          <option value="大专">大专</option>
          <option value="本科">本科</option>
          <option value="研究生">研究生</option>
          <option value="硕士">硕士</option>
          <option value="博士">博士</option>
        </select>
        <p v-if="fomrDataErr.education">请选择最高学历</p>

      </template>

      <button @click="submitForm">
        <template v-if="!messageLoading">提交</template>
        <img v-else src="../../assets/images/message-loading.png" />
      </button>
    </div>
    <div class="message-success" v-if="successMessageStatus">
      <div>
        <a @click="closeSuccess" class="success-close"><img src="../../assets/images/close-black.png" alt="close" /></a>
        <h3>
          <i></i>
          提交成功</h3>
        <p>感谢您咨询！我们将尽快与您取得联系！</p>
        <p>请您耐心等待。</p>
        <p class="tel">咨询热线：<strong><a href="tel:6588665586">+65 8866 5586</a></strong></p>
        <span>7x24小时服务热线</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    messageType: String
  },
  data () {
    return {
      popopTitle: {
        移民专家: {
          title: '索取移民方案',
          text: '定制专属于你的移民方案'
        },
        留学专家: {
          title: '索取招生方案',
          text: '定制专属于你的留学方案'
        },
        资产管理专家: {
          title: '索取投资方案',
          text: '定制专属于你的投资方案'
        },
        联系我们: {
          title: '联系我们',
          text: '给我们留言，我们将会与您联系'
        }
      },
      fomrData: {
        name: '',
        tel: '',
        weChat: '',
        mailbox: '',
        age: '年龄',
        englishLevel: '英语等级',
        education: '最高学历',
        content: ''
      },
      fomrDataErr: {
        name: false,
        tel: false,
        weChat: false,
        mailbox: false,
        age: false,
        englishLevel: false,
        education: false,
        content: false
      },
      successMessageStatus: false,
      messageLoading: false
    }
  },
  methods: {
    clickMessage () {
      this.$emit('clickMessage', '')
    },
    closeSuccess () {
      this.successMessageStatus = false
      this.$emit('clickMessage', '')
    },
    submitForm () {
      let verification
      if (this.messageType !== '留学专家') {
        verification = ['name', 'tel', 'weChat', 'content']
      } else {
        verification = ['name', 'tel', 'mailbox', 'age', 'englishLevel', 'education']
      }
      for (const i in this.fomrData) {
        if (this.fomrData[i] === '' && verification.indexOf(i) >= 0) {
          this.fomrDataErr[i] = true
          return false
        } else {
          this.fomrDataErr[i] = false
        }
      }
      let params = {
        type: this.messageType,
        name: this.fomrData.name,
        phone: this.fomrData.tel,
      }
      if (this.messageType !== '留学专家') {
        params.we_chat = this.fomrData.weChat
        params.text = this.fomrData.content
      } else {
        params.email = this.fomrData.mailbox,
        params.age = this.fomrData.age,
        params.english_level = this.fomrData.englishLevel,
        params.education = this.fomrData.education
      }
      this.messageLoading = true
      this.$http({
        method: "post",
        url: process.env.VUE_APP_API + "/v1/contact",
        params
      }).then(res => {
        if (res.data.code === 200) {
          this.messageLoading = false
          this.successMessageStatus = true
          for (const i in this.fomrData) {
            this.fomrData[i] = ''
          }
        }
      })
    }
  }
}
</script>
<style scoped lang="less">
@keyframes messageShow {
  100% {
    bottom: 0;
    opacity: 1;
  }
}
.popup {
  position: fixed;
  z-index: 99999999;
  left: 0;
  bottom: -110%;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 10px;
  animation: messageShow .25s ease-in both;
  opacity: .7;
  .close {
    position: absolute;
    right: 15px;
    top: 15px;
    width: 20px;
    height: 20px;
    img {
      display: block;
      width: 100%;
    }
  }
  .content {
    h3 {
      font-size: 16px;
      color: #4F7274;
      text-align: center;
      padding-top: 30px;
    }
    em {
      display: block;
      padding: 5px 0 10px;
      text-align: center;
      color: #747474;
    }
    
    input, select {
      display: block;
      position: relative;
      width: 100%;
      height: 50px;
      line-height: 50px;
      margin-top: 15px;
      padding: 0 20px;
      border: 1px solid #EFEFEF;
      border-radius: 5px;
      &::placeholder {
        color: #CACACA;
      }
    }
    p {
      padding: 5px 0 0 20px;
      font-size: 12px;
      color: #437375;
    }
    textarea {
      display: block;
      width: 100%;
      height: 100px;
      margin-top: 15px;
      padding: 14px 20px;
      border: 1px solid #EFEFEF;
      border-radius: 5px;
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
  }
  .message-success {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);
    > div {
      position: absolute;
      left: 10px;
      right: 10px;
      top: 50%;
      padding: 50px 0;
      border-radius: 5px;
      background: #fff;
      text-align: center;
      transform: translateY(-50%);
    }
    .success-close {
      position: absolute;
      right: 15px;
      top: 15px;
      width: 20px;
      height: 20px;
      img {
        display: block;
        width: 100%;
      }
    }
    h3 {
      padding-bottom: 15px;
      font-size: 18px;
      i {
        position: relative;
        display: block;
        width: 40px;
        height: 40px;
        margin: 0 auto 15px;
        background: #447375;
        border-radius: 100%;
        &:after {
          content: '';
          position: absolute;
          left: 11px;
          top: 13px;
          width: 15px;
          height: 8px;
          border-left: 2px solid #fff;
          border-bottom: 2px solid #fff;
          transform: rotate(-45deg);
        }
      }
    }
    p {
      line-height: 32px;
      &.tel {
        margin-top: 20px;
        font-size: 12px;
        color: #447375;
      }
      strong {
        font-size: 18px;
      }
    }
    span {
      font-size: 12px;
    }
  }
}
</style>