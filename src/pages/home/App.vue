<template>
    <Layout>  
        <!-- banner -->
		<Banner />

        <!-- 为什么选择我们 -->
        <div class="choose-us pc-max-width margin-t-80">
            <div class="public-title">
                <h3>为什么选择我们？</h3>
                <p>why did you choose us</p>
            </div>
        </div>

        <!-- 全球护照精选 -->
        <div class="passport margin-t-80">
            <div class="pc-max-width">
                <div class="public-title">
                    <h3>全球护照精选</h3>
                    <p>global passport selection</p>
                </div>
            </div>
        </div>

        <!-- 为什么需要一本小国护照 -->
        <div class="country-passport pc-max-width margin-t-80">
            1
            <div class="public-title">
                <h3>为什么需要一本小国护照？</h3>
                <p>why do you need a small country passport</p>
            </div>
            <div class="content clearfix">
                <div class="list left">
                    <h3>非全球征税</h3>
                    <p>离岸金融业发达保护客户隐私，信息安全。</p>
                </div>
                <div class="list left">
                    <h3>全球通行</h3>
                    <p>免签通行全球160国家（包括欧盟、申根、美加澳等发达地区）</p>
                </div>
                <div class="list left">
                    <h3>轻松入籍</h3>
                    <p>低门槛，投资即可办理移民入籍，无语言、学历、商业背景等要求</p>
                </div>
                <div class="list left">
                    <h3>方式多样</h3>
                    <p>最低10万美金起投，投赠、房产 基金等多种投资方式可选。</p>
                </div>
                <div class="list left">
                    <h3>入读国际学校</h3>
                    <p>持海外护照子女有机会入读国际学校或低分就读名牌大学。</p>
                </div>
            </div>
        </div>

        <!-- 移居狮城 -->
        <div class="migration margin-t-80">
            <div class="pc-max-width">
                <div class="public-title">
                    <h3>移居狮城</h3>
                    <p>migation project</p>
                </div>
                <div class="content">
                    <h3>儒商移民为您全程提供</h3>
                    <p>一站式新加坡公司注册、税务身份、资产安全、银行开户、精英教育、海外资产配置、家族办公室服务</p>
                    <a href="/">了解更多</a>
                </div>
            </div>
        </div>

        <!-- 关于我们 -->
        <div class="index-about pc-max-width margin-t-80">
            <div class="public-title">
                <h3>关于我们</h3>
                <p>about us</p>
            </div>
        </div>

        <!-- 联系我们 -->
        <div class="index-contact pc-max-width margin-t-80">
            <div class="public-title">
                <h3>联系我们</h3>
                <p>contact us</p>
            </div>
        </div>

    </Layout>
</template>

<script>
import Layout from '../../components/layout.vue'
import Banner from './component/banner.vue'
import './index.less'

export default {
    name: 'app',
    components: {
        Layout,
        Banner
    }
}
</script>

