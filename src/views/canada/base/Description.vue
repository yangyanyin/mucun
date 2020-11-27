<template>
  <div class="description pc-max-width margin-t-80">
    <div v-for="(item, key) in description" :key="key" class="clearfix description-item">
      <div class="img" :class="key === 1 ? 'left' : 'right'">
        <img :src="item.icon">
      </div>
      <div class="text" :class="key === 1 ? 'right' : 'left'">
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
    padding: 0 5px;
    .list {
      width: 100%;
      text-align: center;
      strong {
        font-size: 20px;
        margin: 20px 0 10px 0;
      }
      p {
        line-height: 24px;
        font-size: 14px;
      }
      &.text {
        position: static;
        padding: 0;
        &.left {
          padding: 0;
          text-align: center;
        }
      }
    }
  }
}
</style>