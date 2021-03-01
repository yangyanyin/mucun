<template>
  <div class="wap-banner">
    <p class="p1"><img src="../../../assets/images/home/banner-logo.gif" /></p>
    <p class="p2">专注新加坡移民留学/家族办公室/资产管理<br />高净值人群一站式私人管家服务机构</p>
    <img src="../../../assets/images/new-wap-banner.jpg" />
  </div>
 
</template>
<script>
export default {
  data () {
    return {
      textAnimation: false,
      imgAnimation: false
    }
  },
  methods: {},
  mounted () {}
}
</script>
<style lang="less">
.wap-banner {
  display: none;
  position: relative;
  padding-top: 60px;
  @media (max-width: 767px) {
    display: block;
  }
  img {
    position: relative;
    display: block;
    width: 100%;
  }
  p {
    position: absolute;
    z-index: 9;
    width: 100%;
    font-size: 13px;
    color: #fff;
    line-height: 22px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1px;
    &.p1 {
      top: 90px;
      img {
        width: 110px;
        margin: auto;
      }
    }
    &.p2 {
      top: 150px;
    }
  }
}

</style>