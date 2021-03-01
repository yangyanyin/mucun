<template>
  <div class="new-success-case">
    <h3>成功案例</h3>
    <ul class="clearfix">
      <li v-for="(news, index) in newCase" :key="index">
        <router-link class="a" :to="'/news-details/' + news.id">
          <img
            v-lazy="{
              src: news.img,
              loading: require('../../../assets/images/country-loading.png'),
              error: require('../../../assets/images/country-loading.png'),
            }"
          />
          <div class="d clearfix">
            <h3>{{ news.title }}</h3>
            <p v-html="news.description"></p>
          </div>
        </router-link>
      </li>
    </ul>
    <router-link class="view-more" to="/news-case">查看更多</router-link>
  </div>
</template>
<script>
export default {
  props: {
    newCase: Array,
  },
};
</script>
<style scoped lang="less">
.new-success-case {
  display: none;
  margin-top: 20px;
  padding: 25px 0;
  @media (max-width: 767px) {
    display: block;
  }
  h3 {
    display: block;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
  ul {
    white-space: nowrap;
    overflow: auto;
    margin-left: 10px;
    padding-top: 20px;
    li {
      display: inline-block;
      width: 170px;
      margin-right: 15px;
      white-space: initial;
      vertical-align: top;
      img {
        display: inline-block;
        width: 100%;
        border-radius: 5px;
      }
      h3 {
        margin-top: 10px;
        font-size: 16px;
        color: #111;
        overflow: hidden; 
        height: 24px;
        text-align: left;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        /* autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: no */
      }
      p {
        height: 36px;
        margin-top: 5px;
        color: #747474;
        font-size: 12px;
        overflow: hidden; 
        line-height: 18px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        /* autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: no */
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