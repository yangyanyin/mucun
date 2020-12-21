<template>
  <div class="detail">
    <ProjectBanner name="vanuatu" />
    <div class="pc-max-width clearfix">
      <div class="left">
        <!-- 项目简介 -->
        <Introduction :introduction="introduction" />

        <!-- 项目优势 -->
        <Advantage :advantage="advantage" />

        <!-- 项目入籍方案 -->
        <Program :program="program" tips="捐赠入籍计划" />

        <!-- 如何获得瓦努阿图护照 -->
        <Obtain :obtain="obtain" />
        
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script>
import ProjectBanner from './base/ProjectBanner.vue'
import Introduction from './base/Introduction.vue'
import Advantage from './base/Advantage.vue'
import Program from './base/Program.vue'
import Obtain from './base/Obtain.vue'
export default {
  components: {
    ProjectBanner,
    Introduction,
    Advantage,
    Program,
    Obtain
  },
  data () {
    return {
      introduction: [
        '瓦努阿图一个被誉为全球最幸福的国度，位于南太平洋毗邻澳大利亚与新西兰；这里资源丰富，生活方式简单。 支柱产业包括农业（可可、卡瓦胡椒和椰子）、渔业、旅游业与离岸金融服务业（始于70年代）；此外瓦努阿图没有收入所得税、资本利得税、遗产与继承税、无外汇管制，提供了良好的经商与海外资产配置环境。',
        '瓦努阿图投资入籍项目是目前办理最快的移民项目之一；2016年12月19日瓦努阿图共和国根据《国籍法第112章》13D条正式立法通过《2016年第220号国际条例（捐献计划）法令》，旨在通过捐献计划吸纳高素质移民推动国家经济发展。'
      ],
      advantage: [
        {
          title: '避税天堂',
          des: '入籍后可注册离岸公司，海外资产配置，财富管理',
          icon: require('../../assets/images/passport/vanuatu-icon1.jpg')
        },
        {
          title: '入籍极快',
          des: '30天能入籍 <br /> 申请简单',
          icon: require('../../assets/images/passport/vanuatu-icon2.jpg')
        },
        {
          title: '性价比高',
          des: '单人捐赠8万美金起，法律允许三代即可直接获得公民',
          icon: require('../../assets/images/passport/vanuatu-icon3.jpg')
        },
        {
          title: '身份便利',
          des: '承认双重国籍 <br /> 可保留原国籍身份',
          icon: require('../../assets/images/passport/vanuatu-icon4.jpg')
        },
        {
          title: '澳、新跳板',
          des: '毗邻澳新，更容易申请澳新签证和移居',
          icon: require('../../assets/images/passport/vanuatu-icon5.jpg')
        },
        {
          title: '政府支持',
          des: '国家法案支持 <br /> 申请更安全',
          icon: require('../../assets/images/passport/vanuatu-icon6.jpg')
        },
        {
          title: '子女教育',
          des: '入籍后，孩子可以在国内上国际学校',
          icon: require('../../assets/images/passport/vanuatu-icon7.jpg')
        },
        {
          title: '免签130国家或地区',
          des: '含英国（6个月），香港（3个月）新加坡等130个国家或地区',
          icon: require('../../assets/images/passport/vanuatu-icon8.jpg')
        }
      ],
      program: [{
        '单人申请': ['国家捐款$80,000'],
        '夫妻申请': ['国家捐款$100,000'],
        '一家三口申请': ['国家捐款$115,000'],
        '一家四口申请': ['国家捐款$130,000'],
      }],
      obtain: {
        '1.主申请人年满18周岁': '',
        '2.无犯罪证明 ': '',
        '3.净资产达到25万美金或以上': '',
        '4.为瓦努阿图捐款不少于8万美金': '',
        '5.随行成员可包括:': [
          '1）配偶',
          '2）18岁以下子女',
          '3）18至25周岁全日子在读、经济依赖父母的子女',
          '4）50周岁及以上双方父母'
        ]
      }
    }
  }
}
</script>
<style scoped lang="less">
.detail {
  .left {
    width: 65%;
    padding: 50px 0;
  }
  .right {
    width: 32%;
  }
}
</style>