<!-- 护照项目-地图信息 -->
<template>
  <div class="map">
    <img :src="mapInfo.icon" />
    <h3>{{mapInfo.title}}</h3>
    <p class="clearfix" v-for="(item, name, k) in mapInfo.info" :key="k">
      <span class="left">{{name}}</span>
      <span class="right">{{item}}</span>
    </p>
  </div>
</template>
<script>
import { device } from '../../../assets/js/config'
export default {
  props: {
    mapInfo: Object
  },
  methods: {
    nameFixel () {
      if (!document.getElementById('project-left-content')) return
      let contentHeight = document.getElementById('project-left-content').clientHeight // 对照物高度
      let picBox = document.getElementsByClassName('map')[0] //  吸顶自身
      let top = document.documentElement.scrollTop || document.body.scrollTop
      if (top > 400) {
        if (top > contentHeight - 462) {
          picBox.style.position = 'relative'
          picBox.style.overflow = 'visible'
          picBox.style.top = contentHeight - 900 + 'px'
          return
        }
        picBox.style.position = 'relative'
        picBox.style.overflow = 'visible'
        picBox.style.top = top - 400 + 'px'
      } else {
        picBox.style.position = 'relative'
        picBox.style.overflow = 'visible'
        picBox.style.top = '0px'
      }
    }
  },
  mounted () {
    if (device() === 'web') {
      window.addEventListener('scroll', this.nameFixel)
    }
  }
}
</script>
<style scoped lang="less">
.map {
  padding-top: 40px;
  img {
    display: block;
    width: 100%;
  }
  h3 {
    margin: 20px 0 10px;
    font-size: 13px;
  }
  p {
    line-height: 28px;
    span {
      font-size: 12px;
      color: #3E3E3E;
      &:last-child {
        text-align: right;
        color: #447375;
      }
    }
  }
  @media (max-width: 767px) {
    padding-top: 30px;
    p {
      line-height: 26px;
    }
  }
}
</style>