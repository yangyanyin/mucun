<template>
  <Layout>
    <div class="banner">
      <img src="../../assets/images/bank-banner.jpg" />
    </div>
    <div class="pc-max-width margin-t-80">
      <div class="public-title animation-show">
        <h3>什么人适合办新加坡银行个人开户</h3>
        <p>Who is suitable for opening an account in Bank Of Singapore</p>
      </div>
      <div class="bank-account clearfix">
        <div class="list left animation-show1">
          <div class="brick-item">
            <img src="../../assets/images/bank/bank-account1.png" />
            <div class="name">
              <strong>海外资产配置</strong>
              <p>需要做海外资产配置，开设新加坡银行账号，金融中心资金出入自由，方便快捷，便于后期海外置业，移民，保险，教育等用途。</p>
            </div>
          </div>
        </div>
        <div class="list left animation-show2">
          <div class="brick-item">
            <img src="../../assets/images/bank/bank-account2.png" />
            <div class="name">
              <strong>需要境外银行做资金中转</strong>
              <p>新加坡个人银行账号可以在全球范围内，任何角落即可方便网银操作，作为亚洲金融中心，方便接 受不来自世界各地的资金。</p>
            </div>
          </div>
        </div>
        <div class="list left animation-show3">
          <div class="brick-item">
            <img src="../../assets/images/bank/bank-account3.png" />
            <div class="name">
              <strong>无法解释资金来源</strong>
              <p>商业银行都会对客户资金来源都会有要求，而大部分客户无法具体解释清楚资金来源，新加坡全球护照交流中心团队经验丰富，能协助客户妥善处理好开户前和开户后资金入账问题。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="condition margin-t-80">
      <div class="content">
        <div class="animation-show">
          <h3>新加坡银行个人开户申请条件</h3>
          <p>需要申请人提供相应的开户文件，包括个人身份文件及相关地址文件，同时完成填写银行要求的KYC文件和最低存款资金要求，以华侨银行开户为例，需要提供文件如下：</p>
        </div>
        <ul class="clearfix animation-show">
          <li>
            <i>01</i>
            申请人提供开立账户的护照，金融事务身份及地址证明
          </li>
          <li>
            <i>02</i>
            申请人完成填写银行KYC文件并与银行确认信息无误
          </li>
          <li>
            <i>03</i>
            保证银行账户的最低资金要求（20w新币或等值货币）
          </li>
        </ul>
      </div>
    </div>
    <div class="bank-process margin-t-80">
      <div class="public-title animation-show">
        <h3>银行个人开户申请流程</h3>
        <p>Application process</p>
      </div>
      <div class="structure animation-show">
        <strong class="title">申请步骤共7步，周期为3-4周</strong>
        <div class="tree">
          <div class="step1 step">
            <div class="animation-show">
              <h3>1、签约</h3>
              <p>客户签订好新加坡个人银行开户合同。</p>
            </div>
          </div>
          <div class="step2 step animation-show">
            <div class="animation-show">
              <h3>2、采集资料</h3>
              <p>我们的专业人士通过与客户高效沟通，了解客户的需求后，为客户私人定制开户规划。</p>
            </div>
          </div>
          <div class="step3 step animation-show">
            <div class="animation-show">
              <h3>3、材料递交银行</h3>
              <p>将整理好的客户文件我司文案人员具体检查再次确认无误后，递交至新加坡银行受理开户申请。</p>
            </div>
          </div>
          <div class="step4 step animation-show">
            <div class="animation-show">
              <h3>4、银行身份确认</h3>
              <p>银行和客户进行电话沟通进行身份确认，我司提前与客户做好电话时间预约，指导客户顺利与银行做身份确认。</p>
            </div>
          </div>
          <div class="step5 step animation-show">
            <div class="animation-show">
              <h3>5、银行开户</h3>
              <p>银行账号开好后，银行会以电子邮件形式通知到客户邮箱，确认银行账号设立。</p>
            </div>
          </div>
          <div class="step6 step animation-show">
            <div class="animation-show">
              <h3>6、激活账号</h3>
              <p>账号开好后，银行会将银行卡以及网银密码电邮至客户提供的通讯地址，我们全程指导激活银行账号和网银使用。</p>
            </div>
          </div>
          <div class="step7 step animation-show">
            <div class="animation-show">
              <h3>7、后续服务</h3>
              <p>我们提供客户一年的免费后期指导和资金出入账的注意事项问题。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../components/layout.vue";
