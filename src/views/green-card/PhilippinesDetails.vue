<template>
  <div class="philippines">
    <div class="banner">
        <img src="../../assets/images/philippines-d-bn.jpg" />
    </div>
      <div class="pc-max-width details margin-t-80 animation-show">
        <h3>菲律宾绿卡项目</h3>
        <p>菲律宾永久居住的申请门槛相对较低，旨在吸引外国人士在菲律宾退休养老定居，让菲律宾外汇存储量迅速增加。截止到2013年3月，已经为菲律宾带来8千万美元以上的外汇存款。根据菲律宾退休署的最新报告，2011年移民菲律宾的人数增长42%，2012年该幅度高达62%。共接纳外国退休移民2.13万人。</p>
        <p>菲律宾的SRRV身份实际上相当于永居PR(Permanent Residence)，持有SRRV可以享受和当地人一样的医疗、教育、保险等权利，在菲律宾自由出入、受教育、工作和居住，没有任何移民监和其他要求。</p>
      </div>

      <Advantage :advantage="advantage"></Advantage>

      <div class="pc-max-width condition margin-t-80 animation-show">
        <h3>怎样申请菲律宾绿卡</h3>
        <p>菲律宾的SRRV也叫“退休移民”大体分为两种：传统计划(SRRV Classic)和微笑计划(SRRV Smile)。</p>
        <div class="btn">
          <a :class="{on:planType === 1}" @click="switchPlan(1)">传统计划 SRRV Classic</a>
          <a :class="{on:planType === 2}" @click="switchPlan(2)">微笑计划 SRRV Smile</a>
        </div>
      </div>
      <div class="plan clearfix animation-show pc-max-width">
        <img class="left" src="../../assets/images/plan-img.jpg" />
        <div class="des left">
          <h3>对申请人的要求</h3>
          <template v-if="planType === 1">
            <p><i>◆</i> 年龄在35至49岁的申请人，将5万美元存入菲律宾退休署指定的银行中。 </p> 
            <p><i>◆</i> 50岁以上的，将2万美金存入菲律宾退休署指定的银行中。</p> 
          </template>
          <template v-if="planType === 2">
            <p><i>◆</i> 申请人的年龄要在35岁以上，并将2万美元存入菲律宾发展银行，存款不可取，一旦取出将会被取消SRRV身份。</p> 
            <p><i>◆</i> 申请周期为6-8个月。</p> 
          </template>
        </div>
      </div>
      
      <ProjectProcess :projectProcess="projectProcess"></ProjectProcess>


    <!-- 联系我们 -->
    <ContactUs />
  </div>
</template>

<script>
import { animation, windowScroll } from "../../assets/js/config.js";
import ContactUs from "../../components/commonComponent/ContactUs";
import ProjectProcess from '../canada/base/ProjectProcess'
import Advantage from '../canada/base/Advantage'

export default {
  components: {
    ContactUs,
    ProjectProcess,
    Advantage
  },
  data () {
    return {
      planType: 1,
      advantage: {
        title: '菲律宾绿卡的优势',
        line_number: 4,
        list: [
          {
            icon: require('../../assets/images/philippines/philippines-img1.png'),
            title: '东南亚新兴市场',
            text: '作为东盟（ASEAN）与亚太经合组织（APEC）成员国之一，菲律宾是东南亚第四大规模的新兴工业国家，并且是世界的新兴市场之一。其经济发展迅猛，市场发展潜力较大'
          },
          {
            icon: require('../../assets/images/philippines/philippines-img2.png'),
            title: '投资门槛低方便快捷',
            text: '最低投资额仅需存款2万美金，无学历要求、无经商管理要求、无居住要求'
          },
          {
            icon: require('../../assets/images/philippines/philippines-img3.png'),
            title: '快速拿身份',
            text: '从准备材料、递交申请到拿到身份只需6-8周。无需排期、抽查、补充材料，一步到位拿身份'
          },
          {
            icon: require('../../assets/images/philippines/philippines-img4.png'),
            title: '性价比高 无移民监',
            text: '自由出入菲律宾，可在当地工作、经商、生活、学习等活动，英语环境，美式教育体系，无需办理学生签证'
          }
        ]
      },
      projectProcess: [
        '收集申请人材料',
        '在菲律宾以外国家汇款到菲律宾退休移民局(PRA)指定账户',
        'PRA收到银行国外汇入款证明',
        '申请人前往菲律宾递交材料',
        '移民申请获得菲律宾移民总局批准，到投资署宣誓，并领取相关移民文件'
      ]
    }
  },
  methods: {
    switchPlan (index) {
      this.planType = index
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
  h3 {
    text-align: center;
    font-size: 30px;
  }
  p {
    display: block;
    font-size: 16px;
    margin: 20px 0 40px;
    line-height: 30px;
  }
  @media (max-width: 767px) {
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 14px;
      line-height: 24px;
      margin: 10px 0 20px;

    }
  }
}
.condition {
  h3 {
    position: relative;
    text-align: center;
    font-size: 30px;
    padding-bottom: 15px;
    color: #447375;
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 90px;
      height: 4px;
      background: #447375;
    }
  }
  p {
    margin: 20px 0 30px;
    text-align: center;
    font-size: 16px;
    color: #447375;
  }
  .btn {
    text-align: center;
    a {
      display: inline-block;
      width: 240px;
      height: 50px;
      margin: 0 10px;
      line-height: 50px;
      border-radius: 50px;
      color: #447375;
      border: 1px solid #447375;
      background: #fff;
      cursor: pointer;
      font-size: 16px;
      &.on {
        color: #fff;
        background: #447375;
      }
    }
  }
  @media (max-width: 767px) {
    h3 {
      font-size: 24px;
    }
    p {
      margin: 10px 0 15px;
      font-size: 14px;
    }
    .btn {
      a {
        width: 165px;
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        margin: 0 5px;
        border-radius: 36px;
      }
    }
  }
}

.plan {
  margin-top: 40px;
  background: #447375;
  img {
    width: 450px;
  }
  
  .des {
    position: relative;
    width: 550px;
    padding: 0 50px;
    margin: 130px 0 0 150px;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      height: 160px;
      width: 5px;
      background: #8da9ab;
    }
    h3 {
      font-size: 26px;
      color: #fff;
      padding-bottom: 10px;
    }
    p {
      position: relative;
      color: #fff;
      padding-left: 17px;
      font-size: 16px;
      line-height: 26px;
      margin-top: 25px;
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
      width: 400px;
    }
    .des {
      margin: 70px 0 0 120px;
      width: 450px;
    }
  }
  @media (max-width: 767px) {
    padding: 0 20px 20px 0;
    img {
      display: none;
    }
    .des {
      width: 100%;
      height: auto;
      margin: 20px 0 0 20px;
      padding: 0 20px;
      h3 {
        font-size: 20px;
      }
      p {
        font-size: 14px;
        margin-top: 15px;
      }
    }
  }
}
</style>

<style lang="less">
.philippines .canada-title {
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

.philippines {
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