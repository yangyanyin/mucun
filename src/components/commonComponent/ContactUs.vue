<template>
  <div class="contact-us pc-max-width margin-t-80">
    <div class="content clearfix">
      <div class="map left">
        <div class="img">
          <img src="../../assets/images/map-img.gif" />
        </div>
      </div>
      <div class="right contact-input">
        <h3>免费咨询服务</h3>
        <p>
          <i>电话:</i>
          <strong>+65 8866 5586</strong>
        </p>
        <p>
          <i>邮箱:</i>sgpec@sgpec.sg
        </p>
        <p>
          <i>地址:</i>新加坡滨海林荫道8号滨海湾金融中心1号大楼（渣打银行）14楼03A单元
        </p>
        <InputBox />
      </div>
    </div>

    <!-- 国旗 -->
    <Flag />
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
  .contact-input {
    width: 33%;
    padding: 30px 40px;
    border-radius: 5px;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
    h3 {
      position: relative;
      font-size: 26px;
      padding-left: 18px;
      padding-bottom: 22px;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 5px;
        width: 4px;
        height: 26px;
        background: #447375;
      }
    }
    p {
      position: relative;
      padding: 0 0 5px 40px;
      i {
        position: absolute;
        left: 0;
        top: 0;
        color: #447375;
        padding-right: 5px;
      }
    }
    @media (max-width: 767px) {
      width: 100%;
      float: none;
      margin-top: 15px;
      padding: 15px 20px;
      h3 {
        font-size: 22px;
        padding-bottom: 15px;
        &::after {
          height: 20px;
        }
      }
    }
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
</style>