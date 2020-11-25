<template>
  <Loading v-if="!newData"/>
  <div class="news" v-else>
    <div class="content pc-max-width clearfix">
      <div class="crumbs">
        <router-link to="/">首页</router-link> > {{banner[newsType].title}}
      </div>
      <div class="left list-banner">
        <div class="banner">
          <img :src="banner[newsType].img" />
        </div>
        <ul class="list" ref="news_list">
          <li v-for="(news, key) in newData" :key="key" class="clearfix animation-show">
            <router-link class="img" :to="'/news-details/' + news.id"><img :src="news.img" /></router-link>
            <div class="des">
              <router-link class="t" :to="'/news-details/' + news.id">{{news.title}}</router-link>
              <p>{{news.description}}</p>
              <div class="left clearfix"> 
                <span>{{news.created_at.split(' ')[0]}}</span>
                <span>{{news.read_count}}</span>
              </div>
              <router-link :to="'/news-details/' + news.id" class="more right">了解详情</router-link>
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
</template>
<script>
import Flag from ".././../components/commonComponent/NationalFlag";
import Side from './component/SideNews'
import Loading from '../../components/commonComponent/loadingPage'
import { animation, windowScroll } from "../../assets/js/config.js";
export default {
  components: {
    Side,
    Flag,
    Loading
  },
  data () {
    return {
      banner: {
        case: {
          img: require('../../assets/images/news-case.jpg'),
          title: '成功案例',
          id: 3
        },
        thematic: {
          img: require('../../assets/images/news-thematic.jpg'),
          title: '护照专题',
          id: 1
        },
        expert: {
          img: require('../../assets/images/news-expert.jpg'),
          title: '新加坡移民专家',
          id: 2
        }
      },
      newsType: this.$route.name,
      newData: '',
      page: 1,
      isLoading: false
    }
  },
  methods: {
    newsList() {
      this.$http({
      method: "get",
      url: process.env.VUE_APP_API + "/v1/newsList",
      params: {
        category_id: this.banner[this.newsType].id,
        page: this.page,
        size: 5
      }
      }).then(res => {
        if (res.data.code === 200) {
          this.newData = [...this.newData, ...res.data.data.news_list]
          if (res.data.data.news_list.length > 0) {
              this.page += 1
              this.isLoading = true
            }
            setTimeout(()=> {
              let scroll = document.documentElement.scrollTop || document.body.scrollTop;
              animation(scroll);
              windowScroll();
            }, 100)
          }
        })
    }
  },
  mounted () {
    this.newsList()
    let _this = this
    window.addEventListener('scroll', function () {
      if (_this.$refs.news_list) {
        let scroll = document.documentElement.scrollTop || document.body.scrollTop
        if (scroll + window.innerHeight >= _this.$refs.news_list.offsetTop + _this.$refs.news_list.offsetHeight - 220) {
          if (_this.isLoading) {
            _this.isLoading = false
            _this.newsList()
          }
        }
      }
    })
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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