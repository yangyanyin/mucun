<template>
  <div class="message-success" :class="{on:status}">
    <div class="content">
      <span class="close">
        <img src="../../assets/images/close.png" @click="closeMessage" />
      </span>
      <img src="../../assets/images/message-img.jpg" />
      <p class="p1">感谢您使用我们的免费咨询服务</p>
      <p class="p1">我们稍后会联系您</p>
      <p class="p1">您也可以拨打</p>
      <p class="tel"><a href="tel:6588665586">(+65) 8866 5586</a></p>
      <p class="p2">进行直接咨询</p>
      <router-link to="/passport">了解更多</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    status: Boolean
  },
  methods: {
    closeMessage() {
      this.$emit('messageType')
    }
  }
}
</script>
<style scoped lang="less">
.message-success {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 480px;
    height: 600px;
    margin: -300px 0 0 -240px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    opacity: 0;
    transform: translateY(200px);
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 15px;
      height: 15px;
      opacity: 0.7;
      color: #fff;
      font-size: 18px;
      cursor: pointer;
    }
    img {
      display: block;
      width: 100%;
      margin-bottom: 10px;
    }
    p {
      font-size: 18px;
      padding-top: 18px;
    }
    .tel {
      color: #447375;
      padding-top: 5px;
      font-size: 20px;
    }
    .p2 {
      padding-top: 5px;
      font-size: 16px;
    }
    a {
      display: block;
      width: 240px;
      height: 60px;
      border-radius: 30px;
      background: #447375;
      line-height: 60px;
      color: #fff;
      margin: 20px auto 0;
      font-size: 18px;
    }
  }
  &.on {
    .content {
      animation: showMessageSuccess 0.8s;
      animation-fill-mode: forwards;
    }
  }
  @media (max-width: 767px) {
    padding: 0 10px;
    .content {
      width: 90%;
      left: 5%;
      height: 460px;
      margin: -230px 0 0 0;
      p {
        font-size: 16px;
        padding-top: 15px;
      }
      .p2 {
        padding-top: 5px;
        font-size: 14px;
      }
      a {
        width: 80%;
        margin: 15px auto;
        height: 40px;
        line-height: 40px;
        border-radius: 20px;
        line-height: 40px;
        font-size: 16px;
      }
    }
  }
}

@keyframes showMessageSuccess {
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>