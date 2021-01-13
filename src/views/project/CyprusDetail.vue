<template>
  <div class="detail">
    <ProjectBanner name="cyprus" />
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

        <div class="left" id="project-left-content">
          <!-- 项目简介 -->
          <Introduction :introduction="introduction" />

          <!-- 项目优势 -->
          <Advantage :advantage="advantage" />

          <!-- 项目入籍方案 -->
          <Program :program="program" title="项目入籍方案" />

          <!-- 如何获得护照 -->
          <Obtain :obtain="obtain" titleName="如何获得塞浦路斯护照	" />

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
        '塞浦路斯是一个拥有9000多年历史的浪漫岛国，坐落在地中海欧亚非三大洲的交汇处，连接着东西方文明，是爱神维纳斯的诞生地，这里也被称为“爱神之岛”。塞浦路斯是一个高度发达的国家，是欧盟成员国之一，它以悠久传奇的历史、美丽的自然风光吸引着来自世界各地的游客，有着“欧洲后花园”的美誉。',
        '根据塞浦路斯国家法案第111A节2014年3月19日第（2）节，《塞浦路斯投资者特赦入籍计划》，塞政府推出了外籍人士可通过购房入籍的计划，并随后在2016年与2019年对该法案进行修改，即投资至少200万欧元房产和为政府发展基金捐款20万欧元 ，且投资年限增加至5年，就实现一人申请三代移民，尽享欧盟公民福利。',
        '*自2020年11月1日起，塞浦路斯暂停投资入籍计划，法案的修改与重推时间待定。'
      ],
      advantage: [
        {
          title: '财富管理规划',
          des: '“万能护照”，有效实现CRS大环境下海外税务规划， 海外资产隐形',
          icon: require('../../assets/images/passport/cyprus-icon1.jpg')
        },
        {
          title: '欧盟自由通行',
          des: '可居住、工作、生活在任意欧盟国家和欧洲经济区国家',
          icon: require('../../assets/images/passport/cyprus-icon2.jpg')
        },
        {
          title: '资产配置',
          des: '自由购买欧盟国家房产，欧盟内部自由贸易',
          icon: require('../../assets/images/passport/cyprus-icon3.jpg')
        },
        {
          title: '项目省心',
          des: '一人申请，全家移民，一步到位拿护照。项目无移民监、语言及学历等要求',
          icon: require('../../assets/images/passport/cyprus-icon4.jpg')
        },
        {
          title: '优质教育',
          des: '相对较低分进入剑桥牛津等名校，国际生身份低分入读清华北大',
          icon: require('../../assets/images/passport/cyprus-icon5.jpg')
        },
        {
          title: '宜居环境',
          des: ' 富豪度假首选，四季宜人，房产拥有永久产权，欧盟身份世代相传',
          icon: require('../../assets/images/passport/cyprus-icon6.jpg')
        },
        {
          title: '优质医疗',
          des: '享有欧盟国家学生教育权利和医疗系统',
          icon: require('../../assets/images/passport/cyprus-icon7.jpg')
        },
        {
          title: '出行便利',
          des: '免签174个国家或地区，包括加拿大、英国、澳大利亚、新西兰、香港、新加坡、日本等国家',
          icon: require('../../assets/images/passport/cyprus-icon8.jpg')
        }
      ],
      program: [
        {
          title: '',
          item: {
            单人申请: ['房产：€2,000,000', '政府捐款：€200,000', '房产税5%：€100,000'],
            夫妻申请: ['房产：€2,000,000', '政府捐款：€200,000', '房产税5%：€100,000'],
            一家三口申请: ['房产：€2,000,000', '政府捐款：€200,000', '房产税5%：€100,000'],
            主申请人父母: ['增加€500,000', '政府捐款：€200,000', '增加房产税5%：€25,000']
          }
        }
      ],
      obtain: {
        '1.年满18周岁以上': '',
        '2.无犯罪记录': '',
        '3.无欧盟成员国拒绝入境限制': '',
        '4.持有有效申根签证': '',
        '5.在塞浦路斯投资购买不少于200万欧元的房产': '',
        '6.入籍获批后捐赠20万欧元至塞浦路斯政府': '',
        '7.可随行成员包括': [
          '1）配偶',
          '2）28周岁以下全日制且未婚的在读且经济依赖主申请人的子女',
          '3）主申请人以及配偶的父母'
        ]
      },
      application: [
        '评估签约',
        '准备文件申请申根签证',
        '入境考察、确定购买房产',
        '购买房产，签署律师授权的文件',
        '支付房款与房产税',
        '由移民律师楼递交文件到移民局',
        '获得移民局的原则性批复函',
        '完成捐款',
        '登陆领取护照与公民证书'
      ],
      score: {
        icon: 'https://cms.aicassets.com/images/default/5cde1f501a3b8.png',
        ranking: 15,
        free: 174,
        stars: 9
      },
      mapInfo: {
        icon: require('../../assets/images/passport/cyprus-map.png'),
        title: '塞浦路斯地理位置与基本信息',
        info: {
          首都: '尼科西亚 Nicosia',
          官方语言: '希腊语、土耳其语、英语',
          货币: '欧元',
          兑换率: '1 EUR = 8.07 CNY',
          时区: 'GMT+2',
          人口: '94.9万',
          人均GDP: '28,159.30 美元 ‎(2018 年)',
          国土面积: '9251平方公里',
          居住要求: '无',
          移民周期: '6个月',
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