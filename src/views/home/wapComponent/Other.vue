<template>
  <div class="home-other">
    <span v-for="(item, key) in otherData" :key="key" @click="clickMessage(item.name)">
      <img :src="item.img" :alt="item.name" />
      <h3>{{ item.name }}</h3>
      <p>{{ item.text }}</p>
    </span>

    <NewMessageType v-if="messageType" :messageType="messageType" @clickMessage="clickMessage"  />
  </div>
</template>
<script>
import NewMessageType from '../../../components/commonComponent/NewMessageType'
export default {
  components: {
    NewMessageType
  },
  data() {
    return {
      messageType: '',
      otherData: [
        {
          img: require("../../../assets/images/home/immigration-expert.png"),
          name: "移民专家",
          text: "制定移民方案",
          url: "/emigrant/singapore"
        },
        {
          img: require("../../../assets/images/home/study-abroad-expert.png"),
          name: "留学专家",
          text: "制定留学方案",
          url: "/overseas-study/one"
        },
        {
          img: require("../../../assets/images/home/asset-management-expert.png"),
          name: "资产管理专家",
          text: "制定投资方案",
          url: "/asset"
        }
      ]
    }
  },
  methods: {
    clickMessage (type) {
      this.messageType = type
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
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
  span {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    padding: 15px 15px 15px 60px;
    background: #fff;
    border-radius: 5px;
    &:last-child {
      margin-right: 0;
    }
    img {
      position: absolute;
      left: 10px;
      top: 18px;
      width: 40px;
    }
    h3 {
      margin-top: 2px;
      color: #3E3E3E;
      font-size: 14px;
    }
    p {
      margin-top: 5px;
      color: #747474;
      font-size: 12px;
    }
  }
}
</style>