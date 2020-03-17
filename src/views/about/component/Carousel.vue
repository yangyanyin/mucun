<template>
  <el-carousel :interval="40000" type="card" height="390px">
    <el-carousel-item v-for="item in evaluation" :key="item">
      <img class="avatar" src="../../../assets/images/about-avatar.png" />
      <p>{{item.text}}</p>
      <img class="comma" src="../../../assets/images/comma.png" alt="">
      <span>{{item.name}}</span>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data () {
    return {
      evaluation: [
        {
          name: '- 塞浦路斯客戶 青岛 Z先生 -',
          text: '我通过朋友介绍认识了新加坡全球护照交流中心的尹小姐，她的专业知识和人性化的贴心服务，协助我们全家顺利完成了第二身份的手续，直至今天，任何时候我们不懂的问题，找她她总是竭尽全力给予我们满意的答案，不错的移民顾问。'
        },
        {
          name: '- 杭州 OY 夫妻 -',
          text: '2020的疫情让我感觉有第二身分的重要性了，在这之前我并没有这么着急办理，甚至认为自己有美国签证就哪里都可以通行了。结果在爆发后，我需要去别的地方开会并拓展业务时受到了阻碍。我立刻打电话给JAMES要求最快的速度办理第二身分。他马上帮我准备材料，立刻提交办理，18天就批准。从此省去了出国办签证的烦恼，头一次感觉到心里那种踏实的感觉。这家移民机构打心底的让我欣赏。'
        },
        {
          name: '- 杭州 OY 夫妻 -',
          text: '很满意的移民体验，工作人员专程飞来杭州专业耐心指导我和我先生准备申请材料，虽然办理过程中出现了点小插曲，但是对他们的专业服务给予99分，会继续推荐给我们的朋友！'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.el-carousel--horizontal {
  overflow: initial !important;
}
.el-carousel__item{
  top: 40px;
  text-align: center;
  background: #fff;
  border-radius: 10px;
  height: 260px;
  padding: 0 40px;
  overflow: initial !important;
  box-shadow: 0 0 7px #7d7d7d;
  @media(max-width: 767px) {
    overflow: hidden !important;
  }
  p {
    color: #447375;
    font-size: 12px;
    line-height: 20px;
  }
  .avatar {
    position: relative;
    top: -20px;
    display: inline-block;
    width: 45px;
  }
  .comma {
    display: block;
    width: 30px;
    margin: 20px auto 0;
  }
  span {
    display: inline-block;
    padding-top: 20px;
    color: #B9B9B9;
  }
  &.is-active {
    top: 0;
    height: 390px;
    overflow: initial;
    .avatar {
      top: -40px;
      width: 80px;
    }
    .comma {
      width: 50px;
      margin: 10px auto 0;
    }
    p {
      position: relative;
      top: -20px;
      line-height: 26px;
      font-size: 16px;
    }
    span {
      padding-top: 20px;
    }
    @media(max-width: 767px) {
      width: 90%;
      left: -20%;
      overflow: initial !important;
      p {
        top: -30px;
        font-size: 14px;
        line-height: 24px;
      }
      .comma {
        width: 30px;
        margin: -10px auto;
      }
    }
  }
}
</style>