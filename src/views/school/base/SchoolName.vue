<template>
  <div class="name left" id="name-fixel">
    <div class="name-img">
      <img :src="nameInfo.img" :alt="nameInfo.zh_name" />
      <img class="int_img" v-if="nameInfo.int_img" :src="nameInfo.int_img">
      <h3>
        {{nameInfo.zh_name}}
        <i>{{nameInfo.en_name}}</i>
      </h3>
    </div>
    
    <template v-if="nameInfo.other">
      <strong>学术成绩</strong>
      <p v-for="(item, k) in nameInfo.other" :key="k">
        <img src="../../../assets/images/school/star-dark.png" /> {{item}}
      </p>
    </template>
    <span v-if="nameInfo.remarks">{{nameInfo.remarks}}</span>
  </div>
</template>
<script>
import { device } from '../../../assets/js/config'
export default {
  props: {
    nameInfo: Object
  },
  methods: {
    nameFixel () {
      let contentHeight = document.getElementById('int-content').clientHeight // 对照物高度
      let picBox = document.getElementById('name-fixel') //  吸顶自身
      let top = document.documentElement.scrollTop || document.body.scrollTop
      if (top > 170) {
        if (top > contentHeight - 462) {
          picBox.style.position = 'relative'
          picBox.style.overflow = 'visible'
          picBox.style.top = contentHeight - 620 + 'px'
          return
        }
        picBox.style.position = 'relative'
        picBox.style.overflow = 'visible'
        picBox.style.top = top - 90 + 'px'
      } else {
        picBox.style.position = 'relative'
        picBox.style.overflow = 'visible'
        picBox.style.top = '0px'
      }
    }
  },
  mounted () {
    if (device() === 'web') {
      window.addEventListener('scroll', this.nameFixel)
    }
  }
}
</script>
<style scoped lang="less">
.name {
  width: 42%;
  padding: 30px;
  position: relative;
  img {
    display: block;
    width: 100%;
    &.int_img {
      display: none;
    }
  }
  h3 {
    padding: 15px 0;
    text-align: center;
    font-size: 20px;
    color: #fff;
    background: #447375;
    i {
      display: block;
      font-size: 16px;
    }
  }
  strong {
    display: block;
    font-size: 20px;
    font-weight: normal;
    padding: 35px 0 20px;
  }
  p {
    display: block;
    position: relative;
    margin-bottom: 15px;
    padding-left: 25px;
    font-size: 16px;
    img {
      position: absolute;
      left: 0;
      top: 2px;
      width: 18px;
      margin-right: 5px;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    padding: 0;
    img.int_img {
      display: block;
    }
    .name-img {
      position: relative;
    }
    h3 {
      font-size: 16px;
      i {
        font-size: 14px;
      }
    }
    strong {
      text-align: center;
      padding: 20px 0 10px;
      font-size: 16px;
    }
    p {
      font-size: 12px;
      margin-bottom: 10px;
    }
  }
}
</style>