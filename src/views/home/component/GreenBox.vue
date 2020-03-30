<template>
  <div class="home-card">
    <el-carousel :interval="40000" type="card" height="620px">
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
          text: '永久居住的申请门槛低,存入2万美元即可获得',
          img: require('../../../assets/images/Philippines-home.jpg'),
          passport: require('../../../assets/images/Philippines-passport.png'),
          url: '/Philippines-details'
        },
        {
          name: '马来西亚 / Malaysia',
          text: '一人申请，全家都可获得绿卡',
          img: require('../../../assets/images/Malaysia-home.jpg'),
          passport: require('../../../assets/images/Malaysia-passport.png'),
          url: '/Malaysia-details'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
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
    img.passport {
      position: absolute;
      right: 30px;
      bottom: 25px;
      width: 100px;
    }
  }
}
</style>
<style lang="less">
.home-card {
  padding: 0 90px;
  .el-carousel--horizontal {
    overflow-x: initial !important;
  }
  .el-carousel__container {
    height: 600px !important;
  }
  .el-carousel__arrow {
    display: block !important;
    background: rgba(255, 255, 255, .6) !important;
    transition: none;
    &:hover {
      background: rgba(255, 255, 255, .6) !important;
    }
    &.el-carousel__arrow--left {
      left: -65px;
    }
    &.el-carousel__arrow--right {
      right: -65px;
    }
  }
  .el-carousel__indicators--outside {
    button {
      overflow: hidden;
      text-indent: 100px;
    }
  }
}
</style>