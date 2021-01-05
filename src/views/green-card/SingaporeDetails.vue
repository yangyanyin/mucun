<template>
  <div>
    <div class="banner">
        <img src="../../assets/images/singapore-d-bn.jpg" />
    </div>

    <div class="investment margin-t-80 pc-max-width animation-show">
      <strong>创业投资移民</strong>
      <p>创业投资移民是新加坡侨水资本——Singapore Capital为客户量身定制的专属投资移民方案，是目前新加坡移民法律下最佳的移民方式选择。申请人通过投资创办新加坡公司，获取新加坡政府颁发的创业准证(Entrepass)，当公司运营至满足新加坡政府的指定要求后，便可向新加坡移民局（ICA）申请绿卡，从而移民新加坡，之后可申请全家入籍新加坡，免签超过全球170个国家，为地表名副其实的最强护照。</p>
      <p>该方案以成功率高、专业性强、安全稳定等特点备受客户青睐和好评，迄今已帮助近百位客户顺利移居新加坡。客户无需在新加坡自主运作公司，无需承担公司运营的亏损风险。为客户提供包括评估咨询、专业文案、政府沟通、公司监管等专属服务，使申请人的公司满足创业准证申请要求、公司运营情况满足创业准证续签要求，确保移民成功率。</p>
      <span>全球精英最可靠移民方案</span>
    </div>

    <div class="immigration advantage margin-t-80">
      <div class="public-title animation-show">
        <h3>新加坡移民优势</h3>
        <p>移民新加坡 尽享六大福利</p>
      </div>
      <div class="content pc-max-width clearfix">
        <div class="list left animation-show">
          <div class="info brick-item">
            <img class="img1" src="../../assets/images/city/advantage-icon6.png" />
            <strong>精英教育</strong>
            <p>全球知名高校、教育中西兼容并蓄，双语教育发达，剑桥体系的教育系统，成绩受世界认可</p>
          </div>
        </div>
        <div class="list left animation-show">
          <div class="info brick-item">
            <img class="img1" src="../../assets/images/city/advantage-icon7.png" />
            <strong>金融中心</strong>
            <p>全球第四大外汇交易中心，在国际金融、贸易融资、海事金融、保险、财务运作、资产及财富管理方面拥有领先地位</p>
          </div>
        </div>
        <div class="list left animation-show">
          <div class="info brick-item">
            <img class="img1" src="../../assets/images/city/advantage-icon8.png" />
            <strong>税务天堂</strong>
            <p>新加坡税收体系简单低廉，无资本税，区域征税，资金可在主要金融中心自由流动</p>
          </div>
        </div>
        <div class="list left animation-show">
          <div class="info brick-item">
            <img class="img1" src="../../assets/images/city/advantage-icon9.png" />
            <strong>全球通行</strong>
            <p>护照免签190多个国家，包括美国、日本、中国和欧洲大部分国家，相当于 “国际通行证”</p>
          </div>
        </div>
        <div class="list left animation-show">
          <div class="info brick-item">
            <img class="img1" src="../../assets/images/city/advantage-icon10.png" />
            <strong>医疗福利</strong>
            <p>新加坡拥有发达的医疗设施和极高的医疗水平，可以让全家人高枕无忧</p>
          </div>
        </div>
        <div class="list left animation-show">
          <div class="info brick-item">
            <img class="img1" src="../../assets/images/city/advantage-icon11.png" />
            <strong>花园城市</strong>
            <p>全球知名“花园城市”，街道干净整洁，空气清新，气候宜人，极其适合居住与生活</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="margin-t-80 crowd">
      <div class="public-title animation-show">
        <h3>适用人群</h3>
      </div>
      <div class="content pc-max-width clearfix animation-show">
        <div class="list left">
          <img src="../../assets/images/city/crowd-icon1.png" />
          <strong>
            有一流的商业背景或
            <br />高管经验
          </strong>
        </div>
        <div class="list left">
          <img src="../../assets/images/city/crowd-icon2.png" />
          <strong>
            通过新加坡侨水资本
            <br />评估测试
          </strong>
        </div>
        <div class="list left">
          <img src="../../assets/images/city/crowd-icon3.png" />
          <strong>
            想快速获取新加坡
            <br />绿卡身份
          </strong>
        </div>
        <div class="list left">
          <img src="../../assets/images/city/crowd-icon4.png" />
          <strong>
            常居国内但是想移民
            <br />新加坡的精英
          </strong>
        </div>
      </div>
    </div>

    <div class="condition margin-t-80 pc-max-width">
      <div class="public-title animation-show">
        <h3>申请条件</h3>
        <p>Application Requirement</p>
      </div>
      <div class="content">
        <div class="tab-btn clearfix animation-show">
          <a :class="{on:showTabBtn===1}" @click="switchTab(1)">对申请人的要求</a>
          <a :class="{on:showTabBtn===2}" @click="switchTab(2)">对创办公司的要求</a>
        </div>
        <div class="tab-box animation-show">
          <div class="tab-centenr clearfix">
            <img class="left" src="../../assets/images/city/condition-bg1.png" />
            <ul class="right" v-if="showTabBtn===1">
              <li class="title">对申请人的要求</li>
              <li>申请人年满21岁</li>
              <li>拥有一定的商业运营经验</li>
              <li>想轻松获取新加坡绿卡身份</li>
              <li>不打算自己在新加坡经营公司</li>
              <li>投资500万人民币入股新公司</li>
            </ul>
            <ul class="right company" v-if="showTabBtn===2">
              <li class="title">对创办公司的要求</li>
              <li>公司不属于以下行业：咖啡店，美食中心，食阁巴刹，酒吧，夜总会，卡拉OK，酒廊，足部按摩，按摩院中国传统医学，针灸，中药配药，职业介绍机构，风水师</li>
              <li>
                公司必须满足以下至少一个创新条件：
                <br />a.获得新加坡政府认可的风险投资或天使投资注资
                <br />b.持有国家级知识产权机构批准的专利/知识产权
                <br />c.与新加坡科技研究局认可的科研机构或新加坡高校有研发合作
                <br />d.是获新加坡标新局、新加坡国家研发基金会等机构支持的科技创新型企业
              </li>
              <li>投资500万人民币入股新公司</li>
              <li>公司需要满足以下雇佣人数和商业开支要求，预估115万新币以上</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="advantage margin-t-80">
      <div class="public-title animation-show">
        <h3>方案优势</h3>
        <p>五大优势 快速移民新加坡</p>
      </div>
      <div class="content pc-max-width clearfix animation-show">
        <div class="list left">
          <div class="info brick-item">
            <img class="img1" src="../../assets/images/city/advantage-icon1.png" />
            <strong>门槛低</strong>
            <p>条件宽松，无语言要求，精英首选方案。</p>
          </div>
        </div>
        <div class="list left">
          <div class="info brick-item">
            <img class="img2" src="../../assets/images/city/advantage-icon2.png" />
            <strong>零风险</strong>
            <p>投资款有固定资产担保，客户不承担公司盈亏风险。</p>
          </div>
        </div>
        <div class="list left">
          <div class="info brick-item">
            <img class="img3" src="../../assets/images/city/advantage-icon3.png" />
            <strong>好福利</strong>
            <p>地表最强护照，全球畅通无阻，保障子女教育，全球最低税率。</p>
          </div>
        </div>
        <div class="list left">
          <div class="info brick-item">
            <img class="img4" src="../../assets/images/city/advantage-icon4.png" />
            <strong>批复率高</strong>
            <p>新加坡侨水资本聘前移民官预评申请人情况，不浪费时间，批准率高。</p>
          </div>
        </div>
        <div class="list left">
          <div class="info brick-item">
            <img class="img5" src="../../assets/images/city/advantage-icon5.png" />
            <strong>快速登陆新加坡</strong>
            <p>获签快，最快申请人可以3个月内登陆新加坡。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="process margin-t-80 pc-max-width">
      <div class="public-title animation-show">
        <h3>服务流程</h3>
        <p>Service Process</p>
      </div>
      <ul class="animation-show">
        <li>
          <i>01</i>
          <p>
            采集申请人基本信息，
            <br />评估申请人综合情况。
          </p>
        </li>
        <li>
          <i>02</i>
          <p>
            <br />开始受理，签订服务协议
          </p>
        </li>
        <li>
          <i>03</i>
          <p>
            递交申请，按照合同履行各自的权利和义务。
          </p>
        </li>
        <li>
          <i>04</i>
          <p>
            获得EP批准，按照已签订
            <br />的服务合同分阶段付费。
          </p>
        </li>
        <li>
          <i>05</i>
          <p>
            为申请人规划绿卡
            <br />申请最佳路线。
            <br />
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { animation, windowScroll } from "../../assets/js/config.js";
export default {
  name: "app",
  data() {
    return {
      showTabBtn: 1
    };
  },
  methods: {
    switchTab(i) {
      this.showTabBtn = i;
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
.investment {
  strong {
    display: block;
    text-align: center;
    font-size: 28px;
    margin-bottom: 20px;
  }
  p {
    font-size: 17px;
    line-height: 34px;
  }
  span {
    display: block;
    font-size: 26px;
    color: #bd8c67;
    text-align: center;
    margin-top: 40px;
  }
  @media (max-width: 767px) {
    padding: 0 15px;
    strong {
      font-size: 24px;
    }
    p {
      font-size: 15px;
      line-height: 28px;
    }
    span {
      font-size: 20px;
      margin-top: 20px;
    }
  }
}
.crowd {
  padding-top: 100px;
  background: url("../../assets/images/city/crowd-bg.png") no-repeat top center;
  background-size: 1920px;
  height: 640px;
  .content {
    margin-top: 80px;
  }
  .list {
    text-align: center;
    width: 25%;
    strong {
      display: block;
      font-size: 20px;
      line-height: 40px;
      margin-top: 50px;
    }
    img {
      display: block;
      margin: auto;
    }
  }
  @media (max-width: 767px) {
    background: #f3f3f3;
    padding-top: 30px;
    height: auto;
    .content {
      margin: 0;
    }
    .list {
      width: 50%;
      margin: 30px 0;
      strong {
        line-height: 30px;
        margin-top: 20px;
        font-size: 16px;
      }
      img {
        width: 60px;
      }
    }
  }
}
.condition {
  .tab-btn {
    padding-top: 35px;
    text-align: center;
    a {
      display: inline-block;
      width: 230px;
      height: 50px;
      margin: 0 10px;
      text-align: center;
      line-height: 50px;
      color: #bd8c67;
      border: 1px solid #bd8c67;
      border-radius: 25px;
      font-size: 18px;
      cursor: pointer;
      &.on {
        color: #fff;
        background: #bd8c67;
      }
    }
    @media (max-width: 767px) {
      a {
        width: 140px;
        height: 36px;
        line-height: 36px;
        margin: 0 10px;
        font-size: 14px;
      }
    }
  }
  .tab-box {
    margin-top: 40px;
    .tab-centenr {
      img {
        width: 480px;
      }
      ul {
        position: relative;
        width: calc(100% - 480px);
        height: 423px;
        background: #1b2a44;
        padding: 130px 0 0 270px;
        li {
          color: #bd8c67;
          font-size: 17px;
          line-height: 32px;
          position: relative;
          padding-left: 26px;
          &:after {
            content: "";
            position: absolute;
            left: 0;
            top: 11px;
            width: 10px;
            height: 10px;
            background: #bd8c67;
            transform: rotate(45deg);
          }
          &.title {
            font-weight: bold;
            font-size: 22px;
            padding: 0;
            margin-bottom: 30px;
            &:after {
              display: none;
            }
          }
        }
        &:after {
          content: "";
          position: absolute;
          left: 180px;
          top: 137px;
          width: 5px;
          height: 220px;
          background: #5a5052;
        }
        &.company {
          padding: 40px 30px 0 100px;
          .title {
            margin-bottom: 20px;
          }
          &:after {
            left: 50px;
            top: 50px;
          }
          li {
            font-size: 14px;
            line-height: 30px;
            &:after {
              width: 8px;
              height: 8px;
              top: 11px;
            }
          }
        }
        @media (max-width: 1100px) {
          padding: 130px 0 0 180px;
          &:after {
            left: 100px;
          }
          &.company {
            li {
              line-height: 26px;
            }
          }
        }
      }
    }
    @media (max-width: 767px) {
      margin: 0 -10px;
      img {
        display: none;
      }
      .tab-centenr {
        ul {
          width: 100%;
          height: auto;
          margin-top: 20px;
          padding: 28px 0 30px 60px;
          &:after {
            top: 35px;
            left: 30px;
          }
          li {
            padding-left: 20px;
            font-size: 15px;
            &:after {
              top: 13px;
              width: 8px;
              height: 8px;
            }
            &.title {
              font-size: 20px;
            }
          }
          &.company {
            padding: 28px 20px 30px 60px;
            &:after {
              top: 35px;
              left: 30px;
            }
          }
        }
      }
    }
  }
}
.advantage {
  background: #f3f3f3;
  padding: 70px 0;
  .list {
    width: 20%;
    padding: 0 10px;
    margin-top: 60px;
    text-align: center;
    .info {
      background: #fff;
      height: 330px;
      position: relative;
      padding-top: 170px;
      img {
        display: block;
        margin: auto;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        &.img1 {
          top: 63px;
        }
        &.img2 {
          top: 45px;
        }
        &.img3 {
          top: 48px;
        }
        &.img4 {
          top: 57px;
        }
        &.img5 {
          top: 65px;
        }
      }
      strong {
        font-size: 20px;
      }
      p {
        margin-top: 15px;
        padding: 0 25px;
        line-height: 24px;
        font-size: 15px;
      }
    }
  }
  &.immigration {
    .list {
      width: 33.33%;
    }
  }
  @media (max-width: 767px) {
    .list {
      width: 50%;
      padding: 0 7px;
      margin-top: 15px;
      .info {
        padding-top: 120px;
        height: 260px;
        strong {
          font-size: 18px;
        }
        p {
          font-size: 13px;
          padding: 0 10px;
        }
        img {
          transform: translateX(-50%) scale(0.7);
          &.img1 {
            top: 43px;
          }
          &.img2 {
            top: 25px;
          }
          &.img3 {
            top: 28px;
          }
          &.img4 {
            top: 37px;
          }
          &.img5 {
            top: 45px;
          }
        }
      }
    }
    &.immigration {
      .list {
        width: 50%;
        .info {
          height: 300px;
        }
      }
    }
  }
}
.process {
  width: 750px;
  padding: 80px 0;
  margin: auto;
  ul {
    position: relative;
    height: 660px;
    margin-top: 70px;
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      width: 6px;
      height: 660px;
      margin-left: -3px;
      background: #bd8c67;
    }
  }
  li {
    position: absolute;
    width: 420px;
    height: 102px;
    border: 1px solid #c0916e;
    border-radius: 50px;
    padding: 20px 0;
    z-index: 2;
    background: #fff;
    i {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      background: #bd8c67;
      color: #fff;
      font-size: 26px;
      border-radius: 100%;
    }
    p {
      font-weight: bold;
      font-size: 16px;
      line-height: 28px;
    }
    &:nth-child(1) {
      top: 0;
      right: 0;
      padding-left: 150px;
    }
    &:nth-child(2) {
      top: 140px;
      left: 0;
      padding-left: 82px;
      i {
        left: auto;
        right: 10px;
      }
    }
    &:nth-child(3) {
      top: 280px;
      right: 0;
      padding-left: 150px;
    }
    &:nth-child(4) {
      top: 420px;
      left: 0;
      padding-left: 82px;
      i {
        left: auto;
        right: 10px;
      }
    }
    &:nth-child(5) {
      top: 560px;
      right: 0;
      padding-left: 150px;
    }
  }
  @media (max-width: 767px) {
    margin-top: 40px;
    width: auto;
    padding: 0 30px;
    ul {
      margin-top: 35px;
      height: 540px;
      &:after {
        height: 500px;
      }
    }
    li {
      left: 50% !important;
      right: auto !important;
      margin-left: -170px;
      width: 340px;
      height: 72px;
      padding: 12px 0;
      i {
        top: 5px;
        left: 5px;
        width: 60px;
        height: 60px;
        line-height: 60px;
      }
      p {
        line-height: 24px;
        font-size: 13px;
        font-weight: normal;
      }
      &:nth-child(1) {
        padding-left: 90px;
      }
      &:nth-child(2) {
        top: 110px;
        padding-left: 30px;
        i {
          left: auto;
          right: 5px;
        }
      }
      &:nth-child(3) {
        top: 220px;
        padding-left: 70px;
      }
      &:nth-child(4) {
        top: 330px;
        padding-left: 35px;
        i {
          left: auto;
          right: 5px;
        }
      }
      &:nth-child(5) {
        top: 440px;
        padding-left: 100px;
      }
    }
  }
}
</style>