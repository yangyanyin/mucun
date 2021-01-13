<template>
  <div class="detail">
    <ProjectBanner name="montenegro" />
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
          <Program :program="program" title="项目入籍方案：（二选一）" />

          <!-- 如何获得护照 -->
          <Obtain :obtain="obtain" titleName="如何获得黑山共和国护照" />

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
        '黑山共和国，位于巴尔干半岛西南部，毗邻地中海。黑山东部地区相对发达，拥有大量天然资源，其中科托尔湾中的东岸古城科托尔被列为世界遗产。近年来旅游行业相关产业在黑山迅速发展，两大滑雪中心科拉欣和杜米托尔每年吸引了众多滑雪爱好者前来。',
        '黑山共和国积极发展与欧盟的关系，得到了欧盟成员国官员的广泛支持，并列入欧盟东扩计划，进入欧盟进度提速。目前也是欧盟第一顺位候选国，此前欧盟宣布黑山将于2025年加入欧盟。所以投资黑山身份就是投资未来的欧盟身份。',
        '2018年为了创新就业机会以及提供社会经济，黑山政府通过了启动COP投资移民项目（通过黑山经济利益做出杰出贡献的投资方案而获得黑山公民身份）。根据黑山移民法官方公报34/10，40/16和62/18发布的特别决定，允许外国人以指定投资的方式，获得由黑山内政和公共行政部授予的黑山公民身份，该法案将持续三年（2019年1月1日至2021年12月31日），计划为2000名外国投资者提供公民身份。'
      ],
      advantage: [
        {
          title: '快速申请通道',
          des: '入籍审批在6个月内完成',
          icon: require('../../assets/images/passport/Montenegro-icon1.jpg')
        },
        {
          title: '准欧盟成员国',
          des: '2012年6月正式启动加入欧盟谈判，预计2025年加入欧盟',
          icon: require('../../assets/images/passport/Montenegro-icon2.jpg')
        },
        {
          title: '要求低',
          des: '无语言、学历、居住，管理经验等要求',
          icon: require('../../assets/images/passport/Montenegro-icon3.jpg')
        },
        {
          title: '欧洲低税国',
          des: '欧洲商业税务最低的国家',
          icon: require('../../assets/images/passport/Montenegro-icon4.jpg')
        },
        {
          title: '全球通行',
          des: '护照全球免签120多个国家，包括香港，澳门，新加坡，申根等欧洲国家',
          icon: require('../../assets/images/passport/Montenegro-icon5.jpg')
        },
        {
          title: '美国E2缔约国',
          des: ' 可作为未来申请美国身份的跳板',
          icon: require('../../assets/images/passport/Montenegro-icon6.jpg')
        },
        {
          title: '度假天堂',
          des: '欧洲杰出而独特的高端度假胜地',
          icon: require('../../assets/images/passport/Montenegro-icon7.jpg')
        },
        {
          title: '三代移民',
          des: '申请人及配偶父母还有申请人子女都可拿身份，子女过了18岁依然有机会直接拿身份',
          icon: require('../../assets/images/passport/Montenegro-icon8.jpg')
        }
      ],
      program: [
        {
          title: '项目一：黑山北部（不包含波德戈理察）地区',
          item: {
            '单人申请': ['捐款：€100,000', '北部房产投资：€250,000'],
            '夫妻申请': ['捐款：€100,000', '北部房产投资：€250,000'],
            '一家四口申请(2大人2子女)': ['捐款：€100,000', '北部房产投资：€250,000']
          }
        },
        {
          title: '项目二：黑山南部（海岸）地区', 
          item: {
            '单人申请': ['捐款：€100,000', '南部房产投资：€450,000'],
            '夫妻申请': ['捐款：€100,000', '南部房产投资：€450,000'],
            '一家四口申请(2大人2子女)': ['捐款：€100,000', '南部房产投资：€450,000']
          }
        }
      ],
      obtain: {
        '1.申请人满18岁': '',
        '2.无犯罪记录': '',
        '3.身体健康证明': '',
        '4.可随行成员包括': [
          '1）配偶',
          '2）经济未独立的随行子女可以一并入籍，子女无年龄限制要求'
        ]
      },
      application: [
        '评估签约',
        '材料收集和制作',
        '递交申请资料至黑山政府',
        '签订购房协议，支付首付款',
        '获得档案号',
        '申请人收到预批复函',
        '申请人登陆黑山录入生物信息，领取护照'
      ],
      score: {
        icon: require('../../assets/images/passport/montenegro-passport.jpg'),
        ranking: 44,
        free: 124,
        stars: 7
      },
      mapInfo: {
        icon: require('../../assets/images/passport/Montenegro-map.png'),
        title: '黑山地理位置与基本信息',
        info: {
          首都: '波德戈里察 Podgorica',
          官方语言: '黑山语',
          货币: '欧元',
          兑换率: '1 EUR = 8.07 CNY',
          时区: 'GMT+1',
          人口: '62.24 万',
          人均GDP: '8761美元（2018年）',
          国土面积: '13,812 平方公里',
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