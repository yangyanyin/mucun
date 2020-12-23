<template>
  <div class="detail">
    <ProjectBanner name="saintLucia" />
    <div class="pc-max-width">
      <div class="content clearfix">
        <div class="left">
          <!-- 项目简介 -->
          <Introduction :introduction="introduction" />

          <!-- 项目优势 -->
          <Advantage :advantage="advantage" />

          <!-- 项目入籍方案 -->
          <Program :program="program" title="项目入籍方案：（二选一）" />

          <!-- 如何获得护照 -->
          <Obtain :obtain="obtain" titleName="如何获得圣卢西亚护照"/>

          <!-- 申请流程 -->
          <Application :application="application" />
          
        </div>
        <div class="right">
          <!-- 评分 -->
          <Score :score="score" />

          <!-- 地图信息 -->
          <MapInfo :mapInfo="mapInfo" />
          
          <!-- 下载手册 -->
          <DownloadManual countryName="圣卢西亚 <br /> Saint Lucia" />
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
        '圣卢西亚是一个位于美洲的火山岛，也是小安地列斯群岛的一部分，全国多火山、短小河流和河谷，素有“北美后花园”的美誉。圣卢西亚拥有“加勒比海最美丽的港湾”马瑞高海湾，这里因宜人的景色而多次列为世界度假海岛榜单。',
        '2015年该国政府批准了新的移民法案《圣卢西亚投资入籍法》，根据2017年修正案：申请人捐款10万美元起即可一家三代获得圣卢西亚身份。这一法案的通过和执行，使得圣卢西亚成为全球投资移民项目中费用较低的移民国家之一。',
        '2020年5月12日–圣卢西亚总理宣布了一项新的投资选择，致力于通过投资计划促进圣卢西亚护照移民，国债投资直接减半。'
      ],
      advantage: [
        {
          title: '国家立法项目',
          des: '明确的法律支持，通过国家立法项目，护照真实合法',
          icon: require('../../assets/images/passport/saint-lucia-icon1.jpg')
        },
        {
          title: '投资金额低',
          des: '投资金额低，仅需10万美元起一步到位拿护照',
          icon: require('../../assets/images/passport/saint-lucia-icon2.jpg')
        },
        {
          title: '没有移民监，无需登陆',
          des: '从申请到拿护照，申请人无需登录，无居住条件',
          icon: require('../../assets/images/passport/saint-lucia-icon3.jpg')
        },
        {
          title: '身份便利',
          des: '英联邦国家公民身份 <br /> 承认双重国籍',
          icon: require('../../assets/images/passport/saint-lucia-icon4.jpg')
        },
        {
          title: '避税天堂',
          des: '无全球征税 <br /> 海外资产配置',
          icon: require('../../assets/images/passport/saint-lucia-icon5.jpg')
        },
        {
          title: '移民门槛低',
          des: ' 无资产来源要求，无纳税要求，无居住要求，无语言要求 欧盟身份世代相传',
          icon: require('../../assets/images/passport/saint-lucia-icon6.jpg')
        },
        {
          title: '通行便利',
          des: '免签全球130个国家或地区，包括英国、新加坡、香港及欧盟申根国家',
          icon: require('../../assets/images/passport/saint-lucia-icon7.jpg')
        },
        {
          title: '投资简单',
          des: '先审批，后投资',
          icon: require('../../assets/images/passport/saint-lucia-icon8.jpg')
        }
      ],
      program: [
        {
          title: '国家经济捐款',
          item: {
            '单人申请': ['捐款$100,000'],
            '夫妻申请': ['捐款$140,000'],
            '一家四口申请(2大人2子女)': ['捐款$150,000']
          }
        },
        {
          title: '投资政府债券', 
          item: {
            '单人申请': ['国债持有5年：$250,000'],
            '夫妻申请': ['国债持有6年：$250,000', '国债持有5年：$300,000'],
            '一家四口申请(2大人2子女)': ['国债持有7年：$250,000', '国债持有5年：$300,000']
          }
        }
      ],
      obtain: {
        '1.申请人年满18岁以或以上': '',
        '2.无犯罪记录': '',
        '3.具备投资能力': '',
        '4.身体健康': '',
        '5.可随行成员包括': [
          '1）主申请人配偶及21岁以下的子女',
          '2）30周岁以下未婚、全日制在读且经济完全依赖主申请人的子女',
          '3）主申请人或配偶55周岁以上父母',
          '4) 主申请人或配偶的有身体与精神缺陷的子女',
          '5）主申请人或配偶 的有身体与精神缺陷的父母',
          '6）主申请人未满18岁的弟、妹'
        ]
      },
      application: [
        '确定项目、签约',
        '有移民律师楼递交材料',
        '移民局进行背景调查',
        '获得移民局原则性批复函',
        '完成项目投资',
        '领取护照和公民证书'
      ],
      score: {
        icon: 'https://cms.aicassets.com/images/default/5cde1f4771698.png',
        ranking: 40,
        free: 130,
        stars: 4
      },
      mapInfo: {
        icon: require('../../assets/images/passport/saint-lucia-map.png'),
        title: '圣卢西亚地理位置与基本信息',
        info: {
          首都: '卡斯特里 Castries',
          官方语言: '英语',
          货币: '东加勒比元',
          兑换率: '1 XCD = 2.53 CNY',
          时区: 'GMT-4',
          人口: '17.8万',
          人均GDP: '10,566.05 美元 (2018 年)',
          国土面积: '‎616平方公里',
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
}
</style>