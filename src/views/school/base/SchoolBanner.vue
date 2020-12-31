<template>
  <div class="pc-max-width margin-t-80">
    <div class="school-banner">
      <el-carousel :interval="4000" type="card" height="350px">
        <el-carousel-item v-for="(url, index) in bannerInfo[schoolName]" :key="index">
          <img :src="url" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="banner" v-if="showBanner">
      <div class="content">
        <div class="close" @click="closeBanner"><img src="../../../assets/images/close.png"> 关闭</div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(img, index) in bannerInfo[schoolName]" :key="index">
            <div class="img">
              <img :src="img" />
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button" slot="button-next"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    schoolName: String
  },
  data () {
    return {
      showBanner: false,
      swiperOption: {
        effect: 'fade',
        autoplay: 3000,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      },
      bannerInfo: {
        '迈杰思学前教育': [
          require('../../../assets/images/school/mindchaps_1.jpg'),
          require('../../../assets/images/school/mindchaps_2.jpg'),
          require('../../../assets/images/school/mindchaps_3.jpg'),
          require('../../../assets/images/school/mindchaps_4.jpg'),
          require('../../../assets/images/school/mindchaps_5.jpg')
        ],
        '伊顿国际学校': [
          require('../../../assets/images/school/etonhouse1.jpg'),
          require('../../../assets/images/school/etonhouse2.jpg'),
          require('../../../assets/images/school/etonhouse3.jpg'),
          require('../../../assets/images/school/etonhouse4.jpg'),
          require('../../../assets/images/school/etonhouse5.jpg')
        ],
        'E-bridge伊桥幼儿园': [
          require('../../../assets/images/school/E-bridge1.jpg'),
          require('../../../assets/images/school/E-bridge2.jpg'),
          require('../../../assets/images/school/E-bridge3.jpg'),
          require('../../../assets/images/school/E-bridge4.jpg'),
          require('../../../assets/images/school/E-bridge5.jpg')
        ],
        '加拿大枫叶小熊': [
          require('../../../assets/images/school/maplebear1.jpg'),
          require('../../../assets/images/school/maplebear2.jpg'),
          require('../../../assets/images/school/maplebear3.jpg'),
          require('../../../assets/images/school/maplebear4.jpg'),
          require('../../../assets/images/school/maplebear5.jpg')
        ],
        'My First Skool': [
          require('../../../assets/images/school/Myfirstskool_1.jpg'),
          require('../../../assets/images/school/Myfirstskool_2.jpg'),
          require('../../../assets/images/school/Myfirstskool_3.jpg'),
          require('../../../assets/images/school/Myfirstskool_4.jpg'),
          require('../../../assets/images/school/Myfirstskool_5.jpg')
        ],
        'Odyssey': [
          require('../../../assets/images/school/odyssey1.jpg'),
          require('../../../assets/images/school/odyssey2.jpg'),
          require('../../../assets/images/school/odyssey3.jpg'),
          require('../../../assets/images/school/odyssey4.jpg'),
          require('../../../assets/images/school/odyssey5.jpg')
        ],
        'Pat’s 培思幼儿园': [
          require('../../../assets/images/school/pat-s1.jpg'),
          require('../../../assets/images/school/pat-s2.jpg'),
          require('../../../assets/images/school/pat-s3.jpg'),
          require('../../../assets/images/school/pat-s4.jpg'),
          require('../../../assets/images/school/pat-s5.jpg')
        ],
        'White lodge International preschool': [
          require('../../../assets/images/school/whitelogde1.jpg'),
          require('../../../assets/images/school/whitelogde2.jpg'),
          require('../../../assets/images/school/whitelogde3.jpg'),
          require('../../../assets/images/school/whitelogde4.jpg'),
          require('../../../assets/images/school/whitelogde5.jpg')
        ],
        '东陵信托学校': [
          require('../../../assets/images/school/tangling-trust1.jpg'),
          require('../../../assets/images/school/tangling-trust2.jpg'),
          require('../../../assets/images/school/tangling-trust3.jpg'),
          require('../../../assets/images/school/tangling-trust4.jpg'),
          require('../../../assets/images/school/tangling-trust5.jpg')
        ],
        '东南亚世界联合书院': [
          require('../../../assets/images/school/united-world1.jpg'),
          require('../../../assets/images/school/united-world2.jpg'),
          require('../../../assets/images/school/united-world3.jpg'),
          require('../../../assets/images/school/united-world4.jpg'),
          require('../../../assets/images/school/united-world5.jpg')
        ],
        '华中国际学校': [
          require('../../../assets/images/school/hwa-chong1.jpg'),
          require('../../../assets/images/school/hwa-chong2.jpg'),
          require('../../../assets/images/school/hwa-chong3.jpg'),
          require('../../../assets/images/school/hwa-chong4.jpg'),
          require('../../../assets/images/school/hwa-chong5.jpg')
        ],
        '圣若瑟书院国际学校': [
          require('../../../assets/images/school/sji-international1.jpg'),
          require('../../../assets/images/school/sji-international2.jpg'),
          require('../../../assets/images/school/sji-international3.jpg'),
          require('../../../assets/images/school/sji-international4.jpg'),
          require('../../../assets/images/school/sji-international5.jpg')
        ],
        '新加坡澳大利亚国际学院': [
          require('../../../assets/images/school/singapore-australian1.jpg'),
          require('../../../assets/images/school/singapore-australian2.jpg'),
          require('../../../assets/images/school/singapore-australian3.jpg'),
          require('../../../assets/images/school/singapore-australian4.jpg'),
          require('../../../assets/images/school/singapore-australian5.jpg')
        ],
        '新加坡加拿大国际学校': [
          require('../../../assets/images/school/canadian-international1.jpg'),
          require('../../../assets/images/school/canadian-international2.jpg'),
          require('../../../assets/images/school/canadian-international3.jpg'),
          require('../../../assets/images/school/canadian-international4.jpg'),
          require('../../../assets/images/school/canadian-international5.jpg')

        ],
        '新加坡美国学校': [
          require('../../../assets/images/school/singapore-american1.jpg'),
          require('../../../assets/images/school/singapore-american2.jpg'),
          require('../../../assets/images/school/singapore-american3.jpg'),
          require('../../../assets/images/school/singapore-american4.jpg'),
          require('../../../assets/images/school/singapore-american5.jpg')
        ],
        '英华国际学校': [
          require('../../../assets/images/school/acs-international1.jpg'),
          require('../../../assets/images/school/acs-international2.jpg'),
          require('../../../assets/images/school/acs-international3.jpg'),
          require('../../../assets/images/school/acs-international4.jpg'),
          require('../../../assets/images/school/acs-international5.jpg')
        ]
      }
    }
  },
  methods: {
    closeBanner () {
      this.showBanner = !this.showBanner
    }
  },
  mounted () {
    const _this = this
    setTimeout(() => {
      document.getElementsByClassName('el-carousel__container')[0].onclick = function () {
        _this.closeBanner()
      }
    }, 3000)
  }
}
</script>
<style scoped lang="less">
.banner {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  .content {
    position: relative;
    top: 50%;
    max-width: 1300px;
    padding: 0 70px;
    margin: auto;
    transform: translateY(-50%);
    .close {
      position: absolute;
      right: 70px;
      top: -30px;
      color: #fff;
      cursor: pointer;
      img {
        display: inline-block;
        width: 12px;
        margin-right: 5px;
      }
    }
    .swiper-button {
      width: 40px;
      height: 40px;
      background: #fff;
      border-radius: 100%;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: 10px;
        height: 10px;
        margin: -5px 0 0 -5px;
        border-top: 1px solid #000;
        border-left: 1px solid #000;
        transform: rotate(-45deg);
      }
      &.swiper-button-next {
        &:after {
          left: 45%;
          transform: rotate(135deg);
        }
      }
    }
    img {
      display: block;
      width: 100%;
    }
  }
  @media (max-width: 767px) {
    .content {
      padding: 0 10px;
      .close {
        right: 10px;
      }
      .swiper-button {
        width: 30px;
        height: 30px;
        &::after {
          width: 7px;
          height: 7px;
          margin: -3px 0 0 -3px;
        }
      }
    }
  }
}

</style>
<style lang="less">
.school-banner {
  .el-carousel__container {
    @media (max-width: 767px) {
      height: 200px !important;
    }
  }
  .el-carousel__indicators {
    display: none !important;
  }
  .el-carousel__arrow {
    top: 40% !important;
    background: #447375 !important;
  }
  .el-carousel__item  {
    border-radius: 10px;
    overflow: hidden;
    i {
      font-size: 20px;
    }
    &.is-active {
      width: 70%;
      left: -10%;
      @media(max-width: 767px) {
        width: 90%;
        left: -20%;
        overflow: initial !important;
      }
    }
  }
  img {
    display: block;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
}
</style>