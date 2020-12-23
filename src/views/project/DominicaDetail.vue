<template>
  <div class="detail">
    <ProjectBanner name="dominica" />
    <div class="pc-max-width">
      <div class="content clearfix">
        <div class="left">
          <!-- 项目简介 -->
          <Introduction :introduction="introduction" />

          <!-- 项目优势 -->
          <Advantage :advantage="advantage" />

          <!-- 项目入籍方案 -->
          <Program :program="program" title="项目入籍方案：捐献入籍计划（二选一）" />

          <!-- 如何获得护照 -->
          <Obtain :obtain="obtain" titleName="如何获得多米尼克护照" />

          <!-- 申请流程 -->
          <Application :application="application" />
          
        </div>
        <div class="right">
          <!-- 评分 -->
          <Score :score="score" />

          <!-- 地图信息 -->
          <MapInfo :mapInfo="mapInfo" />

          <!-- 下载手册 -->
          <DownloadManual countryName="多米尼克 <br /> Dominica" />
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
        '多米尼克位于东加勒比海，素有“加勒比之星”的美誉，热带海洋气候和美丽的海岸线成为全球度假胜地。因此旅游业成为多米尼克经济发展的支柱产业，政府也将大量财政收入投资到旅游业中，并期待外国投资者来投资他们的旅游业。',
        '多米尼克投资移民项目自1993年以来开始实施，项目有多米尼克公民身份投资局（CBIU）管理，并通过立法给予保障。多米尼克向外界传递出开放的态度，近两年来批复了8000例投资入籍申请，是全球申请人数、使用人数较多的第二身份护照。根据英国《金融时报》2019年8月的报告显示，2019年多米尼克在全球投资移民项目排名第一，而且这已经是该国第三次蝉联榜首。'
      ],
      advantage: [
        {
          title: '避税圣地',
          des: '无财产税、赠与税、遗产税、海外收益税或资本收益税',
          icon: require('../../assets/images/passport/Dominica-icon1.jpg')
        },
        {
          title: '获得护照极快',
          des: '最快2个月即可入籍，便于公司上市，税务规划、规避CRS',
          icon: require('../../assets/images/passport/Dominica-icon2.jpg')
        },
        {
          title: '性价比高',
          des: '仅需投资10万美金起，即可拿公民身份',
          icon: require('../../assets/images/passport/Dominica-icon3.jpg')
        },
        {
          title: '四代移民',
          des: '终身公民权， <br /> 全家身份世代延续',
          icon: require('../../assets/images/passport/Dominica-icon4.jpg')
        },
        {
          title: '申请门槛低',
          des: '无移民监、无语言要求、无资金来源等要求',
          icon: require('../../assets/images/passport/Dominica-icon5.jpg')
        },
        {
          title: '投资风险低',
          des: ' 获得入籍原则性批复后再完成投资',
          icon: require('../../assets/images/passport/Dominica-icon6.jpg')
        },
        {
          title: '身份，房产不捆绑',
          des: '房产持有满5年后可出售',
          icon: require('../../assets/images/passport/Dominica-icon7.jpg')
        },
        {
          title: '出行便利',
          des: '可免签约139个国家或地区，包括英国、申根国、香港、新加坡等',
          icon: require('../../assets/images/passport/Dominica-icon8.jpg')
        }
      ],
      program: [
        {
          title: '捐款经济多元化基金（不可退还捐款）',
          item: {
            '单人申请': ['捐款：$100,000'],
            '夫妻申请': ['捐款：$150,000'],
            '一家四口申请(2大人2子女)': ['捐款：$200,000']
          }
        },
        {
          title: '多米尼克房地产投资', 
          item: {
            '单人申请': ['购房：$200,000'],
            '夫妻申请': ['购房：$200,000'],
            '一家四口申请(2大人2子女)': ['购房：$200,000']
          }
        }
      ],
      obtain: {
        '1.申请人18岁以上': '',
        '2.身体健康，无犯罪': '',
        '3.捐赠10万美金起': '',
        '4.可随行成员包括': [
          '1） 配偶及18周岁以下的子女',
          '2）18-30周岁经济依赖主申请人的子女',
          '3）经济依赖主申请人或配偶的父母、祖父母',
          '4）25周岁以下未婚、无子女且经济依赖主申请人或配偶的弟妹'
        ]
      },
      application: [
        '评估与签约并确定项目',
        '由移民律师楼递交申请材料',
        '多米尼克移民局对申请人进行尽职调查',
        '获得移民局原则性批复文件',
        '完成指定投资',
        '领取护照与公民证书'
      ],
      score: {
        icon: 'https://cms.aicassets.com/images/default/5cde1f5ccd217.png',
        ranking: 35,
        free: 141,
        stars: 4
      },
      mapInfo: {
        icon: require('../../assets/images/passport/Dominica-map.png'),
        title: '多米尼克地理位置与基本信息',
        info: {
          首都: '罗索 Roseau',
          官方语言: '英语',
          货币: '东加勒比元',
          兑换率: '1 XCD = 2.53 CNY',
          时区: 'GMT-4',
          人口: '7.162 万',
          人均GDP: '7,691.35 美元 (2018 年) ',
          国土面积: '751平方公里',
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
}
</style>