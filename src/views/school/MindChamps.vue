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
        zh_name: '迈杰思学前教育',
        en_name: 'MindChamps',
        img: require('../../assets/images/school/mindchaps-logo.jpg')
      },
      introduction: {
        img: require('../../assets/images/school/mindchaps-int.jpg'),
        des: [
          '迈杰思学前教育（MindChamps）新加坡王牌学前教育机构之一，是新加坡特许经营品牌金奖得主。MindChamps始于1998年，在澳大利亚设立研究中心，2002年在新加坡正式成立国际总部。',
          'MindChamps拥有自己的国际研究小组和课程研发团队，成员来自学前教育、儿童心理学、神经学、音乐与律动等不同范畴。每年MindChamps总部都会对旗下的幼儿园的师资进行培训，去报可以维持领先的竞争力。MindChamps也会通过举办各种主题活动与家长保持亲密合作，增进家园互动，帮助家长和孩子度过成长期，促进亲子关系。'
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