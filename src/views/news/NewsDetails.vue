<template>
  <Layout>
    <div class="news">
      <div class="content pc-max-width clearfix">
        <div class="crumbs">
          <router-link to="/">首页</router-link> > <router-link to="/">成功案例</router-link> > 详情详情详情
        </div>
        <div class="left news-details">
          <div class="title clearfix">
            <h3>标题标题标题标题标题标题</h3>
            <span class="label left">标签：啊实打实在这次</span>
            <span class="look right">浏览量23421</span>
            <span class="time right">2020-10-11</span>
          </div>
          <div class="details">
            详情钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱
          </div>
          <div class="other">
            <p>上一篇：<router-link to="12">上上上上上上上上上上</router-link></p>
            <p>下一篇：<router-link to="12">下下下下下下下下下下</router-link></p>
          </div>
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
    }
  },
  mounted () {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    animation(scroll);
    windowScroll();
  }
}
</script>
<style lang="less" scoped>
.news {
  padding-top: 60px;
  background: #f7f7f7;
}
.crumbs {
  padding: 30px 0;
  color: #bdbdbd;
  a {
    color: #bdbdbd;
  }
}
.news-details {
  width: calc(100% - 350px);
  background: #fff;
  .title {
    padding: 30px 25px;
    border-bottom: 1px solid #f7f7f7;
    h3 {
      font-size: 24px;
      font-weight: bold;
      padding-bottom: 15px;
    }
    span {
      color: #bdbdbd;
      font-size: 12px;
      padding-left: 20px;
      &.label {
        background: url('../../assets/images/label-icon.png') no-repeat left 0px;
        background-size: 14px;
      }
      &.time{
        background: url('../../assets/images/time-icon.png') no-repeat left 1px;
        background-size: 14px;
      }
      &.look{
        margin-left: 20px;
        padding-left: 25px;
        background: url('../../assets/images/look-icon.png') no-repeat left 2px;
        background-size: 18px;
      }
    }
  }
  .details {
    padding: 30px 25px;
  }
  .other {
    padding: 25px;
    border-top: 1px solid #f7f7f7;
    p {
      padding: 5px 0;
    }
    a {
      color: #111;
    }
  }
}
.rec {
  width: 340px;
}
</style>