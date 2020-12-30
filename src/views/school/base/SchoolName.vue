<template>
  <div class="name left">
    <img :src="nameInfo.img" :alt="nameInfo.zh_name" />
    <h3>
      {{nameInfo.zh_name}}
      <i>{{nameInfo.en_name}}</i>
    </h3>
  </div>
</template>
<script>
export default {
  props: {
    nameInfo: Object
  }
}
</script>
<style scoped lang="less">
.name {
  width: 42%;
  padding: 30px;
  img {
    display: block;
    width: 100%;
  }
  h3 {
    height: 78px;
    padding: 15px 0;
    text-align: center;
    font-size: 20px;
    color: #fff;
    background: #447375;
    i {
      display: block;
      font-size: 16px;
    }

  }
}
</style>