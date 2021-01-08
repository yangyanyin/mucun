<template>
  <div class="detail">
    <ProjectBanner name="antigua" />
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
          <Advantage :advantage="advantage" />

          <!-- 项目入籍方案 -->
          <Program :program="program" title="项目入籍方案：（三选一）" />

          <!-- 如何获得护照 -->
          <Obtain :obtain="obtain" titleName="如何获得安提瓜巴布达护照" />

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
        '神秘岛国安提瓜位于北美东加勒比海南部，这里碧海蓝天阳光明媚是很多北美、欧洲人们的避寒优选度假胜地。',
        '2013年3月，由安提瓜和巴布达政府提出草案、在全国征求意见后，由安提瓜和巴布达议会正式批准了新的移民法案之《2013安提瓜和巴布达投资入籍法》。入籍法第六章规定，政府可以通过设立“投资入籍（CIP）”来吸引外国高素质投资者为本国带来巨大直接投资、发展本国经济，这些投资者继而获得申请成为本国公民机会。',
        '安提瓜和巴布达投资移民主要有基金捐款和购买房地产两种方式，其中捐款一家四口移民10万美元起，是目前全家办理门槛最低的项目，同时安提瓜护照全球排名第30，共有150个免签国家与地区。'
      ],
      advantage: [
        {
          title: '入籍性价比高',
          des: '个人向安提瓜国家发展基金或慈善基金捐款不低于10万美元；房产投资不低于40万美元',
          icon: require('../../assets/images/passport/Antigua-icon1.jpg')
        },
        {
          title: '通行便利',
          des: '免签全球150个国家或地区，包括英国、欧盟申根国、新加坡、韩国、马来西亚、印尼和香港',
          icon: require('../../assets/images/passport/Antigua-icon2.jpg')
        },
        {
          title: '海外资产保护伞',
          des: '无全球征税、海外资产收益税、各种资本得利税，让高净值人群资产隐形',
          icon: require('../../assets/images/passport/Antigua-icon3.jpg')
        },
        {
          title: '离岸公司、海外上市',
          des: '安提瓜可以为准备上市的企业提供全球最方便最宽松的环境',
          icon: require('../../assets/images/passport/Antigua-icon4.jpg')
        },
        {
          title: '宜居环境',
          des: '年平均气温26摄氏度，无敌海岸线风景是度假、退休养老的最佳地',
          icon: require('../../assets/images/passport/Antigua-icon5.jpg')
        },
        {
          title: '四代移民',
          des: '终身公民权 <br /> 全家身份世代延续',
          icon: require('../../assets/images/passport/Antigua-icon6.jpg')
        },
        {
          title: '申请门槛低',
          des: '首次获得护照5年，此后可延续护照为10年。在延续护照前需要在护照有效期内居住至少5天',
          icon: require('../../assets/images/passport/Antigua-icon7.jpg')
        },
        {
          title: '国家宪法安全可靠',
          des: ' 安提瓜投资入籍法案在2013年2月颁布并于同年10月14日正式实施，即《2013安提瓜和巴布达投资入籍法》',
          icon: require('../../assets/images/passport/Antigua-icon8.jpg')
        }
      ],
      program: [
        {
          title: '政府基金捐款',
          item: {
            '单人申请': ['要求捐款：$100,000 美金'],
            '夫妻申请': ['要求捐款：$100,000 美金'],
            '一家四口申请': ['要求捐款：$100,000 美金']
          }
        },
        {
          title: '房地产投资', 
          item: {
            '单人申请': ['要求投资：$200,000 美金'],
            '夫妻申请': ['要求投资：$200,000 美金'],
            '一家四口申请': ['要求投资：$200,000 美金']
          }
        },
        {
          title: '商业投资', 
          item: {
            '单人申请': ['要求投资：$1,500,000 美金'],
            '夫妻申请': ['要求投资：$1,500,000 美金'],
            '一家四口申请': ['要求投资：$1,500,000 美金']
          }
        }
      ],
      obtain: {
        '1.申请人年满18岁': '',
        '2.身体健康，无犯罪记录': '',
        '3.满足立法投资要求': '',
        '4.提供真实准确的资料文件': '',
        '5.可随行成员包括': [
          '1）配偶',
          '2）主申请人或配偶的0-30岁经济依赖主申请人的子女',
          '3）主申请人或配偶的18周岁或以上的身体与精神有缺陷，经济依赖主申请人的子女',
          '4) 主申请人或配偶的55岁以上的父母或祖父母',
          '5）主申请人或配偶的未婚兄弟姐妹'
        ]
      },
      application: [
        '评估签约',
        '确定申请人数，投资方案',
        '准备申请材料，填写、签署申请表格',
        '进入背景调查',
        '移民局对申请作出批复，签发原则性通过信函',
        '支付投资款项，获得护照和公民证书'
      ],
      score: {
        icon: 'https://cms.aicassets.com/images/default/5e7d8efad383b.png',
        ranking: 29,
        free: 151,
        stars: 5
      },
      mapInfo: {
        icon: require('../../assets/images/passport/Antigua-map.png'),
        title: '安提瓜和巴布达地理位置与基本信息',
        info: {
          首都: '圣约翰 St. John’s',
          官方语言: '英语',
          货币: '东加勒比元',
          兑换率: '1 XCD = 2.53 CNY',
          时区: 'GMT-4',
          人口: '10.3 万',
          人均GDP: '16,726.98 USD ‎(2018 年)',
          国土面积: '‎442.6平方公里',
          居住要求: '无',
          移民周期: '4-6个月',
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