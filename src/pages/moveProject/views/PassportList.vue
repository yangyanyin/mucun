<template>
    <Layout>
    	<loadingPage v-if="!loadingSuccess" />
    	<template v-else>
    		<div class="banner">
	    		<img class="web-img" src="../../../assets/images/country/country-banner.png" />
	    		<img class="wap-img" src="../../../assets/images/country/country-banner-wap.png" />
	    	</div>
	    	<div class="country-main">
		        <div class="pc-max-width">
		        	<div class="country-nav">
		        		<div class="list">
		        			<a v-for="(navs, index) in navs" :key="index" :class="{on: index === defaultNav}" @click="tabClick(index)">{{navs}}</a>
		        		</div>
		        	</div>
		        	<div class="country-list">
		        		<div class="content clearfix brick-item animation-show" v-for="(countrs, index) in countryList" :key="index">
		        			<div class="left img">
			        			<img :src="countrs.img" />
			        		</div>
			        		<div class="right info">
			        			<h3 class="name">{{countrs.name}}护照</h3>
			        			<ul class="clearfix">
			        				<li>
			        					<img src="../../../assets/images/country/country-list-icon1.png" />
			        					<span>居中要求</span>
			        					<h3>{{countrs.require}}</h3>
			        				</li>
			        				<li>
			        					<img src="../../../assets/images/country/country-list-icon2.png" />
			        					<span>免签国家</span>
			        					<h3>{{countrs.visa_free_number}}</h3>
			        				</li>
			        				<li>
			        					<img src="../../../assets/images/country/country-list-icon3.png" />
			        					<span>移民周期</span>
			        					<h3>{{countrs.migrate_cycle}}</h3>
			        				</li>
			        				<li>
			        					<img src="../../../assets/images/country/country-list-icon4.png" />
			        					<span>证件类型</span>
			        					<h3>{{countrs.ID_type}}</h3>
			        				</li>
			        			</ul>
			        			<ol>
			        				<li>最后护照</li>
			        				<li>不用背词</li>
			        				<li>税务天堂</li>
			        			</ol>
			        			<a :href="'/move-project/details/'+ countrs.country_id">查看详情</a>
			        		</div>
		        		</div>
		        	</div>
		        </div>
	        </div>
    	</template>
    </Layout>
</template>

