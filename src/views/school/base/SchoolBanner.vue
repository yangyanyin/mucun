<template>
  <div class="pc-max-width margin-t-80">
    <div class="school-banner">
      <el-carousel :interval="4000" type="card" height="350px">
        <el-carousel-item v-for="(url, index) in bannerInfo[schoolName]" :key="index">
          <img :src="url" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    schoolName: String
  },
  data () {
    return {
      bannerInfo: {
        '迈杰思学前教育': [
          require('../../../assets/images/school/mindchaps_1.jpg'),
          require('../../../assets/images/school/mindchaps_2.jpg'),
          require('../../../assets/images/school/mindchaps_3.jpg'),
          require('../../../assets/images/school/mindchaps_4.jpg'),
          require('../../../assets/images/school/mindchaps_5.jpg')
        ],
        '伊顿国际学校': [
          require('../../../assets/images/school/etonhouse1.jpg'),
          require('../../../assets/images/school/etonhouse2.jpg'),
          require('../../../assets/images/school/etonhouse3.jpg'),
          require('../../../assets/images/school/etonhouse4.jpg'),
          require('../../../assets/images/school/etonhouse5.jpg')
        ],
        'E-bridge伊桥幼儿园': [
          require('../../../assets/images/school/E-bridge1.jpg'),
          require('../../../assets/images/school/E-bridge2.jpg'),
          require('../../../assets/images/school/E-bridge3.jpg'),
          require('../../../assets/images/school/E-bridge4.jpg'),
          require('../../../assets/images/school/E-bridge5.jpg')
        ],
        '加拿大枫叶小熊': [
          require('../../../assets/images/school/maplebear1.jpg'),
          require('../../../assets/images/school/maplebear2.jpg'),
          require('../../../assets/images/school/maplebear3.jpg'),
          require('../../../assets/images/school/maplebear4.jpg'),
          require('../../../assets/images/school/maplebear5.jpg')
        ],
        'My First Skool': [
          require('../../../assets/images/school/Myfirstskool_1.jpg'),
          require('../../../assets/images/school/Myfirstskool_2.jpg'),
          require('../../../assets/images/school/Myfirstskool_3.jpg'),
          require('../../../assets/images/school/Myfirstskool_4.jpg'),
          require('../../../assets/images/school/Myfirstskool_5.jpg')
        ],
        'Odyssey': [
          require('../../../assets/images/school/odyssey1.jpg'),
          require('../../../assets/images/school/odyssey2.jpg'),
          require('../../../assets/images/school/odyssey3.jpg'),
          require('../../../assets/images/school/odyssey4.jpg'),
          require('../../../assets/images/school/odyssey5.jpg')
        ],
        'Pat’s 培思幼儿园': [
          require('../../../assets/images/school/pat-s1.jpg'),
          require('../../../assets/images/school/pat-s2.jpg'),
          require('../../../assets/images/school/pat-s3.jpg'),
          require('../../../assets/images/school/pat-s4.jpg'),
          require('../../../assets/images/school/pat-s5.jpg')
        ],
        'White lodge International preschool': [
          require('../../../assets/images/school/whitelogde1.jpg'),
          require('../../../assets/images/school/whitelogde2.jpg'),
          require('../../../assets/images/school/whitelogde3.jpg'),
          require('../../../assets/images/school/whitelogde4.jpg'),
          require('../../../assets/images/school/whitelogde5.jpg')
        ]
      }
    }
  }
}
</script>
<style lang="less">
.school-banner {
  .el-carousel__indicators {
    display: none !important;
  }
  .el-carousel__arrow {
    top: 40% !important;
    background: #447375 !important;
  }
  .el-carousel__item  {
    border-radius: 10px;
    overflow: hidden;
    i {
      font-size: 20px;
    }
  }
  img {
    display: block;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
}
</style>