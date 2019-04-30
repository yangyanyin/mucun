<template>
	<div class="header">
		<div class="pc-max-width clearfix">
			<div class="logo left"><a href="/"><img src="../../assets/images/logo.png"></a></div>
			<div class="navs right">
				<a href="/">首页</a>
			    <a href="/passport">护照项目</a>
			    <a href="/move-project">移居狮城 </a>
			    <a href="/bank">银行开户</a>
			    <a href="/asset-allocation">资产配置</a>    
			    <a href="/about">关于我们</a>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	mounted () {
		console.log(this.$route)
	}
}
</script>
<style lang="less" scoped>
.header{
	height: 90px;
	background: #060a11;
}
.logo{
	display: block;
	padding-top: 30px;
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
</style>