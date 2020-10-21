<template>
  <div class="swiper">
    <swiper ref="mySwiper" :options="swiperOptions[index]" :key="index">
      <template v-for="(item, key) in newsList">
        <swiper-slide :key="key" v-if="index < 5">
          <router-link :to="'/news-details/' + item.id" class="a clearfix">
            <div class="img">
              <img :src="item.img" />
            </div>
            <h3>{{item.title}}</h3>
            <p>{{item.description}}</p>
            <span class="left">{{item.created_at.split(' ')[0]}}</span>
            <span class="right"><router-link :to="'/news-details/' + item.id">了解详情</router-link></span>
          </router-link>
          <div class="num"><span>{{index + 1}}</span>/5</div>
        </swiper-slide>
      </template>
    </swiper>
    <div class="swiper-button-prev swiper-button" :class="'swiper-button-prev' + index" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button" :class="'swiper-button-next' + index" slot="button-next"></div>
  </div>
</template>
<script>
export default {
  props: {
    newsList: Array,
    index: Number
  },
  data () {
    return {
      swiperOptions: [
        {
          loop: true,
          nextButton: '.swiper-button-next0',
          prevButton: '.swiper-button-prev0'
        },
         {
          loop: true,
          nextButton: '.swiper-button-next1',
          prevButton: '.swiper-button-prev1'
        },
      ]
    }
  }
}
</script>
<style scoped lang="less">
.swiper {
  position: relative;
  padding: 0 40px;
  margin-top: 30px;
  .swiper-button {
    width: 30px;
    height: 30px;
    opacity: .3;
    &.swiper-button-prev {
      left: 0;
      background: url('../../../assets/images/button-prev.png') no-repeat;
      background-size: 100%;
    }
    &.swiper-button-next {
      right: 0;
      background: url('../../../assets/images/button-next.png') no-repeat;
      background-size: 100%;
    }
  }
  a.a {
    display: block;
    height: 132px;
    h3 {
      color: #111;
      font-weight: bold;
      overflow: hidden;
      padding-top: 33px;
      font-size: 16px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .img {
      float: left;
      width: 300px;
      height: 210px;
      overflow: hidden;
      margin-right: 20px;
      border: 1px solid #e6e6e6;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    p {
      font-size: 13px;
      margin: 10px 0 18px;
      line-height: 22px;
      color: #444;
      display: -webkit-box;
      overflow: hidden;     
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    span {
      color: #B9B9B9;
      font-size: 14px;
      a {
        display: block;
        width: 96px;
        height: 38px;
        border: 2px solid #417173;
        font-size: 14px;
        text-align: center;
        line-height: 34px;
        border-radius: 19px;
        color: #0e4a4c;
      }
    }
  }
  .num {
    position: absolute;
    left: 320px;
    bottom: 0;
    font-size: 16px;
    letter-spacing: 2px;
    span {
      color: #0e4a4c;
      font-size: 20px;
    }
  }
  @media (max-width: 767px) {
    .swiper-button {
      width: 20px;
      height: 20px;
      &.swiper-button-prev {
        left: 10px;
      }
      &.swiper-button-next {
        right: 10px;
      }
    }
    a.a {
      height: auto;
      position: relative;
      padding-left: 110px;
      .img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100px;
        height: 100px;
      }
      h3 {
        padding: 0;
        font-size: 14px;
      }
      p {
        -webkit-line-clamp: 2;
        margin: 5px 0 10px;
        line-height: 20px;
      }
      span.right {
        display: none;
      }
    }
    .num {
      left: auto;
      right: 0;
    }
  }
}
</style>