<template>
  <div class="korea">
    <div class="banner">
        <img src="../../assets/images/korea-d-bn.jpg" />
    </div>
    <div class="details margin-t-80">
      <div class="pc-max-width clearfix animation-show">
        <div class="img left">
          <img v-lazy="{src: require('../../assets/images/korea-details-img1.jpg'), loading: require('../../assets/images/country-loading.png'), error: require('../../assets/images/country-loading.png')}" />
        </div>
        <div class="des right">
          <h3>韩国F-2签证</h3>
          <p>大韩民国是亚洲除日本以外唯一能称得上的一个高度文明发达国家。大韩民国简称韩国是目前亚洲移民项目当中最具有吸引力而且信任度极高的移民项目。在韩国政府银行存5亿韩币(约295万人民币)，五年后就能获得韩国绿卡，之后可以取回存款，不影响永居身份。 申请条件宽松，并可携带超龄子女，没有任何居住要求，快到落地就能立刻转身份。 投资灵活，存款期间无管理费用，随时可以取回存款。一人申请，配偶及未婚子女都能享有永居权。</p>
        </div>
      </div>

      <div class="pc-max-width clearfix animation-show">
        <div class="img right">
          <img v-lazy="{src: require('../../assets/images/korea-details-img2.jpg'), loading: require('../../assets/images/country-loading.png'), error: require('../../assets/images/country-loading.png')}" />
        </div>
        <div class="des left">
          <h3>居住签证F2申请条件</h3>
          <p>1、满足投资要求</p>
          <p>2、韩国境内无不良犯罪记录</p>
          <p>申请人在获得韩国F2签证满5年后可转为永久绿卡，并且申请人5年后可以申请入籍大韩民国,护照免签全球190国。</p>
        </div>
      </div>

      <Advantage :advantage="advantage"></Advantage>

      <div class="plan pc-max-width clearfix animation-show">
        <img class="left" src="../../assets/images/korea-details-img3.jpg" />
        <div class="plan-des left">
          <h3>依照韩国国籍法第5条规定一般入国籍条件如下</h3>
          <p><i>◆</i>5年以上持续在大韩民国居住者。</p>
          <p><i>◆</i>持有大韩民国永居卡。</p>
          <p><i>◆</i>大韩民国民法规定的成年。</p>
          <p><i>◆</i>遵纪守法等要具备法务部令规定的品行端正条件。</p>
          <p><i>◆</i>根据自身的财产技能或依赖共同维持生计的亲属，有维持生计能力者。</p>
          <p><i>◆</i>对韩国语能力及大韩民国风俗有一定理解等拥有作为大韩民国国民的基本素养者。</p>
          <p><i>◆</i>经法务部长官认可，不会因批准加入韩国国籍而侵害国家的安全保障秩序维持或公共福利。</p>
        </div>
      </div>
    </div>
    <div class="application-process clearfix animation-show">
      <div class="public-title animation-show">
        <h3>申请流程</h3>
        <p>application process</p>
      </div>
      <ul class="pc-max-width">
        <li><span><i>1</i></span>审核签约</li>
        <li><span><i>2</i></span>视频面试</li>
        <li><span><i>3</i></span>准备材料</li>
        <li><span><i>4</i></span>提交申请</li>
        <li><span><i>5</i></span>登陆韩国</li>
        <li><span><i>6</i></span>转F-2签证</li>
      </ul>
    </div>

    <!-- 联系我们 -->
    <ContactUs />
  </div>
</template>

<script>
import { animation, windowScroll } from "../../assets/js/config.js";
import ContactUs from "../../components/commonComponent/ContactUs";
import Advantage from '../canada/base/Advantage'

export default {
  components: {
    ContactUs,
    Advantage
  },
  data () {
    return {
      advantage: {
        title: '项目优势',
        line_number: 6,
        list: [
          {
            icon: require('../../assets/images/korea/korea-img6.jpg'),
            title: '轻松获得发达国家绿卡',
            text: '没有年龄、语言、学历、居住要求，也无需提供高级管理经验'
          },
          {
            icon: require('../../assets/images/korea/korea-img1.jpg'),
            title: '存款安全性高',
            text: '该项目存款是存入韩国政府指定银行下，存入后政府会颁发投资确认书，5年后获得绿卡可以撤资'
          },
          {
            icon: require('../../assets/images/korea/korea-img3.jpg'),
            title: '无移民监，每年只需登陆一次',
            text: 'F-2签证没有居住要求，无需长期居住在此也可以维持签证有效性，更不妨碍5年后获取绿卡'
          },
          {
            icon: require('../../assets/images/korea/korea-img5.jpg'),
            title: '可以购买永久地契 无移民监',
            text: '世代相传的永久产权和绿卡身份证，在个人资产保障方面让投资者获得巨大安全感'
          },
          {
            icon: require('../../assets/images/korea/korea-img2.jpg'),
            title: '享受优越的医疗与教育',
            text: '可以申请韩国的医疗保险享受高端的医疗服务。济州岛正在打造东亚英语教育城，届时会有12所世界著名国际学校入驻'
          },
          {
            icon: require('../../assets/images/korea/korea-img4.jpg'),
            title: '韩国开户、韩国税号',
            text: '拥有身份后，就可以在韩国任意商业银行开户，办理手续简单快速；同时韩国绿卡也等同于拥有税号，可以随时使用'
          }
        ]
      },
    }
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
      top: 60px;
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
  padding: 0;
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

.application-process {
  padding: 90px 0;
  background:rgba(249,249,249,1);
  text-align: center;
  ul {
    padding-top: 60px;
  }
  @media(max-width: 767px) {
    padding: 40px 0;
    ul {
      padding-top: 30px;
    }
  }
  li {
    position: relative;
    display: inline-block;
    font-size: 16px;
    color: #447375;
    margin: 0 60px;
    &::before {
      content: '';
      position: absolute;
      top: 30px;
      right: -130px;
      width: 150px;
      height: 4px;
      border-radius: 2px;
      background:rgba(68,115,117,1);
      opacity:0.1;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
      &::before {
        display: none;
      }
    }
    span {
      position: relative;
      z-index: 20;
      padding: 0 18px;
      display: block;
      background: #f9f9f9;
    }
    i {
      position: relative;
      z-index: 9;
      display: block;
      margin: auto;
      width: 60px;
      height: 60px;
      line-height: 60px;
      margin-bottom: 20px;
      background: #cdd8d9;
      font-size: 20px;
      font-weight: bold;
      border-radius:50%;
    }
    @media(max-width: 1200px) {
      margin: 0 47px;
      font-size: 14px;
      span {
        padding: 0 10px;
      }
    }
    @media(max-width: 767px) {
      width: 33.33%;
      margin: 0 0 20px 0;
      &:before {
        display: none;
      }
      i {
        margin-bottom: 10px;
      }
    }
  }
}
</style>

<style lang="less">
.korea .canada-title {
  position: relative;
  font-size: 28px;
  text-align: center;
  padding-bottom: 20px;
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 42px;
    height: 5px;
    margin-left: -21px;
    background: #447375FF;
  }
  i {
    display: block;
  }
  @media (max-width: 1200px) {
    font-size: 26px;
    padding-bottom: 18px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
  }
}

.korea {
  .description .description-item {
    background: #f7fffd;
    > div {
      @media (min-width: 767px) {
        p {
          line-height: 24px;
        }
        &.text {
          width: 65%;
        }
        &.img {
          width: 35%;
        }
        img {
          height: 560px;
        }
      }
    }
  }
}
</style>