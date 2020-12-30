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
        zh_name: '伊桥幼儿园',
        en_name: 'E-Bridge',
        img: require('../../assets/images/school/E-bridge-logo.jpg')
      },
      introduction: {
        img: require('../../assets/images/school/E-bridge-int.jpg'),      
        des: [
          '伊桥幼儿园是新加坡伊顿国际教育（Eton House）旗下的幼儿园品牌，总部位于新加坡，创办于1995年。目前下属8所国际文凭组织（IB）世界学校。一直以来，伊桥秉承“教育点亮未来”的教育理念致力于追求卓越的国际教育服务，目前已经在新加坡、中国、日本、韩国等12个国家和地区建立了120多所分校，为超过61个国籍的12000余学生提供了高质量国际化教育。',
          '伊桥重视双语学习环境，并且秉承伊顿教育机构的“探索、思考、学习”的理念和课程，让孩子们在欢乐中学习。伊桥幼儿园认为当孩子感兴趣是，学习就会变得有趣和有效，所以在这里老师们更注重“学”，合理根据孩子的兴趣安排课程和活动，让小朋友们有一个没好的同年。'
        ],
        table: {
          年级: [
            {
              zh: '小托班'
            },
            {
              zh: '托班'
            },
            {
              zh: '小班'
            },
            {
              zh: '中班'
            },
            {
              zh: '大班'
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