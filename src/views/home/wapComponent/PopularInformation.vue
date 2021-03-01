<template>
  <div class="popular-information">
    <h3>热门资讯</h3>
    <div class="list">
      <router-link :to="'/news-details/' + item.id" v-for="(item, key) in recommend" :key="key" class="clearfix">
        <div class="img">
          <img :src="item.img" />
        </div>
        <h3>{{item.title}}</h3>
        <p>{{item.description}}</p>
        <span>{{item.created_at.split(' ')[0]}}</span>
      </router-link>
    </div>
    <router-link class="view-more" to="/news-expert">查看更多</router-link>
  </div>
</template>
<script>
export default {
  props: {
    newDynamic: Array
  },
  computed: {
    recommend () {
      return JSON.parse(JSON.stringify(this.newDynamic))[0].news.slice(0, 3)
    }
  },
}
</script>
<style scoped lang="less">
.popular-information {
  display: none;
  padding: 25px 0;
  border-top: 10px solid #f7f7f7;
  @media (max-width: 767px) {
    display: block;
  }
  h3 {
    display: block;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
  .list {
    padding: 10px;
    a {
      display: block;
      position: relative;
      height: 102px;
      margin-top: 15px;
      padding-left: 150px;
      text-align: left;
      .img {
        position: absolute;
        left: 0;
        top: 0;
        width: 130px;
        height: 100px;
        overflow: hidden;
        margin-right: 20px;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      h3 {
        padding: 0;
        font-size: 14px;
        text-align: left;
        overflow: hidden;
        color: #3E3E3E;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        /* autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: no */
      }
      p {
        margin: 5px 0 10px;
        line-height: 20px;
        font-size: 12px;
        line-height: 22px;
        color: #747474;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        /* autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: no */
      }
      span {
        color: #747474;
      }
    }
  }
  .view-more {
    display: block;
    width: 120px;
    height: 32px;
    line-height: 30px;
    margin: 20px auto 0;
    border: 1px solid #4F7274;
    border-radius: 32px;
    color: #4F7274;
    text-align: center;
  }
}
</style>