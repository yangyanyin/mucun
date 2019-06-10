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
        							<!-- <li :class="{type1:country.type === '签证入境', type2:country.type==='落地签入境', type3:country.type==='免签目的国', type4:country.type==='eVisa'}">{{country.type}}</li> -->
        							<li :class="countryClass(country.type)">{{country.type}}</li>
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
    		// countryList: '',
    		loadingSuccess: false
    	}
    },
    methods: {
   		tabClick (index) {
   			let countryList = document.getElementsByClassName('list')
   			let divBox = countryList[index].offsetTop - 100
   			document.body.scrollTop = divBox
			document.documentElement.scrollTop = divBox
   		},
   		countryClass (e) {
   			let className;
   			if (e) {
	   			if (e.indexOf('签证入境') >= 0) {
	   				className = 'type1'
	   			} else if (e.indexOf('落地签入境') >= 0 || e.indexOf('电子签证') >= 0) {
	   				className = 'type2'
	   			} else if (e.indexOf('免签目的国') >= 0) {
	   				className = 'type3'
	   			} else if (e.indexOf('eVisa') >= 0 || e.indexOf('旅行') >= 0 || e.indexOf('enrolment') >= 0 || e.indexOf('tourist') >= 0 || e.indexOf('预注册') >= 0) {
	   				className = 'type4'
	   			}
    		}
    		return className

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
  //       let countryList = document.getElementsByClassName('list')
  //       window.addEventListener('scroll', function () {
		// 	let scroll = document.documentElement.scrollTop || document.body.scrollTop
		// 	for (let i = 0; i < countryList.length; i++) {
		// 		if (scroll > countryList[i].offsetTop) {
		// 			if (scroll < countryList[i].offsetHeight) {
		// 				countryList[i].firstChild.style.position = fixed
		// 			}
		// 		} else {
		// 			countryList[i].firstChild.style.marginTop = 0
		// 		}
		// 	}
		// })
    }
}
</script>
<style lang="less" scoped>
	.passport{
		background: #131313;
		padding: 150px 0;
		@media(max-width: 767px) {
			padding: 90px 0;
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
		.list{
			position: relative;
			padding: 50px 0 0 520px;
			border-top: 2px solid #bd8c67;
			min-height: 700px;
			margin-top: 80px;
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
				    border: 1px solid #352b24;
				    margin-top: 1px;
				    transition: 0.4s;
				    &:hover{
				    	border-color: #fff;
				    }
					li{
						float: left;
						color: #fff;
						height: 46px;
						line-height: 46px;
						font-size: 18px;
						position: relative;
						overflow: hidden;                  //  设置多余的隐藏，如果没有设置，会导致下面的代码不实现效果
					    text-overflow: ellipsis;          //   设置多余的用...表示。
					    white-space: nowrap;           //   以上两个条件满足后，为了文字更好的实现溢出用...表示。就的先把默认的换行阻止。
						img{
							position: absolute;
							left: 30px;
							top: 14px;
							width: 28px;
							@media(max-width: 767px) {
								left: 10px;
							}
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
						border-right: 1px solid #352b24;
						padding-left: 70px;
						font-size: 16px;
						@media(max-width: 767px) {
							font-size: 14px;
							padding-left: 50px;
						}
					}
					li:nth-child(2){
						width: 60%;
						text-align: center;
						@media(max-width: 767px) {
							font-size: 16px;
						}
					}

				}
			}
		}
		@media(max-width: 767px){
			margin-top: 20px;
			padding: 0;
			.list{
				border-top: 1px solid #bd8c67;
				width: auto;
				margin: 0 0 20px 0;
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
