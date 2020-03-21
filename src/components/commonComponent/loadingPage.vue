<template>
  <div class="loading">
    <img src="../../assets/images/loading.gif" />
  </div>
</template>
<style lang="less" scoped>
.loading {
  display: block;
  padding: 340px 0 250px;
  img {
    display: block;
    width: 150px;
    height: 150px;
    margin: auto;
  }
  @media (max-width: 767px) {
    padding: 240px 0 150px;
    
  }
}
</style>