<template>
	<div class="footer">
		<div class="nav-country">
			<div class="contact">
				<span>(+65) 8866 5586</span>
				<span>微信</span>
			</div>
			<div class="nav">
				<a href="#">护照项目</a>
				<a href="#">移居狮城</a>
				<a href="#">银行开户</a>
				<a href="#">资产配置</a>
				<a href="#">关于我们</a>
			</div>
			<ul class="country">
				<li><img src="../../assets/images/footer-country1.png"></li>
				<li><img src="../../assets/images/footer-country2.png"></li>
				<li><img src="../../assets/images/footer-country3.png"></li>
				<li><img src="../../assets/images/footer-country4.png"></li>
				<li><img src="../../assets/images/footer-country5.png"></li>
				<li><img src="../../assets/images/footer-country6.png"></li>
				<li><img src="../../assets/images/footer-country7.png"></li>
			</ul>
		</div>	
		<p class="copyright">©️ 2019 AIC Assets Management Pte Ltd. All Rights Reserved.</p>

		<!-- return top -->
		<div class="return-top" v-if="showReturnTop" @click="returnTop">
			<img src="../../assets/images/return-top.png" />
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			showReturnTop: false
		}
	},
	methods: {
		returnTop () {
			let scrTop = 0
			let iSpeed = 0
			let backTopTimer = null
			backTopTimer = setInterval(function () {
				scrTop = document.body.scrollTop || document.documentElement.scrollTop
				iSpeed = scrTop / 5
				if (scrTop === 0) {
					clearInterval(backTopTimer)
				}
				document.body.scrollTop = scrTop - iSpeed
				document.documentElement.scrollTop = scrTop - iSpeed
			}, 10)
		},
		scrollTop () {
			let scroll = document.documentElement.scrollTop || document.body.scrollTop
			if (scroll > 500) {
				this.showReturnTop = true
			} else {
				this.showReturnTop = false
			}
		}
	},
	mounted () {
		window.addEventListener('scroll', this.scrollTop)
	}
}
</script>
<style lang="less" scoped>
	.footer{
		.nav-country{
			background: #f8f8f8;
			text-align: center;
			padding: 50px 0;
			.contact{
				span{
					display: inline-block;
					height: 40px;
					line-height: 40px;
					color: #bd8c67;
					font-size: 28px;
					&:first-child{
						margin-right: 50px;
						padding-left: 60px;
						background: url('../../assets/images/footer-tel.png') no-repeat left center;
						background-size: 40px;
					}
					&:last-child{
						padding-left: 45px;
						background: url('../../assets/images/footer-wx.png') no-repeat left center;
						background-size: 28px;
					}
				}
			}
			
			li{
				display: inline-block;
				
			}
			.nav{
				padding: 45px 0;
				a{
					display: inline-block;
					color: #bd8c67;
					margin: 0 25px;
					font-size: 18px;
				}
			}
			.country{
				li{
					display: inline-block;
					width: 62px;
					margin: 0 15px;
					img{
						display: block;
						width: 100%;
					}
				}
			}
		}
		.copyright{
			height: 100px;
			text-align: center;
			line-height: 100px;
			color: #bfbfbf;
			font-size: 16px;
		}
		@media(max-width: 767px) {
			.nav-country{
				padding: 20px 0;
				.contact{
					display: none;	
				}
				.nav{
					padding: 10px 0;
					a{
						font-size: 14px;
						margin: 0 8px;
					}
				}
				.country{
					margin-top: 20px;
					li{
						width: 40px;
						margin: 0 15px 10px;
					}
				}
			}
			.copyright{
				height: auto;
				padding: 20px 0;
				line-height: normal;
				font-size: 12px;
			}
		}
	}
	.return-top{
		position: fixed;
		right: 40px;
		width: 35px;
		border: 1px solid #bd8c67;
		padding: 6px;
		bottom: 100px;
		border-radius: 5px;
		cursor:pointer;
		background: #bd8c67;
		opacity: 0.8;
		img{
			display: block;
			width: 100%;
		}
		@media(max-width: 767px) {
			right: 10px;
			bottom: 80px;
		}
	}
</style>