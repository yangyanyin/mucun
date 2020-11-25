<template>
  <Layout>
    <router-view :key="$route.fullPath"></router-view>
  </Layout>
</template>
<script>
import Layout from "./components/layout";
export default {
  components: {
    Layout
  }
}
</script>