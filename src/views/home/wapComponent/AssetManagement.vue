<template>
  <div class="asset-management">
    <h3>资产管理</h3>
    <img src="../../../assets/images/home/asset-management-img.jpg" alt="资产管理" />
    <p>引领全球资产配置潮，以眼界撬动世界财富</p>
    <router-link to="/asset">了解详情</router-link>
  </div>
</template>
<style scoped lang="less">
.asset-management{
  position: relative;
  display: none;
  padding: 25px 10px;
  border-top: 10px solid #f7f7f7;
  text-align: center;
  @media (max-width: 767px) {
    display: block;
  }
  h3 {
    display: block;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
  img {
    display: block;
    width: 100%;
    margin-top: 15px;
    border-radius: 5px;
  }
  p {
    position: absolute;
    z-index: 0;
    left: 0;
    z-index: 1;
    top: 110px;
    width: 100%;
    font-size: 16px;
    color: #fff;
  }
  a {
    position: absolute;
    z-index: 1;
    top: 150px;
    left: 50%;
    width: 120px;
    height: 36px;
    margin-left: -60px;
    border: 1px solid #fff;
    border-radius: 36px;
    line-height: 34px;
    color: #fff;
    font-size: 13px;
    opacity: .8;
  }
}
</style>