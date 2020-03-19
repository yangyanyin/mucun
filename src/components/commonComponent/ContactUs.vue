<template>
  <div class="contact-us pc-max-width margin-t-80">
    <div class="content animation-show clearfix">
      <div class="map left">
        <div class="img">
          <img src="../../assets/images/map-img.jpg" />
        </div>
      </div>
      <div class="right">
        <InputBox />
      </div>
    </div>

    <!-- 国旗 -->
    <Flag />

    <!--咨询完成弹窗 -->
    <div class="message-success" :class="{on:messageSuccess}" v-if="messageSuccess">
      <div class="content">
        <span class="close">
          <img src="../../assets/images/close.png" @click="closeMessage" />
        </span>
        <img src="../../assets/images/message-img.jpg" />
        <p class="p1">感谢您使用我们的免费咨询服务</p>
        <p class="p1">我们稍后会联系您</p>
        <p class="p1">您也可以拨打</p>
        <p class="tel">(+65) 8866 5586</p>
        <p class="p2">进行直接咨询</p>
        <a href="/passport">了解更多</a>
      </div>
    </div>
  </div>
</template>
<script>
import Flag from "../commonComponent/NationalFlag";
import InputBox from "../commonComponent/InputBox";
export default {
  components: {
    Flag,
    InputBox
  }
};
</script>
<style scoped lang="less">
/** 联系我们 **/
.contact-us {
  .map {
    width: 67%;
    padding-right: 40px;
    div {
      overflow: hidden;
    }
    img {
      display: block;
      height: 520px;
    }
  }
  .right {
    width: 33%;
  }
  @media (max-width: 767px) {
    .map {
      float: none;
      width: 100%;
      padding: 0;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}

.message-success {
  position: fixed;
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