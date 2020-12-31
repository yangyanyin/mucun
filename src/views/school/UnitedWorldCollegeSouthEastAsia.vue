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
        zh_name: '东南亚世界联合书院',
        en_name: 'United World College of South East Asia',
        img: require('../../assets/images/overseas-study/school/school-logo2.png'),
        int_img: require('../../assets/images/school/school-int2.jpg'),
        other: [
          'IB考试成绩高于40分的占比26.9%，考试通过率97.6%',
          '国际GCSE获得A*或A的占比70%'
        ]
      },
      introduction: {
        img: require('../../assets/images/school/school-int2.jpg'),      
        des: [
          '东南亚联合世界学院（UWC/UWCSEA）是一所私立的国际学校，在新加坡设有两处校区，学生超过5600人，是新加坡最大的国际学校，是被公认的最难进的国际学校。UWC提供从K到12年级的课程，小学部用的校本大纲，中学用英式的IGCSE教学体系，高中用IB国际文凭课程。',
          'UWC教育理念是起源于德国教育叫Kurt Hahn 博士，让来自不同国家、种族和宗教的年轻人共同生活，相互学习，增进各国之间的友谊。UWC相比其他国际学校更具有国际视野，鼓励激发学生学习能力。'
        ],
        other: {
          建校时间: '1971年',
          教学语言: '英语',
          课程类型: 'IBDP，GCSE',
          生源国家数量: '105',
          学校位置: '新加坡东部、西部两大校区',
          IB平均成绩: '36/45'
        }
      }
    }
  }
}
</script>