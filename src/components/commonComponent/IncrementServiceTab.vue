<template>
  <div class="tab">
    <span><router-link to="/bank">新加坡银行开户</router-link></span>
    <span><router-link to="/stock">海外股票账户</router-link></span>
    <span> <router-link to="/estate">新加坡房产</router-link></span>
    <span> <router-link to="/company">新加坡注册公司</router-link></span>
  </div>
</template>
<style scoped lang="less">
.tab {
  display: none;
  @media (max-width: 767px) {
    display:flex;
    justify-content: center;
  }
  span {
    display: inline-block;
    // width: 25%;
    padding: 20px 7px;
    text-align: center;
    a {
      display: inline-block;
      color: #444;
      font-size: 12px;
      padding-bottom: 5px;
      border-bottom: 2px solid #fff;
      &.router-link-active {
        color: #447375;
        border-bottom: 2px solid #447375;
      }
    }
  }
}
</style>