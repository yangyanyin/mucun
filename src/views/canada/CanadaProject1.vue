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
          zh: '加拿大魁北克省投资移民项目',
          en: '(Quebec Immigrant Investor Program, QIIP)'
        },
        detail: [
          '魁省投资移民一度是中国高净值人士最爱的移民项目，因为对语言和学历都没有硬性要求。但是目前也是在不断提高要求，增加难度。2018年重开后，全款投资额从80万加币上涨到120万加币，资产要求上涨到200万加币，贷款投资额也从22万加币上涨到35万加币。基本上都上涨了150%。但是与之相对的，在全球配额1900个不变的情况下，中国和香港两地的配额从2017年的1330降低到1235个，目前名额告急！',
          '加拿大的多元文化也体现在其语言上，作为全世界唯一的以英语、法语两种语言为官方语言的国家，加拿大的魁北克省作为曾经的法国殖民地，绝大多数为法裔加拿大人，加拿大联邦政府为保护魁北克的法语文化，使得魁北克可以自主选择移民。'
        ]
      },
      advantage: {
        title: '魁北克省投资移民优势',
        list: [
          {
            icon: require('../../assets/images/canada/advantage-icon1.jpg'),
            title: '立即获得永久居留权',
            text: '对申请人没有语言要求，没有试用和条件限制，一人申请成功，全家都将被授予加拿大永久居民身份。'
          },
          {
            icon: require('../../assets/images/canada/advantage-icon2.jpg'),
            title: '低税率',
            text: '北美地区税率最低的省份之一。'
          },
          {
            icon: require('../../assets/images/canada/advantage-icon3.jpg'),
            title: '世界一级经济体，政府支持计划',
            text: '享有具竞争力的税务优惠、进入北美自由贸易区域的特权 、全球最低廉的能源费率、低廉的企业营运成本。'
          },
          {
            icon: require('../../assets/images/canada/advantage-icon4.jpg'),
            title: '一流的教育重中之重',
            text: '加拿大的学校和高等学府一直名列世界前茅，公立教育系统为小学、中学及学院提供免费教育。'
          },
          {
            icon: require('../../assets/images/canada/advantage-icon5.jpg'),
            title: '护照权力重',
            text: '最强大的旅行通证之一，护照免签美国和其他180多个国家及地区。'
          },
          {
            icon: require('../../assets/images/canada/advantage-icon6.jpg'),
            title: '无需创造就业',
            text: '魁北克国际投资计划完全不要求申请人为当地创造任何就业机会。'
          }
        ]
      }, 
      description: [
        {
          icon: require('../../assets/images/canada/description-icon1.jpg'),
          title: '申请条件如下：',
          detail: [
            '1. 拥有200万加币净资产',
            '2. 资金必须要合法所得',
            '3. 5年内至少拥有2年的管理经验 ',
            '4. 投资要求：申请人需要投资的120万加币必须通过加拿大政府官方指定的金融机构帮忙代付投资款，自己向机构提前交纳35万加币利息即可',
            '5. 全家符合体检和背景调查要求(无犯罪记录）',
            '6. 随行子女不超过22岁'
          ]
        },
        {
          icon: require('../../assets/images/canada/description-icon2.jpg'),
          title: '投资移民有评分标准：通过分数是40分',
          detail: [
            '2年的管理经验得10分',
            '小于45岁得10分、46岁得8分、48岁4分、49岁2分、大于50岁不得分',
            '移民官对于学历方面要求不高，但如果申请者需要算学历分数才够分数的话移民官对于学历文件会认真审核'
          ]
        }
      ],
      projectProcess: [
        '评估/签约',
        '准备资料',
        '递交魁省移民局',
        '收到面试通知或免面试通知',
        '面试合格或免面试，1个月投资，收到魁省移民局签发的甄选证书，资料递交到联邦移民局审理',
        '收到联邦移民局档案号',
        '获批永居签证'
      ]
    }
  }
}
</script>