import { animation, windowScroll } from "../../assets/js/config.js";

export default {
  name: "app",
  components: {
    Layout
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
.bank-account {
  margin-top: 50px;
  .list {
    width: 33.33%;
    padding: 0 20px;
    img {
      display: block;
      width: 100%;
    }
    .name {
      height: 234px;
      background: #f3f3f3;
      padding: 40px 30px;
      strong {
        font-size: 20px;
      }
      p {
        padding-top: 10px;
        font-size: 15px;
        line-height: 26px;
      }
    }
  }
  @media (max-width: 767px) {
    .list {
      width: 100%;
      margin-bottom: 20px;
      .name {
        height: auto;
        padding: 30px 20px;
        strong {
          font-size: 18px;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
}
.condition {
  background: url("../../assets/images/bank/bank-account-bg.png") no-repeat top
    center;
  background-size: 1920px;
  height: 560px;
  color: #fff;
  text-align: center;
  .content {
    width: 850px;
    margin: auto;
    padding-top: 120px;
  }
  h3 {
    font-weight: bold;
    font-size: 34px;
  }
  p {
    padding: 0 50px;
    font-size: 18px;
    margin: 20px 0 50px 0;
    line-height: 38px;
  }
  ul {
    li {
      float: left;
      width: 33.3%;
      font-size: 16px;
      padding: 0 30px;
      line-height: 30px;
      i {
        display: block;
        width: 60px;
        height: 60px;
        margin: auto;
        font-size: 22px;
        border: 1px solid #fff;
        border-radius: 100%;
        line-height: 60px;
        margin-bottom: 20px;
      }
    }
  }
  @media (max-width: 767px) {
    background: #1b2a44;
    height: auto;
    padding: 60px 0;
    .content {
      width: auto;
      padding: 0 30px;
    }
    h3 {
      font-size: 22px;
    }
    p {
      padding: 0;
      font-size: 16px;
      line-height: 30px;
    }
    ul {
      li {
        width: 100%;
        padding: 0 40px;
        margin-bottom: 40px;
      }
    }
  }
}
.structure {
  width: 750px;
  margin: 0 auto 80px;
  text-align: center;
  strong.title {
    display: block;
    width: 350px;
    height: 50px;
    margin: 40px auto;
    line-height: 50px;
    color: #bd8c67;
    font-size: 18px;
    border: 1px solid #bd8c67;
    border-radius: 10px;
  }
  .tree {
    position: relative;
    height: 677px;
    background: url("../../assets/images/bank/tree-bg.png") no-repeat top center;
    background-size: 477px;
    .step {
      position: absolute;
      h3 {
        font-size: 22px;
        padding-bottom: 10px;
      }
      p {
        font-size: 16px;
        line-height: 26px;
      }
      &.step1 {
        width: 190px;
        top: 25px;
        left: 40px;
      }
      &.step2 {
        width: 280px;
        top: 125px;
        right: 10px;
      }
      &.step3 {
        width: 280px;
        top: 210px;
        left: 0;
      }
      &.step4 {
        width: 280px;
        top: 310px;
        right: 5px;
      }
      &.step5 {
        width: 250px;
        top: 400px;
        left: 10px;
      }
      &.step6 {
        width: 280px;
        top: 495px;
        right: 0;
      }
      &.step7 {
        width: 250px;
        top: 580px;
        left: 10px;
      }
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    strong.title {
      width: 250px;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
      font-size: 15px;
    }
    .tree {
      height: 490px;
      background-size: 300px;
      .step {
        h3 {
          font-size: 16px;
          padding-bottom: 5px;
        }
        p {
          font-size: 12px;
          line-height: 18px;
        }
        &.step1 {
          width: 130px;
          top: 30px;
          left: 10px;
        }
        &.step2 {
          width: 160px;
          top: 75px;
          right: 10px;
        }
        &.step3 {
          width: 160px;
          top: 125px;
          left: 10px;
        }
        &.step4 {
          width: 160px;
          top: 185px;
          right: 5px;
        }
        &.step5 {
          width: 150px;
          top: 250px;
          left: 10px;
        }
        &.step6 {
          width: 140px;
          top: 305px;
          right: 10px;
        }
        &.step7 {
          width: 150px;
          top: 365px;
          left: 10px;
        }
      }
    }
  }
}
</style>

