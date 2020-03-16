<template>
  <Layout>
    <div class="about-banner"></div>

    <!-- 我们是谁 -->
    <div class="we pc-max-width clearfix margin-t-80 animation-show">
      <img class="left" src="../../assets/images/we-img.png" />
      <div class="right des">
        <h3>我们是谁</h3>
        <h4>SGPEC，我们专业服务于精英。</h4>
        <p>新加坡全球护照交流中心-SGPEC，总部位于法治严明的新加坡，是多国政府和机构投资移民项目的官方授权持牌机构。作为新加坡行业领先的专业移民机构，以高效快速，隐私保密著称业内。</p>
      </div>
    </div>

    <!-- 专业 -->
    <div class="profession margin-t-80 animation-show">
      <div class="pc-max-width content clearfix">
        <div class="left des">
          <h3>我们的专业在哪里？</h3>
          <h4>为您提供专业的移民，护照定制化服务！</h4>
          <p>我们专注于为全球高净值人群提供专业的新加坡移民、欧盟和英联邦护照身份的移民定制服务。我们机构汇聚行业顶尖移民律师团队和前移民官，指导协助高净值个人或者家庭成为世界公民。通过我们的专业化运作，最大程度上简化了您成为世界公民的复杂性；同时依托于我们的高端资源、与相关机构保持长期稳定的合作关系，可以高效满足高净值人群对成为世界公民的需求。</p>
        </div>
        <div class="img right">
          <img src="../../assets/images/about-service.png" />
        </div>
      </div>
    </div>

    <!-- 我们的团队 -->
    <div class="pc-max-width team margin-t-80 animation-show">
      <div class="des">
        <h3>我们的团队</h3>
        <h4>给我们一次机会，还您一次满意的服务！</h4>
        <p>我们与时俱进，与时偕行，坚持简单的事情重复做，重复的事情专业做，专业的事情极致做。<br />交流，交心，交易；诚信，专业，隐私。<br />给我们一次机会，还你一次满意的专业服务。</p>
      </div>
      <ul class="clearfix">
        <li><img src="../../assets/images/member1.png" alt=""></li>
        <li><img src="../../assets/images/member2.png" alt=""></li>
        <li><img src="../../assets/images/member3.png" alt=""></li>
        <li><img src="../../assets/images/member4.png" alt=""></li>
        <li><img src="../../assets/images/member5.png" alt=""></li>
        <li><img src="../../assets/images/member6.png" alt=""></li>
        <li><img src="../../assets/images/member7.png" alt=""></li>
        <li><img src="../../assets/images/member8.png" alt=""></li>
      </ul>
    </div>

    <!-- 理念 -->
    <div class="idea margin-t-80 animation-show">
      <div class="pc-max-width">
        <div class="right des">
          <h3>我们的服务理念</h3>
          <h4>铸造品质，客户至上。</h4>
          <p>新加坡全球护照交流中心-SGPEC，立足新加坡，放眼全球，秉承客户隐私至上的服务宗旨，专业铸造品质，服务打造诚信，SGPEC-您可信赖的专业服务。</p>
        </div>
      </div>
    </div>

    <!-- 国旗 -->
    <Flag />
  </Layout>
</template>

<script>
import Layout from "../../components/layout.vue";
import Flag from '../../components/commonComponent/NationalFlag'
import "../../assets/less/custom.less";
import { animation, windowScroll } from "../../assets/js/config.js";
export default {
  name: "app",
  components: {
    Layout,
    Flag
  },
  mounted() {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    animation(scroll);
    windowScroll();
  }
};
</script>
<style lang="less" scoped>
.about-banner {
  width: 100%;
  height: 340px;
  background: url('../../assets/images/about-banner.png') no-repeat top center;
  background-size: 1920px;
}

.we {
  display:flex;
  flex-flow: row wrap;
  align-items: center;
  img {
    float: left;
    width: 50%;
  }
  >div {
    width: 50%;
    padding-left: 45px;
    h3 {
      font-size: 28px;
    }
    h4 {
      font-size: 20px;
      padding: 5px 0 20px;
    }
    p {
      line-height: 26px;
      font-size: 16px;
    }
  }
}

.profession {
  background: #5e8198 url('../../assets/images/profession-bg.png') no-repeat top center;
  background-size: 1920px;
  .content  {
    display:flex;
    flex-flow: row wrap;
    align-items: center;
    height: 480px;
  }
  .left {
    width: 50%;
    padding-right: 60px;
    >* {
      color: #fff;
    }
  }
  .img {
    display: block;
    width: 50%;
    padding-left: 60px;
    img {
      display: block;
      width: 100%;
    }
  }
}

.team {
  text-align: center;
  ul {
    padding: 80px 0;
    li {
      float: left;
      width: 12.5%;
      padding: 0 10px;
      img {
        display: block;
        width: 100%;
      }
    }
  }
}

.idea {
  height: 480px;
  background: url('../../assets/images/idea-bg.png') no-repeat top center;
  background-size: 1920px;
  display:flex;
  flex-flow: row wrap;
  align-items: center;
  .right {
    width: 50%;
    padding-left: 60px;
    >* { 
      color: #fff;
    }
  }
}

.des {
  h3 {
    font-size: 28px;
  }
  h4 {
    font-size: 20px;
    padding: 5px 0 20px;
  }
  p {
    line-height: 26px;
    font-size: 16px;
  }
}
</style>
