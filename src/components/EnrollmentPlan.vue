<template>
  <div class="pc-max-width margin-t-80 enrollment clearfix">
    <h3>索取招生方案</h3>
    <div class="input-box">
      <input type="text" v-model="name" placeholder="姓名" />
      <p v-if="nameError">请输入姓名</p>
    </div>
    <div class="input-box">
      <input type="text" v-model="phone" placeholder="电话" />
      <p v-if="phoneError">请输入电话</p>
    </div>
    <div class="no-m input-box">
      <input type="text" v-model="mailbox" placeholder="邮箱" />
      <p v-if="mailboxError">请输入邮箱</p>
    </div>
    <div class="input-box">
      <select v-model="age">
        <option value="年龄">年龄</option>
        <option value="18岁以上">18岁以上</option>
        <option value="18岁以下">18岁以下</option>
      </select>
      <p v-if="ageError">请选择年龄</p>
    </div>
    <div class="input-box">
      <select v-model="englishLevel">
        <option value="英语等级">英语等级</option>
        <option value="PETS－1">PETS－1</option>
        <option value="PETS－2">PETS－2</option>
        <option value="PETS－3">PETS－3</option>
        <option value="PETS－4">PETS－4</option>
        <option value="PETS－5">PETS－5</option>
        <option value="PETS－5">无英语级别</option>
        <option value="PETS－5">其他语种</option>
      </select>
      <p v-if="englishLevelError">请选择英语等级</p>
    </div>
    <div class="no-m input-box">
      <select v-model="education">
        <option value="最高学历">最高学历</option>
        <option value="初中">初中</option>
        <option value="高中">高中</option>
        <option value="大专">大专</option>
        <option value="本科">本科</option>
        <option value="研究生">研究生</option>
        <option value="硕士">硕士</option>
        <option value="博士">博士</option>
      </select>
      <p v-if="educationError">请选择最高学历</p>
    </div>
    <button @click="submitFrom" :class="{load: submitLoad}">
      <template v-if="!submitLoad">提交</template>
      <img v-else src="../assets/images/message-loading.png" />
    </button>

    <MessagePopup v-if="messageType" :status="messageType" @messageType="messageType = false"></MessagePopup>
  </div>
</template>
<script>
import MessagePopup from './commonComponent/MessagePopup'
export default {
  components: {
    MessagePopup
  },
  data () {
    return {
      name: '',
      phone: '',
      mailbox: '',
      age: '年龄',
      englishLevel: '英语等级',
      education: '最高学历',
      nameError: false,
      phoneError: false,
      mailboxError: false,
      ageError: false,
      englishLevelError: false,
      educationError: false,
      submitLoad: false,
      messageType: false
    }
  },
  methods: {
    submitFrom () {
      setTimeout(() => {
        this.nameError = false
        this.phoneError = false
        this.mailboxError = false
        this.ageError = false
        this.englishLevelError = false
        this.educationError = false
      }, 2000)
      if (!this.name) {
        this.nameError = true
        return false
      }
      if (!this.phone) {
        this.phoneError = true
        return false
      }
      if (!this.mailbox) {
        this.mailboxError = true
        return false
      }
      if (this.age === '年龄') {
        this.ageError = true
        return false
      }
      if (this.englishLevel === '英语等级') {
        this.englishLevelError = true
        return false
      }
      if (this.education === '最高学历') {
        this.educationError = true
        return false
      }
      let params = {
        name: this.name,
        phone: this.phone,
        email: this.mailbox,
        age: this.age,
        english_level: this.englishLevel,
        education: this.education
      }
      if (this.submitLoad) return
      this.submitLoad = true
       this.$http({
            method: "post",
            url: process.env.VUE_APP_API + "/v1/contact",
            params
          }).then(res => {
            if (res.data.code === 200) {
              this.submitLoad = false
              this.messageType = true
              this.name = ''
              this.phone = ''
              this.mailbox = ''
              this.age = '年龄'
              this.englishLevel = '英语等级'
              this.education = '最高学历'
            }
          })
    }
  }
}
</script>
<style scoped lang="less">
.enrollment {
  position: relative;
  padding-right: 190px;
  h3 {
    color: #437375;
    font-size: 26px;
    margin-bottom: 30px;
  }
  .input-box {
    position: relative;
    float: left;
    width: 30%;
    margin: 0 5% 30px 0;
    &.no-m {
      margin-right: 0;
    }
    input, select {
      display: block;
      width: 100%;
      height: 60px;
      padding: 10px 15px;
      font-size: 18px;
      border: none;
      color: #444;
      box-shadow: 0 0 5px #afafaf;
      border-radius: 5px;
      overflow: hidden;
    }
    select {
      background: url('../assets/images/select-tag.png') no-repeat 95% 47%;
      background-size: 12px;
    }
    p {
      position: absolute;
      color: #437375;
      left: 0;
      top: 63px;
      
    }
  }
  button {
    position: absolute;
    top: 157px;
    right: 0;
    width: 150px;
    height: 60px;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    background: #437375;
    cursor: pointer;
    &:hover {
      background: #316163;

    }
    img {
      display: block;
      width: 30px;
      margin: auto;
      animation: proRotate 0.8s infinite both;
    }
  }
  @media (max-width: 767px) {
    padding: 20px 20px;
    h3 {
      font-size: 22px;
      margin-bottom: 20px;
    }
    .input-box {
      float: none;
      width: 100%;
      margin: 0 0 25px 0;
      padding: 0;
      input, select {
        height: 46px;
        font-size: 14px;
      }
      p {
        top: 48px;
        font-size: 12px;
      }
    }
    button {
      position: static;
      width: 100%;
      height: 46px;
    }
  }
}
</style>