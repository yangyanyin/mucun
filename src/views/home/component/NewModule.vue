<template>
  <div class="index-news animation-show pc-max-width margin-t-80">
    <div class="content clearfix">
      <div class="left">
        <div class="title clearfix">
          <h3 class="left">新闻动态</h3>
          <router-link class="right" :to="'/news-' + type">NEWS</router-link>
        </div>
        <div class="new-item">
          <router-link :to="'/news-details/' + newDynamic[0].news[0].id" class="clearfix">
            <div class="img">
              <img :src="newDynamic[0].news[0].img" />
            </div>
            <h3>{{newDynamic[0].news[0].title}}</h3>
            <p>{{newDynamic[0].news[0].description}}</p>
            <span class="left">{{newDynamic[0].news[0].created_at.split(' ')[0]}}</span>
            <span class="right"><router-link :to="'/news-details/' + newDynamic[0].news[0].id">了解详情</router-link></span>
          </router-link>
        </div>
      </div>
      <div class="right">
        <div class="title clearfix">
          <h3 class="left">相关资讯</h3>
          <router-link class="right" :to="'/news-' + type">查看更多></router-link>
        </div>
        <div class="content">
          <router-link :to="'/news-details/' + item.id" v-for="(item, key) in recommend" :key="key">
            <strong>{{item.title}}</strong>
            <p>{{item.description}}</p>
            <span>{{item.created_at.split(' ')[0]}}</span>
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
  computed: {
    recommend () {
      return JSON.parse(JSON.stringify(this.newDynamic))[0].news.slice(1, 3)
    }
  },
  mounted () {}
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
      padding: 5px 20px;
      a {
        display: block;
        padding-bottom: 10px;
        margin: 10px 0;
        color: #fff;
        border-bottom: 1px solid #7f9d9e;
        &:last-child {
          border: none;
          padding-bottom: 0;
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
          margin: 5px 0 10px;
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

.new-item {
  position: relative;
  margin-top: 30px;
  overflow: hidden;
  a {
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
        transition: .3s;
        &:hover {
          background: #0e4a4c;
          color: #fff;
        }
      }
    }
  }
  @media (max-width: 767px) {
    padding: 0 10px;
    a {
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
  }
}
</style>