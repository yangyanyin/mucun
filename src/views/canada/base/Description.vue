<template>
  <div class="description pc-max-width margin-t-80">
    <div v-for="(item, key) in description" :key="key" class="clearfix description-item">
      <div class="img list" :class="key === 1 ? 'left' : 'right'">
        <img :src="item.icon">
      </div>
      <div class="text list" :class="key === 1 ? 'right' : 'left'">
        <h4>{{item.title}}</h4>
        <p v-for="(p, i) in item.detail" :key="i">{{p}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    description: Array
  }
}
</script>
<style scoped lang="less">
.description-item {
  position: relative;
  background: #f7f7f7;
  margin-bottom: 40px;
  > div {
    width: 50%;
    overflow: hidden;
    img {
      position: relative;
      display: block;
      height: 290px;
      left: 50%;
      transform: translateX(-50%);
    }
    h4 {
      display: block;
      font-size: 20px;
      margin-bottom: 10px;
    }
    p {
      line-height: 26px;
      min-height: 10px;
    }
    &.text {
      position: absolute;
      height: 100%;
      right: 0;
      top: 0;
      padding: 30px 45px;
      &.left {
        left: 0;
        right: auto;
      }
    }
  }
  @media (max-width: 767px) {
    margin-bottom: 20px;
    
    .list {
      width: 100%;
      img {
        height: auto;
        width: 100%;
        left: 0;
        transform: translateX(0);
      }
      h4 {
        margin-bottom: 5px;
        font-size: 18px;
      }
      p {
        margin-bottom: 5px;
        line-height: 20px;
        font-size: 14px;
      }
      &.text {
        position: static;
        padding: 15px 20px;
      }
    }
  }
}
</style>