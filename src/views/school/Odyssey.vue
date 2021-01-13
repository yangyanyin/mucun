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
        zh_name: 'Odyssey幼儿园',
        img: require('../../assets/images/school/odyssey-logo.jpg')
      },         
      introduction: {
        img: require('../../assets/images/school/odyssey-int.jpg'),      
        des: [
          'Odyssey幼儿园的教学理念源于美国、英国以及意大利北部的雷吉欧·艾米利亚实践教育的启发。Odyssey幼儿园提供专门为开发孩子们的探索性和自主性学习而设计的一流课程。',
          'Odyssey幼儿园提倡一种协作的教学文化，关注每一个小朋友能够成长为具有积极学习能力的下一代。Odyssey不仅仅是一个学前教育机构，它同时也是一个教育研究中心，教职员工不断开发创新出国际知名的教学课程，为孩子们带来独特的学习体验。',
          'Odyssey新加坡园区为孩子们提供了一流的硬件学习环境，它拥有超大的课室和户外绿地操场等，在寸土寸金的新加坡是十分难得的。'
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