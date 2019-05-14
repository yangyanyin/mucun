<template>
	<Layout>
		<loadingPage v-if="!loadingSuccess" />
		<template v-else>
			<div class="banner">
				<img class="web-img" src="../../../assets/images/country/details/details-banner.png">
				<img class="wap-img" src="../../../assets/images/country/details/details-banner-wap.png">
			</div>

			<div class="country-details">
				<div class="pc-max-width">
					<div class="details-nav">
						<a v-for="(navs, index) in contentNav" :key="index" :class="{on: index === defaultNav}" @click="tabClick(index)">{{navs}}</a>
					</div>
					<div class="content-know animation-show">
						<h3 class="country-title">移民{{countryName}}，这些好处，你都知道吗？</h3>
						<p>{{description}}</p>
						<strong>(+65) 8866 5586</strong>
					</div>
					<div class="content-block">
						<h3 class="country-title  animation-show">为什么{{countryName}}护照项目这么好？</h3>
						<ul class="clearfix">
							<li v-for="(advantages, index) in advantagesList" :key="index" class=" animation-show">
								<div class="brick-item">
									<span><img :src="advantages.img"></span>
									<strong>{{advantages.title}}</strong>
									<p>{{advantages.description}}</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="for-people">
					<h3 class="country-title  animation-show">{{countryName}}护照适用人群</h3>
					<ul class="pc-max-width clearfix">
						<li v-for="(user, index) in userTypes" :key="index" class="animation-show">
							<h3><strong>0{{index+1}}</strong>{{user.title}}</h3>
							<p>{{user.description}}</p>
						</li>
					</ul>
				</div>
				<div class="pc-max-width compared animation-show">
					<h3 class="country-title">{{countryName}}护照比大国绿卡好在哪里？</h3>
					<div class="clearfix">
						<ul class="left">
							<li class="t">瓦努阿图护照</li>
							<li>申请简单，仅需8份文件</li>
						</ul>
						<ul class="right">
							<li class="t">大国绿卡</li>
							<li>资金高，风险高</li>
						</ul>
					</div>	
				</div>
				<div class="pc-max-width obtain">
					<h3 class="country-title animation-show">如何获得{{countryName}}护照？</h3>
					<ul class="clearfix">
						<li v-for="(conditions, index) in applyConditions" class="brick-item animation-show">
							<h3>0{{index+1}}</h3>
							<img class="icon" :src="conditions.icon" />
							<p>{{conditions.condition}}</p>
						</li>
					</ul>
				</div>
				<div class="process pc-max-width margin-t-80" v-if="processList.length > 0">
					<h3 class="country-title animation-show">{{countryName}}公民身份申请流程</h3>
					<ul class="animation-show">
						<li v-for="(processs, index) in processList" :key="index">
							<span>0{{index+1}}</span>
							<p>{{processs}}</p>
						</li>
					</ul>
				</div>
				<div class="padding-top-80"></div>
			</div>
		</template>
	</Layout>
