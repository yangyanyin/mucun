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
        zh_name: '英华国际学校',
        en_name: 'ACS International Singapore',
        img: require('../../assets/images/overseas-study/school/school-logo8.png'),
        int_img: require('../../assets/images/school/school-int8.jpg'),
        other: [
          '国际GCSE考试通过率95%，获得A*或A成绩占比57%',
          'IB成绩通过率99.4%， 平均成绩35.2分'
        ]
      },
      introduction: {
        img: require('../../assets/images/school/school-int8.jpg'),      
        des: [
          '英华国际学校（ACSI）成立于2005年，是新加坡本土三大国际学校之一，由新加坡卫理公会教堂所拥有，也是新加坡英华学校旗下6所学校之一。',
          'ACS为本校学生提供高素质的、以人为本、全面以及均衡发展的教育体系，让学生在学习中逐步发现自我，挖掘自身潜能的同时，开拓视野、建立人脉。ACS在每年的IB考试中成绩傲人，获得过新加坡教育部颁发的卓越学校奖（School Excellence Award）和杰出学校奖（School Distinguished Award）。'
        ],
        other: {
          建校时间: '2005年',
          教学语言: '英语',
          课程类型: 'IBDP，国际GCSE',
          生源国家数量: '20',
          学校位置: '新加坡中部地区',
          IB平均成绩: '35.3/45'
        }
      }
    }
  }
}
</script>