<template>
  <div class="new-bank">
    <div class="banner">
      <img src="../../assets/images/bank/bank-banner.jpg" />
    </div>

    <div class="bank-service">
      <h3 class="title">银行开户服务介绍</h3>
      <div class="pc-max-width">
        <p>新加坡-全球金融中心，亚洲发达国家之一。拥有最完善的金融体系和健全的法律，稳定的政治经济环境。世界各大银行均在新加坡设有分行，是高净值人群和企业开设银行账户的最佳目的地。投资者可以根据不同需求，选择适合的银行机构。</p>
        <p>新加坡全球护照交流中心多年来与新加坡各界银行有良好合作，提供本地三大银行异地视频开户服务，包括大华银行（UOB）、华侨银行（OCBC）、星展银行（DBS），让您足不出户就可以在新加坡开设本地银行账户。</p>
      </div>
    </div>

    <div class="margin-t-80 select-we pc-max-width"> 
      <h3 class="title">为什么选择我们</h3>
      <ul class="clearfix">
        <li>
          <img src="../../assets/images/select-we4.jpg" />
          <i>我们就在新加坡，专业成就 价值，承诺不成功不收费</i>
        </li>
        <li>
          <img src="../../assets/images/select-we1.jpg" />
          <i>超过十年的行业经验沉淀， 专注服务高净值人群</i>
        </li>
        <li>
          <img src="../../assets/images/select-we3.jpg" />
          <i>高效整合顶级行业资源，精准落实，助您稳健快速实现目标</i>
        </li>
        <li>
          <img src="../../assets/images/select-we5.jpg" />
          <i>我们最核心的服务价值： 隐私至上-您的隐私，我们的服务</i>
        </li>
      </ul>
    </div>

    <div class="margin-t-80 handle">
      <h3>快速办理新加坡银行开户</h3>
      <p>立即点击，资深专家全程一对一指导，简单高效快捷！</p>
      <a @click="changeContact">马上办理</a>
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

    <div class="bank-account margin-t-80">
      <div class="pc-max-width clearfix">
        <ul>
          <li></li>
          <li>准备材料</li>
          <li>身份要求</li>
          <li>是否到场</li>
          <li>办理周期</li>
          <li>账户用途</li>
        </ul>
        <ul>
           <li>
            个人银行账户 <br />Individual Bank Account
          </li>
          <li>身份证 护照 <br /> 联系电话号 <br /> 收件地址</li>
          <li>无国籍限制</li>
          <li>无需到场</li>
          <li>7-10个工作日</li>
          <li>海外留学 移民生活 <br /> 旅行消费 海外投资 <br /> 贷款 境外转账等</li>
        </ul>

        <ul>
          <li>
            企业银行账户 <br /> Corporate Bank Account
          </li>
          <li>公司注册资料, 公司业务合同 <br /> 关联公司资料 <br /> 董事、股东证件</li>
          <li>无国籍限制</li>
          <li>无需到场</li>
          <li>20-30个工作日</li>
          <li>业务收支 税务配置 <br /> 海外投资 支付外汇 <br /> 海外银行降低资金成本， 合理减税，提高资金效率 等</li>
        </ul>
      </div>
    </div>

    <div class="bank-process pc-max-width margin-t-80">
      <h3  class="title">银行个人开户申请流程</h3>
      <p>申请步骤共7步，周期为3-4周</p>
      <div class="sc">
        <ul>
          <li v-for="(item, key) in process" :key="key">
            <span>NO.{{key + 1}}</span>
            {{item}}
          </li>
        </ul>
      </div>
    </div>

    <div class="bank-recommend margin-t-80">
      <h3 class="title">开户银行推荐</h3>
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
        <li class="left">
          <img src="../../assets/images/bank/bank-logo9.png">
        </li>
        <li class="left">
          <img src="../../assets/images/bank/bank-logo10.png">
        </li>
      </ul>
      <p class="pc-max-width">新加坡本地银行: DBS 星展银行 成立于1968年，新加坡最大的银行 / OCBC 华侨银行 成立于1932年 东南亚第二大金融服务集团 / UOB 大华银行 成立于1935年 业务遍布整个亚洲 
        <br />主要外资银行: Citibank 花旗银行 / HSBC 汇丰银行 / Standard Chartered 渣打银行 / Maybank 马来西亚银行 / BNP Paribas 法国巴黎银行</p>
    </div>

    <ContentImg></ContentImg>

    <ContactUs></ContactUs>

    <!-- About 联系我们弹窗 -->
    <div class="about-contact" v-if="contactStatus">
      <div class="content">
        <span class="close">
          <img src="../../assets/images/close.png" @click="changeContact" />
        </span>
        <h3>请留下您的联系方式</h3>
        <p>也可以拨打（+65）8866 5586 <br /> 直接与我们取得联系</p>
        <InputBox  @success="success"></InputBox>
      </div>
    </div>
    <!--咨询完成弹窗 -->
    <MessagePopup v-if="messageType" :status="messageType" @messageType="messageType = false"></MessagePopup>
  </div>
