<template>
  <div class="home-study">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, key) in imgArr" :key="key">
        <img :src="item.img" :alt="item.title" />
        <h3>{{ item.title }}</h3>
        <p v-html="item.text">{{ item.text }}</p>
        <router-link :to="item.url">立即了解</router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>

    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        loop: true,
        autoplay: 3000,
        pagination: '.swiper-pagination'
      },
      imgArr: [
        {
          title: "新加坡家族办公室",
          text: "财富传承 & 全家移民一步到位 <br /> 身份规划 资产配置 税务规划",
          url: "/emigrant/four",
          img: require("../../../assets/images/home/emigrant-four.jpg"),
        },
        {
          title: "投资移民",
          text: "高净值人士必备 变升世界公民 <br /> 自用通行 护航子女未来 实现全球资产配置",
          url: "/emigrant/tow",
          img: require("../../../assets/images/home/emigrant-tow.jpg"),
        },
        {
          title: "新加坡留学",
          text: "中西文化成就多元人才 <br /> 精英教育   轻松获得永居 专属母系陪读",
          url: "/overseas-study/one",
          img: require("../../../assets/images/home/singapore-study-abroad-img.jpg"),
        }
      ]
    }
  },
  mounted () {}
}
</script>
<style scoped lang="less">
.home-study {
  display: none;
  margin-top: 30px;
  padding: 10px;
  text-align: center;
  @media (max-width: 767px) {
    display: block;
  }
  .swiper-slide {
    border-radius: 5px;
    overflow: hidden;
  }
  img {
    display: inline-block;
    width: 100%;
  }
  h3 {
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    font-size: 16px;
    color: #fff;
  }
  p {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    color: #fff;
    font-size: 12px;
    line-height: 22px;
    opacity: .8;
  }
  a {
    display: inline-block;
    position: absolute;
    top: 115px;
    left: 50%;
    width: 106px;
    height: 28px;
    line-height: 26px;
    margin-left: -53px;
    font-size: 12px;
    color: #fff;
    border: 1px solid #FFFFFF;
    border-radius: 90px;
    opacity: .8;
  }
  
}
</style>
<style lang="less">
.home-study {
  .swiper-pagination-bullet {
    position: relative;
    width: 30px;
    height: 1px;
    background: none;
    opacity: 1;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      opacity: .5;
      width: 30px;
      height: 1px;
      background: #fff;
    }
    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      width: 0;
      opacity: 1;
      height: 1px;
      background: #fff;
    }
  }
  .swiper-pagination-bullet-active {
    &::after {
      animation: w 3.2s;
    }
  }
}
@keyframes w {
  100% {
    width: 30px;
  }
}
</style>