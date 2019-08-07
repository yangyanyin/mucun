<template>
    <Layout>  
        <loadingPage v-if="!isLoadingsTatus" />
        <template v-else>
            <!-- banner -->
            <Banner :bannerImgList="bannerImg" />

            <!-- 为什么选择我们 -->
            <div class="choose-us pc-max-width margin-t-80">
                <div class="public-title animation-show">
                    <h3>为什么选择我们？</h3>
                    <p>why did you choose us</p>
                </div>
                <div class="content">
                    <div class="list clearfix animation-show">
                        <div class="left">
                            <img src="../../assets/images/index/choose-us-icon1.png" />
                            <h3>海外一手办理</h3>
                            <p>性价比明显</p><p>境内不留记录</p>
                        </div>
                        <div class="left">
                            <img src="../../assets/images/index/choose-us-icon2.png" />
                            <h3>国家立法项目</h3>
                            <p>权威渠道直营</p><p>安全专业靠谱</p>
                        </div>
                        <div class="left">
                            <img src="../../assets/images/index/choose-us-icon3.png" />
                            <h3>全球资产配置</h3>
                            <p>律师团队+税务+私行开户</p><p>+资金出境</p>
                        </div>
                    </div>
                    <div class="low-price animation-show">
                        <img src="../../assets/images/index/low-price.png" />
                    </div>
                    <div class="map clearfix animation-show">
                        <ul class="left">
                            <li>
                                <strong>英联邦简介：</strong>英联邦简介：英联邦是一个国际组织，由52个独立权国家（包括属地）所组成，成员大多为前英国殖民地或者保护国，英联邦元首为伊丽莎白二世女王，同时身兼包括英国在内的16个英联邦王国的国家元首，此16国构成了一个现代版的共主邦联。
                            </li>

                            <li>
                                <strong>欧盟护照简介：</strong>根据欧盟条约8.1条款规定，任何一个欧盟成员国的公民都是欧盟公民，持欧盟护照可在欧洲32国自由居住生活、学习并和当地居民享受同等福利待遇。
                            </li>
                        </ul> 
                        <img class="right web-map" src="../../assets/images/index/map.png" />
                        <img class="right wap-map" src="../../assets/images/index/wap-map.png" />
                    </div>
                </div>
            </div>

            <!-- 全球护照精选 -->
            <div class="passport margin-t-80">
                <div class="pc-max-width">
                    <div class="public-title animation-show">
                        <h3>全球护照精选</h3>
                        <p>global passport selection</p>
                    </div>
                    <div class="content clearfix">
                        <div class="left list animation-show" v-for="(countrys, index) in countryPassport" :key="index">
                            <div class="brick-item">
                                <a :href="'/project/details/'+countrys.country_id">
                                    <img v-lazy="{src: countrys.img, loading: require('../../assets/images/country-loading.png'), error: require('../../assets/images/country-loading.png')}" />
                                    <div class="more">
                                        <span>{{countrys.en_name}}</span>
                                        <i>{{countrys.visa_free_number}}</i>
                                        <p>visa-free sccre</p>
                                    </div>
                                </a>
                                <div class="name">
                                    <a :href="'/project/details/'+countrys.country_id"><strong>{{countrys.name}}</strong></a>
                                    <p v-html="countrys.introduction"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 为什么需要一本小国护照 -->
            <div class="country-passport pc-max-width margin-t-80" >
                <div class="public-title animation-show">
                    <h3>为什么需要一本小国护照？</h3>
                    <p>why do you need a small country passport</p>
                </div>
                <div class="content clearfix animation-show">
                    <div class="list left">
                        <span><img src="../../assets/images/index/passport-icon1.png"></span>
                        <h3>非全球征税</h3>
                        <p>离岸金融业发达保护客户隐私，信息安全。</p>
                    </div>
                    <div class="list left">
                        <span><img src="../../assets/images/index/passport-icon2.png"></span>
                        <h3>全球通行</h3>
                        <p>免签通行全球160国家（包括欧盟、申根、美加澳等发达地区）</p>
                    </div>
                    <div class="list left">
                        <span><img src="../../assets/images/index/passport-icon3.png"></span>
                        <h3>轻松入籍</h3>
                        <p>低门槛，投资即可办理移民入籍，无语言、学历、商业背景等要求</p>
                    </div>
                    <div class="list left">
                        <span><img src="../../assets/images/index/passport-icon4.png"></span>
                        <h3>方式多样</h3>
                        <p>最低10万美金起投，投赠、房产 基金等多种投资方式可选。</p>
                    </div>
                    <div class="list left">
                        <span><img src="../../assets/images/index/passport-icon5.png"></span>
                        <h3>入读国际学校</h3>
                        <p>持海外护照子女有机会入读国际学校或低分就读名牌大学。</p>
                    </div>
                </div>
            </div>

            <!-- 移居狮城 -->
            <div class="migration margin-t-80">
                <div class="pc-max-width">
                    <div class="public-title animation-show">
                        <h3>移居狮城</h3>
                        <p>migation project</p>
                    </div>
                    <div class="content animation-show">
                        <h3>儒商移民为您全程提供</h3>
                        <p>一站式新加坡公司注册、税务身份、资产安全、银行开户、精英教育、海外资产配置、家族办公室服务。</p>
                        <a href="/city">了解更多></a>
                    </div>
                </div>
            </div>

            <!-- 关于我们 -->
            <div class="index-about pc-max-width margin-t-80">
                <div class="public-title animation-show">
                    <h3>关于我们</h3>
                    <p>about us</p>
                </div>
                <div class="content animation-show">
                    <div class="img">
                        <img src="../../assets/images/index/about-bg.png" />
                    </div>
                    <div class="info">
                        <span>
                            <img src="../../assets/images/index/about-title.png" />
                        </span>
                        <p class="p1">儒商资管作为儒商文化的忠实信仰者，十年深耕新加坡，我们专注于为亚洲区域范围内的成功企业家提供第二居住和公民身份的服务，使个人或家庭成为全球公民。这是我们团队通过专业的一对一定制服务体验实现的，客户通过我们简化了成为全球公民的复杂性，并通过和相关机构保持长期稳定关系，可满足亚洲区域企业家对全球公民的需求。</p>
                        <p>儒商资管立足狮城，放眼亚洲，专业服务亚洲企业成功精英。</p>
                    </div>
                </div>
            </div>

            <!-- 联系我们 -->
            <div class="index-contact pc-max-width margin-t-80">
                <div class="public-title animation-show">
                    <h3>联系我们</h3>
                    <p>contact us</p>
                </div>
                <div class="content animation-show">
                    <div class="advisory">
                        <img class="web-img" src="../../assets/images/index/contact-bg.png" />
                        <img class="wap-img" src="../../assets/images/index/contact-bg-wap.png" />
                        <div class="input-box">
                            <h3>免费咨询服务</h3>
                            <ul class="clearfix">
                                <li>
                                    <input class="name" type="text" placeholder="称呼" v-model="userName" />
                                    <p v-if="nameError">请输入称呼！</p>
                                </li>
                                <li>
                                    <input class="tel" type="tel" placeholder="电话" v-model="userTel" />
                                    <p v-if="telError">请输入电话！</p>
                                </li>
                                <li>
                                    <input class="email" type="email" placeholder="电邮" v-model="userEmail" />
                                    <p v-if="emailErroe">请输入正确的邮箱！</p>
                                </li>
                            </ul>
                            <a class="submit" @click="submitUserInfo">
                                <template v-if="!messageLoading">
                                    立即咨询
                                </template>
                                <img v-else src="../../assets/images/message-loading.png" />
                                
                            </a>
                        </div>
                    </div>
                    <div class="wx-tel clearfix">
                        <div class="tel">
                            <img class="tel-img" src="../../assets/images/index/contact-tel.png" />
                            <p class="tel-number">(+65) 8866 5586</p>
                        </div>
                        <div class="wx">
                            <img class="wx-img" src="../../assets/images/index/WeChat.png" />
                            <p class="wx-text">扫一扫添加微信</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </template>

        <!--咨询完成弹窗 -->
        <div class="message-success" :class="{on:messageSuccess}" v-if="messageSuccess">
            <div class="content">
                <span class="close"><img src="../../assets/images/close.png" @click="closeMessage" /></span>
                <img src="../../assets/images/index/message-img.jpg" />
                <p class="p1">感谢您使用我们的免费咨询服务</p>
                <p class="p1">我们稍后会联系您</p>
                <p class="p1">您也可以拨打</p>
                <p class="tel">(+65) 8866 5586</p>
                <p class="p2">进行直接咨询</p>
                <a href="/passport">了解更多</a>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from '../../components/layout.vue'
