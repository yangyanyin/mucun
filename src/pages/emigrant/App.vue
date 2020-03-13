<template>
  <Layout>
    <div class="emigrant">
      <div class="banner"></div>
      <div class="pc-max-width">
        <div class="menu">
          <router-link to="one"><i>小额自雇移民项目 (EP)</i></router-link>
          <router-link to="tow"><i>股权投资移民(EP）</i></router-link>
          <router-link to="three"><i>全球商业投资计划(GIP)移民</i></router-link>
          <router-link to="four"><i>新加坡家族办公室(Family Office)</i></router-link>
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
  name: "app",
  components: {
    Layout,
    ContactUs
  },
  mounted() {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    animation(scroll);
    windowScroll();
  }
};
</script>
<style lang="less" scoped>
  .banner {
    width: 100%;
    height: 340px;
    background: url('../../assets/images/emigrant-banner.jpg') no-repeat top center;
  }
  .emigrant {
    background: #f7f7f7;
    .menu {
      height: 80px;
      margin: -40px 0 20px 0;
      background: #fff;
      border-radius: 5px;
      box-shadow: 0 3px 3px 0 #ababab;
      
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
        &:hover {
          i {
            color: #447375;
            padding: 28px 0;
            border-bottom: 4px  solid #447375;
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
      font-size: 24px;
      color: #fff;
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
}
</style>