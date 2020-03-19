<template>
  <Layout>
    <div class="news">
      <div class="content pc-max-width clearfix">
        <div class="crumbs">
          <router-link to="/">首页</router-link> > {{banner[newsType].title}}
        </div>
        <div class="left list-banner">
          <div class="banner">
            <img :src="banner[newsType].img" />
          </div>
          <ul class="list">
            <li v-for="i in 6" :key="i" class="clearfix">
              <router-link class="img" to="1"><img src="../../assets/images/new-img.png" /></router-link>
              <div class="des">
                <router-link class="t" to="/news-details/1">标题标题标题</router-link>
                <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                  描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
                <div class="left clearfix"> 
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
      <div class="pc-max-width">
        <Flag />
      </div>
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
        case: {
          img: require('../../assets/images/news-case.jpg'),
          title: '成功案例'
        },
        thematic: {
          img: require('../../assets/images/news-thematic.jpg'),
          title: '护照专题'
        },
        expert: {
          img: require('../../assets/images/news-expert.jpg'),
          title: '新加坡移民专家'
        }
      },
      newsType: this.$route.name
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
  .crumbs {
    padding: 30px 0;
    color: #bdbdbd;
    a {
      color: #bdbdbd;
    }
  }
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
    .t {
      color: #111;
      font-size: 18px;
      font-weight: bold;
    }
    p {
      height: 72px;
      margin: 10px 0 43px 0;
      line-height: 24px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    span {
      display: inline-block;
      font-size: 13px;
      color: #b9b9b9;
      padding-left: 20px;
      &:first-child{
        margin-right: 25px;
        background: url('../../assets/images/time-icon.png') no-repeat left 1px;
        background-size: 14px;
      }
      &:last-child{
        padding-left: 25px;
        background: url('../../assets/images/look-icon.png') no-repeat left 2px;
        background-size: 18px;
      }
    }
    .more {
      position: relative;
      font-size: 12px;
      color: #b9b9b9;
      padding-right: 10px;
      &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 4px;
        width: 7px;
        height: 7px;
        border-top: 1px solid #b9b9b9;
        border-left: 1px solid #b9b9b9;
        transform: rotate(135deg);
      }
      &:hover {
        color: #444;
      }
    }
    .img {
      float: left;
      width: 270px;
      margin-right: 25px;
    }
  }
  @media (max-width:767px) {
    background: #fff;
    .crumbs {
      display: none;
    }
    .list-banner {
      width: 100%;
      padding: 0;
      .banner {
        margin: 0 -10px;
      }
    }
    .rec {
      width: 100%;
    }
    .list {
      padding: 0;
      li {
        padding: 15px 0;
      }
      .des >div{
        float: none;
        padding-top: 3px;
      }
      .img {
        width: 145px;
        margin-right: 10px;
      }
      .t {
        font-size: 16px;
      }
      p {
        margin: 5px 0;
        height: 40px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 12px;
        line-height: 20px;
      }
      span {
        font-size: 12px;
        &:first-child{
          float: left;
          margin-right: 10px;
        }
        &:last-child {
          float: right;
        }
      }
      .more {
        display: none;
      }
    }
  }
}
</style>