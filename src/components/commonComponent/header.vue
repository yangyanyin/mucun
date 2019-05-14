<template>
	<div class="header">
		<div class="pc-max-width clearfix">
			<div class="logo left"><a href="/"><img src="../../assets/images/logo.png"></a></div>
			<div class="navs right">
				<a v-for="(navs, index) in navList" :class="{on:currentUrl === navs.url || detailsUrl === navs.url}" :href="navs.url">
					{{navs.name}}
					<i></i>
				</a>
			</div>
		</div>
		<button class="wap-nav-botton" @click="showNav" :class="{on: showWapNav}">
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
		<div class="wap-nav-list" :class="{on: showWapNav}">
			<a v-for="(navs, index) in navList" :href="navs.url">
				{{navs.name}}
			</a>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			showWapNav: false,
			navList:[{
					name: '首 页',
					url: '/'
				},
				{
					name: '护照精选',
					url: '/passport'
				},
				{
					name: '护照项目',
					url: '/move-project'
				},
				{
					name: '移居狮城',
					url: '/move-city'
				},
				{
					name: '银行开户',
					url: '/bank'
				},
				{
					name: '资产配置',
					url: '/asset-allocation'
				},
				{
					name: '关于我们',
					url: '/about'
				}
			],
			currentUrl: window.location.pathname,
			detailsUrl: this.$route ? this.$route.path.substring(0, 13) : ''
		}
	},
	methods: {
		showNav () {
			this.showWapNav = !this.showWapNav
		}
	},
	mounted () {
	}
}
</script>
<style lang="less" scoped>
.header{
	position: fixed;
	z-index: 99;
	width: 100%;
	left: 0;
	top: 0;
	height: 90px;
	background: rgba(0,0,0,0.9);
}
.logo{
	display: block;
	padding-top: 30px;
	width: 209px;
	img{
		display: block;
		width: 100%;
	}
}
.navs{
	padding-top: 34px;
	a{
		position: relative;
		font-size: 16px;
		color: #ffffff;
		text-align: center;
		margin: 0 20px;
		transition: 0.3s;
		@media(max-width: 1000px) {
			margin: 0 10px;
		}
		i{
			position: absolute;
		    width: 0;
		    bottom: -15px;
		    left: 50%;
		    background: #bd8c67;
		    height: 2px;
		    display: block;
		    transition: .25s;
		    -webkit-transition: .25s;
		}
		&:last-child{
			margin-right: 0;
		}
		&:first-child{
			margin-left: 0;
		}
		&:hover{
			color: #bd8c67;
			font-weight: bold;
			i{
				width: 100%;
				left: 0;
			}
		}
		&.on{
			color: #bd8c67;
			font-weight: bold;
			i{
				width: 100%;
				left: 0;
			}
		}
	}
}
.wap-nav-botton{
	display: none;
	position: absolute;
	right: 15px;
	top: 20px;
	// background: #060a11;
	.icon-bar {
        display: block;
        width: 20px;
        height: 3px;
        background-color: #bd8c67;
        margin-bottom: 5px;
        -webkit-transform: scale(1,.5);
        transform: scale(1,.5);
        -webkit-transform-origin: center bottom;
        transform-origin: center bottom
    }
    .icon-bar:nth-last-of-type(1) {
        margin-bottom: 0;
    }
    &.on{
    	width: 20px;
    	height: 20px;
    	.icon-bar{
    		position: absolute;
    		height: 2px;
    	}
    	.icon-bar:nth-child(1) {
    		left: -1px;
    		top: 9px;
    		animation: buttons1 1s forwards;
    	}
    	.icon-bar:nth-child(2) {
    		left: 0;
    		top: 9px;
    		animation: buttons2 1s forwards;
    	}
    	.icon-bar:nth-child(3){
			display: none;
    	}
    }
}
@keyframes buttons1 {
  100%{
    transform: rotate(45deg);
    opacity: 1;
  }
}
@keyframes buttons2 {
  100%{
    transform: rotate(-45deg);
    opacity: 1;
  }
}
.wap-nav-list{
	position: fixed;
	top: -100%;
	left: 0;
	z-index: 99;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.9);
	transition: 0.4s;
	opacity: 0;
	&.on{
		display: block;
		top: 60px;
		opacity: 1;
		a{
			opacity: 0;
			&:nth-child(1){
				animation: showNav1 0.2s forwards;
				 animation-delay: 0.3s;
			}
			&:nth-child(2){
				animation: showNav2 0.3s forwards;
				 animation-delay: 0.5s;
				transform: translateY(30px);
			}
			&:nth-child(3){
				animation: showNav3 0.4s forwards;			
				 animation-delay: 0.6s;
				transform: translateY(30px);
			}
			&:nth-child(4){
				animation: showNav4 0.5s forwards;
				 animation-delay: 0.7s;
				transform: translateY(30px);
			}
			&:nth-child(5){
				animation: showNav5 0.6s forwards;			
				 animation-delay: 0.8s;
				transform: translateY(30px);
			}
			&:nth-child(6){
				animation: showNav6 0.7s forwards;
				 animation-delay: 0.9s;
				transform: translateY(30px);
			}
			&:nth-child(7){
				animation: showNav7 0.8s forwards;			
 				animation-delay: 1s;
				transform: translateY(30px);
			}
		}
	}
	a{
		display: block;
		color: #bd8c67;
		text-align: center;
		font-size: 18px;
		padding: 15px 0;
	}
}
@keyframes showNav1 {
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes showNav2 {
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes showNav3 {
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes showNav4 {
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes showNav5 {
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes showNav6 {
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes showNav7 {
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}

@media(max-width: 767px) {
	.header{
		position: fixed;
		height: 60px;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 9;
		.pc-max-width{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			padding: 0 15px;
			height: 60px;
			z-index: 991;
			background: #080b0f;
		}
	}
	.logo{
		width: 158px;
		padding-top: 19px;
	}
	.navs{
		display: none;
	}
	.wap-nav-botton{
		display: block;
		z-index: 992;
		background: none;
	}
}
</style>