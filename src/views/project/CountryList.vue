<template>
  <div class="country">
    <!-- banner -->
    <Banner :bannerImgList="bannerData" :autoplay="3000" />

    <div class="pc-max-width">
      <!-- nav -->
      <div class="nav-list">
        <a v-for="(item, k) in countryData" :key="k" @click="navClick(item.name)">
          <i v-if="item.hot">热门</i>
          {{item.name}}
        </a>
      </div>

      <!-- 国家列表 -->
      <div class="country-list">
        <div class="content clearfix" v-for="(item, k) in countryData" :key="k" :id="item.name">
          <div class="left img">
            <i v-if="item.hot"></i>
            <img :src="item.img" />
            <div class="free">
              <img :src="item.visa_free" />
            </div>
          </div>
          <div class="right item">
            <h3 class="name">
              <img :src="item.flag" :alt="item.name">
              {{item.name}}
            </h3>
            <ul class="type">
              <li v-for="(key, name, i) in item.type" :key="i">
                <img v-if="i === 0" src="../../assets/images/passport/live-icon.png" />
                <img v-if="i === 1" src="../../assets/images/passport/visa-free-icon.png" />
                <img v-if="i === 2" src="../../assets/images/passport/cycle-icon.png" />
                <img v-if="i === 3" src="../../assets/images/passport/passport-type-icon.png" />
                <i>{{name}}</i>
                {{key}}
              </li>
            </ul>

            <ul class="cond">
              <li v-for="(cond, name, i) in item.cond" :key="i" :class="name">
                {{cond}}
              </li>
            </ul>
            <router-link :to="item.url">查看详情 ></router-link>
          </div> 

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from '../../components/commonComponent/banner.vue'
export default {
  components: {
    Banner
  },
  data () {
    return {
      bannerData: [
        {
          img: require('../../assets/images/passport/SaintKitts-banner.jpg'),
        },
        {
          img: require('../../assets/images/passport/Turkey-banner.jpg'),
        },
        {
          img: require('../../assets/images/passport/saint-lucia-banner.jpg')
        },
        {
          img: require('../../assets/images/passport/vanuatu-banner.jpg'),
        },
        {
          img: require('../../assets/images/passport/cyprus-banner.jpg'),
        },
        {
          img: require('../../assets/images/passport/Dominica-banner.jpg'),
        },
        {
          img: require('../../assets/images/passport/Grenada-banner.jpg')
        },
        {
          img: require('../../assets/images/passport/Montenegro-banner.jpg'),
        },
        {
          img: require('../../assets/images/passport/Antigua-banner.jpg')
        }
      ],
      countryData: [
        {
          name: '圣卢西亚',
          hot: true,
          flag: require('../../assets/images/country6.png'),
          url: '/project/saint-lucia',
          img: require('../../assets/images/passport/SaintLucia-img.jpg'),
          visa_free: require('../../assets/images/passport/SaintLucia-free.png'),
          type: {
            居住要求: '无',
            '免签国家/地区': '约140',
            移民周期: '3个月',
            证据类型: '护照'
          },
          cond: {
            one: '10万美元',
            tow: '14万美元',
            four: '15万美元'
          }
        },
        {
          name: '圣基茨和尼维斯',
          hot: true,
          flag: require('../../assets/images/country5.png'),
          url: '/project/saint-kitts',
          img: require('../../assets/images/passport/SaintKitts-img.jpg'),
          visa_free: require('../../assets/images/passport/SaintKitts-free.png'),
          type: {
            居住要求: '无',
            '免签国家/地区': '约150',
            移民周期: '3个月',
            证据类型: '护照'
          },
          cond: {
            one: '15万美元',
            tow: '17.5万美元',
            three: '18.5万美元',
            four: '19.5万美元'
          }
        },
        {
          name: '土耳其',
          hot: true,
          flag: require('../../assets/images/country7.png'),
          url: '/project/turkey',
          img: require('../../assets/images/passport/Turkey-img.jpg'),
          visa_free: require('../../assets/images/passport/Turkey-free.png'),
          type: {
            居住要求: '无',
            '免签国家/地区': '约110',
            移民周期: '3个月',
            证据类型: '护照'
          },
          cond: {
            no_icon: '房地产投资：25万美金'
          }
        },
        {
          name: '瓦努阿图',
          flag: require('../../assets/images/country8.png'),
          url: '/project/vanuatu',
          img: require('../../assets/images/passport/Vanuatu-img.jpg'),
          visa_free: require('../../assets/images/passport/Vanuatu-free.png'),
          type: {
            居住要求: '无',
            '免签国家/地区': '约130',
            移民周期: '1个月',
            证据类型: '护照'
          },
          cond: {
            one: '8万美元',
            tow: '10万美元',
            three: '11.5万美元',
            four: '13万美元'
          }
        },
        {
          name: '塞浦路斯',
          flag: require('../../assets/images/country4.png'),
          url: '/project/cyprus',
          img: require('../../assets/images/passport/Cyprus-img.jpg'),
          visa_free: require('../../assets/images/passport/Cyprus-free.png'),
          type: {
            居住要求: '无',
            '免签国家/地区': '约170',
            移民周期: '6个月',
            证据类型: '护照'
          },
          cond: {
            no_icon: '房产投资200万欧元 + 国家捐款20万欧元'
          }
        },
        {
          name: '多米尼克',
          flag: require('../../assets/images/country1.png'),
          url: '/project/dominica',
          img: require('../../assets/images/passport/Dominica-img.jpg'),
          visa_free: require('../../assets/images/passport/Dominica-free.png'),
          type: {
            居住要求: '无',
            '免签国家/地区': '约140',
            移民周期: '2个月',
            证据类型: '护照'
          },
          cond: {
            one: '10万美元',
            tow: '15万美元',
            four: '20万美元'
          }
        },
        {
          name: '格林纳达',
          flag: require('../../assets/images/country2.png'),
          url: '/project/grenada',
          img: require('../../assets/images/passport/Grenada-img.jpg'),
          visa_free: require('../../assets/images/passport/Grenada-free.png'),
          type: {
            居住要求: '无',
            '免签国家/地区': '约140',
            移民周期: '2个月',
            证据类型: '护照'
          },
          cond: {
            one: '15万美元',
            tow: '20万美元',
            four: '20万美元'
          }
        },
        {
          name: '黑山',
          flag: require('../../assets/images/country16.png'),
          url: '/project/montenegro',
          img: require('../../assets/images/passport/Montenegro-img.jpg'),
          visa_free: require('../../assets/images/passport/Montenegro-free.png'),
          type: {
            居住要求: '无',
            '免签国家/地区': '约120',
            移民周期: '4-6个月',
            证据类型: '护照'
          },
          cond: {
            no_icon: '房产投资25万欧元或45万欧元 + 政府捐款10万欧元'
          }
        },
        {
          name: '安提瓜和巴布达',
          flag: require('../../assets/images/country3.png'),
          url: '/project/antigua',
          img: require('../../assets/images/passport/Antigua-img.jpg'),
          visa_free: require('../../assets/images/passport/Antigua-free.png'),
          type: {
            居住要求: '无',
            '免签国家/地区': '约150',
            移民周期: '4-6个月',
            证据类型: '护照'
          },
          cond: {
            one: '10万美元',
            tow: '10万美元',
            four: '10万美元'
          }
        }
      ]

    }
  },
  methods: {
    navClick (name) {
      const contentDiv = document.getElementById(name).offsetTop
      document.body.scrollTop = contentDiv - 160
      document.documentElement.scrollTop = contentDiv - 160
    }
  }
}
</script>
<style scoped lang="less">
.nav-list {
  display: flex;
  justify-content: space-around;
  height: 80px;
  margin-top: 40px;
  background: #F7F7F7;
  border-radius: 15px;
  a {
    font-size: 18px;
    color: #444;
    line-height: 80px;
    cursor: pointer;
    &:hover {
      color: #447375;
      border-bottom: 2px solid #447375;
    }
    i {
      display: inline-block;
      position: relative;
      top: -2px;
      width: 48px;
      height: 24px;
      margin-right: 5px;
      font-size: 12px;
      line-height: 25px;
      text-align: center;
      background: linear-gradient(180deg, #ED5252 0%, #F06A22 100%);
      opacity: 1;
      color: #fff;
      border-radius: 90px;
    }
  }
  @media (max-width: 767px) {
    display: block;
    height: 66px;
    padding: 0 10px;
    margin-top: 20px;
    white-space: nowrap;
    overflow-x: auto;
    &::-webkit-scrollbar {
      width: 5px;
      height: 0px;
    }
    a {
      line-height: 66px;
      font-size: 16px;
      margin: 0 15px;
      i {
        height: 22px;
        line-height: 22px;
      }
    }
  }
}
.country-list {
  margin-bottom: 50px;
  .content {
    margin-top: 40px;
    border-radius: 10px;
    overflow: hidden;
    transition: .3s;
    box-shadow: 0 0 4px #b9b9b9;
    &:hover {
      box-shadow: 0 0 8px #636363;
      .img .free {
        transform: translateY(-50%) scale(1);
      }
    }
    .img {
      position: relative;
      width: 49%;
      i {
        position: absolute;
        top: 0;
        left: 0;
        width: 65px;
        height: 65px;
        background: url('../../assets/images/passport/hot-img.png') no-repeat;
        background-size: 100%;
      }
      img {
        display: block;
        width: 100%;
      }
      .free {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 110px;
        margin-left: -55px;
        transition: .3s;
        transform: translateY(-50%) scale(0);
      }
    }
    .item {
      width: 51%;
      padding: 0 60px;
      text-align: center;
      h3 {
        padding: 20px 0;
        font-size: 24px;
        border-bottom: 1px solid #D9D9D9;
        img {
          display: inline-block;
          position: relative;
          top: -2px;
          width: 42px;
          margin-right: 10px;
        }
      }
      ul {
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
        li {
          i {
            display: block;
          }
        }
        &.type {
          li {
            font-size: 20px;
            color: #447375;
            img {
              display: inline-block;
              width: 50px;
            }
          }
          i {
            display: block;
            padding: 10px 0;
            color: #000;
            font-size: 14px
          }
        }
        &.cond {
          li {
            position: relative;
            height: 30px;
            padding: 0 10px 0 30px;
            line-height: 28px;
            background: #E9EFED;
            border: 1px solid #BBD3D3;
            border-radius: 45px;
            font-size: 15px;
            color: #447375;
            &:after {
              content: ''; 
              position: absolute;
              left: 8px;
              top: 0;
              width: 16px;
              height: 28px;
            }
            &.one {
              padding-left: 25px;
              &:after {
                left: 10px;
                width: 7px;
                background: url('../../assets/images/passport/one-icon.png') no-repeat center center;
                background-size: 100%;
              }
            }
            &.tow:after {
              background: url('../../assets/images/passport/tow-icon.png') no-repeat center center;
              background-size: 100%;
            }
            &.three:after {
              background: url('../../assets/images/passport/three-icon.png') no-repeat center center;
              background-size: 100%;
            }
            &.four:after {
              background: url('../../assets/images/passport/four-icon.png') no-repeat center center;
              background-size: 100%;
            }
          }
        }
      }
      a {
        display: inline-block;
        width: 228px;
        height: 50px;
        margin-top: 35px;
        line-height: 48px;
        color: #447375;
        background: #FFFFFF;
        border: 1px solid #4F7274;
        border-radius: 90px;
        transition: .3s;
        &:hover {
          color: #fff;
          background: #447375;
        }
      }
    }
    @media (max-width: 1200px) {
      .item {
        padding: 0 40px;
        h3 {
          font-size: 20px;
          img {
            width: 36px;
          }
        }
        ul {
          margin-top: 15px;
          i {
            padding: 5px 0;
          }
        }
        a {
          height: 40px;
          margin-top: 25px;
          line-height: 38px;
        }
      }
    }
    @media (max-width: 767px) {
      position: relative;
      margin-top: 20px;
      .left {
        width: 100%;
        &.img .free {
          width: 90px;
          margin-left: -45px;
          transform: translateY(-50%) scale(1);
        }
      }
      .item {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        padding: 0 15px;
        text-align: left;
        background: rgba(0, 0, 0, 0.4);
        h3 {
          color: #fff;
          font-size: 16px;
          padding: 0;
          line-height: 50px;
          img {
            width: 30px;
          }
        }
        ul {
          display: none;
        }
        a {
          position: absolute;
          top: 10px;
          right: 10px;
          margin: 0;
          width: 90px;
          height: 30px;
          font-size: 12px;
          border: 1px solid #FFFFFF;
          border-radius: 18px;
          text-align: center;
          line-height: 28px;
          background: none;
          color: #fff;
        }
      }
    }
  }
}
</style>
<style lang="less">
@media (max-width: 767px) {
  .country {
    .banner .img img {
      left: -140px;
      transform: translateX(0);
    }
  }
}

</style>