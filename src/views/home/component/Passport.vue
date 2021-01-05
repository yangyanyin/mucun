<template>
  <div class="passport pc-max-width margin-t-80">
    <div class="public-title animation-show">
      <h3>护照项目</h3>
      <span>
        <i>
          <img src="../../../assets/images/title.gif" />
        </i>
      </span>
      <p>GLOBAL CITIZENSHIP PROGRAMS</p>
    </div>
    <div class="list clearfix">
      <router-link :to="item.url" class="item left" v-for="(item, k) in passportList" :key="k">
        <i class="hot" v-if="item.hot"></i>
        <img class="img" :src="item.img" :alt="item.name" />
        <div class="f">
          <h3>
            <img :src="item.flag">
            {{item.name}}
          </h3>
          <ul>
            <li v-for="(n, t, i) in item.type" :key="i">
              {{t}}: {{n}} <template v-if="i < 3">|</template>
            </li>
          </ul>
          <ol>
            <li v-for="(n, t, i) in item.cond" :key="i" :class="t">
              {{n}}
            </li>
          </ol>
          <a>查看详情 ></a>
        </div>
      </router-link>
    </div>
    <router-link class="more" to="/project">查看更多国家 ></router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      passportList: [
        {
          name: '圣基茨和尼维斯',
          hot: true,
          flag: require('../../../assets/images/country5.png'),
          url: '/project/saint-kitts',
          img: require('../../../assets/images/passport/SaintKitts-img.jpg'),
          visa_free: require('../../../assets/images/passport/SaintKitts-free.png'),
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
          flag: require('../../../assets/images/country7.png'),
          url: '/project/turkey',
          img: require('../../../assets/images/passport/Turkey-img.jpg'),
          visa_free: require('../../../assets/images/passport/Turkey-free.png'),
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
          name: '圣卢西亚',
          flag: require('../../../assets/images/country6.png'),
          url: '/project/saint-lucia',
          img: require('../../../assets/images/passport/SaintLucia-img.jpg'),
          visa_free: require('../../../assets/images/passport/SaintLucia-free.png'),
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
          name: '瓦努阿图',
          flag: require('../../../assets/images/country8.png'),
          url: '/project/vanuatu',
          img: require('../../../assets/images/passport/Vanuatu-img.jpg'),
          visa_free: require('../../../assets/images/passport/Vanuatu-free.png'),
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
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.list {
  margin: 30px -10px 0;
  .item {
    position: relative;
    width: calc(50% - 20px);
    margin: 10px;
    border-radius: 10px;
    overflow: hidden;
    transition: .3s;
    &:hover {
      box-shadow: 0 0 10px 0 #423c3c;
    }
    .hot {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 65px;
      height: 65px;
      background: url('../../../assets/images/passport/hot-img.png') no-repeat;
      background-size: 100%;
    }
    .img {
      display: block;
      width: 100%;
      transition: .3s;
      &:hover {
        transform: scale(1.1);
      }
    }
    .f {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 10px 15px 20px;
      color: #fff;
      background: rgba(0, 0, 0, 0.5);
      h3 {
        font-size: 18px;
        img {
          display: inline-block;
          position: relative;
          top: -2px;
          width: 30px;
        }
      }
      li {
        display: inline-block;
        font-size: 12px;
      }
      ul {
        padding: 5px 0 15px;
        li {
          margin-right: 5px;
        }
      }
      ol {
        li {
          position: relative;
          margin-right: 10px;
          padding: 5px 10px 5px 30px;
          background: rgba(255, 255, 255, .3);
          border-radius: 10px;
          &:after {
            content: ''; 
            position: absolute;
            left: 8px;
            top: 0;
            width: 16px;
            height: 28px;
          }
          &.no_icon {
            padding: 5px 10px;
          }
          &.one {
            padding-left: 25px;
            &:after {
              left: 10px;
              width: 7px;
              background: url('../../../assets/images/one-person-icon.png') no-repeat center center;
              background-size: 100%;
            }
          }
          &.tow:after {
            background: url('../../../assets/images/tow-person-icon.png') no-repeat center center;
            background-size: 100%;
          }
          &.three:after {
            background: url('../../../assets/images/three-person-icon.png') no-repeat center center;
            background-size: 100%;
          }
          &.four:after {
            background: url('../../../assets/images/four-person-icon.png') no-repeat center center;
            background-size: 100%;
          }
        }
      }
      a {
        position: absolute;
        right: 10px;
        top: 50%;
        bottom: 10px;
        width: 100px;
        height: 36px;
        line-height: 34px;
        text-align: center;
        margin-top: -18px;
        color: #fff;
        border: 1px solid #FFFFFF;
        border-radius: 18px;
        transition: .3s;
        &:hover {
          border-color: #447375;
          background: #447375;
        }
      }
    }
  }
  @media (max-width: 767px) {
    margin: 0;
    .item {
      width: 100%;
      margin: 20px 0 0 0;
    }
  }
}
.more {
  display: block;
  margin: 20px auto 0;
  width: 180px;
  height: 50px;
  line-height: 48px;
  font-size: 16px;
  color: #447375;
  text-align: center;
  background: #FFFFFF;
  border: 1px solid #4F7274;
  border-radius: 25px;
  transition: .3s;
  &:hover {
    color: #fff;
    background: #447375;
  }
  @media (max-width: 767px) {
    width: 160px;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
  }
}

</style>