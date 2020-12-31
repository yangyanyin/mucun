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
        zh_name: '圣若瑟书院国际学校',
        en_name: 'SJI International School',
        img: require('../../assets/images/overseas-study/school/school-logo4.png'),
        int_img: require('../../assets/images/school/school-int4.jpg'),
        other: [
          '国际A Level 成绩通过率100%，',
          '获得A* 与A成绩的占比50% 国际GCSE成绩获得A*或A成绩的占比78%',
          'IB考试通过率100%，平均成绩38.8'
        ]
      },
      introduction: {
        img: require('../../assets/images/school/school-int4.jpg'),      
        des: [
          '圣若瑟书院国际学校（SJII）是新加坡一所独立的男女混合的天主教国际学校，直属历史悠久的圣若瑟书院（St Joseph’s Institution）。SJII 成立于2007年，旨在为新加坡本地与外国4-18岁学生提供完善的教育体系，从小学一年级到高中12年级的课程。小学部分采用IPC课程，中学采用IGCSE考试课程，高中为IB课程。',
          'SJII的学生在IGCSE和IBDP的课程中取得出色的成绩，很多毕业生都能考取到世界常春藤大学继续深造。'
        ],
        other: {
          建校时间: '2007年',
          教学语言: '英语',
          课程类型: 'IBDP，GCSE',
          生源国家数量: '40',
          学校位置: '新加坡西部地区',
          IB平均成绩: '37/45'
        }
      }
    }
  }
}
</script>