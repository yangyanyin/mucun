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
export default {
  props: {
    mapInfo: Object
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