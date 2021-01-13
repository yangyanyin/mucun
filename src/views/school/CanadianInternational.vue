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
        zh_name: '新加坡加拿大国际学校',
        en_name: 'Canadian International School Singapore',
        img: require('../../assets/images/overseas-study/school/school-logo6.png'),
        int_img: require('../../assets/images/school/school-int6.jpg'),
        other: [
          'IB平均成绩34.5分，超过平均水平',
          'IB考试通过率98.5%'
        ]
      },
      introduction: {
        img: require('../../assets/images/school/school-int6.jpg'),      
        des: [
          '新加坡加拿大国际学校（CIS）是一所IB课程的学校，为学生提供PYP、MYP和IBDP课程。1989年成立初期的CIS是一所大学预科走读学校，当时只有六名高中学生和六名老师。目前的CIS拥有自己的幼儿园、小学、初中和高中部，教职员工超过130名，来自80多个国家超过3000名的学生。',
          '新加坡加拿大国际学校是本地唯一具备最完善的中英双语教学的国际学校，双语课程教育只应用到小学六年级，是采用一天英文一天中文穿插式授课。双语教学的宗旨就是让孩子们具备至少两种语言能力，用不同理解思维思考，掌握中西文化的精髓。'
        ],
         
        other: {
          建校时间: '1989年',
          教学语言: '英语',
          课程类型: 'IBDP，MYP，PYP',
          生源国家数量: '80',
          学校位置: '新加坡东部与西部两大校区',
          IB平均成绩: '34.5/45'
        }
      }
    }
  }
}
</script>