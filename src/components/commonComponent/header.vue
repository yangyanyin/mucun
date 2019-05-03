<template>
	<div class="header">
		<div class="pc-max-width clearfix">
			<div class="logo left"><a href="/"><img src="../../assets/images/logo.png"></a></div>
			<div class="navs right">
				<a href="/">首页</a>
			    <a href="/passport">护照项目</a>
			    <a href="/move-city">移居狮城 </a>
			    <a href="/bank">银行开户</a>
			    <a href="/asset-allocation">资产配置</a>    
			    <a href="/about">关于我们</a>
			</div>
		</div>
		<button class="wap-nav-botton" @click="showNav">
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
		<div class="wap-nav-list" :class="{on: showWapNav}">
			<a href="/">首页</a>
		    <a href="/passport">护照项目</a>
		    <a href="/move-city">移居狮城 </a>
		    <a href="/bank">银行开户</a>
		    <a href="/asset-allocation">资产配置</a>    
		    <a href="/about">关于我们</a>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			showWapNav: false
		}
	},
	methods: {
		showNav () {
			this.showWapNav = !this.showWapNav
		}
	},
	mounted () {
		console.log(this.$route)
	}
}
</script>
<style lang="less" scoped>
.header{
	position: relative;
	height: 90px;
	background: #060a11;
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
		margin: 0 20px;
		@media(max-width: 1000px) {
			margin: 0 10px;
		}
		&:last-child{
			margin-right: 0;
		}
		&:first-child{
			margin-left: 0;
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