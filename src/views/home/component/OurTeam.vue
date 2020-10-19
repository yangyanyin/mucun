<template>
  <div class="swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <div class="d">
          <img src="../../../assets/images/member3.png" />
          <div class="detailed">
            <strong>总裁  OuYang</strong>
            <p>从事海外资产投资领域数年，对海外房地产投资以及财富管理有丰富的实践经验，丰富的从业经验和独特见解，了解各国海外置业、移民、投资的环节和流程，做好客户的参谋，成功帮助客户完成移民梦想，解决高难度的移民申请，最大化客户的合法利益。</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="d">
          <img src="../../../assets/images/member2.png" />
          <div class="detailed">
            <strong>资深移民顾问  Vicky Chen</strong>
            <p>拥有丰富的行业分析和预判能力，专业和细致材料处理能力，深度关注海外资产配置、移民、留学政策，为客户做好长远移民规划，细心严谨的态度让客户后顾无忧，制定更精准的私人化培训方案，做好移民安置和身份规划。</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="d">
          <img src="../../../assets/images/member4.png" />
          <div class="detailed">
            <strong>首席移民顾问  Jessie Yin</strong>
            <p>深耕移民行业数年，累积了大量的社会资源和人脉渠道，对各国移民政策和移民项目了如指掌，对海外房地产领域深入研究，服务细致且专业严谨，可以根据不同客户要求，提供高效率、高保障以及高通过率的服务，梳理最便捷的移民、置业和投资流程，是全能复合型移民顾问。</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="d">
          <img src="../../../assets/images/member7.png" />
          <div class="detailed">
            <strong>资深移民专家  James Bian</strong>
            <p>在资产管理和投资移民有着丰富的经验，多国留学和生活经历，对多国各类移民问题有精准解决方案，对留学、海外置业有着深入见解，  保持高水准为客户带来海外资产配置和教育规划等相关建议，帮助客户解决深层次问题，成功帮助众多学生和家庭实现移民梦想。</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperOptions: {
        slidesPerView: 2,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      }
    }
  }
}
</script>
<style scoped lang="less">
.swiper {
  position: relative;
  .swiper-slide {
    height: 210px;
    .d {
      position: relative;
      box-shadow: 0 0 4px #000;
      img {
        display: none;
        position: absolute;
      }
    }
    
  }
}
</style>