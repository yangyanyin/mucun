<template>
  <div class="advantage margin-t-80">
    <h3 class="canada-title">
      {{advantage.title}}
    </h3>
    <div class="list pc-max-width clearfix">
      <div class="item left" v-for="(item, key) in advantage.list" :key="key">
        <img :src="item.icon" />
        <h4>{{item.title}}</h4>
        <p>{{item.text}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    advantage: Object
  }
}
</script>
<style scoped lang="less">
.advantage {
  padding: 50px 0;
  background: #f7f7f7;
  .list {
    .item {
      width: 26%;
      margin: 30px 11% 0 0;
      text-align: center;
      &:nth-child(3n+0) {
        margin-right: 0;
      }
      img {
        display: block;
        width: 100%;
      }
      h4 {
        padding: 20px 0  10px;
        font-size: 16px;
      }
      p {
        font-size: 13px;
        line-height: 26px;
      }
    }
  }
}
</style>