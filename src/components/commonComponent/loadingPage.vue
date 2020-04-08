<template>
  <div class="loading">
    <img src="../../assets/images/loading.gif" />
    <p>正在加载中，请稍候...</p>
  </div>
</template>
<style lang="less" scoped>
.loading {
  display: block;
  padding: 340px 0 250px;
  text-align: center;
  img {
    display: block;
    width: 110px;
    height: 110px;
    margin: auto;
  }
  p {
    display: block;
    margin-top: 10px;
    font-size: 16px;
    color: #447375;
  }
  @media (max-width: 767px) {
    padding: 240px 0 150px;
    img {
      width: 70px;
      height: 70px;
    }
    p {
      margin: 0;
      font-size: 12px;
    }
  }
}
</style>