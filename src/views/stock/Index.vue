<template>
  <div class="stock">
    <div class="banner"></div>
    <div class="introduction pc-max-width">
      <p>新加坡作为世界金融中心，政治环境稳定、商业网络广泛，是最具活力前景的经济体之一，近年来在新加坡开立股票账户的企业和个人都逐年增多。新加坡股票账户可以交易全球超过20多个国家和地区，包括：新加坡、美国、中国A股，香港、日本德国等常见的交易市场，真正做到一户在手，将您的投资触角拓展至全球股市！</p>
      <p>侨水资本密切关注全球股票市场，与本地知名托管银行和证券公司合作，为您提供更加便捷高效的服务。从客户的角度出发，根据客户投资需求调整及管控风险，提供一种连贯的战略和投资方法。协助您分析、筛选并交易数千种股票。</p>       
      <span>投资美股、港股，全球20股市尽在掌中</span>
    </div>

    <div class="clearfix pc-max-width margin-t-80">
      <div class="left account">
        <h3>新加坡开设股票账户优势</h3>
        <p>1. 交易超过20多个国家和地区，投资组合更加多样化</p>
        <p>2. 支持多种货币进行交易结算，方便快捷</p>
        <p>3. 在美股市场投资全球化，例如苹果、谷歌、亚马逊等等世界顶级公司，可以说是一个美股账号投遍世界优质股。</p>
        <p>4. 非美国公民可免资本所得税，确认外籍纳税人身份者(填妥W-8BEN表格)，可豁免于美国股票资本利得税和利息收入的预扣税。</p>
        <p>5. 美股市场讯息披露相对严谨，提供客观且独立的评级制度以及新闻内容。</p>
        <p>6. 进场投资门槛低，每笔交易不限股数，只买一股也可以。</p>
        <p>7. 流动性好，T+0交易，无涨跌停限制。</p>
      </div>
      <div class="right account">
        <h3>新加坡投资股票怎么开户？</h3>
        <p>开户无身份限制，无开户费用，无最低押金。不居住在新加坡亦可开设账户。首先，建立一个和你股票交易账户连接的本地银行账户；准备NRIC/ 护照和一份地址证明（比如金融机构对账单或水电费单）就可以免费开设一个股票账户。</p>
      </div>
    </div>

    <div class="pc-max-width">
      <div class="clearfix content">
        <div class="list left img">
          <img class="left" src="../../assets/images/stock-image3.jpg" alt="" />
        </div>
        <div class="list text right">
          <div class="t">
            <strong>开户条件：</strong>
            <p>年满18周岁，非美国公民或美国永久居民</p>
            <strong>必备材料：</strong>
            <p>新加坡人/新加坡PR： 需要证件（NRIC）</p>
            <p>如果您是外国人：需要护照+地址证明（可以是银行账单、水电费/电话通知单等）</p>
            <strong>开户时间：</strong>
            <p>1周内，您的密码信函会以邮寄方式寄到您的住址</p>
          </div>
        </div>
      </div>
    </div>

    <NewContactUs />
  </div>
</template>
<script>
import NewContactUs from '../../components/NewContactUs'
export default {
  components: {
    NewContactUs
  }
}
</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  height: 340px;
  background: url('../../assets/images/stock-image1.jpg') no-repeat top center;
  background-size: auto 340px;
  @media (max-width: 767px) {
    padding-top: 60px;
    height: 200px;
    background-size: auto 200px;
  }
}
.introduction {
  padding-top: 30px;
  p {
    margin-top: 30px;
    font-size: 16px;
    line-height: 32px;
    color: #315455;
  }
  span {
    display: block;
    height: 110px;
    line-height: 110px;
    margin-top: 50px;
    text-align: center;
    font-size: 30px;
    color: #fff;
    background: url('../../assets/images/stock-image2.jpg') no-repeat top center;
    background-size: auto 110px;
  }
}
.account {
  width: 48%;
  padding: 50px;
  height: 450px;
  border-top: 6px solid #315455;
  background: #F7F7F7;
  &.right {
    text-align: center;
  }
  h3 {
    padding-bottom: 7px;
    font-size: 18px;
    color: #315455;
  }
  p {
    line-height: 32px;
    font-size: 12px;
  }
}
.content {
  position: relative;
  margin-top: 80px;
  background: #f7f7f7;
  .list {
    width: 50%;
    img {
      display: block;
      width: 100%;
    }
    strong {
      display: block;
      font-size: 18px;
      color: #447375;
      font-weight: normal;
      margin: 20px 0 5px;
      span {
        display: block;
        margin-top: 15px;
        font-size: 16px;
        padding: 5px 0;
        background: #bd8c67;
        text-align: center;
        color: #fff;
      }
    }
    p {
      font-size: 14px;
      line-height: 30px;
    }
    &.sixth {
      strong {
        color: #bd8c67;
        display: inline-block;
      }
    }
    &.text {
      position: absolute;
      display: flex;
      height: 100%;
      right: 0;
      top: 0;
      padding: 45px;
      .t {
        align-self: center;
        width: 100%;
      }
      &.left {
        left: 0;
        right: auto;
      }
    }
  }
  @media (max-width: 767px) {
    padding: 0 5px;
    .list {
      width: 100%;
      text-align: center;
      strong {
        font-size: 20px;
        margin: 20px 0 10px 0;
      }
      p {
        line-height: 24px;
        font-size: 14px;
      }
      &.text {
        position: static;
        padding: 0;
        &.left {
          padding: 0;
          text-align: center;
        }
      }
    }
  }
}


</style>