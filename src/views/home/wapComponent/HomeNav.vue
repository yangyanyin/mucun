<template>
  <div class="home-nav">
    <router-link class="list" v-for="(item, key) in navList" :key="key" :to="item.url">
      <img :src="item.icon" >
      {{item.name}}
    </router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navList: [
        {
          name: '新加坡移民',
          icon: require('../../../assets/images/home/singapore-immigration.png'),
          url: '/emigrant/four'
        },
        {
          name: '留学与教育',
          icon: require('../../../assets/images/home/study-abroad-education.png'),
          url: '/overseas-study/one'
        },
        {
          name: '资产管理',
          icon: require('../../../assets/images/home/asset-management.png'),
          url: '/asset'
        },
        {
          name: '海外银行账户',
          icon: require('../../../assets/images/home/overseas-bank.png'),
          url: '/'
        },
        {
          name: '海外公司注册',
          icon: require('../../../assets/images/home/overseas-company.png'),
          url: '/company'
        },{
          name: '增值服务',
          icon: require('../../../assets/images/home/value-added-services.png'),
          url: '/bank'
        },
        {
          name: '热门资讯',
          icon: require('../../../assets/images/home/popular-information.png'),
          url: '/'
        },
        {
          name: '关于我们',
          icon: require('../../../assets/images/home/about.png'),
          url: '/about'
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.home-nav {
  display: none;
  padding-top: 10px;
  @media (max-width: 767px) {
    display: block;
  }
  a {
    display: inline-block;
    width: 25%;
    margin-top: 15px;
    text-align: center;
    font-size: 12px;
    color: #3E3E3E;
    img {
      display: block;
      width: 56px;
      margin: auto;
    }
  }
}
</style>