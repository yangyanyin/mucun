<template>
  <div class="emigrant">
    <div class="banner"></div>
    <MenuItem :menuList="menuList"></MenuItem>
    <div class="pc-max-width">
      <!-- 菜单 -->
      <div class="content">
        <router-view></router-view>
      </div>
    </div>

    <ContentImg></ContentImg>
    <!-- 联系我们 -->
    <ContactUs />
  </div>
</template>

<script>
import ContactUs from "../../components/commonComponent/ContactUs";
import MenuItem from "../../components/MenuItem";
import ContentImg from '../../components/ContentImg'

export default {
  components: {
    ContactUs,
    MenuItem,
    ContentImg
  },
  data () {
    return {
      menuList: [
        {
          url: '/emigrant/singapore',
          zh_text: '新加坡移民',
          en_text: 'Singapore Immigration'
        },
        {
          url: '/emigrant/four',
          zh_text: '新加坡家族办公室移民项目',
          en_text: 'Singapore Family Office'
        },
        {
          url: '/emigrant/one',
          zh_text: '自雇移民项目',
          en_text: 'Employment Pass'
        },
        {
          url: '/emigrant/tow',
          zh_text: '股权投资移民项目',
          en_text: 'EntrePass'
        },
        {
          url: '/emigrant/three',
          zh_text: '全球商业投资移民项目',
          en_text: 'GIP'
        }
      ]
    }
  },
  mounted() {}
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