import Banner from './component/banner.vue'
import './index.less'
import { animation, windowScroll, device } from '../../assets/js/config.js'
import loadingPage from '../../components/commonComponent/loadingPage.vue'


export default {
    name: 'app',
    components: {
        Layout,
        Banner,
        loadingPage
    },
    data () {
        return {
            isLoadingsTatus: false,
            bannerImg: '',
            countryPassport: '',
            userName: '',
            userTel: '',
            userEmail: '',
            nameError: false,
            telError: false,
            emailErroe: false,
            messageSuccess: false,
            messageLoading: false
        }
    },
    methods: {
        submitUserInfo () {
            let _this = this
            setTimeout( function () {
                _this.nameError = false
                _this.telError = false
                _this.emailErroe = false
            }, 2000)
            if (this.userName === '') {
                this.nameError = true
                return false
            } else if (this.userTel === '' ) {
                this.telError = true
                return false
            } else if (this.userEmail === '' ) {
                this.emailErroe = true
                return false
            } else if (!this.isEmail(this.userEmail)) {
                this.emailErroe = true
                return false
            }
            let params = {
                name: this.userName,
                phone: this.userTel,
                email: this.userEmail
            }
            _this.messageLoading = true
            setTimeout (function () {
                _this.$http({
                    method: 'post',
                    url: process.env.VUE_APP_API+'/v1/contact',
                    params
                }).then(res => {
                    if (res.data.code === 200) {
                       _this.userName = ''
                       _this.userTel = ''
                       _this.userEmail = ''
                       _this.messageSuccess = true
                       _this.messageLoading = false
                    }
                })
            }, 2000)
            
        },
        closeMessage () {
            this.messageSuccess = false
        },
        isEmail (email) {
            let regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
            return regex.test(email)
        }
    },
    mounted () {
        this.$http({
            method: 'get',
            url: process.env.VUE_APP_API+'/v1/index',
        }).then(res => {
            if (res.data.code === 200) {
                this.bannerImg = res.data.data.banners[device()]
                // this.isLoadingsTatus = true
                setTimeout(function (){
                    animation(scroll)
                }, 10)
            }
        })

        this.$http({
            method: 'get',
            url: process.env.VUE_APP_API+'/v1/countries ',
        }).then(res => {
            if (res.data.code === 200) {
                this.isLoadingsTatus = true
                let countrys = res.data.data
                for (let i = 0; i < countrys.length; i++) {
                     countrys[i].introduction = countrys[i].introduction.replace(/[ ]/g, '<br />')
                }
                this.countryPassport = countrys
            }
        })
        windowScroll()
        let scroll = document.documentElement.scrollTop || document.body.scrollTop
    }
}
</script>

