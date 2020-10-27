<template>
  <div class="index-news animation-show pc-max-width margin-t-80">
    <div class="content clearfix">
      <div class="left">
        <div class="title clearfix">
          <h3 class="left">新闻动态</h3>
          <router-link class="right" :to="'/news-' + type">NEWS</router-link>
        </div>
        <NewSwiper v-for="(list, key) in newDynamic" :newsList="list.news" :key="key" :index="key"></NewSwiper>
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
import NewSwiper from './NewSwiper'
export default {
  components: {
    NewSwiper
  },
  props: {
    type: String,
    newDynamic: Array
  },
  data () {
    return {
      recommendNews: []
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
          margin: 15px 0 20px;
          line-height: 20px;
          font-size: 12px;
          opacity: .7;
          display: -webkit-box;
          overflow: hidden;     
         -webkit-line-clamp: 2;
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