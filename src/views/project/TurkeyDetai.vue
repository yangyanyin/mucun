<template>
  <div class="detail">
    <ProjectBanner name="turkey" />
    <div class="pc-max-width">
      <div class="content clearfix">
        <div class="right">
          <!-- 评分 -->
          <Score :score="score" />

          <!-- 地图信息 -->
          <MapInfo :mapInfo="mapInfo" />
          
          <!-- 下载手册 -->
          <DownloadManual countryName="圣卢西亚 <br /> Saint Lucia" />
        </div>  
        <div class="left" id="project-left-content">
          <!-- 项目简介 -->
          <Introduction :introduction="introduction" />

          <!-- 项目优势 -->
          <AdvantageMode2 :advantage="advantage" />

          <!-- 项目入籍方案 -->
          <ProgramMode2 :program="program" title="项目入籍方案（三选一）" />

          <!-- 如何获得护照 -->
          <Obtain :obtain="obtain" titleName="如何获得土耳其护照" />

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
import AdvantageMode2 from './base/AdvantageMode2.vue'
import ProgramMode2 from './base/ProgramMode2.vue'
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
    AdvantageMode2,
    ProgramMode2,
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
        '土耳其是一个横跨欧亚大陆的海峡国家，三面环海的地势和内陆复杂的地理环境，让土耳其拥有极为有利的战略性地位和丰富的自然资源。同时土耳其也是最早支持“一带一路”的国家，与中国有着频繁的贸易、投资交流。',
        '土耳其凭借稳定的政治环境以及年轻的劳动力优势，国家发展迅速，2002年-2017年间实现了5.8%的年平均GDP增长率，2017年GDP总量8511亿美元，排名世界17位，欧洲第7位，成为全球增长最快的经济体之一，在国际享有“新钻国家”的美誉，也是欧盟备选国之一。',
        '2017年5月，土耳其政府为加大外国人在本国投资力度推出了“投资入籍”计划，投资者不需要居住在本国就可以获得土耳其国籍；2018年9月土耳其政府降低了投资门槛，投资金额由100万美元降至25万美元，即可一步到位实现全家移民土耳其，并可以借此身份快速登陆英美，目前已经成为全球最具吸引力的投资入籍项目。'
      ],
      advantage: [
        {
          // title: '入籍性价比高',
          des: '土耳其是最具前景的房地产市场，近年来保持持续增长，2017年同比价格增长率11.1%，增值潜力巨大；投资时间短，房产3年后可以出售不影响身份，租金收益高，回报率稳定。',
          icon: require('../../assets/images/passport/Turkey-icon1.jpg')
        },
        {
          // title: '通行便利',
          des: '土耳其是G20（20国集团）唯一开放投资入籍的国家，无需通过居住一步到位获得G20国家的护照，全球免签和落地签超过110个国家或地区。',
          icon: require('../../assets/images/passport/Turkey-icon2.jpg')
        },
        {
          // title: '海外资产保护伞',
          des: '土耳其从1999年起成为欧盟备选国，目标在2023年建国百年之际加入欧盟，已经获得许多欧盟国家的积极响应。',
          icon: require('../../assets/images/passport/Turkey-icon3.jpg')
        },
        {
          // title: '离岸公司、海外上市',
          des: '目前多数欧盟国家收紧移民政策，土耳其投资入籍计划将会成为备受欢迎的项目，加入欧盟后土耳其护照将升级。',
          icon: require('../../assets/images/passport/Turkey-icon4.jpg')
        },
        {
          // title: '宜居环境',
          des: '土耳其是唯一投资入籍国家中可以同时申请美国E1、E2签证的国家。土耳其护照持有者每年获得500-600张E2签证，是获得该类别签证最多国家之一。持E2签证可以自由进出美国、居住、经营生意等。',
          icon: require('../../assets/images/passport/Turkey-icon5.jpg')
        },
        {
          // title: '四代移民',
          des: '土耳其有着优质完善的医疗卫生系统，各个城市都有健全的医院、诊所和急救措施。医疗保险覆盖大部分城镇。持有土耳其护照可以享受医疗险，在公立医院享受几乎免费的先进医疗。',
          icon: require('../../assets/images/passport/Turkey-icon6.jpg')
        },
        {
          // title: '申请门槛低',
          des: '土耳其以地中海气候和大陆性气候为主，独特的地理位置，宜人的环境使土耳其成为全球游客向往的国家，丰富的历史文明和古迹让土耳其享有“旅游天堂”的美誉。',
          icon: require('../../assets/images/passport/Turkey-icon7.jpg')
        },
        {
          // title: '国家宪法安全可靠',
          des: ' 土耳其视教育为立国之本，是一个极其重视教育发展的国家。土耳其的教育系统是东西方的完美融合，贯穿传统与现代，很多教育理念来自西方，而课程内容则更符合现代，并且公立学校免学费。',
          icon: require('../../assets/images/passport/Turkey-icon8.jpg')
        }
      ],
      program: [
        '1.房地产投资: $250,000美金',
        '2.银行存款：$ 500,000美金',
        '3.政府债券投资: $500,000美金'
      ],
      obtain: {
        '1.申请人年满18岁': '',
        '2.购买不低于25万美金土耳其房产(3年后可出售)': '',
        '3.无犯罪记录证明': '',
        '4.可随行成员包括': [
          '1）配偶',
          '2）18岁以下子女'
        ]
      },
      application: [
        '评估确定项目 <br /> 签约',
        '申请签证入境',
        '房源考察、购房、开户',
        '签订购房协议，支付首付款',
        '房产注册',
        '移民律师楼递交移民申请',
        '获得护照，入籍土耳其'
      ],
      score: {
        icon: 'https://cms.aicassets.com/images/default/5e8ed46f3c25e.png',
        ranking: 51,
        free: 111,
        stars: 7
      },
      mapInfo: {
        icon: require('../../assets/images/passport/Turkey-map.png'),
        title: '土耳其地理位置与基本信息',
        info: {
          首都: '安卡拉 Ankara',
          官方语言: '土耳其语',
          货币: '土耳其里拉',
          兑换率: '1 TRY = 0.84 CNY',
          时区: 'GMT+4',
          人口: '8200 万',
          人均GDP: '9,370.18 美元 (2018 年)',
          国土面积: '‎‎783,562 平方公里',
          居住要求: '无',
          移民周期: '90天',
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