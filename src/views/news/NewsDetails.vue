<template>
  <Layout>
    <loadingPage v-if="!loadingStatus" />
    <div class="news" v-else>
      <div class="content pc-max-width clearfix">
        <div class="crumbs">
          <router-link to="/">首页</router-link> > <router-link :to="navCrumbs[newsDetails.news.category_id-1].url">{{navCrumbs[newsDetails.news.category_id-1].title}}</router-link> > {{newsDetails.news.title}}
        </div>
        <div class="left news-details">
          <div class="title clearfix">
            <h3>{{newsDetails.news.title}}</h3>
            <span class="label left">标签: {{newsDetails.news.tag}}</span>
            <span class="look right">{{newsDetails.news.read_count}}</span>
            <span class="time right">{{newsDetails.news.created_at.split(' ')[0]}}</span>
          </div>
          <div class="details" v-html="newsDetailsContent"></div>
          <div class="other" v-if="newsDetails.prev_news || newsDetails.next_news">
            <p v-if="newsDetails.prev_news">上一篇：<router-link :to="'/news-details/' + newsDetails.prev_news.id">{{newsDetails.prev_news.title}}</router-link></p>
            <p v-if="newsDetails.next_news">下一篇：<router-link :to="'/news-details/' + newsDetails.next_news.id">{{newsDetails.next_news.title}}</router-link></p>
          </div>
        </div>
        <div class="right rec">
          <Side />
        </div>
      </div>
      
      <!-- 国旗 -->
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
import loadingPage from '../../components/commonComponent/loadingPage'
import { animation, windowScroll } from "../../assets/js/config.js";
export default {
  components: {
    Layout,
    Side,
    Flag,
    loadingPage
  },
  data () {
    return {
      newsDetails: '',
      newsDetailsContent: '',
      loadingStatus: false,
      navCrumbs: [
        {
          title: '护照专题',
          url: '/news-thematic'
        },
        {
          title: '新加坡移民专家',
          url: '/news-expert'
        },
        {
          title: '成功案例',
          url: '/news-case'
        }
      ]
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.$http({
        method: "get",
        url: process.env.VUE_APP_API + "/v1/news",
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        if (res.data.code === 200) {
          this.loadingStatus = true
          this.newsDetails = res.data.data
          this.newsDetailsContent = res.data.data.news.content.replace(/\/images\/default/g, 'https://cms.aicassets.com/images/default/')
          setTimeout(()=> {
            let scroll = document.documentElement.scrollTop || document.body.scrollTop;
            animation(scroll);
            windowScroll();
          }, 100)
        }
      });
    }
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
    img {
      max-width: 100%;
    }
  }
  .other {
    padding: 25px;
    border-top: 1px solid #f7f7f7;
    p {
      position: relative;
      padding: 5px 0 5px 10px;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 4px;
        height: 4px;
        background: #444;
        border-radius: 100%;
        transform: translateY(-50%);
      }
    }
    a {
      color: #111;
      &:hover {
        text-decoration: underline;
        color: #447375;
      }
    }
  }
}
.rec {
  width: 340px;
}
@media (max-width: 767px) {
  .news {
    background: #fff;
  }
  .crumbs {
    display: none;
  }
  .news-details {
    width: 100%;
    .title {
      padding: 20px 0;
      h3 {
        font-size: 20px;
      }
      span.time {
        float: left;
        margin: 0 10px 0 0;
      }
      span.label  {
        display: block;
        float: none;
        padding-bottom: 12px;
      }
    }
    .details {
      padding: 20px 0;
    }
    .other {
      padding: 20px 0 0;
    }
  }
  .rec {
    width: 100%;
  }
}
</style>
<style lang="less">
.news-details .details {
  padding: 30px 25px;
  img {
    max-width: 100%;
  }
}
</style>