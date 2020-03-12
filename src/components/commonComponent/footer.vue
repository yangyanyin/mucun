<template>
  <div class="footer">
    <div class="pc-max-width clearfix">
      <div class="left">
        <div class="hotline">
          咨询热线: 
          <strong>+65 6909 8015</strong>
          <span><img src="../../assets/images/footer-iphone.png" /></span>
          <span><img src="../../assets/images/footer-email.png" /></span>
          <span><img src="../../assets/images/footer-wx.png" /></span>
        </div>
        <div class="nav clearfix">
          <div class="menu">
            <a href="">关于我们</a>
            <a href="">常见问题</a>
            <a href="">成功案例</a>
            <a href="">本站搜索</a>
          </div>
          <div class="menu">
            <a href="">欧盟护照</a>
            <a href="">英联邦护照</a>
            <a href="">新加坡移民</a>
            <a href="">热点新闻</a>
          </div>
        </div>
        <div class="address">
          <p>公司地址：</p>
          <p>8 Marina Boulevard #14-03A ,Marina Bay Financial Centre Tower 1 S018981</p>
          <p>新加坡滨海林荫大道8号滨海金融中心14楼</p>
        </div>
      </div>
      <div class="right"></div>
    </div>
    <div class="copyright">© 2020 Singapore Global Passport Exchange Centre Pte Ltd. All Rights Reserved.</div>
    <!-- return top -->
    <div class="return-top" v-if="showReturnTop" @click="returnTop">
      <img src="../../assets/images/return-top.png" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showReturnTop: false
    };
  },
  methods: {
    returnTop() {
      let scrTop = 0;
      let iSpeed = 0;
      let backTopTimer = null;
      backTopTimer = setInterval(function() {
        scrTop = document.body.scrollTop || document.documentElement.scrollTop;
        iSpeed = scrTop / 5;
        if (scrTop === 0) {
          clearInterval(backTopTimer);
        }
        document.body.scrollTop = scrTop - iSpeed;
        document.documentElement.scrollTop = scrTop - iSpeed;
      }, 10);
    },
    scrollTop() {
      let scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scroll > 500) {
        this.showReturnTop = true;
      } else {
        this.showReturnTop = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollTop);
  }
};
</script>
<style lang="less" scoped>
.footer {
  background: #0f1f24;
}
.return-top {
  position: fixed;
  right: 70px;
  bottom: 100px;
  width: 35px;
  border: 1px solid #bd8c67;
  padding: 6px;
  border-radius: 5px;
  cursor: pointer;
  background: #bd8c67;
  opacity: 0.8;
  img {
    display: block;
    width: 100%;
  }
  @media (max-width: 767px) {
    right: 10px;
    bottom: 80px;
  }
}
</style>