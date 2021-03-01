<template>
  <div class="services">
    <h3>增值服务</h3>
    <div class="list">
      <router-link :to="item.url" v-for="(item, key) in servicesData" :key="key">
        <img :src="item.img" :alt="item.name" />
        <p>{{item.name}}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      servicesData: [
        {
          img: require('../../../assets/images/home/services-img1.jpg'),
          name: '海外护照项目',
          url: '/project'
        },
        {
          img: require('../../../assets/images/home/services-img2.jpg'),
          name: '新加坡房产',
          url: '/estate'
        },
        {
          img: require('../../../assets/images/home/services-img3.jpg'),
          name: '海外股票账户',
          url: '/stock'
        },
        {
          img: require('../../../assets/images/home/services-img4.jpg'),
          name: '海外公司注册',
          url: '/company'
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.services {
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
    font-weight: bold;
  }
  .list {
    padding: 0 5px;
    a {
      display: inline-block;
      width: calc(50% - 10px);
      margin: 18px 5px 0;
      text-align: center;
      font-size: 16px;
      color: #3E3E3E;
      img {
        display: block;
        width: 100%;
        margin-bottom: 7px;
        border-radius: 5px;
      }
    }
  }
}
</style>