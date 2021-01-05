<template>
  <div class="detail">
    <Introduction :introduction="introduction"></Introduction>

    <Description :description="description"></Description>

    <div class="cycle">项目全程审理周期<br />12-18个月，这个项目将是有一定语言基础的商业精英闪电移民加拿大的全新机会，<br />获得永居满三年以后，可申请公民！</div>

    <ProjectProcess :projectProcess="projectProcess"></ProjectProcess>

    <div class="attached">独家附送：多伦多天使投资俱乐部会员（有效期10年）</div>
  </div>
</template>
<script>
import Introduction from './base/Introduction'
import Description from './base/Description'
import ProjectProcess from './base/ProjectProcess'
export default {
  components: {
    Introduction,
    Description,
    ProjectProcess
  },
  data () {
    return {
      introduction: {
        title: {
          zh: '加拿大联邦天使投资人计划',
          en: '(Canada Federal Angel Investor Program)'
        },
        detail: [
          '由新加坡侨水资本——Singapore Waterland Capital甄选加拿大政府支持的新兴产业创投项目，旨在吸引海外高端精英人才和企业家以创业投资取代资金投资的方式到加拿大创办高科技企业、创造就业，从而刺激加拿大经济增长，这将是加拿大企业家移民制度的重大改革之一。加拿大政府授权专业的机构提供咨询辅导服务，帮助新移民企业家解决。 ',
          '获得天使投资者支持信的关键在于申请人的创业想法是不是具有创新性，各种创新相关行业均可申请。整体周期十分快速，不用登陆加拿大，1年半左右即可获得枫叶卡。'
        ]
      },
      description: [
        {
          icon: require('../../assets/images/canada/description-icon3.jpg'),
          title: '获得加拿大政府指定天使投资者的支持信：',
          detail: [
            '1. 每个申请人至少要拥有该注册企业百分之十股份，每个企业最多可以提5个移民申请人 ',
            '2. 加拿大政府指定天使投资者以及所有申请人必须共同持有超过百分之五十的公司股权'
          ]
        },
        {
          icon: require('../../assets/images/canada/description-icon4.jpg'),
          title: '申请条件如下：',
          detail: [
            '1.主申请人具备雅思或是法语（CLB）5级程度；或有一定英语基础，可以通过我司语言培训，满足申请条件。 ',
            '2. 有足够资金来加拿大定居 ',
            '3. 申请人符合体检要求',
            '4. 申请人无犯罪记录'
          ]
        }
      ],
      projectProcess: [
        '签订服务协议，SGPEC加拿大移民律师进行一对一客户项目辅导对接，并签署管理协议',
        '设计商业计划书',
        '通过培训获得证书',
        '获得天使投资的支持信，由SGPEC的专业律师团队代表企业家向加拿大IRCC递交永久居民申请；',
        '申请获批枫叶卡，全家随同'
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
@media(max-width: 767px) {
  .cycle {
    padding: 0 15px;
    line-height: 24px;;
  }
}
</style>