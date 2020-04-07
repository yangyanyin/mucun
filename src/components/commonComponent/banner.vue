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
    height: 340px;
    img {
      position: absolute;
      top: 0;
      left: 50%;
      height: 100%;
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
  @media (max-width: 767px) {
    .img {
      padding-top: 60px;
      height: 240px;
      img {
        top: 60px;
        height: 180px;
      }
    }
  }
}

</style>