<template>
  <Layout>
    <div class="banner">
        <img src="../../assets/images/malaysia-d-bn.jpg" />
    </div>
    <div class="pc-max-width details margin-t-80">
      <div class="clearfix animation-show">
        <div class="img left">
          <img v-lazy="{src: require('../../assets/images/malaysia-details-img1.jpg'), loading: require('../../assets/images/country-loading.png'), error: require('../../assets/images/country-loading.png')}" />
        </div>
        <div class="des right">
          <h3>马来西亚第二家园计划（MM2H）</h3>
          <p>是由马来西亚旅游局和马来西亚移民局推出的一个项目，旨在让符合政府特定条件的外籍人士获得多次入境社交签证，以便长期居住在马来西亚。（多次入境社交签证有效期限为10年，可以更新）</p>
        </div>
      </div>

      <div class="clearfix animation-show">
        <div class="img right">
          <img v-lazy="{src: require('../../assets/images/malaysia-details-img2.jpg'), loading: require('../../assets/images/country-loading.png'), error: require('../../assets/images/country-loading.png')}" />
        </div>
        <div class="des left">
          <h3>申请条件</h3>
          <p>马来西亚第二家园计划(MM2H)这项计划公开给马来西亚所承认的国家公民申请，无划分种族、宗教、性别或年龄。这项计划允许申请者可以携带配偶、父母及子女。马来西亚公民的外籍配偶和外籍人士在其工作签证期满后，可以申请该项计划在马来西亚退休养老。(申请者可以携带21岁以下未婚子女以及60岁以上的父母)</p>
        </div>
      </div>

      <div class="plan clearfix animation-show">
        <img class="left" src="../../assets/images/plan-img2.jpg" />
        <div class="plan-des left">
          <h3>申请人须符合以下条件</h3>
          <strong>- 50岁以下申请人</strong>
          <p><i>◆</i>体现稳定的收入，至少马币1万/月，可以包括薪水、分红、顾问费、提成等； </p>
          <p><i>◆</i>马来西亚本地银行开出的定期存款证明50万马币(约合90万人民币)；</p>
          <strong>- 50岁以上申请人</strong>
          <p><i>◆</i>体现稳定收入，至少马币1万/月。退休人士须出示获得政府认可的退休金证明， 数额为马币1万/月； </p>
          <p><i>◆</i>马来西亚本地银行开出的定期存款证明35万马币（约合57万人民币)。</p>
        </div>
      </div>


    </div>

    <!-- 联系我们 -->
    <ContactUs />
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
  }
};
</script>
<style lang="less" scoped>
.banner {
  position: relative;
  text-align: center;
  width: 100%;
  overflow: hidden;
  height: 340px;
  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
  }
  @media (max-width: 767px) {
    padding-top: 60px;
    height: 240px;
    img {
      height: 180px;
    }
  }
}
.details {
  >div {
    position: relative;
    margin-bottom: 50px;
  }
  .img {
    width: 50%;
    img {
      display: block;
      width: 100%;
    }
  }
  .des {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50%;
    padding: 0 40px;
    &.left {
      left: 0;
    }
    &.right {
      right: 0;
    }
    h3 {
      font-size: 22px;
      padding-bottom: 20px;
    }
    p {
      line-height: 26px;
      font-size: 15px;
      @media(max-width: 1200px) {
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
  @media (max-width: 767px) {
    .left,.right {
      float: none;
      width: 100%;
    }
    .des {
      position: static;
      padding: 20px 0;
      transform: translate(0);
      h3 {
        text-align: center;
        font-size: 18px;
        padding-bottom: 10px;
      }
    }
  }
}

.plan {
  margin-top: 40px;
  background: #447375;
  img {
    width: 600px;
  }
  .plan-des {
    padding: 20px 50px 0;
    width: calc(100% - 600px);
    h3 {
      font-size: 26px;
      color: #fff;
      padding-bottom: 5px;
    }
    strong {
      display: block;
      color: #fff;
      font-size: 15px;
      padding: 20px 0 5px;
    }
    p {
      position: relative;
      color: #fff;
      padding-left: 17px;
      font-size: 15px;
      line-height: 26px;
      margin-top: 5px;
      i {
        position: absolute;
        left: 0;
        top: 0;
        line-height: 24px;
        font-size: 16px;
      }
    }
  }
  @media (max-width: 1200px) {
    img {
      width: 500px;
    }
    .plan-des {
      width: calc(100% - 500px);
      h3 {
        font-size: 22px;
      }
      strong {
        padding: 10px 0 5px;
      }
      p {
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
  @media (max-width: 767px) {
    .plan-des {
      width: 100%;
      padding: 20px;
    }
  }
}
</style>

