<template>
  <div class="footer">
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