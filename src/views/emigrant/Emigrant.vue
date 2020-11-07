<template>
  <Layout>
    <div class="emigrant">
      <div class="banner"></div>
      <div class="pc-max-width">
        <div class="menu" id="emigrant-menu">
          <router-link to="/emigrant/one">
            <i>自雇移民项目 
              <em>Employment Pass</em>
            </i>
          </router-link>
          <router-link to="/emigrant/tow">
            <i>投资移民项目 
              <em>EntrePass</em>
            </i>
          </router-link>
          <router-link to="/emigrant/three">
            <i>全球商业投资 
              <em>GIP</em>
            </i>
          </router-link>
          <router-link to="/emigrant/four">
            <i>新加坡家族办公室 
              <em>Singapore Family Office</em>
            </i>
          </router-link>
        </div>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
      <!-- 联系我们 -->
      <ContactUs />
    </div>
  </Layout>
</template>

<script>
import Layout from "../../components/layout.vue";
import { animation, windowScroll } from "../../assets/js/config.js";
import ContactUs from "../../components/commonComponent/ContactUs";
export default {
  components: {
    Layout,
    ContactUs
  },
  mounted() {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    animation(scroll);
    windowScroll();
    let linkBox = document.getElementById('emigrant-menu')
    let linkActive = linkBox.getElementsByClassName('router-link-active')[0].offsetLeft - 100
    setTimeout(()=> {
      linkBox.scrollLeft = linkActive
    }, 10)
    
  }
};
</script>
<style lang="less" scoped>
  .banner {
    width: 100%;
    height: 340px;
    background: url('../../assets/images/emigrant-banner.jpg') no-repeat top center;
    @media (max-width: 767px) {
      padding-top: 60px;
      height: 200px;
      background-size: auto 200px;
    }
  }
  .emigrant {
    @media (min-width: 767px) {
      background: #f7f7f7;
    }
    .menu {
      position: relative;
      height: 80px;
      margin: -40px 0 20px 0;
      background: #fff;
      border-radius: 5px;
      z-index: 99;
      box-shadow: 0 3px 3px 0 #ababab;
      @media (max-width: 767px) {
        margin-top: -30px;
      }
      a {
        display: inline-block;
        width: 25%;
        text-align: center;
        line-height: 80px;
        cursor: pointer;
        color: #111;
        i {
          font-size: 16px;
        }
        &.router-link-active {
          i {
            color: #447375;
            padding: 28px 0;
            font-weight: bold;
            border-bottom: 4px  solid #447375;
          }
        }
        @media (min-width: 767px) {
          &:hover {
            i {
              color: #447375;
              padding: 28px 0;
              border-bottom: 4px  solid #447375;
            }
          }
        }
      }
      @media (max-width: 767px) {
        white-space: nowrap;
        height: 60px;
        overflow-x: auto;
        padding: 0 10px;
        &::-webkit-scrollbar {
          width: 5px;
          height: 0px;
        } 
        a {
          position: relative;
          line-height: inherit;
          width: auto;
          padding: 20px 10px;
          i {
            padding: 12px 0;
            font-size: 14px;
          }
          &.router-link-active {
            i {
              color: #447375;
              padding: 0;
              font-weight: bold;
              border-bottom: none;
            }
            &:after {
              content: '';
              position: absolute;
              left: 10px;
              right: 10px;
              bottom: 0;
              height: 4px;
              background: #447375;
            }
          }
        }
      }
    }
    .content {
      background: #fff;
    }
  }
</style>

<style lang="less">
.emigrant {
  .title {
    display:flex;
    flex-flow: row wrap;
    align-items: center;
    text-align: center;
    h3 {
      margin: auto;
      color: #fff;
      span {
        position: relative;
        font-size: 24px;
        &:before {
          content: '';
          position: absolute;
          top: 10px;
          left: -95px;
          width: 80px;
          height: 8px;
          background: url('../../assets/images/title-left.png') no-repeat;
          background-size: 100%;
        }
        &:after {
          content: '';
          position: absolute;
          top: 10px;
          right: -95px;
          width: 80px;
          height: 8px;
          background: url('../../assets/images/title-right.png') no-repeat;
          background-size: 100%;
        }
      }
    }
    i {
      display: block; 
      font-size: 15px;
    }
  }
  .icon-box {
    text-align: center;
    padding: 50px 0 80px 0;
    li {
      display: inline-block;
      padding: 0 45px;
      img {
        display: inline-block;
        width: 90px;
      }
      span {
        display: block;
        padding-top: 10px;
        font-size: 16px;
        line-height: 28px;
        color: #447375;
        i {
          opacity: 0;
        }
      }
    }
  }
  .m-top30 {
    margin-top: 30px;
  }
  .note {
    text-align: center;
    color: #B9B9B9;
    line-height: 26px;
    padding-bottom: 70px;
  }
  @media (max-width: 767px) {
    .title {
      h3 {
        font-size: 18px;
      }
      i {
        font-size: 14px;
      }
    }
    .icon-box {
      padding: 25px 0 30px 0;
      li {
        padding: 0 5px;
        img {
          width: 60px;
        }
        span {
          font-size: 12px;
          padding: 0;
          line-height: 22px;
        }
      }
    }
    .m-top30 {
      margin-top: 15px;
    }
    .note {
      font-size: 12px;
      padding-bottom: 10px;
    }
  }
}
</style>