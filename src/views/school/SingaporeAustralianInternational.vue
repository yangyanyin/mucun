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
        zh_name: '新加坡澳大利亚国际学院',
        en_name: 'Singapore Australian International School',
        img: require('../../assets/images/overseas-study/school/school-logo5.png'),
        int_img: require('../../assets/images/school/school-int5.jpg'),
        other: [
          'IB平均分可以达到35分，考试通过率100%',
          '国际GCSE获得A*或A的占比为25% ',
          'ATAR平均分为93.3分（100满分）'
        ],
        remarks: '*新加坡澳洲国际学校的学生在读写、计算成绩比澳大利亚全国平均水平高20%以上'
      },
      introduction: {
        img: require('../../assets/images/school/school-int5.jpg'),      
        des: [
          '新加坡澳洲国际学校（AIS）是新加坡唯一一所为18个月到18岁学生提供澳洲教育体系的学校，提供PYP，IGCSE和IBDP课程。同时学校也将澳大利亚课程内容纳入教学大纲，学生毕业是可以获得澳大利亚高中文凭。',
          '澳大利亚中小学教育体系非常完善，在阅读、科学和数学等特点学科都排在世界领先水平。IB课程强调学生的智力、情感、个人发展和社会技能等方面，培养学生充分获得学习、工作以及生存的各项能力。'
        ],
        other: {
          建校时间: '1993年',
          教学语言: '英语',
          课程类型: 'IBDP，PYP，GCSE，澳洲式课程',
          生源国家数量: '55',
          学校位置: '新加坡中部地区',
          IB平均成绩: '35/45'
        }
      }
    }
  }
}
</script>