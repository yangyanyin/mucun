<!-- 留学 -->
<template>
    <Layout>
        <div class="banner">
            <img :src="bannerList[pageKey]" />
        </div>
        
        <!-- 菜单 -->
        <MenuItem :menuList="menuList"></MenuItem>
        
        <div class="content">
          <router-view></router-view>
        </div>
    </Layout>
</template>

<script>
import Layout from "../../components/layout.vue";
import MenuItem from "../../components/MenuItem";
export default {
    components: {
        Layout,
        MenuItem
    },
    data () {
        return {
            pageKey: this.$route.name,
            bannerList: {
                Study1: require('../../assets/images/overseas-study/banner1.jpg'),
                Study2: require('../../assets/images/overseas-study/banner2.jpg'),
                Study3: require('../../assets/images/overseas-study/banner3.jpg'),
                Study4: require('../../assets/images/overseas-study/banner2.jpg'),
                Study5: require('../../assets/images/overseas-study/banner2.jpg')
            },
            menuList: [
                {
                    url: '/overseas-study/one',
                    zh_text: '狮城留学'
                },
                {
                    url: '/overseas-study/tow',
                    zh_text: '新加坡公立学校'
                },
                {
                    url: '/overseas-study/three',
                    zh_text: '新加坡国际学校'
                },
                {
                    url: '/overseas-study/four',
                    zh_text: '新加坡学前教育'
                },
                {
                    url: '/overseas-study/five',
                    zh_text: '留学讲座'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.banner {
    width: 100%;
    height: 340px;
    overflow: hidden;
    @media (max-width: 767px) {
      padding-top: 60px;
      height: 200px;
    }
    img {
        position: relative;
        width: auto;
        height: 100%;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
  }

</style>