<!-- 护照项目-评分 -->
<template>
  <div class="score">
    <h3>
      护照评分
      <i>Passport score</i>
    </h3>
    <img class="flag" :src="score.icon"  />
    <div>
      <span>全球排名</span>
      <em>
        <s :style="{width: score.ranking/200 * 100 + '% '}"></s>
      </em>
      <i>{{score.ranking}}</i>
    </div>
    <div>
      <span>免签国家</span>
      <em>
        <s :style="{width: score.free/200 * 100 + '%'}"></s>
      </em>
      <i>{{score.free}}</i>
    </div>

    <div>
      <span>生活舒适度</span>
      <ul class="stars">
        <li v-for="(i, k) in 10" :key="k" :class="{on: score.stars > k}"></li>
      </ul>
      <i>{{score.stars}}</i>
    </div>

    <p class="seg"></p>
  </div>
</template>
<script>
export default {
  props: {
    score: Object
  }
}
</script>
<style scoped lang="less">
.score {
  position: relative;
  h3 {
    padding-bottom: 5px;
    font-size: 16px;
    i {
      display: block;
      padding-top: 2px;
      font-size: 12px;
      text-transform: uppercase;
    }
  }
  .flag {
    position: absolute;
    width: 98px;
    top: -103px;
    right: 0;
  }
  > div {
    position: relative;
    height: 22px;
    line-height: 22px;
    margin-top: 15px;
    padding: 9px 55px 0 80px;
    span {
      position: absolute;
      left: 0;
      top: 0;
      font-size: 12px;
      color: #447375;
    }
    em {
      display: block;
      height: 8px;
      background: #D9D9D9;
      border-radius: 90px;
      s {
        display: block;
        height: 8px;
        background: #447375;
        border-top-left-radius: 90px;
        border-bottom-left-radius: 90px;
      }
    }
    i {
      position: absolute;
      right: 0;
      top: 0;
      width: 36px;
      text-align: center;
      font-size: 20px;
      color: #447375;
    }
    ul {
      display: flex;
      justify-content: space-between;
      li {
        position: relative;
        display: inline-block;
        top: -5px;
        width: 14px;
        height: 14px;
        background: #D9D9D9;
        background: url('../../../assets//images/passport/star-not.png') no-repeat;
        background-size: 100%;
        border-radius: 100%;
        &.on {
          background: url('../../../assets//images/passport/star.png') no-repeat;
          background-size: 100%;
        }
      }
    }
  }

  .seg {
    position: relative;
    width: 100%;
    height: 1px;
    margin-top: 50px;
    background: #4F7274;
    &:before {
      content: '';
      position: absolute;
      width: 70px;
      height: 1px;
      top: 0;
      left: 50%;
      margin-left: -35px;
      background: #fafafa;
    }
    &:after {
      content: '';
      position: absolute;
      width: 7px;
      height: 7px;
      top: 0;
      left: 50%;
      transform: rotate(45deg) translateX(-50%);
      border: 1px solid #4F7274;
    }
  }
  @media (max-width: 767px) {
    .flag {
      width: 80px;
      top: -80px;
    }
    >div {
      margin-top: 10px;
    }
    .seg {
      margin-top: 30px;
    }
  }
}

</style>