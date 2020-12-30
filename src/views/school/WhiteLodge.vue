<template>
  <div class="clearfix">
    <!-- 学校名字图片 -->
    <SchoolName :nameInfo="nameInfo"/>

    <!-- 学校简介 -->
    <SchoolIntroduction :introduction="introduction"/>
  </div>
</template>
<script>
import SchoolName from './base/SchoolName.vue'
import SchoolIntroduction from './base/SchoolIntroduction.vue'
export default {
  components: {
    SchoolName,
    SchoolIntroduction
  },
  data () {
    return {
      nameInfo: {
        zh_name: 'White lodge International preschool',
        img: require('../../assets/images/school/whitlelodge-logo.jpg')
      },
      introduction: {            
        img: require('../../assets/images/school/white-lodge-int.jpg'),      
        des: [
          'White Lodge 国际幼儿园是新加坡著名的学前教育机构之一，全岛拥有多家分校。White Lodge 为孩子们提供很多室内室外的活动场地，保证每一位小朋友都有足够的运动量。学校的课程是以美国、澳大利亚和英国等国家的教育体系为基础，鼓励孩子成为成为活跃的学习者，独立的思想者，培养他们对学习的主动性。',
          '“欣赏个别差异、保持真诚、喜爱学习、鼓励想想、尊重周围世界”是White Lodge的核心价值观。每一位教师都会细心地规划课程，确保每一个小朋友都能发挥他们最佳的潜能，掌握语言、数学和写作的基础知识。'
        ],
        table: {
          年级: [
            {
              zh: '婴幼儿看护',
              en: 'Infant Care'
            },
            {
              zh: '学步期到托儿所',
              en: 'Toddlers to Playground'
            },
            {
              zh: '启蒙班',
              en: 'Nursery'
            },
            {
              zh: '幼儿园一年级',
              en: 'Kindergarden 1'
            },
            {
              zh: '幼儿园二年级',
              en: 'Kindergarden 2'
            }
          ],
          入学年龄: [
            {
              zh: '2-18个月'
            },
            {
              zh: '18个月-3岁'
            },
            {
              zh: '3-4岁'
            },
            {
              zh: '4-5岁'
            },
            {
              zh: '5-6岁'
            }
          ]
        }
      }
    }
  }
}
</script>