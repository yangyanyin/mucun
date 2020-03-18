<template>
  <div class="index-news">
    <div class="title">
      <h3>新闻动态</h3>
      <router-link to="1">了解更多></router-link>
    </div>
    <div class="content clearfix">
      <div class="left">
        <template v-for="(news, index) in data" >
          <router-link to="1" :key="index" v-if="index < 3">
            <img :src="news.img" />
            <h3>{{news.title}}</h3>
            <p>{{news.des}}</p>
            <span>2020.10.23</span>
            <span>了解详情</span>
          </router-link>
        </template>
      </div>
      <div class="right">
        <swiper :options="swiperOption">
          <template v-for="(news, index) in data" >
            <swiper-slide :key="index" v-if="index < 3">
              <router-link to="1">
                <h3>{{news.title}}</h3>
                <img :src="news.img" />
              </router-link>
            </swiper-slide>
          </template>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import data from '../../../assets/js/newsData'
export default {
  data () {
    return {
      data: data.data,
      swiperOption: {
        autoplay: 3000,
        loop: true,
        pagination: ".swiper-pagination"
      }
    }
  }
}
</script>
<style scoped lang="less">
.content {
  .left {
    width: 50%;
  }
  .right {
    width: 50%;
  }
}
</style>