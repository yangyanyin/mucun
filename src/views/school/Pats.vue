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
        zh_name: 'Pat’s 培思幼儿园',
        img: require('../../assets/images/school/pat-s-logo.jpg')
      },       
      introduction: {
        img: require('../../assets/images/school/pat-s-int.jpg'),      
        des: [
          '新加坡PAT’s培思幼儿园成立于1988年，是新加坡首屈一指的优秀幼儿教育机构。成立30多年来立志于为2到6岁学龄前儿童提供最领先的教育。在培思每一位老师都注重于培养孩子们的自信心与创新的潜力。让每一位培思小朋友的童年充满欢乐与积极向上。',
          '培思幼儿园分布于新加坡全岛，设有15个学前班（19个月-6岁幼儿）、2个婴儿护理中心（2个月-18个月婴儿）。每一个分校都拥有一流的教育设施，为孩子提供一个安全，充满乐趣的学习环境。例如水上乐园、沙坑、自行车道、工作室、音乐教室、儿童厨房和全景游乐场。'
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