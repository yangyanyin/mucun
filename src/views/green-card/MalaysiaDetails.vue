<template>
  <div>
    <div class="banner">
        <img src="../../assets/images/malaysia-d-bn.jpg" />
    </div>
    <div class="pc-max-width details margin-t-80">
      <div class="clearfix animation-show">
        <div class="img left">
          <img v-lazy="{src: require('../../assets/images/malaysia-details-img1.jpg'), loading: require('../../assets/images/country-loading.png'), error: require('../../assets/images/country-loading.png')}" />
        </div>
        <div class="des right">
          <h3>马来西亚永居红卡 (MyPR)</h3>
          <p>马来西亚被公认为世界上兼具宜居和旅游属性的国家之一，在中国的“一带一路”政策的推动下，已经成为高净值人群心中的投资、置业、居住国家选择之一。因此，在马来西亚“红卡”计划推出后，吸引全球众多投资者的目光。</p>
        </div>
      </div>

      <div class="clearfix animation-show">
        <div class="img right">
          <img v-lazy="{src: require('../../assets/images/malaysia-details-img2.jpg'), loading: require('../../assets/images/country-loading.png'), error: require('../../assets/images/country-loading.png')}" />
        </div>
        <div class="des left">
          <h3>马来西亚红卡简介</h3>
          <p>马来西亚红卡 （MyPR）是马来西亚根据移民法条例1959/63，任何外国公民被授予马来西亚永久居民身份将获得入境卡和红色身份证，即MyPR。此永居身份证没有年限，终身有效，可以免除所有签证要求入境以及永久居住在马来西亚，红卡则等于马来西亚居民身份证。</p>
        </div>
      </div>

      <div class="plan clearfix animation-show">
        <img class="left" src="../../assets/images/plan-img2.jpg" />
        <div class="plan-des left">
          <h3>马来西亚红卡优势</h3>
          <p>1.无需放弃本国身份、终身免签自由定居往返马来西亚</p>
          <p>2.自由在大马经商、注册公司没有任何附加条件，享受国民待遇</p>
          <p>3.MyPR持有者可以在大马从事任何工作不需要工作签证</p>
          <p>4.获得MyPR后新生儿将自动获得大马公民身份</p>
          <p>5.子女可以享受当地免费的优质教育，马来西亚为英式双语教育体系</p>
          <p>6.无门槛购买大马当地房地产，无任何贷款限制</p>
          <p>7.无年龄限制、无资产来源证明、无居住要求</p>
        </div>
      </div>
    </div>

    <div class="application-process clearfix animation-show">
      <div class="public-title animation-show">
        <h3>申请流程</h3>
        <p>application process</p>
      </div>
      <ul class="pc-max-width">
        <li><span><i>1</i></span>收集申请人<br />资料</li>
        <li><span><i>2</i></span>向马国人力部<br />提交申请</li>
        <li><span><i>3</i></span>获批文后交给<br />移民厅审核</li>
        <li><span><i>4</i></span>审核通过后<br />签发入境许可</li>
        <li><span><i>5</i></span>登陆马国录<br />指纹</li>
        <li><span><i>6</i></span>获取红卡后到<br />移民厅盖章</li>
      </ul>
    </div>

    <!-- 联系我们 -->
    <ContactUs />
  </div>
</template>

<script>
import { animation, windowScroll } from "../../assets/js/config.js";
import ContactUs from "../../components/commonComponent/ContactUs";

export default {
  components: {
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
  img {
    width: 600px;
  }
  .plan-des {
    padding: 50px 50px 0;
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
      // padding-left: 17px;
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
      padding-top: 30px;
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
  padding: 100px 0;
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
      padding: 0 13px;
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

