<template>
  <div class="banner">
    <swiper :options="swiperOption">
      <swiper-slide>
        <p class="p1">Second citizanship is not just a passport <br /> it is about family, where your family feels at home </p>
        <p class="p2">海外身份规划<br />这不仅仅是第二身份，更是您海外幸福生活的保障</p>
        <img @load="imgLoad" src="../../../assets/images/banner1.jpg" />
      </swiper-slide>
      <swiper-slide>
        <p class="p1">Second citizanship is not just a passport <br /> it is about family, where your family feels at home </p>
        <p class="p2">海外身份规划<br />这不仅仅是第二身份，更是您海外幸福生活的保障</p>
        <img src="../../../assets/images/banner2.jpg" />
      </swiper-slide>
    </swiper>
    <!-- <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button" slot="button-next"></div> -->
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props: ["bannerImgList"],
  data() {
    return {
      swiperOption: {
        effect: 'fade',
        autoplay: 3000,
        loop: true
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev'
      }
    };
  },
  methods: {
    ...mapMutations({
      changContactWindowStatus: 'changContactWindowStatus'
    }),
    imgLoad () {
      this.changContactWindowStatus(true)
    }
  },
  mounted() {}
};
</script>
<style lang="less">
.banner {
  position: relative;
  .swiper-slide {
    overflow: hidden;
    img {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      height: 100%;
    }    
    &.swiper-slide-active {
      .p1 {
        animation: p1 .8s .7s ease-in both
      }
      .p2 {
        animation: p2 .8s ease-in both
      }
    }
    p {
      position: absolute;
      z-index: 9;
      width: 100%;
      font-size: 20px;
      color: #fff;
      line-height: 30px;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 1px;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      &.p1 {
        top: 220px;
        opacity: 0;
      }
      &.p2 {
        top: 310px;
        opacity: 0;
      }
    }
  }
  // .swiper-button {
  //   width: 40px;
  //   height: 40px;
  //   transform: translateY(-50%);
  //   opacity: .8;
  //   &.swiper-button-prev {
  //     background: url('../../../assets/images/button-prev.png') no-repeat;
  //     background-size: 100%;
  //   }
  //   &.swiper-button-next {
  //     background: url('../../../assets/images/button-next.png') no-repeat;
  //     background-size: 100%;
  //   }
  // }
  @media (max-width: 767px) {
    // .swiper-button {
    //   width: 30px;
    //   height: 30px;
    //   margin-top: 15px;
    // }
    .swiper-slide {
      img {
        height: 340px;
      }
      p {
        font-size: 12px;
        letter-spacing: 0;
        line-height: 22px;
        &.p1 {
          top: 130px;
        }
        &.p2 {
          top: 200px;
        }
      }
    }
  }
}
@keyframes p1 {
  50% {
    top: 180px;
    opacity: .9;
  }
  100% {
    top: 190px;
    opacity: 1;
  }
}
@keyframes p2 {
  50% {
    top: 270px;
    opacity: .9;
  }
  100% {
    top: 280px;
    opacity: 1;
  }
}
@media (max-width: 767px) {
@keyframes p1 {
  50% {
    top: 110px;
    opacity: .9;
  }
  100% {
    top: 120px;
    opacity: 1;
  }
}
@keyframes p2 {
  50% {
    top: 170px;
    opacity: .9;
  }
  100% {
    top: 180px;
    opacity: 1;
  }
}
    
  }
</style>