</template>
<script>
	import Layout from '../../../components/layout.vue'
	import { animation, windowScroll } from '../../../assets/js/config.js'
	import loadingPage from '../../../components/commonComponent/loadingPage.vue'
	export default {
		components: {
			Layout,
			loadingPage
		},
		data () {
			return {
				loadingSuccess: false,
				description: '',
				countryName: '',
				advantagesList: '',
				userTypes: '',
    			applyConditions: '',
    			processList: '',
    			defaultNav: 0,
    			contentNav: ['移民国家', '项目优势', '申请条件']
			}
		},
		methods: {
	   		tabClick (index) {
	   			let Advantage
	   			if (index === 0) {
	   				Advantage = document.getElementsByClassName('content-know')[0].offsetTop - 100
	   			} else if (index === 1) {
	   				Advantage = document.getElementsByClassName('for-people')[0].offsetTop - 100
	   			} else if (index === 2) {
	   				Advantage = document.getElementsByClassName('obtain')[0].offsetTop - 170
	   			}

	   			document.body.scrollTop = Advantage
				document.documentElement.scrollTop = Advantage
	   			this.defaultNav = index
	   		}
	   	},
		mounted () {
			let countryId = this.$route.params.id
			this.$http({
	            method: 'get',
	            url: process.env.VUE_APP_API+'/v1/country/'+countryId
	        }).then(res => {
	            if (res.data.code === 200) {
	            	this.loadingSuccess = true
	            	this.description = res.data.data.description
	            	this.countryName = res.data.data.name
	            	this.advantagesList = res.data.data.advantages
	            	this.userTypes = res.data.data.user_types
	            	this.applyConditions = res.data.data.apply_conditions
	            	this.processList = res.data.data.process
	            	setTimeout(function () {
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
	.country-title{
		position: relative;
		display: block;
		font-size: 30px;
		padding: 15px;
		text-align: center;
		&:before{
			position: absolute;
			content: '';
			top: 0;
			left: 50%;
			width: 80px;
			height: 4px;
			margin-left: -40px;
			background: #ebdcd1;
		}
		&:after{
			position: absolute;
			content: '';
			bottom: 0;
			left: 50%;
			width: 80px;
			height: 4px;
			margin-left: -40px;
			background: #ebdcd1;
		}
		@media(max-width: 767px) {
			font-size: 20px;
		}

	}
	.banner{
		img{
			width: 100%;
		}
	}
	.country-details{
		background: #f3f3f3;
	}
	.details-nav{
		position: relative;
		height: 120px;
		top: -65px;
		background: #fff;
		text-align: center;
		line-height: 110px;
		a{
			position: relative;
			font-size: 26px;
			height: 38px;
			margin: 0 50px;
			color: #828282;
			cursor: pointer;
			&.on{
				color: #bd8c67;
				&:after{
					content: '';
					position: absolute;
					width: 100%;
					height: 3px;
					background: #bd8c67;
					left: 0;
					bottom: -15px;
				}
			}
		}
		@media(max-width: 767px) {
			top: 0;
			height: 60px;
			line-height: 60px;
			margin: 0 -10px;
			a{
				font-size:18px;
				margin: 0 20px;
			}
		}
	}
	.content-know{
		background: #fff;
		text-align: center;
		padding: 40px 100px 60px;
		p{
			padding-top: 40px;
			font-size: 18px;
			line-height: 36px;
		}
		strong{
			display: inline-block;
			color: #bd8c67;
			font-weight: normal;
			padding-left: 55px;
			margin-top: 20px;
			font-size: 30px;
			background: url('../../../assets/images/footer-tel.png') no-repeat left center;
			background-size: 36px;
		}
		@media(max-width: 767px){
			margin-top: 20px;
			padding: 20px;
			p{
				font-size: 16px;
			}
			strong{
				font-size: 22px;
				padding-left: 40px;
				margin-bottom: 20px;
				background-size: 30px;
			}
		}
	}
	.content-block{
		margin-top: 60px;
		ul{
			display: block;
			margin-top: 40px;
			li{
				width: 25%;
				float: left;
				padding: 0 10px;
				margin-bottom: 20px;
				text-align: center;
				div{
					background: #fff;
				}
				img{
					display: block;
					width: 100%;
				}
				strong{
					display: block;
					font-size: 18px;
					padding: 20px 0 10px 0;
				}
				p{
					padding: 0 20px 30px;
					line-height: 28px;
					font-size: 16px;
					height: 86px;
				}
			}
		}
		@media(max-width: 767px) {
			margin-top: 40px;
			ul{
				li{
					width: 50%;
					padding: 0 7px;
					strong{
						font-size: 16px;
					}
					p{
						font-size: 14px;
						line-height: 22px;
					}
				}
			}
		}
	}
	.for-people{
		padding: 45px 0;
		margin-top: 45px;
		background: url('../../../assets/images/country/details/details-bg.png') no-repeat top center;
		background-size: 1920px;
		.country-title{
			color: #bd8c67;
			&:before{
				background: #665141;
			}
			&:after{
				background: #665141;
			}
		}
		ul {
		    width: 100%;
		    display: -webkit-box;
		    display: -ms-flexbox;
		    display: flex;
		    -webkit-box-pack: justify;
		    -ms-flex-pack: justify;
		    justify-content: center;
		    -webkit-justify-content: center;
		    -webkit-box-orient: horizontal;
		    -webkit-box-direction: normal;
		    -ms-flex-flow: row wrap;
		    flex-flow: row wrap;
			li{
				width: 26%;
				color: #fff;
				margin-top: 50px;
				h3{
					color: #bd8c67;
					font-size: 26px;
					strong{
						display: inline-block;
						font-size: 36px;
						font-weight: normal;
						padding-right: 10px;
					}
				}
				p{
					font-size: 15px;
					height: 112px;
					line-height: 28px;
				}
				&:nth-child(2){
					margin: 50px 11% 0;
				}
				&:nth-child(5){
					margin: 50px 11% 0;
				}
			}
		}
		@media(max-width: 767px) {
			margin-top: 30px;
			padding: 30px 15px;
			background: #141414;
			ul {
				li{
					width: 100%;
					margin-top: 30px;
					&:nth-child(2){
						margin: 30px auto 0;
					}
					&:nth-child(5){
						margin: 30px auto 0;
					}
					h3{
						font-size: 20px;
						padding-bottom: 10px;
						strong{
							font-size: 24px;
						}
					}
					p{
						height: auto;
					}
				}
			}
		}
	}
	.compared{
		background: #fff;
		margin: 55px auto;
		padding: 30px 60px;
		.country-title{
			margin-bottom: 50px;
		}
		.clearfix{
			background: url('../../../assets/images/country/details/compared-PK.png') no-repeat center center;
			background-size: 113px;
		}
		ul.right {
			text-align: right;
			li{
				padding-right: 45px;
				background: url('../../../assets/images/country/details/compared-bad-icon.png') no-repeat right center;
				&.t{
					background: url('../../../assets/images/country/details/compared-bad-title-icon.png') no-repeat right center;

				}
			}
		}
		ul.left{
			li{
				padding-left: 45px;
				background: url('../../../assets/images/country/details/compared-icon.png') no-repeat left center;
				&.t{
					background: url('../../../assets/images/country/details/compared-title-icon.png') no-repeat left center;

				}
			}

		}
		li{
			// height: 28px;
			font-size: 20px;
			line-height: 28px;
			padding: 16px 0;
			&.t{
				font-weight: bold;
			}
		}
		@media(max-width: 767px) {
			display: none;
		}
	}
	.obtain{
		margin-top: 60px;
		ul{
			
			text-align: center;
			margin-top: 40px;
			@media(min-width: 767px){
				display: flex;
				justify-content: space-between;
			}
			li{
				display: block;
				background: #fff;
				width: 22%;
				border-radius: 10px;
				padding-bottom: 30px;
				h3{
					display: block;
					width: 70px;
					height: 70px;
					background: url('../../../assets/images/country/details/polygon-icon.png') no-repeat 100%;
					margin: auto;
					color: #fff;
					line-height: 62px;
					font-size: 24px;
				}
				img{
					display: block;
					margin: 45px auto 40px;
					width: auto;
					height: 100px;
				}
				p{
					color: #bd8c67;
					font-size: 18px;
					height: 50px;
					padding: 0 40px;
				}
			}
		}
		@media(max-width: 767px) {
			margin-top: 40px;
			ul{
				li{
					float: left;
					width: 46%;
					margin: 0 2% 15px;
					p{
						font-size: 16px;
						padding: 0 10px;
						line-height: 26px;
					}
					h3{
						width: 50px;
						height: 50px;
						line-height: 42px;
						font-size: 20px;
						background-size: 50px;
					}
					img{
						height: 80px;
						margin: 20px auto 20px;
					}

				}
			}
		}
	}
	.process{
		background: #fff;
		padding: 40px 100px 100px;
		.country-title{
			color: #41a046;
			&:after{
				background: #c5e2c6;
			}
			&:before{
				background: #c5e2c6;
			}
		}
		ul{
			text-align: center;
			
			margin-top: 80px;
			position: relative;
			@media(min-width: 767px) {
				display: flex;
				justify-content: center;
				&:after{
					content: '';
					position: absolute;
					top: 19px;
					left: 10%;
					width: 80%;
					height: 2px;
					background: #41a046;
				}
			}
			
			li{
				width: 100px;
				margin: 0 40px;
				position: relative;
				z-index: 99;
				@media(min-width: 767px) {
					&:after{
						position: absolute;
						top: 0;
						left: 10px;
						content: '';
						width: 80px;
						height: 40px;
						background: #fff;
					}
				}
				span{
					position: relative;
					z-index: 9;
					display: inline-block;
					width: 40px;
					height: 40px;
					color: #fff;
					line-height: 32px;
					background: #41a046;
					border-radius: 100%;
					border: 5px solid #c3e9c5;
					overflow: hidden;
				}
				p{
					height: 40px;
					color: #41a046;
				}
			}
		}
		@media(max-width: 767px) {
			padding: 20px 15px;
			ul{
				margin-top: 40px;
				li{
					width: auto;
					margin: 0 20px 30px;
					text-align: left;
					span{
						float: left;
						text-align: center;
					}
					p{
						line-height: 40px;
						display: inline-block;
						font-size: 16px;
						padding-left: 15px;
					}
					&:before{
						content: '';
						position: absolute;
						left: 20px;
						bottom: -25px;
						width: 2px;
						height: 20px;
						background: #41a046;
					}
					&:last-child{
						&:before{
							display: none;
						}
					}
				}
			}
		}
	}
	.padding-top-80{
		padding: 40px;
		@media(max-width: 767px) {
			padding: 20px;
		}
	}
</style>