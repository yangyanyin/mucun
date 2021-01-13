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
        zh_name: '东陵信托学校',
        en_name: 'Tangling Trust School',
        img: require('../../assets/images/overseas-study/school/school-logo1.png'),
        int_img: require('../../assets/images/school/school-int1.jpg'),
        other: [
          '国际A Level 成绩通过率100%，获得A* 与A成绩的占比50% ',
          '国际GCSE成绩获得A*或A成绩的占比78%',
          'IB考试通过率100%，平均成绩38.8'
        ]
      },
      introduction: {
        img: require('../../assets/images/school/school-int1.jpg'),      
        des: [
          '东陵信托学校于1925年建校，是新加坡一所非盈利性质的国际学校。拥有90多年历史的东陵信托国际学校是老牌英国国际学校，为3到18岁的学生提供幼儿园、小学、中学和大学预科（Sixth Form）的全英式国际教育。',
          '小学部采用英国本土教材，中学11年级提供GCSE或IGCSE课程，12年级或以上可以选择A Level或者IB课程。东陵信托国际学校的学生成绩一直超过新加坡和全球平均水平，95%的毕业生通过会考考取第一志愿或第二志愿的大学，包括牛津大学、剑桥大学、斯坦福大学、芝加哥大学和哥伦比亚大学等。'
        ],
        other: {
          建校时间: '1925年',
          教学语言: '英语',
          课程类型: 'IBDP，GCSE，国际A水准',
          生源国家数量: '60',
          学校位置: '新加坡中部地区',
          IB平均成绩: '38.8/45'
        }
      }
    }
  }
}
</script>