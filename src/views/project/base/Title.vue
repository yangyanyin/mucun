<script>
export default {
  props: {
    name: String
  },
  render (c) {
    return c('h3', this.name)
  }
}
</script>
<style scoped lang="less">
h3 {
  color: #617D81;
  font-size: 22px;
  @media(max-width: 767px) {
    text-align: center;
    font-size: 20px;
  }
}
</style>