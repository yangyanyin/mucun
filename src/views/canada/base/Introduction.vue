<template>
  <div class="introduction margin-t-80 pc-max-width">
    <h3 class="canada-title">
      {{introduction.title.zh}}
      <i>{{introduction.title.en}}</i>
    </h3>
    <p v-for="(text, key) in introduction.detail" :key="key">
      {{text}}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    introduction: Object
  }
}
</script>
<style scoped lang="less">
.introduction {
  display: block;
  p {
    margin-top: 35px;
    font-size: 16px;
    line-height: 28px;
  }
}
</style>