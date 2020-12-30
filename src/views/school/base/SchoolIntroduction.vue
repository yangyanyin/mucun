<template>
  <div class="int right">
    <img :src="introduction.img" />
    <h3>学校简介</h3>
    <p v-for="(des, k) in introduction.des" :key="k">{{ des }}</p>
    <div class="clearfix">
      <ul v-for="(item, title, k) in introduction.table" :key="k">
        <li class="t">{{ title }}</li>
        <li v-for="(n, i) in item" :key="i">
          {{ n.zh }}
          <i v-if="n.en">{{ n.en }}</i>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    introduction: Object,
  },
};
</script>
<style scoped lang="less">
.int {
  width: 58%;
  padding: 70px;
  border-left: 1px solid #D6D6D6;
  img {
    display: block;
    width: 100%;
  }
  h3 {
    padding: 40px 0 30px;
    font-size: 20px;
    color: #3E3E3E;
  }
  p {
    margin-bottom:30px;
    font-size: 16px;
    line-height: 28px;
  }
  ul {
    float: left;
    width: 50%;
    margin-top: 20px;
    border: 1px solid #D6D6D6;
    text-align: center;
    li {
      font-size: 16px;
      height: 94px;
      padding: 22px 0;
      border-bottom: 1px solid #D6D6D6;
      &.t {
        height: 50px;
        padding: 0;
        line-height: 50px;
      }
      &:last-child {
        border: none;
      }
      i {
        display: block;
        padding-top: 2px;
        color: #aaa;
        font-size: 16px;
      }
    }
  }
}
</style>