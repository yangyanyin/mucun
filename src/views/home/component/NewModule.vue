<template>
  <div class="index-news animation-show pc-max-width margin-t-80">
    <div class="content clearfix">
      <div class="left">
        <div class="title clearfix">
          <h3 class="left">新闻动态</h3>
          <router-link class="right" :to="'/news-' + type">NEWS</router-link>
        </div>
        <div class="swiper" v-for="(list, key) in newDynamic" :key="key">
          <swiper ref="mySwiper" :options="swiperOptions">
            <template v-for="(item, index) in list.news">
              <swiper-slide :key="index" v-if="index < 5">
                <router-link :to="'/news-details/' + item.id" class="a clearfix" :key="index">
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
          <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button" slot="button-next"></div>
        </div>
      </div>
      <div class="right">
        <div class="title clearfix">
          <h3 class="left">相关资讯</h3>
          <router-link class="right" :to="'/news-' + type">查看更多></router-link>
        </div>
        <div class="content">
          <router-link :to="'/news-details/' + item.id" v-for="(item, key) in recommendNews" :key="key">
            <strong>{{item.title}}</strong>
            <p>简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</p>
            <span>2020-10-22</span>
            <span class="right">了解详情></span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: String,
    newDynamic: Array
  },
  data () {
    return {
      recommendNews: [],
      swiperOptions: {
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      }
    }
  },
  mounted () {
    this.$http({
      method: "get",
      url: process.env.VUE_APP_API + "/v1/recommend_news_list",
    }).then(res => {
      if (res.data.code === 200) {
        this.recommendNews = res.data.data.recommend_news_list.slice(0, 3)
      }
    });
  }
}
</script>
<style scoped lang="less">
.index-news {
  @media (max-width: 767px) {
    padding: 0;
  }
}
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
  }
}
.title {
  position: relative;
  border-bottom: 1px solid #B9B9B9;
  padding-left: 50px;
  height: 60px;
  line-height: 60px;
  h3 {
    font-size: 20px;
    color: #2D4B4C;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 12px;
      width: 35px;
      height: 35px;
      background: #fff url('../../../assets/images/new-title.png') no-repeat left center;
      background-size: 35px auto;
    }
  }
  a {
    color: #B9B9B9;
  }
  @media (max-width: 767px) {
    padding: 0 10px 0px 50px;
    height: 46px;
    line-height: 46px;
    h3 {
      font-size: 16px;
      &:after {
        content: '';
        position: absolute;
        left: 10px;
        bottom: 10px;
        width: 25px;
        height: 25px;
        background: #fff url('../../../assets/images/new-title.png') no-repeat left center;
        background-size: 25px auto;
      }
    }
  }
}
.content {
  padding-top: 20px;
  @media (max-width: 767px) {
    padding: 0;
    > div {
      width: 100%;
      &.left {
        margin-bottom: 30px;
      }
    }
  }
  div.left {
    width: 65%;
    padding-right: 20px;
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
  div.right {
    width: 35%;
    background: #447375;
    .title {
      color: #fff;
      border: none;
      background: #304f50;
      padding-left: 75px;
      h3 {
        color: #fff;
        &:after {
          left: 25px;
          bottom: 7px;
          background: url('../../../assets/images/new-title2.png') no-repeat;
          background-size: 100%;
        }
      }
      a {
        color: #fff;
        font-size: 14px;
        opacity: .8;
        margin-right: 25px;
      }
      @media (max-width: 767px) {
        padding-left: 50px;
        h3 {
          &:after {
            left: 10px;
          }
        }
        a {
          margin: 0;
        }
      }
    }
    .content {
      padding: 12px 20px;
      a {
        display: block;
        padding-bottom: 15px;
        margin: 15px 0;
        color: #fff;
        border-bottom: 1px solid #7f9d9e;
        &:last-child {
          border: none;
        }
        strong {
          display: block;
          font-weight: normal;
          overflow: hidden;
          font-size: 16px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p {
          margin: 12px 0 19px;
          line-height: 20px;
          font-size: 12px;
          opacity: .7;
          display: -webkit-box;
          overflow: hidden;     
         -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        span {
          font-size: 12px;
          opacity: .9;
          &.right {
            margin-top: 4px;
          }
        }
      }
      @media (max-width: 767px) {
        a {
          margin: 10px 0;
          padding-bottom: 10px;
          strong {
            font-size: 15px;
          }
          p {
            margin: 8px 0 10px;
            -webkit-line-clamp: 2;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    div.left, div.right {
      float: none;
      width: 100%;
      padding: 0;
    }
  }
}
</style>