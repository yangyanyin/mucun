<template>
  <div class="contact-us pc-max-width margin-t-80">
    <div class="content clearfix">
      <div class="map left">
        <div class="img">
          <img src="../../assets/images/map-img.gif" />
        </div>
      </div>
      <div class="right">
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
  .right {
    width: 33%;
    @media (max-width: 767px) {
      width: 100%;
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