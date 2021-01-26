<template>
  <div class="home-card">
    <el-carousel :interval="4000" type="card" height="620px">
      <el-carousel-item v-for="(item, index) in evaluation" :key="index">
        <router-link :to="item.url">
          <img class="img" :src="item.img" />
          <div class="info">
            <div v-if="item.name === '新加坡 / Singapore'" class="">
              推荐指数
              <i v-for="(i, key) in 5" :key="key">
                <img src="../../../assets/images/star.png" />
              </i>
            </div>
            <h3>{{item.name}}</h3>
            <p>{{item.text}}</p>
            <img class="passport" :src="item.passport" />
          </div>
        </router-link>
      </el-carousel-item>
    </el-carousel>
    <router-link to="/green-cart" class="more">查看更多国家 ></router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      evaluation: [
        {
          name: '新加坡 / Singapore',
          text: '最快45天登陆新加坡，精英首选',
          img: require('../../../assets/images/Singapore-home.jpg'),
          passport: require('../../../assets/images/Singapore-passport.png'),
          url: '/singapore-details'
        },
        {
          name: '菲律宾 / Philippines',
          text: '永居申请条件宽松，存入2万美金即可获得',
          img: require('../../../assets/images/Philippines-home.jpg'),
          passport: require('../../../assets/images/Philippines-passport.png'),
          url: '/Philippines-details'
        },
        {
          name: '马来西亚 / Malaysia',
          text: '申请周期短，直接拿永居，享受大马公民待遇',
          img: require('../../../assets/images/Malaysia-home.jpg'),
          passport: require('../../../assets/images/Malaysia-passport.png'),
          url: '/Malaysia-details'
        },
        {
          name: '韩国 / Korea',
          text: '飞速定居，5年转永居后，存款全部退还，相等净花费为0',
          img: require('../../../assets/images/Korea-home.jpg'),
          passport: require('../../../assets/images/korea-passport.png'),
          url: '/korea-details'
        },
        {
          name: '加拿大 / Canada',
          text: '多种快速移民渠道，精准匹配，让你圆梦加拿大',
          img: require('../../../assets/images/Canada-home.png'),
          passport: require('../../../assets/images/canada-passpor.png'),
          url: '/canada-details'
        },
        {
          name: '葡萄牙 / Portugal',
          text: '一人申请，全家都可获得绿卡',
          img: require('../../../assets/images/portugal-home.png'),
          passport: require('../../../assets/images/portugal-passport.png'),
          url: '/portugal-details'
        },
        {
          name: '日本 / Japan',
          text: '投资少，门槛低，含金量高，全家享受国民福利',
          img: require('../../../assets/images/japan-home.png'),
          passport: require('../../../assets/images/japan-passport.png'),
          url: '/japan-details'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
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
  -webkit-transition: 0.3s;
  transition: 0.3s;
  &:hover {
    color: #fff;
    background: #447375;
  }
}
.el-carousel__item{
  text-align: center;
  background: #fff;
  border-radius: 5px;
  height: auto !important;
  box-shadow: 0 0 7px #7d7d7d;
  img.img {
    display: block;
    width: 100%;
  }
  .info {
    position: relative;
    text-align: left;
    padding: 25px 30px;
    height: 135px;
    img.passport {
      position: absolute;
      right: 30px;
      bottom: 25px;
      width: 100px;
    }
    div {
      font-size: 16px;
      color: #f0c671;
      font-weight: bold;
      padding-bottom: 12px;
      i {
        position: relative;
        top: 1px;
        display: inline-block;
        width: 17px;
        margin-left: 3px;
      }
      img {
        display: block;
        width: 100%;
      }
    }
    h3 {
      color: #444;
      font-size: 20px;
    }
    p {
      color: #444;
      padding-top: 5px;
    }
  }
  @media (max-width: 767px) {
    &.is-active {
      width: 80%;
      left: -15%;
    }
    .info {
      padding: 12px 15px;
      height: 100px;
      div {
        font-size: 13px;
        padding-bottom: 7px;
        i {
          width: 14px;
        }
      }
      h3 {
        font-size: 16px;
        font-weight: bold;
      }
      p {
        font-size: 12px;
      }
      img.passport {
        right: 12px;
        width: 50px;
        bottom: 60px;
      }
    }
  }
}
</style>
<style lang="less">
.home-card {
  padding: 0 90px;
  .el-carousel__container {
    height: 450px !important;
    margin-top: 50px;
    @media(max-width: 1200px) {
      height: 400px !important;
    }
  }
  .el-carousel__button {
    height: 4px !important;
  }
  .el-carousel__arrow {
    display: block !important;
    background: rgba(255, 255, 255, .6) !important;
    transition: none;
    top: 45%;
    &:hover {
      background: rgba(255, 255, 255, .6) !important;
    }
    // &.el-carousel__arrow--left {
    //   left: -65px;
    // }
    // &.el-carousel__arrow--right {
    //   right: -65px;
    // }
  }
  .el-carousel__indicators--outside {
    button {
      overflow: hidden;
      text-indent: 100px;
    }
  }
  .el-carousel__indicators--outside {
    // display: none;
  }
  @media (max-width: 767px) {
    padding: 0;
    margin: 0 -10px;
    overflow: hidden;
    .el-carousel__container {
      height: 280px !important;
    }
    .el-carousel__arrow {
      background: rgba(0, 0, 0, .6) !important;
      &:hover {
        background: rgba(0, 0, 0, .6) !important;
      }
      &.el-carousel__arrow--left {
        left: 0;
      }
      &.el-carousel__arrow--right {
        right: 0;
      }
    }
  }
}
</style>