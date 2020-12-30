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
        zh_name: '加拿大枫叶小熊',
        en_name: 'Maple Bear',
        img: require('../../assets/images/school/maplebear-logo.jpg')
      },
      introduction: {
        img: require('../../assets/images/school/maplebear-int.jpg'),      
        des: [
          '枫叶小熊幼儿教育（Maple Bear）是源于加拿大温哥华的国际教育机构，是新加坡最好的加拿大幼儿教育机构。新加坡校区注重英文与中文的双语教育，在2017年被评为【最佳双语幼儿园】。Maple Bear将加拿大与新加坡的教育体系完美结合，鼓励孩子在自我发现的过程中不断探索与学习，主要集体合作精神，并不断的创新。',
          'Maple Bear为儿童提供了一整套系统而全面的综合教育，以英文为主要教学语言，教学科目涵盖自然科学、数学、科技、创意美术、生活技能、个体发展以及社会意识等方面。'
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