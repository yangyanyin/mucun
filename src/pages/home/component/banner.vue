<template>
  <div class="banner">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="../../../assets/images/banner1.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../../../assets/images/banner2.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../../../assets/images/banner3.jpg" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.min.css";
export default {
  props: ["bannerImgList"],
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        loop: true,
        pagination: ".swiper-pagination"
      }
    };
  },
  mounted() {}
};
</script>
<style lang="less">
.banner .swiper-pagination-bullet-active {
  background: #e7c389;
}
</style>
<style lang="less" scoped>
.banner {
  img {
    width: 100%;
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
    bottom: 40%;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 44px;
  }
}
@media (max-width: 767px) {
  .banner {
    padding-top: 60px;
    position: relative;
    height: 332px;
    overflow: hidden;
  }
}
</style>