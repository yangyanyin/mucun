<template>
  <Layout>
    <div class="news">
      <div class="content pc-max-width clearfix">
        <div class="crumbs">
          <router-link to="/">首页</router-link>
        </div>
        <div class="left list-banner">
          <div class="banner">
            <img :src="banner['case']" />
          </div>
          <ul class="list">
            <li v-for="i in 6" :key="i" class="clearfix">
              <router-link class="img" to="1"><img src="../../assets/images/new-img.png" /></router-link>
              <div class="des">
                <h3><router-link to="1">标题标题标题</router-link></h3>
                <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                  描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                <div class="left"> 
                  <span>2020-11-22</span>
                  <span>浏览量2333</span>
                </div>
                <router-link to="1" class="more right">了解详情</router-link>
              </div>
            </li>
          </ul>
        </div>
        <div class="right rec">
          <Side />
        </div>
      </div>
      <Flag />
    </div>
  </Layout>
</template>
<script>
import Layout from '../../components/layout'
import Flag from ".././../components/commonComponent/NationalFlag";
import Side from './component/SideNews'
import { animation, windowScroll } from "../../assets/js/config.js";
export default {
  components: {
    Layout,
    Side,
    Flag
  },
  data () {
    return {
      banner: {
        case: require('../../assets/images/news-case.jpg'),
        thematic: require('../../assets/images/news-thematic.jpg'),
        expert: require('../../assets/images/news-expert.jpg')
      }
    }
  },
  mounted () {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    animation(scroll);
    windowScroll();
  }
}
</script>
<style scoped lang="less">
.news {
  padding-top: 60px;
  background: #f7f7f7;
  .list-banner {
    width: calc(100% - 340px);
    padding-right: 10px;
  }
  .rec {
    width: 340px;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .list {
    background: #fff;
    padding: 20px;
    li {
      padding: 25px 0;
      border-bottom: 1px solid #f7f7f7
    }
    a {
      display: block;
    }
    p {
      height: 60px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .img {
      float: left;
      width: 270px;
      height: 170px;
      margin-right: 25px;
    }
  }
}
</style>