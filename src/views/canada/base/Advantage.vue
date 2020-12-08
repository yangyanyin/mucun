<template>
  <div class="advantage margin-t-80" :class="'advantage-type' + advantage.line_number">
    <h3 class="canada-title">
      {{advantage.title}}
    </h3>
    <div class="list pc-max-width clearfix" :class="`line-${advantage.line_number}`">
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
  @media(min-width: 767px) {
    .line-4 {
      display: block;
      .item {
        width: 20%;
        margin-right: 6.6%;
        &:nth-child(3n+0) {
          margin-right: 6.6%;
        }
        &:nth-child(4n+0) {
          margin-right: 0;
        }
      }
    }
    .line-7 {
      display: block;
      .item {
        width: 11%;
        margin-right: 3.8%;
        &:last-child {
          margin-right: 0;
        }
        &:nth-child(3n+0) {
          margin-right: 3.8%;
        }
      }
    }
    .line-8 {
      display: block;
      .item {
        width: 10.7%;
        margin-right: 1.9%;
        &:last-child {
          margin-right: 0;
        }
        &:nth-child(3n+0) {
          margin-right: 1.9%;
        }
      }
    }
  }
  .item {
    width: 26%;
    margin: 30px 11% 0 0;
    text-align: center;
    @media(min-width: 767px) {
      &:nth-child(3n+0) {
        margin-right: 0;
      }
    }
    img {
      display: block;
      width: 100%;
    }
    h4 {
      padding: 20px 0 10px;
      font-size: 16px;
      color: #000;
      color: #447375FF;
    }
    p {
      font-size: 13px;
      line-height: 26px;
    }
  }
  @media(max-width: 767px) {
    padding: 20px 0;
    .item {
      width: 49%;
      margin-right: 2%;
      &:nth-child(even) {
        margin-right: 0;
      }
      h4 {
        padding: 10px 0 5px;
        font-size: 13px;
      }
      p {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
}
</style>