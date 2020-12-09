<template>
  <div class="pc-max-width margin-t-80">
    <div>
      <input type="text" v-model="name" placeholder="姓名" />
      <p v-if="nameError">请输入姓名</p>
    </div>
    <div>
      <input type="text" v-model="phone" placeholder="电话" />
      <p v-if="phoneError">请输入电话</p>
    </div>
    <div>
      <input type="text" v-model="mailbox" placeholder="邮箱" />
      <p v-if="mailboxError">请输入邮箱</p>
    </div>
    <div>
      <select v-model="age">
        <option value="年龄">年龄</option>
        <option value="18岁以上">18岁以上</option>
        <option value="18岁以下">18岁以下</option>
      </select>
      <p v-if="ageError">请选择年龄</p>
    </div>
    <div>
      <select v-model="englishLevel">
        <option value="英语等级">英语等级</option>
        <option value="PETS－1">PETS－1</option>
        <option value="PETS－2">PETS－2</option>
        <option value="PETS－3">PETS－3</option>
        <option value="PETS－4">PETS－4</option>
        <option value="PETS－5">PETS－5</option>
      </select>
      <p v-if="englishLevelError">请选择英语等级</p>
    </div>
    <div>
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
    <button @click="submitFrom">提交1</button>
  </div>
</template>
<script>
export default {
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
      if (this.education === '请选择最高学历') {
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
      };
       this.$http({
            method: "post",
            url: process.env.VUE_APP_API + "/v1/contact",
            params
          }).then(res => {
            if (res.data.code === 200) {
              this.name = ''
              this.phone = ''
              this.mailbox = ''
              this.age = ''
              this.englishLevel = ''
              this.education = ''
            }
          })
    }
  }
}
</script>