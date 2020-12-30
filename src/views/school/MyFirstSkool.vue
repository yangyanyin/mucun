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
        zh_name: 'My First Skool',
        img: require('../../assets/images/school/Myfirstskool-logo.jpg')
      },
      
      introduction: {
        img: require('../../assets/images/school/my-first-skool-int.jpg'),      
        des: [
          '新加坡My First Skool 幼儿园是新加坡历史悠久的学前教育中心，也是本地最大规模的公立幼儿园之一。My First Skool成立于1977年，目前在新加坡已经拥有超过100家分校，校区多设于邻里社区中，非常方便本地工作人士的家庭。该学前教育机构为家长提供了整托与半托的服务，有着非常丰富的教育经验，也是新加坡学前教育认证（SPARK）的优质学前教育中心。',
          'My First Skool的每一位教职人员都必须要符合“儿童早期教育发展机构ECDA”的认证，同时该教育中心还会为每位老师定期提供培训，以不断提高教学质量。'
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