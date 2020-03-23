<template>
  <router-view :key="key"></router-view>
</template>
<script>
export default {
  data () {
    return {
      key: this.$route.path + Math.random()
    }
  }
}
</script>