</template>
<script>
import ContentImg from '../../components/ContentImg'
import ContactUs from '../../components/commonComponent/ContactUs'
import MessagePopup from '../../components/commonComponent/MessagePopup'
import InputBox from '../../components/commonComponent/InputBox'
export default {
  components: {
    ContentImg,
    ContactUs,
    MessagePopup,
    InputBox
  },
  data () {
    return {
      contactStatus: false,
      messageType: false,
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
      ],
      process: [
        '与我们签约',
        '采集相关资料',
        '材料递交银行',
        '银行身份确认',
        '银行开户',
        '激活账号',
        '后续服务'
      ]
    }
  },
  methods: {
    changeContact () {
      this.contactStatus = !this.contactStatus
    },
    success () {
      this.contactStatus = false
      this.messageType = true
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

.bank-service {
  padding: 80px 0;
  background: #F7F7F7;
  text-align: center;
  p {
    width: 100%;
    max-width: 1000px;
    margin: 30px auto 0;
    padding: 0 20px;
    font-size: 18px;
    line-height: 28px;
  }
  @media(max-width: 787px) {
    padding: 40px 0;
    p {
      padding: 0 10px;
      font-size: 16px;
      line-height: 26px;
    }
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
  @media (max-width: 767px) {
    h5 {
      padding: 20px 10px 40px;
      font-size: 14px;
    }
    .item {
      width: 49%;
      margin-right: 2% !important;
      &:nth-child(even) {
        margin-right: 0 !important;
      }
      p {
        padding: 10px;
        font-size: 12px;
        line-height: 22px;;
      }
    }
  }
}

.bank-recommend {
  background: #f7f7f7;
  text-align: center;
  padding: 50px;
  ul {
    padding: 30px 0 50px;
    li {
      width: 19%;
      margin: 0 1.25% 30px 0;
      &:nth-child(5n+0) {
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
  @media (max-width: 767px) {
    padding: 20px 10px;
    ul {
      padding: 20px 0 30px;
      li {
        width: 49%;
        margin: 0 0 1px 0 !important;
        &:nth-child(even) {
          float: right;
        }
      }
    }
    p {
      padding: 0 5px;
      line-height: 24px;
    }
  }
}

.bank-process {
  p {
    width: 220px;
    margin: 20px auto 0;
    line-height: 38px;
    text-align: center;
    color: #fff;
    background: #447375;
    opacity: 1;
    border-radius: 90px;
  }
  ul {
    display: flex;
    justify-content: space-around;
    padding-top: 35px;
    li {
      position: relative;
      color: #447375;
      &:last-child {
        &:after {
          display: none;
        }
      }
      &:after {
        content: '';
        position: absolute;
        width: 40px;
        top: 23px;
        right: -60px;
        height: 18px;
        background: url('../../assets/images/bank/bank-arrow-right.png') no-repeat;
        background-size: 100%;
      }
      span {
        display: block;
        width: 60px;
        height: 60px;
        margin: 0 auto 20px;
        text-align: center;
        line-height: 58px;
        border: 2px solid #D9E5E6;
        font-size: 18px;
        background: #EDF4F3;
        border-radius: 100%;
      }
    }
  }
  @media (max-width: 767px) {
    .sc {
      overflow: auto;
      padding-bottom: 20px;
      ul {
        width: 700px;
        padding-top: 20px;
        li {
          &:after {
            content: '';
            top: 16px;
            right: -38px;
          }
          span {
            width: 50px;
            height: 50px;
            line-height: 48px;
            margin-bottom: 10px;
            font-size: 16px;
          }
        }
      }
    }
  }
}

.bank-account {
  padding: 50px 0;
  background: #447375;
  ul {
    float: left;
    width: 32.6%;
    margin-left: 1%;
    &:first-child {
      margin-left: 0;
      li {
        font-size: 18px; 
      }
    }
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 60px;
      padding: 0 10px;
      background: #fff;
      margin-bottom: 10px;
      &:first-child {
        height: 80px;
        font-size: 18px;
      }
      &:nth-child(even) {
        background: #F7F5EF;
      }
      &:nth-child(2) {
        height: 114px;
      }
      &:last-child {
        height: 114px;
      }
    }
  }
  @media (max-width: 767px) {
    padding: 30px 0;
    ul {
      li {
        padding: 0 5px;
        font-size: 12px;
        &:first-child {
          font-size: 14px;
        }
      }
      &:first-child {
        li {
          font-size: 14px; 
        }
      }
    }
  }
}
.select-we {
  line-height: 28px;
  text-align: center;
  ul {
    padding-top: 50px;
    li {
      float: left;
      width: 23%;
      margin-right: 2.666%;
      background: #F7F7F7;
      img {
        display: block;
        width: 100%;
      }
      i {
        display: block;
        height: 123x;
        padding: 20px 30px;
        font-size: 14px;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 767px) {
    line-height: 24px;
    ul {
      padding-top: 30px;
      li {
        width: 100%;
        margin: 0 0 20px 0;
        i {
          padding: 30px;
        }
      }
    }
  }
}

.handle {
  padding: 80px 0;
  text-align: center;
  background: url('../../assets/images/handle-bg.jpg') no-repeat top center;
  h3 {
    font-size: 30px;
    color: #FFE19A;
  }
  p {
    padding: 20px 0 50px;
    font-size: 20px;
    color: #fff;
  }
  a {
    display: block;
    width: 189px;
    height: 60px;
    margin: auto;
    font-size: 18px;
    line-height: 58px;
    color: #FFE19A;
    border: 1px solid #FAE2A3;
    border-radius: 90px;
  }
  @media (max-width: 767px) {
    padding: 50px 20px;
    h3 {
      font-size: 26px;
    }
    p {
      padding: 15px 0 40px;
      line-height: 28px;
      font-size: 18px;
    }
  }
}

.about-contact {
  position: fixed !important;
  top: 0;
  left: 0;
  z-index: 9099;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  .content {
    position: absolute;
    width: 480px;
    height: 600px;
    top: 50%;
    left: 50%;
    margin: -300px 0 0 -240px;
    padding: 0 70px;
    background: #fff url('../../assets/images/contact-bg.png') no-repeat top center;
    background-size: 100%;
    border-radius: 10px;
    text-align: center;
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 15px;
      height: 15px;
      opacity: 0.7;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
      img {
        display: block;
        width: 100%;
      }
    }
    h3 {
      display: block;
      font-size: 24px;
      color: #fff;
      margin: 50px 0 25px;
    }
    p {
      margin-bottom: 60px;
      color: #fff;
      font-size: 20px;
      line-height: 34px;
    }
    @media (max-width: 767px) {
      width: 90%;
      left: 5%;
      height: 470px;
      margin: -235px 0 0;
      padding: 0 10px;
      h3 {
        font-size: 20px;
        margin: 30px 0 15px;
      }
      p {
        font-size: 16px;
        margin-bottom: 30px;
      }
    }
  }
}
</style>