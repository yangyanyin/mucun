<template>
	<div class="header">
		<div class="pc-max-width clearfix">
			<div class="logo left"><a href="/"><img src="../../assets/images/logo.png"></a></div>
			<div class="navs right">
				<a v-for="(navs, index) in navList" :class="{on:currentUrl === navs.url}" :href="navs.url">
					{{navs.name}}
					<i></i>
				</a>
			</div>
		</div>
		<button class="wap-nav-botton" @click="showNav">
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
			currentUrl: window.location.pathname
		}
	},
	methods: {
		showNav () {
			this.showWapNav = !this.showWapNav
		}
	},
	mounted () {
		// console.log(window.location.pathname)
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
	background: #060a11;
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
}
.wap-nav-list{
	display: none;
	position: fixed;
	top: 60px;
	right: -101%;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.9);
	transition: 0.2s;
	&.on{
		right: 0;
	}
	a{
		display: block;
		color: #fff;
		text-align: center;
		font-size: 16px;
		padding: 20px 0;
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
	}
	.pc-max-width{
		padding: 0 15px;

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
	}
	.wap-nav-list{
		display: block;
	}
}
</style>