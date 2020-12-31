<template>
  <div class="name left">
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
export default {
  props: {
    nameInfo: Object
  }
}
</script>
<style scoped lang="less">
.name {
  width: 42%;
  padding: 30px;
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
    margin-bottom: 15px;
    font-size: 16px;
    img {
      display: inline-block;
      position: relative;
      top: -3px;
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