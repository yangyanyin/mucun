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
        zh_name: '伊顿国际学校',
        en_name: 'Eton house',
        img: require('../../assets/images/school/etonhouse-logo.jpg')
      },
      introduction: {
        img: require('../../assets/images/school/etonhouse-int.jpg'),      
        des: [
          '新加坡伊顿国际教育机构是一个具有25年历史的知名教育集团。伊顿在培养孩子们的双语能力方面有着非常丰富教学经验，在伊顿孩子不仅可以掌握不同语言的听说读写能力，更多可以培养孩子对不同文化的理解与运用，培养孩子成为有自信的未来主人翁。',
          '伊顿在学前教育阶段开发了基于探寻、思考、学习基础上的教学方法。这些教学方法能使孩子们不断从学习中获取经验，这极大地促进和提高了他们在社交、认知、情感、身体和创作性的方面能力。'
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