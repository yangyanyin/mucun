<!-- 留学 -->
<template>
    <div class="study">
        <Banner :bannerImgList="bannerList"></Banner>

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
import Banner from "../../components/commonComponent/banner";
export default {
    components: {
        MenuItem,
        ContactUs,
        ContentImg,
        Banner
    },
    data () {
        return {
            bannerList: [
                {img: require('../../assets/images/overseas-study/banner1.jpg')},
                {img: require('../../assets/images/overseas-study/banner2.jpg')},
                {img: require('../../assets/images/overseas-study/banner3.jpg')}
            ],
            menuList: [
                {
                    url: '/overseas-study/one',
                    zh_text: '狮城留学'
                },
                {
                    url: '/overseas-study/four',
                    zh_text: '新加坡学前教育'
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
                    url: '/overseas-study/five',
                    zh_text: '留学讲座'
                }
            ]
        }
    }
}
</script>
<style lang="less">
.study {
    .banner {
        .img {
            height: 540px;
            @media (max-width: 767px) {
                height: 230px;
                img {
                    height: 170px;
                }
            }
        }
    }
    .study-title {
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
        @media (max-width: 1200px) {
            font-size: 26px;
            padding-bottom: 18px;
        }
        @media (max-width: 767px) {
            font-size: 20px;
        }
    }
}
</style>