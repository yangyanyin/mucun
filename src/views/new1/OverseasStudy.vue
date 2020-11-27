<!-- 留学 -->
<template>
    <div class="study">
        <div class="banner">
            <img :src="bannerList[pageKey]" />
        </div>
        <!-- 菜单 -->
        <MenuItem :menuList="menuList"></MenuItem>

        <router-view></router-view>

        <ContentImg></ContentImg>
        <ContactUs></ContactUs>
    </div>
</template>

<script>
import MenuItem from "../../components/MenuItem";
import ContactUs from "../../components/commonComponent/ContactUs";
import ContentImg from "../../components/ContentImg";
export default {
    components: {
        MenuItem,
        ContactUs,
        ContentImg
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
    overflow: hidden;
    @media (max-width: 767px) {
      padding-top: 60px;
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
<style lang="less">
.study .study-title {
    position: relative;
    font-size: 28px;
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
    @media (max-width: 1200px) {
        font-size: 26px;
        padding-bottom: 18px;
    }
}
</style>