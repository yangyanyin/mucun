<template>
    <Layout>  
    	<loadingPage v-if="!loadingSuccess" />
        <div v-else class="passport">
        	<div class="pc-max-width">
        		<div class="passport-list">
	        		<ul class="clearfix">
	        			<li v-for="(lists, index) in passportList" :key="index" @click="tabClick(index)">
	        				<strong class="name">{{lists.name}}</strong>
	        				<img :src="lists.passport_img" />
	        				<div class="clearfix info">
		        				<div class="left">
		        					<strong>{{lists.visa_free_number}}</strong>
		        					<i>免签国家</i>
		        				</div>
		        				<div class="right">
		        					<strong>31</strong>
		        					<i>全球排名</i>
		        				</div>
		        			</div>
	        			</li>
	        		</ul>
        		</div>
        		<div class="country">
        			<div class="list clearfix animation-show" v-for="(lists, index) in passportList" :key="index">
        				<div class="left name-img clearfix">
        					<strong class="name">{{lists.name}}</strong>
        					<img :src="lists.passport_img" />
		        			<div class="clearfix info">
		        				<div class="left">
		        					<strong>{{lists.visa_free_number}}</strong>
		        					<i>免签国家</i>
		        				</div>
		        				<div class="right">
		        					<strong>31</strong>
		        					<i>全球排名</i>
		        				</div>
		        			</div>
        				</div>
        				<div class="right exemption">
        					<div class="title">免签国家<strong>{{lists.visa_free_number}}</strong><i>(个)</i></div>
        					<div>
        						<ul class="clearfix" v-for="(country, index) in lists.visa_countries" :key="index">
        							<li><img :src="country.flag" />{{country.name}}</li>
        							<li 
        							:class="{type1:country.type === '签证入境', type2:country.type==='落地签入境', type3:country.type==='免签目的国', type4:country.type==='eVisa'}"
        							>{{country.type}}</li>
        						</ul>
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </div>
    </Layout>
</template>

<script>
import Layout from '../../components/layout.vue'
import { animation, windowScroll } from '../../assets/js/config.js'
import loadingPage from '../../components/commonComponent/loadingPage.vue'

export default {
    name: 'app',
    components: {
        Layout,
        loadingPage
    },
    data () {
    	return {
    		passportList: '',
    		countryList: '',
    		loadingSuccess: false
    	}
    },
    methods: {
   		tabClick (index) {
   			let countryList = document.getElementsByClassName('list')
   			let divBox = countryList[index].offsetTop - 100
   			document.body.scrollTop = divBox
			document.documentElement.scrollTop = divBox
   		}
   	},
    mounted () {
    	this.$http({
            method: 'get',
            url: process.env.VUE_APP_API+'/v1/passportsInfo',
        }).then(res => {
        	if (res.data.code === 200) {
        		this.passportList = res.data.data
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
	.passport{
		background: #131313;
		padding: 100px 0;
		@media(max-width: 767px) {
			padding: 50px 0;
		}
	}
	.passport-list{
		li{
			float: left;
			width: 16.66%;
			text-align: center;
			color: #fff;
			padding: 0 12px;
			cursor: pointer;
			strong{
				display: block;
				&.name{
					font-size: 18px;
					margin-bottom: 25px;
				}
			}
			img{
				width: 100%;
				max-width: 179px;
				transition: 0.2s;
				&:hover{
					transform: scale(1.1);
				}

			}

			.info{
				padding: 10px;
				div{
					width: 50%;
					i{
						display: block;
						margin-top: 5px;
						color: #828282;

					}
				}
			}
		}
		@media(max-width: 767px){
			white-space:nowrap;
			ul{
				overflow: auto;
				-webkit-overflow-scrolling: touch;
				-moz-overflow-scrolling: touch;
				overflow-scrolling: touch;
				li{
					float: none;
					display: inline-block;
					width: 140px;
					padding: 0 7px;
					.info{
						padding: 15px 0 0;
					}
				}
			}
		}
	}
	.country{
		padding-top: 40px;
		.list{
			position: relative;
			padding: 50px 0 0 520px;
			border-top: 2px solid #bd8c67;
			min-height: 700px;
			.name-img{
				position: absolute;
				left: 0;
				top: 50px;
				width: 476px;
				height: 596px;
				border: 2px solid #352b24;
				text-align: center;
				color: #fff;
				img{
					display: block;
					width: 215px;
					margin: auto;
				}
				strong{
					display: block;
					padding: 30px 0 0 0;
				}
				strong.name{
					padding: 50px 0;
					font-size: 24px;
				}
				.info{
					width: 215px;
					margin: auto;
					>div{
						width: 50%;
					}
					i{
						display: block;
						margin-top: 5px;
						color: #828282;
					}
				}
				
			}
			.exemption{
				display: block;
				width: 100%;
				.title{
					display: block;
					height: 120px;
					line-height: 120px;
					color: #fff;
					font-size: 26px;
					text-align: center;
					background: #574335;
					strong{
						display: inline-block;
						padding: 0 20px 0 35px;
						font-size: 26px;
					}
					i{
						position: relative;
						top: -3px;
						font-size: 16px;
					}
				}
				ul{
					border-top: 1px solid #131313;
					li{
						float: left;
						color: #fff;
						height: 46px;
						line-height: 46px;
						font-size: 18px;
						position: relative;
						img{
							position: absolute;
							left: 30px;
							top: 14px;
							width: 28px;
						}
						&.type1{
							background: #a91c1c;
						}
						&.type2{
							background: #2d3b7e;
						}
						&.type3{
							background: #256224;
						}
						&.type4{
							background: #90711f;
						}
					}
					li:nth-child(1){
						width: 40%;
						color: #fff;
						border: 1px solid #352b24;
						padding-left: 70px;
						font-size: 16px;
					}
					li:nth-child(2){
						width: 60%;
						text-align: center;
					}

				}
			}
		}
		@media(max-width: 767px){
			margin-top: 20px;
			.list{
				border-top: 1px solid #bd8c67;
				width: auto;
				padding: 0;
				.name-img{
					position: relative;
					left: auto;
					top: auto;
					width: 100%;
					height: 242px;
					margin-top: 15px;
					padding: 20px 0 20px 160px;
					.info{
						width: 100%;
					}
					strong.name{
						font-size: 18px;
					}
					strong{
						padding: 0;
					}
					img{
						position: absolute;
						left: 20px;
						top: 20px;
						margin: 0;
						width: 140px;
					}
				}
				.exemption{
					margin-top: 10px;
					.title{
						height: 80px;
						line-height: 80px;
						font-size: 20px;
						strong{
							font-size: 20px;
							padding: 0 0 0 20px;
						}
						i{
							top: -2px;
						}
					}
					li{
						width: 50% !important;
					}
				}
			}
		}
	}
</style>
