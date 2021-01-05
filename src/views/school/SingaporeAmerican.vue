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
        zh_name: '新加坡美国学校',
        en_name: 'Singapore American School',
        img: require('./../../assets/images/overseas-study/school/school-logo7.png'),
        int_img: require('../../assets/images/school/school-int7.jpg'),
        other: [
          'SAT平均分1360，远高于1060的世界平均水平',
          'AP平均分4.25，远高于2.89的世界平均水平'
        ]
      },
      introduction: {
        img: require('../../assets/images/school/school-int7.jpg'),      
        des: [
          '新加坡美国学校（SAS）是一所私营的独立教育机构，为PK-12年级的学生提供优质的美式教育。SAS创办于1956年，学校完全沿袭美国教学体制和大纲，为学生提供虽然不在美国也能接受到正统美式教育。SAS对生源、名额要求非常高，优先录取美国公民、美国绿卡持有者、以及在美国公司工作的家庭，其次才是国际学生，中国学生占比约为5-10%。'
        ],
        other: {
          建校时间: '1956年',
          教学语言: '英语',
          课程类型: 'AP',
          生源国家数量: '57',
          学校位置: '新加坡中部地区',
          AP平均成绩: '4.25'
        }
      }
    }
  }
}
</script>