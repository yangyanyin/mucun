<template>
  <div class="detail">
    <ProjectBanner name="grenada" />
    <div class="pc-max-width">
      <div class="content clearfix">
        <div class="right">
          <!-- 评分 -->
          <Score :score="score" />

          <!-- 地图信息 -->
          <MapInfo :mapInfo="mapInfo" />

          <!-- 下载手册 -->
          <DownloadManual countryName="格林纳达 <br /> Grenada" />
        </div>  
        <div class="left" id="project-left-content">
          <!-- 项目简介 -->
          <Introduction :introduction="introduction" />

          <!-- 项目优势 -->
          <Advantage :advantage="advantage" />

          <!-- 项目入籍方案 -->
          <Program :program="program" title="项目入籍方案：（二选一）" />

          <!-- 如何获得护照 -->
          <Obtain :obtain="obtain" titleName="如何获得格林纳达护照" />

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
        '格林纳达位于东加勒比海向风群岛的最南端，由三座岛屿组成；农业与旅游业是该国的经济基础，主要农产品肉豆蔻产量约占世界总产量的三分之一，仅次于印尼位居全球第二。',
        '格林纳达政府为了推动该国经济、开发天然资源等，在2013年8月29日推出《格林纳达投资入籍法案》，获批在格林纳达的投资者以及家属可以获得永居权和公民权。此法案通过格林纳达参众两院讨论，由英国女王批准。',
        '格林纳达作为美国的双边贸易成员国，是全球为数不多的可以申请E2签证，同时又可以直接入籍的国家之一。持有格林纳达护照可以直接申请美国E2签证，全家享受美国绿卡同等待遇，随行配偶、子女可以在美国合法工作、学习、定居，无全球征税、无排期、无名额限制，达到跳板美国的目的。'
      ],
      advantage: [
        {
          title: 'E2协约国',
          des: '可以申请美国E2签证 <br /> 全家定居美国',
          icon: require('../../assets/images/passport/Grenada-icon1.jpg')
        },
        {
          title: '全球畅行',
          des: '免签全球140多个国家或地区，包括中国，英国，新加坡，香港及欧盟申根国家',
          icon: require('../../assets/images/passport/Grenada-icon2.jpg')
        },
        {
          title: '性价比高',
          des: '仅需投资15万美元起 <br /> 即可拿公民身份',
          icon: require('../../assets/images/passport/Grenada-icon3.jpg')
        },
        {
          title: '四代移民',
          des: '终身公民权， <br /> 全家身份世代延续',
          icon: require('../../assets/images/passport/Grenada-icon4.jpg')
        },
        {
          title: '入籍时间短',
          des: '60个工作日即可获批，先审批，后投资，无全球征税',
          icon: require('../../assets/images/passport/Grenada-icon5.jpg')
        },
        {
          title: '宜居环境',
          des: ' 富豪度假首选，四季宜人，房产拥有永久产权， 欧盟身份世代相传',
          icon: require('../../assets/images/passport/Grenada-icon6.jpg')
        },
        {
          title: '身份，房产不捆绑',
          des: '房产5年之后可出售 <br /> 不影响身份',
          icon: require('../../assets/images/passport/Grenada-icon7.jpg')
        },
        {
          title: '申请门槛低',
          des: '无移民监、无语言要求 无资金来源等要求',
          icon: require('../../assets/images/passport/Grenada-icon8.jpg')
        }
      ],
      program: [
        {
          title: '捐款至国家转型基金NTF',
          item: {
            '单人申请': ['捐款：$150,000'],
            '夫妻申请': ['捐款：$200,000'],
            '一家四口申请(2大人2子女)': ['捐款：$200,000']
          }
        },
        {
          title: '投资房地产', 
          item: {
            '单人申请': ['购房：$220,000'],
            '夫妻申请': ['购房：$220,000'],
            '一家四口申请(2大人2子女)': ['购房：$220,000']
          }
        }
      ],
      obtain: {
        '1.申请人18岁以上': '',
        '2.无犯罪记录证明': '',
        '3.身体健康证明': '',
        '4.满足政府指定投资项目': '',
        '5.可随行成员包括': [
          '1）配偶以及18岁以下子女',
          '2）未婚且经济依赖主申请人的18到30周岁的子女',
          '3）主申请人或配偶的父母或祖父母',
          '4) 年龄超过18周岁未婚、无子女的主申请人或配偶的兄弟姐妹'
        ]
      },
      application: [
        '评估与签约，准备初期申请材料',
        '收到政府签收函进行背景调查',
        '获得原则性批复函',
        '完成投资',
        '递交宣誓材料到移民局',
        '签发护照和公民证书'
      ],
      score: {
        icon: 'https://cms.aicassets.com/images/default/5cde1f6790489.png',
        ranking: 33,
        free: 144,
        stars: 5
      },
      mapInfo: {
        icon: require('../../assets/images/passport/Grenada-map.png'),
        title: '格林纳达地理位置与基本信息',
        info: {
          首都: '圣乔治St. Geroge’s',
          官方语言: '英语',
          货币: '东加勒比元',
          兑换率: '1 XCD = 2.53 CNY',
          时区: 'GMT-4',
          人口: '11.2 万',
          人均GDP: '10,640.50 美元 ‎(2018 年)',
          国土面积: '344平方公里',
          居住要求: '无',
          移民周期: '2个月',
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