<script>
import Layout from '../../../components/layout.vue'
import { animation, windowScroll } from '../../../assets/js/config.js'
import loadingPage from '../../../components/commonComponent/loadingPage.vue'
export default {
    name: 'app',
    components: {
        Layout,
        loadingPage
    },
    data () {
    	return {
    		navs: [],
    		defaultNav: 0,
    		countryList: '',
    		loadingSuccess: false
    	}
    },
   	methods: {
   		tabClick (index) {
   			let countryList = document.getElementsByClassName('content')
   			let divBox = countryList[index].offsetTop - 100
   			document.body.scrollTop = divBox
			document.documentElement.scrollTop = divBox
   			this.defaultNav = index
   		}
   	},
   	mounted () {
        this.$http({
            method: 'get',
            url: process.env.VUE_APP_API+'/v1/countries ',
        }).then(res => {
            if (res.data.code === 200) {
                this.countryList = res.data.data
                for (let i = 0; i < this.countryList.length; i++) {
                	this.navs.push(this.countryList[i].name)
                }
                this.loadingSuccess = true
                setTimeout(function (){
                	let scroll = document.documentElement.scrollTop || document.body.scrollTop
			    	animation(scroll)
			        windowScroll()
			    }, 10)
            }
        })
    }
}
</script>
<style lang="less" scoped>
	.banner{
		img{
			width: 100%;
		}
	}
	.country-main{
		background: #f3f3f3;
		padding-bottom: 80px;
		@media(max-width: 767px) {
			padding-bottom: 40px;
		}
	}
	.country-nav{
		position: relative;
		top: -66px;
		width: 100%;
		height: 120px;
		background: #fff;
		text-align: center;
		line-height: 110px;
	    padding: 0 10px;
		@media(min-width: 767px){
			.list{
				display:flex;
			    justify-content:space-around;
			    -webkit-justify-content:space-around;
			    flex-flow: row wrap;
			}
		}

		a{
			font-size: 22px;
			color: #828282;
			cursor:pointer;
			justify-content: center;
			transition: 0.2s;
			&:hover{
				color: #bd8c67;
			}
			&.on{
				position: relative;
				color: #bd8c67;
				&:after{
					content: '';
					position: absolute;
					width: 100%;
					height: 3px;
					background: #bd8c67;
					left: 0;
					bottom: 35px;
				}
			}
		}
		@media(max-width: 767px){
			width: auto;
			height: 80px;
			overflow: auto;
			line-height: 60px;
			margin: 0 -10px;
			padding: 0;
			top: 0;
			.list{
				white-space: nowrap;
				a{
					margin: 0 20px;
					font-size: 18px;
					&.on{
						&:after{
							bottom: -10px;
						}
					}
				}
			}
		}
	}
	.country-list{
		.content{
			position: relative;
			padding: 30px;
			background: #fff;
			margin-bottom: 40px;
			padding-right: 48%;
			.img{
				width: 100%;
				overflow: hidden;
				img{
					display: block;
					width: 100%;
				}
			}
			.info{
				position: absolute;
				top: 30px;
				right: 30px;
				height: calc(100% - 60px);
				width: calc(48% - 60px);
				h3.name{
					display: block;
					height: 68px;
					padding-top: 2px;
					color: #111111;
					font-size: 24px;
					border-bottom: 1px solid #bd8c67;
					text-align: center;
				}
				ul{
				    display:flex;
				    justify-content:space-around;
				    -webkit-justify-content:space-around;
				    flex-flow: row wrap;
				    text-align: center;
				    padding-top: 24px;
					li{
						display: inline-block;
						img{
							display: block;
							margin: auto;
						}
						span{
							display: block;
							padding: 15px 0;
							color: #828282;
							font-size: 16px;
						}
						h3{
							color: #bd8c67;
							font-size: 22px;
						}
					}
				}
				ol{
					display:flex;
				    justify-content: center;
				    -webkit-justify-content: center;
				    flex-flow: row wrap;
				    text-align: center;
				    padding: 30px 0;
				    li{
				    	display: block;
				    	width: 92px;
				    	height: 28px;
				    	margin: 0 10px;
				    	background: url('../../../assets/images/country/claim-bg.png') no-repeat;
				    	background-size: 100%;
				    	line-height: 28px;
				    	padding-left: 15px;
				    	color: #fff;
				    }
				}
				a{
					position: absolute;
					bottom: 0;
					right: 0;
					width: 100%;
					height: 56px;
					line-height: 56px;
					text-align: center;
					color: #bd8c67;
					font-size: 18px;
					border: 1px solid #bd8c67;
					transition: 0.4s;
					&:hover{
						background: #bd8c67;
						color: #fff;
					}
				}
				@media(max-width: 1200px) {
					display: block;
					h3.name{
						height: 58px;
					}
					ul{
						padding-top: 15px;
						li{
							span{
								padding: 8px;
							}
							h3{
								font-size: 20px;
							}
						}
					}
					ol{
						padding: 20px 0;
					}
					a{
						height: 40px;
						line-height: 40px;
						font-size: 16px;
					}
				}
			}
		}
		@media(max-width: 767px){
			.content{
				margin: 10px 0 0 0;
				padding: 10px 10px 20px;
				.info{
					position: static;
					width: 100%;
					padding: 0 15px;
					h3.name{
						height: auto;
						padding: 20px 0 15px 0;
					}
					ul{
						li{
							span{
								font-size: 14px;
							}
							h3{
								font-size: 18px;
							}
						}
					}
					ol{
						li{
							font-size: 12px;
							width: 85px;
							height: 26px;
							line-height: 26px;
							margin: 0 5px;
						}
					}
					a{
						display: block;
						position: static;
						width: 100%;
					}
				}
			}
		}
	}
</style>