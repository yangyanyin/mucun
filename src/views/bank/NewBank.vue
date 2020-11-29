<template>
  <div class="new-bank">
    <div class="banner">
      <img src="../../assets/images/bank/bank-banner.jpg" />
    </div>

    <div class="bank-advantage pc-max-width margin-t-80">
      <h3 class="title">新加坡银行开户的优势</h3>
      <h5>新加坡的金融行业近年来发展迅速，现在已经取代了香港成为了世界第三大金融中心，位于亚洲首位。同时，新加坡吸引了大量商界人士想要在新加坡办理银行开户，为方便发拓展业务、外汇交易与金融理财等。</h5>
      <div class="list clearfix">
        <div class="left item" v-for="(item, key) in bankAdvantage" :key="key">
          <img :src="item.icon" />
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>

    <div class="bank-recommend">
      <h3 class="title">新加坡银行开户的优势</h3>
      <ul class="clearfix pc-max-width">
        <li class="left">
          <img src="../../assets/images/bank/bank-logo1.png">
        </li>
        <li class="left">
          <img src="../../assets/images/bank/bank-logo2.png">
        </li>
        <li class="left">
          <img src="../../assets/images/bank/bank-logo3.png">
        </li>
        <li class="left">
          <img src="../../assets/images/bank/bank-logo4.png">
        </li>
        <li class="left">
          <img src="../../assets/images/bank/bank-logo5.png">
        </li>
        <li class="left">
          <img src="../../assets/images/bank/bank-logo6.png">
        </li>
        <li class="left">
          <img src="../../assets/images/bank/bank-logo7.png">
        </li>
        <li class="left">
          <img src="../../assets/images/bank/bank-logo8.png">
        </li>
      </ul>
      <p class="pc-max-width">新加坡本地银行: DBS 星展银行 成立于1968年，新加坡最大的银行 / OCBC 华侨银行 成立于1932年 东南亚第二大金融服务集团 / UOB 大华银行 成立于1935年 业务遍布整个亚洲 主要外资银行: Citibank 花旗银行 / HSBC 汇丰银行 / Standard Charter 渣打银行 / Maybank 马来西亚银行 / BNP Paribas 法国巴黎银行</p>
    </div>

    <div class="bank-process">
      <h3>银行个人开户申请流程</h3>
      <p>申请步骤共7步，周期为3-4周</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      bankAdvantage: [
        {
          icon: require('../../assets/images/bank/bank-icon1.jpg'),
          text: '新加坡目前拥有200多家全球银行机构，涵盖各类金融服务于产品，可以满足各类企业和商务人士的需求'
        },
        {
          icon: require('../../assets/images/bank/bank-icon2.jpg'),
          text: '新加坡各大银行最为重视客户的隐私权益，新加坡金管局设立非常严格的监管机制，最大程度上确保每一位客户的账户安全和隐私保密'
        },
        {
          icon: require('../../assets/images/bank/bank-icon3.jpg'),
          text: '新加坡银行开户准备材料简单，无需登陆办理，开户周期相对较短'
        },
        {
          icon: require('../../assets/images/bank/bank-icon4.jpg'),
          text: '新加坡银行账户不受外汇管制，资金可自由调动；网银体系，可利用手机APP转账/汇款与日常账户查询'
        },
        {
          icon: require('../../assets/images/bank/bank-icon5.jpg'),
          text: '海外人士开户首次存入金额相对较低，也无需提供很多账户存款结余，对于个人开户容易满足条件'
        },
        {
          icon: require('../../assets/images/bank/bank-icon6.jpg'),
          text: '新加坡与中国签订了CRS协议，但没有交换落地，不会进行两国之间的信息收集与交换，保障了客户境外个人信息'
        }
      ] 
    }
  }
}
</script>
<style scoped lang="less">
.banner {
  width: 100%;
  overflow: hidden;
  @media (max-width: 767px) {
    padding-top: 60px;
    height: 240px;
  }
  img {
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
.title {
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
  @media (max-width: 1200px) {
    font-size: 26px;
    padding-bottom: 18px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
  }
}

.bank-advantage {
  text-align: center;
  h5 {
    padding: 40px 50px 80px;
    line-height: 26px;
    font-size: 16px;
    color: #447375;
  }
  .item {
    width: 31%;
    margin: 0 3.5% 40px 0;
    background: #f7f7f7;
    &:nth-child(3n+0) {
      margin-right: 0;
    }
    img {
      display: block;
      width: 100%;
    }
    p {
      padding: 30px;
      height: 140px;
      line-height: 26px;
    }
  }
}

.bank-recommend {
  background: #f7f7f7;
  text-align: center;
  padding: 50px;
  ul {
    padding: 30px 0 70px;
    li {
      width: 23%;
      margin-right: 2.6666%;
      &:nth-child(4n+0) {
        margin-right: 0;
      }
      img {
        display: block;
        width: 100%;
      }
    }
  }
  p {
    padding: 0 30px;
    line-height: 28px;
  }
}
</style>