<template>
  <Layout>
    <div class="">
      新加波域移民
      <!-- 联系我们 -->
      <ContactUs />
    </div>
  </Layout>
</template>

<script>
import Layout from "../../components/layout.vue";
import { animation, windowScroll } from "../../assets/js/config.js";
import ContactUs from "../../components/commonComponent/ContactUs";
export default {
  name: "app",
  components: {
    Layout,
    ContactUs
  },
  mounted() {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    animation(scroll);
    windowScroll();
  }
};
</script>
<style lang="less" scoped>
</style>

