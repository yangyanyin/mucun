<template>
  <div class="detail four">
    <Introduction :introduction="introduction"></Introduction>

    <Advantage :advantage="advantage"></Advantage>

    <Description :description="description"></Description>

    <ProjectProcess :projectProcess="projectProcess"></ProjectProcess>

  </div>
</template>
<script>
import Introduction from './base/Introduction'
import Description from './base/Description'
import ProjectProcess from './base/ProjectProcess'
import Advantage from './base/Advantage'
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
          zh: 'NB省企业家移民项目',
          en: '(New Brunswick Provincial Nominee Program)'
        },
        detail: [
          'NB省提名项目 New Brunswick Provincial Nominee Program ，简称 NBPNP，也就是我们常说的NB省的省提名。',
          'NBPNP是NB省与加拿大联邦政府合作的省移民项目。 NBPNP企业家适用于经验丰富的企业家，该企业家需建立、运营 并积极管理企业，同时在NB省生活并定居。在加拿大各个省政府提名计划中，NB省以其偏低的资产要求、优惠的投资 额、极富吸引力的投资项目、友好的社团环境、快捷的申请速度和手续，逐渐成为最受欢迎和最快捷的加拿大商业移民 途径之一。NBPNP被誉为“加拿大省提名项目的样板工程。'
        ]
      },
      advantage: {
        title: '项目优势',
        line_number: 4,
        list: [
          {
            icon: require('../../assets/images/canada/advantage-icon13.jpg'),   
            text: '无案例积压 审批速度快'
          },
          {
            icon: require('../../assets/images/canada/advantage-icon14.jpg'),
            text: '一步到位拿永居，移民成功登陆后即可获得枫叶卡，无转换身份的后顾之忧'
          },
          {
            icon: require('../../assets/images/canada/advantage-icon15.jpg'),
            text: '配偶可加分：在NB省工作、学习经历、语言达到要求均可以加分'
          },
          {
            icon: require('../../assets/images/canada/advantage-icon16.jpg'),
            text: '风险低，符合申请要求后才通知打投资押金10万加币（登陆NB按要求经营生意一年后可申请退回）'
          }
        ]
      },
      description: [
        {
          icon: require('../../assets/images/canada/description-icon7.jpg'),
          title: '对申请人的要求',
          detail: [
            '1. 年龄要求：22-55岁之间',
            '2. 语言要求：CLB5',
            '3. 家庭资产：60万加币的总资产，其中至少30万为流动资产',
            '4. 管理经验：至少3年管理经验，过去5年中有3年的股东经验（至少持有企业33.3%股份）或者过去5年中有5年的高级管理经验（至少管理2名全职员工）',
            '5. 投资额：25万加币，其中10万加币的创业保证金，在成功经营两年后可退还'
          ]
        }
      ],
      projectProcess: [
        '评估/签约',
        '至少2年全日制大专及以上学历',
        '律师初审，根据申请人的背景条件定制材料清单并收集文件',
        '准备雅思、安排商务考察',
        '递交EOI申请',
        '等待EOI筛选，分配名额',
        '收到移民局发放的正式申请通知书ITA(Invitation to Apply)',
        '开始创业、返还保证金',
        '登陆、领枫叶卡',
        '获批永居签证',
        '递档联邦',
        '保证金打款，获得省提名',
        '面试或免面试通过，获得预签信',
        '准备正式申请资料和第三方评估文件并递交'
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
<style lang="less">
.canada .four{
  .description-item {
    > div img {
      height: 371px;
    }
  }
}
</style>