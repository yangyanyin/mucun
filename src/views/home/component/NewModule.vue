<template>
  <div class="index-news animation-show">
    <div class="title clearfix">
      <h3 class="left">新闻动态</h3>
      <router-link class="right" :to="'/news-' + type">了解更多></router-link>
    </div>
    <div class="content clearfix">
      <div class="right">
        <el-carousel trigger="click" height="388px">
          <template v-for="(news, index) in newsList.news" >
            <el-carousel-item :key="index" v-if="index < 3">
              <router-link :to="'/news-details/' + news.id">
                <h3>{{news.title}}</h3>
                <img @load="elDome" :src="news.img" />
              </router-link>
            </el-carousel-item>
          </template>
        </el-carousel>
      </div>
      <div class="left">
        <template v-for="(news, index) in newsList.news" >
          <router-link :to="'/news-details/' + news.id" class="a" :key="index" v-if="index < 3">
            <div class="img">
              <img :src="news.img" />
            </div>
            <h3>{{news.title}}</h3>
            <p>{{news.description}}</p>
            <span class="left">{{news.created_at.split(' ')[0]}}</span>
            <span class="right"><router-link :to="'/news-details/' + news.id">了解详情</router-link></span>
          </router-link>
        </template>
      </div>
      
    </div>
  </div>
</template>
<script>
import data from '../../../assets/js/newsData'
export default {
  props: {
    type: String,
    newsList: Object
  },
  data () {
    return {
      data: data.data,
    }
  },
  methods: {
    elDome () {
      setTimeout(()=>{
        let elCarousel = document.getElementsByClassName('el-carousel__container')
        for (let i = 0; i < elCarousel.length; i++) {
          elCarousel[i].style.height = elCarousel[i].getElementsByClassName('el-carousel__item')[0].getElementsByTagName('img')[0].height + 'px'
        }

        let elIndicators = document.getElementsByClassName('el-carousel__indicators')
        for (let i = 0; i < elIndicators.length; i++) {
          let indicator = elIndicators[i].getElementsByClassName('el-carousel__indicator')
          for (let s = 0; s < indicator.length; s++) {
            indicator[s].getElementsByClassName('el-carousel__button')[0].innerHTML = s + 1
          }
        }
      }, 150)
    }
  },
  mounted () {
    
  }
}
</script>
<style scoped lang="less">
.title {
  position: relative;
  padding-bottom: 7px;
  border-bottom: 1px solid #B9B9B9;
  padding-left: 50px;
  h3 {
    font-size: 20px;
    color: #2D4B4C;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 50px;
      height: 36px;
      background: #fff url('../../../assets/images/new-title.png') no-repeat left center;
      background-size: 35px;
    }
  }
  a {
    color: #B9B9B9;
    &:hover {
      
    }
  }
  @media (max-width: 767px) {
    margin-top: 20px;
    padding: 0 0 3px 40px;
    h3 {
      font-size: 18px;
      &:after {
        width: 40px;
        content: '';
        bottom: -5px;
        background-size: 28px;
      }
    }
    a {
      margin-top: 2px;
    }
  }
}
.content {
  padding-top: 20px;
  div.left {
    width: 50%;
    padding-right: 20px;
    a.a {
      display: block;
      height: 132px;
      padding: 15px 0;
      border-bottom: 1px solid #B9B9B9;
      &:last-child {
        border: none;
      }
      h3 {
        color: #111;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .img {
        float: left;
        width: 160px;
        height: 100px;
        overflow: hidden;
        margin-right: 20px;
        img {
          display: block;
          height: 100%;
        }
      }
      p {
        font-size: 12px;
        color: #B9B9B9;
        height: 36px;
        margin: 10px 0 18px;
        overflow: hidden;     
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      span {
        color: #B9B9B9;
        font-size: 12px;
        a {
          font-size: 12px;
          color: #B9B9B9;
        }
      }
    }
  }
  div.right {
    width: 50%;
    padding-left: 20px;
    h3 {
      position: absolute;
      left: 40px;
      top: 30px;
      color: #fff;
      font-size: 20px;
    }
    img {
      display: block; 
      @media (max-width: 767px) {
        width: 100%;
      }
    }
  }
  @media (max-width: 767px) {
    div.left {
      a.a{
        height: 121px;
        img {
          height: 90px;
          margin-right: 10px;
        }
        p {
          margin: 10px 0;
          padding: 0;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
    div.left, div.right {
      float: none;
      width: 100%;
      padding: 0;
    }
  }
}
</style>
<style lang="less">
  .index-news {
    .el-carousel__container {
      height: 400px !important;
    }
    .content div.left a.a p {
      img {
        display: none;
      }
    }
    .el-carousel__arrow {
      top: auto;
      bottom: 18px;
      display: block !important;
      width: 24px;
      height: 24px;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 0;
      &:hover {
        background: rgba(0, 0, 0, 0.6);
        border-radius: 0;
      }
      &.el-carousel__arrow--right {
        right: 25px;
      }
      &.el-carousel__arrow--left {
        left: auto;
        right: 152px;
      }
      @media (max-width: 767px) {
        bottom: 3px;
        width: 20px;
        height: 20px;
        &.el-carousel__arrow--left {
          right: 130px;
        }
      }
    }
    .el-carousel__indicators--horizontal {
      bottom: 30px;
      right: 10px;
      left: auto;
      @media (max-width: 767px) {
        bottom: 13px;
      }
    }
    .el-carousel__indicator {
      padding: 0;
      margin: 0 3px;
      &.is-active {
        button {
          color: #fff;
          background: rgba(0, 0, 0, 0.7);
        }
      }
      button {
        width: 24px;
        height: 24px;
        color: #bfbfbf;
        opacity: 1;
        background: rgba(0, 0, 0, 0.4);
        @media (max-width: 767px) {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
</style>