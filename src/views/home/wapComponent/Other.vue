<template>
  <div class="home-other">
    <router-link v-for="(item, key) in otherData" :key="key" :to="item.url">
      <img :src="item.img" :alt="item.name" />
      <h3>{{ item.name }}</h3>
      <p>{{ item.text }}</p>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      otherData: [
        {
          img: require("../../../assets/images/home/immigration-expert.png"),
          name: "移民专家",
          text: "制定移民方案",
          url: ""
        },
        {
          img: require("../../../assets/images/home/study-abroad-expert.png"),
          name: "留学专家",
          text: "制定移民方案",
          url: "/overseas-study/one"
        },
        {
          img: require("../../../assets/images/home/asset-management-expert.png"),
          name: "资产管理专家",
          text: "制定移民方案",
          url: "/asset"
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.home-other {
  padding: 15px 10px;
  background: #F7F7F7;
  overflow: auto;
  white-space: nowrap;
  a {
    position: relative;
    display: inline-block;
    height: 100px;
    margin-right: 10px;
    padding: 20px 20px 20px 80px;
    background: #fff;
    border-radius: 5px;
    &:last-child {
      margin-right: 0;
    }
    img {
      position: absolute;
      left: 10px;
      top: 20px;
      width: 60px;
    }
    h3 {
      margin-top: 5px;
      color: #3E3E3E;
      font-size: 16px;
    }
    p {
      margin-top: 5px;
      color: #747474;
      font-size: 16px;
    }
  }
}
</style>