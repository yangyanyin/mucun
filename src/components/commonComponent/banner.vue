<template>
  <div class="banner">
    <div class="width">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(banners, index) in bannerImgList" :key="index">
          <div class="img">
            <img :src="banners.img" />
          </div>
          <!-- <p class="t1">{{banners.name}}</p> -->
          <!-- <p class="t2">投资置业 定居生活 全面规划</p> -->
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  props: ["bannerImgList"],
  data() {
    return {
      swiperOption: {
        autoplay: 4000,
        loop: true,
        effect: "fade"
        // pagination: '.swiper-pagination'
      }
    };
  },
  mounted() {
  }
};
</script>
<style lang="less" scoped>
.banner {
  .img {
    position: relative;
    height: 512px;
    img {
      position: absolute;
      top: 0;
      left: 50%;
      height: 512px;
      transform: translateX(-50%);
    }
  }
  .t1 {
    position: absolute;
    left: 0;
    bottom: 55%;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 60px;
  }
  .t2 {
    position: absolute;
    left: 0;
    bottom: 42%;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 44px;
  }
}
@media (max-width: 767px) {
  .banner {
    position: relative;
    height: 272px;
    overflow: hidden;
    .width {
      position: absolute;
      width: 670px;
      height: 272px;
      top: 0;
      left: 50%;
      margin-left: -335px;
    }
    .t1 {
      bottom: 40%;
      font-size: 28px;
    }
    .t2 {
      bottom: 25%;
      font-size: 22px;
    }
    img {
      display: block;
      width: auto;
      height: 272px;
    }
  }
}
</style>