<template>
  <div class="popular-item">
    <h3>热门项目</h3>
    <ul>
      <li v-for="(item, key) in items" :key="key">
        <router-link class="a-img" :to="item.url">
          <img :src="item.img" :alt="item.name">
        </router-link>
        <router-link class="a-title" :to="item.url">{{item.name}}</router-link>
        <p>{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          name: '家族办公室移民项目',
          text: '资产配置 | 资产管理 | 财富继承 | 全家移民',
          url: '/emigrant/four',
          img: require('../../../assets/images/home/popular-item-img1.jpg')
        },
        {
          name: '股权投资移民项目',
          text: '3个月，全家登陆花园城市',
          url: '/emigrant/tow',
          img: require('../../../assets/images/home/popular-item-img2.jpg')
        },
        {
          name: "小额自雇移民项目",
          text: "条件宽松，无语言要求，精英首选方案",
          url: "/emigrant/one",
          img: require('../../../assets/images/home/popular-item-img3.jpg')
        },
        {
          name: "GIP投资移民项目",
          text: "获批后再投资安全无风险",
          url: "/emigrant/three",
          img: require('../../../assets/images/home/popular-item-img2.jpg')

        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.popular-item {
  display: none;
  padding: 25px 0;
  border-top: 10px solid #f7f7f7;
  @media (max-width: 767px) {
    display: block;
  }
  h3 {
    display: block;
    text-align: center;
    font-size: 18px;
  }
  ul {
    overflow: auto;
    white-space: nowrap;
    padding-top: 15px;
    margin-left: 10px;
    li {
      display: inline-block;
      width: 250px;
      margin-right: 10px;
      img {
        display: block;
        width: 100%;
      }
      .a-img {
        display: block;
        border-radius: 5px;
        overflow: hidden;
      }
      .a-title {
        display: block;
        padding-top: 15px;
        color: #101F24;
        font-size: 16px;
      }
      p {
        padding-top: 10px;
        color: #101F24;
        font-size: 12px;
      }
    }
  }
}
</style>