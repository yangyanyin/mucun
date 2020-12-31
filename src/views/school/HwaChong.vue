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
        zh_name: '华中国际学校',
        en_name: 'Hwa Chong International School',
        img: require('../../assets/images/overseas-study/school/school-logo3.png'),
        int_img: require('../../assets/images/school/school-int3.jpg'),
        other: [
          'IB成绩通过率98%',
          '平均分达到37分，考取40分以上的学生占比33%'
        ]
      },
      introduction: {
        img: require('../../assets/images/school/school-int3.jpg'),      
        des: [
          '华中国际学校（HCIS）成立于2005年，是新加坡久负盛名的华中校群成员之一。作为新加坡本地国际学校有半数学生来自新加坡，其他学生来自全球20多个国家。',
          'HCIS为在校学生提供从中学到高中阶段的课程，中学（7-9年级），学生学习基础课程，可根据自己以后想要发展的方向在中四选择IGCSE；高中（10-12年级）学生遵循IB课程。2020年1月3日，华中国际的IB成绩创下新高通过率达到99%，并有两名学生获得满分的成绩。'
        ],
        other: {
          建校时间: '2005年',
          教学语言: '英语',
          课程类型: 'IBDP，国际GCSE',
          生源国家数量: '20',
          学校位置: '新加坡西部地区',
          IB平均成绩: '37/45'
        }
      }
    }
  }
}
</script>