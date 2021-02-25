<template>
  <div>
    <Header />
    <slot></slot>
    <Footer />
    <WapFooter />
  </div>
</template>
<script>
import Header from "./commonComponent/header.vue"
import Footer from "./commonComponent/footer.vue"
import WapFooter from "./commonComponent/WapFooter"
import "../assets/less/custom.less";
export default {
  components: {
    Header,
    Footer,
    WapFooter
  }
}
</script>