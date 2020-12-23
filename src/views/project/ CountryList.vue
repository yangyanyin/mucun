<template>
  <div class="country-list">
    <div></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      countryData: [
        {
          name: '圣基茨和尼维斯',
          hot: true,
          flag: require('../../assets/images/country5.png'),
          url: '/project/saint-kitts'
        },
        {
          name: '土耳其',
          hot: true,
          flag: require('../../assets/images/country7.png'),
          url: '/project/turkey'
        },
        {
          name: '圣卢西亚',
          flag: require('../../assets/images/country6.png'),
          url: '/project/saint-lucia'
        },
        {
          name: '瓦努阿图',
          flag: require('../../assets/images/country8.png'),
          url: '/project/vanuatu'
        },
        {
          name: '塞浦路斯',
          flag: require('../../assets/images/country4.png'),
          url: '/project/cyprus'
        },
        {
          name: '多米尼克',
          flag: require('../../assets/images/country1.png'),
          url: '/project/dominica'
        },
        {
          name: '格林纳达',
          flag: require('../../assets/images/country2.png'),
          url: '/project/grenada'
        },
        {
          name: '黑山',
          flag: require('../../assets/images/country2.png'),
          url: '/project/montenegro'
        },
        {
          name: '安提瓜和巴布达',
          flag: require('../../assets/images/country3.png'),
          url: '/project/antigua'
        }
      ]

    }
  } 
}
</script>
<style scoped lang="less">

</style>