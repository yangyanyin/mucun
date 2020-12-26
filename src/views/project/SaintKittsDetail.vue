<template>
  <div class="detail">
    <ProjectBanner name="saintKitts" />
    <div class="pc-max-width">
      <div class="content clearfix">
        <div class="right">
          <!-- 评分 -->
          <Score :score="score" />

          <!-- 地图信息 -->
          <MapInfo :mapInfo="mapInfo" />

          <!-- 下载手册 -->
          <DownloadManual countryName="塞浦路斯 <br /> Cyprus" />
        </div>  
        <div class="left">
          <!-- 项目简介 -->
          <Introduction :introduction="introduction" />

          <!-- 项目优势 -->
          <Advantage :advantage="advantage" />

          <!-- 项目入籍方案 -->
          <Program :program="program" title="项目入籍方案" />

          <!-- 如何获得护照 -->
          <Obtain :obtain="obtain" titleName="如何获得圣基茨和尼维斯护照" />

          <!-- 申请流程 -->
          <Application :application="application" />
          
        </div>
      </div>
    </div>
    <ContentImg />
    <ContactUs />
  </div>
</template>
<script>
import ProjectBanner from './base/ProjectBanner.vue'
import Introduction from './base/Introduction.vue'
import Advantage from './base/Advantage.vue'
import Program from './base/Program.vue'
import Obtain from './base/Obtain.vue'
import Application from './base/Application.vue'
import Score from './base/Score.vue'
import MapInfo from './base/MapInfo.vue'
import DownloadManual from './base/DownloadManual.vue'
import ContactUs from '../../components/commonComponent/ContactUs'
import ContentImg from '../../components/ContentImg'
export default {
  components: {
    ProjectBanner,
    Introduction,
    Advantage,
    Program,
    Obtain,
    Application,
    ContactUs,
    ContentImg,
    Score,
    MapInfo,
    DownloadManual
  },
  data () {
    return {
      introduction: [
        '圣基茨与尼维斯（简称“圣基茨”）被誉为加勒比海上的一颗明珠，	位于东加勒比海，属于美国迈阿密东南的小安地列斯群岛的一部分。圣基茨为英联邦国家，以英语为官方语言，是一个一直沿用英国议会制的完善民主国家。按照世界银行2014年数据平价，圣基茨属于高收入发达国家，物价与消费水平与香港相近，并且拥有15000家离岸金融国际公司。',
        '圣基茨护照被称为“护照之王”是全球富人青睐的移民项目之一；圣基茨投资移民计划始于1984年，体现于《公民法案（1984）》第三条第（5）款第二部分，是全世界最早开设护照项目的国家。移民政策成熟稳定，申请条件简单，满足政府投资要求即可一步到位获得公民身份，可工作、经商，有助于海外资产配置、子女教育和税务规划等方面。',
      ],
      advantage: [
        {
          title: '全球通行证',
          des: ' 免签156国家和地区，含英国、法国、德国等申根国，以及新加坡、韩国等发达国家和地区',
          icon: require('../../assets/images/passport/SaintKitts-icon1.jpg')
        },
        {
          title: '入籍项目成熟',
          des: '历史最悠久的护照项目，政策成熟稳定',
          icon: require('../../assets/images/passport/SaintKitts-icon2.jpg')
        },
        {
          title: '申请简单快速',
          des: '无语言、学历、经商管理经验、资金来源证明等要求，承认双重国籍，可保留原国籍',
          icon: require('../../assets/images/passport/SaintKitts-icon3.jpg')
        },
        {
          title: '税务天堂',
          des: '无个人所得税、资本利得税、遗产与赠与税，非全球征税，轻松应对CRS',
          icon: require('../../assets/images/passport/SaintKitts-icon4.jpg')
        },
        {
          title: '子女教育便利',
          des: '持圣基茨护照可享受英联邦国家的多种优惠政策，以外籍身份就读国内国际学校，轻松考入名校',
          icon: require('../../assets/images/passport/SaintKitts-icon5.jpg')
        },
        {
          title: '四代移民',
          des: '终身公民权，<br /> 全家身份世代延续',
          icon: require('../../assets/images/passport/SaintKitts-icon6.jpg')
        },
        {
          title: '身份与房产不捆绑',
          des: '持圣基茨房产5年或7年后可以售出，不影响身份',
          icon: require('../../assets/images/passport/SaintKitts-icon7.jpg')
        },
        {
          title: '投资入籍收益丰厚',
          des: '可获得圣基茨公民权，东加勒比共同体自由迁徙居住权，与英联邦成员福利等',
          icon: require('../../assets/images/passport/SaintKitts-icon8.jpg')
        }
      ],
      program: [
        {
          title: '捐款可持续发展基金（SGF）',
          item: {
            '单人申请': ['捐款$150,000'],
            '夫妻申请': ['捐款$175,000'],
            '一家三口申请(2大人1子女)': ['捐款$185,000'],
            '一家四口申请(2大人2子女)': ['捐款$195,000']
          }
        },
        {
          title: '投资预经批准的房地产项目',
          item: {
            '单人申请': ['房产投资$200,000'],
            '夫妻申请': ['房产投资$200,000'],
            '一家三口申请(2大人1子女)': ['房产投资$200,000'],
            '一家四口申请(2大人2子女)': ['房产投资$200,000']
          }
        }
      ],
      obtain: {
        '1.主申请人年满18周岁': '',
        '2.无犯罪证明': '',
        '3.必须投资所要求的金额以上': '',
        '4.身体健康，无传染病': '',
        '5.随行成员可包括：': [
          '1）申请人配偶',
          '2）未成年子女',
          '3）18-30岁在读、未婚、经济依赖主申请人的子女',
          '4）年满55周岁，经济依赖于主申请人的父母以及祖父母',
          '5）满足以下条件的主申请人或其配偶的亲生或合法收养的弟妹：30周岁以下、未婚无子、经济依赖主申请人'
        ]
      },
      application: [
        '签约 <br /> 确定项目',
        '由移民律师楼递交申请材料',
        '移民局背景调查',
        '获得议会公民权 <br /> 原则性批复函',
        '完成投资',
        '领取护照 <br /> 与公民证书'
      ],
      score: {
        icon: 'https://cms.aicassets.com/images/default/5e8ed460ea158.png',
        ranking: 25,
        free: 156,
        stars: 5
      },
      mapInfo: {
        icon: require('../../assets/images/passport/SaintKitts-map.png'),
        title: '圣基茨和尼维斯地理位置与基本信息',
        info: {
          首都: '巴斯特尔 Basseterre',
          官方语言: '英语',
          货币: '东加勒比元',
          兑换率: '1 XCD = 2.53 CNY',
          时区: 'GMT-4',
          人口: '5.244 万',
          人均GDP: '19,275.42 美元 (2018 年) ',
          国土面积: '269.4 平方公里',
          居住要求: '无',
          移民周期: '3个月',
          证件类型: '护照'
        }
      }
    }
  }
}
</script>
<style scoped lang="less">
.detail {
  .content {
    background: #fafafa;
  }
  .left {
    width: 67%;
    padding: 50px 5% 50px 0;
    background: #fff;
  }
  .right {
    width: 33%;
    padding: 40px;
  }
  @media(max-width: 767px) {
    .content {
      background: #fff;
    }
    .left {
      width: auto;
      margin: 0 -10px;
      border-top: 1px solid #D9D9D9;
      padding: 20px 0 0 0;
    }
    .right {
      width: 100%;
      padding: 20px 10px;
    }
  }
}
</style>