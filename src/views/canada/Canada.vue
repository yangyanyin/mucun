<template>
  <div class="canada">
    <div class="banner">
      <img :src="bannerData[pageName]" />
    </div>
    <router-view></router-view>

    <ContentImg></ContentImg>
  
    <ContactUs></ContactUs>
  </div>
</template>
<script>
import ContentImg from "../../components/ContentImg";
import ContactUs from "../../components/commonComponent/ContactUs";
export default {
  components: {
    ContentImg,
    ContactUs
  },
  data () {
    return {
      pageName: this.$route.name,
      bannerData: {
        index: require('../../assets/images/canada/canada-banner.jpg'),
        one: require('../../assets/images/canada/canada-banner1.jpg'),
        two: require('../../assets/images/canada/canada-banner2.jpg'),
        three: require('../../assets/images/canada/canada-banner3.jpg'),
        four: require('../../assets/images/canada/canada-banner4.jpg')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.banner {
    width: 100%;
    overflow: hidden;
    @media (max-width: 767px) {
      padding-top: 60px;
      height: 240px;
    }
    img {
        position: relative;
        width: 100%;
        height: 100%;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
  }

</style>
<style lang="less">
.canada .canada-title {
  position: relative;
  font-size: 28px;
  text-align: center;
  padding-bottom: 20px;
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 42px;
    height: 5px;
    margin-left: -21px;
    background: #447375FF;
  }
  i {
    display: block;
  }
  @media (max-width: 1200px) {
    font-size: 26px;
    padding-bottom: 18px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
  }
}
</style>