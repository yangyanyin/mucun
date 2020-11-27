<template>
  <div class="detail">
    <Introduction :introduction="introduction"></Introduction>

    <Advantage :advantage="advantage"></Advantage>

    <Description :description="description"></Description>

    <ProjectProcess :projectProcess="projectProcess"></ProjectProcess>

  </div>
</template>
<script>
import Introduction from './base/Introduction'
import Advantage from './base/Advantage'
import Description from './base/Description'
import ProjectProcess from './base/ProjectProcess'
export default {
  components: {
    Introduction,
    Advantage,
    Description,
    ProjectProcess
  },
  data () {
    return {
      introduction: {
        title: {
          zh: '安省雇主担保项⽬',
          en: '(Ontario employer guarantee project)'
        },
        detail: [
          '安大略省（简称安省）政府推出的省提名移民项目又被称为“安大略机遇Opportunities Ontario”，该移民项目为安省劳动市场带来宝贵的技能和知识，补充紧缺劳动力，促进安省的经济发展，同时也为国际留学生以及海外优秀人士提供成为加拿大永久居民的大好机会。本项目每年设定配额，配额申满之后，后续申请会递延到下一年继续处理，以先申先处理为原则。 该项目是联邦技术移民的一个有利补充。',
        ]
      },
      advantage: {
        title: '项目优势',
        list: [
          {
            icon: require('../../assets/images/canada/advantage-icon7.jpg'),
            title: '移民门槛低',
            text: '无年龄限制、无语言要求、无需雅思成绩'
          },
          {
            icon: require('../../assets/images/canada/advantage-icon8.jpg'),
            title: '办理时间短',
            text: '2-3个月出省提名，整个申请流程在18-22个月左右'
          },
          {
            icon: require('../../assets/images/canada/advantage-icon9.jpg'),
            title: '流程简单',
            text: '由省政府批准，无需面试'
          },
          {
            icon: require('../../assets/images/canada/advantage-icon10.jpg'),
            title: '一步到位',
            text: '一人申请，全家移民'
          },
          {
            icon: require('../../assets/images/canada/advantage-icon11.jpg'),
            title: '多种福利',
            text: '申请人和配偶都可以获得工签子女免费入读当地学校，享受社会福利'
          },
          {
            icon: require('../../assets/images/canada/advantage-icon12.jpg'),
            title: '成功率高',
            text: '主要审核雇主资格，雇主符合条件后，只审核申请人的背景真实性'
          }
        ]
      },
      description: [
        {
          icon: require('../../assets/images/canada/description-icon3.jpg'),
          title: '对申请人的要求',
          detail: [
            '1. 申请人获得一份符合职业类别(NOC 0、A、B)的永久全职工作',
            '2. 申请人的工资符合安大略省该职业中的普通工资标准',
            '3. 在提交申请之日前五年内有两年从事目标职业的工作经验',
            '4. 申请人无犯罪记录'
          ]
        },
        {
          icon: require('../../assets/images/canada/description-icon4.jpg'),
          title: '对雇主的要求',
          detail: [
            '1. 目前在正常运营，在安省有固定办公场所并符合安省劳动法相关要求的企业或公司' ,
            '2. 如果公司地点是在大多伦多地区，要求在上一财政年度的营业额度不少于100万加元，并已雇有5个全职雇员( 为加国公民或永久居民)',
            '3. 而地处大多地区外的公司满足年度至少50万加币的营业额，3个及以上全职本地员工',
            '4. 无犯罪并能通过联邦的背景调查'
          ]
        }
      ],
      projectProcess: [
        '评估，符合条件后签约，为申请人匹配雇主',
        '发布广告、准备材料、雇佣合同',
        '获得雇主的Job Offer',
        '提交安省省提名，并获得安省省提名通过信',
        '获得联邦档案号',
        '体检',
        '获永居签证'
      ]
    }
  }
}
</script>
<style scoped lang="less">
.cycle {
  text-align: center;
  line-height: 28px;
}
.attached {
  background: #f7f7f7;
  text-align: center;
  color: #447375;
  padding-bottom: 30px;
}
</style>