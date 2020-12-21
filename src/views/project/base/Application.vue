<!-- 护照项目-申请流程 -->
<template>
	<div class="application">
		<Title name="申请流程" />
		<ul class="clearfix">
				<li class="left" v-for="(item, key) in application" :key="key">
					<i>{{key + 1}}</i>
					<p v-html="item"></p>
				</li>
		</ul>
	</div>
</template>

<script>
import Title from '../base/Title'
export default {
	props: {
		application: Array
	},
	components: {
		Title
	}
}
</script>
<style scoped lang="less">
.application {
	margin-top: 40px;
	ul {
		padding-top: 50px;
		text-align: center;
		li {
			position: relative;
			width: 16.6666%;
			padding: 0 10px;
			&:first-child {
				&:after {
					display: none;
				}
			}
			&:after {
				content: '';
				position: absolute;
				left: -24px;
				top: 15px;
				width: 48px;
				height: 4px;
				background: #D3E2D7;
				border-radius: 90px;
			}
			i {
				display: block;
				width: 34px;
				height: 34px;
				margin: auto;
				text-align: center;
				line-height: 26px;
				font-size: 12px;
				color: #fff;
				border-radius: 100%;
				background: #45A366;
				border: 4px solid #bad8c4;
			}
			p {
				padding-top: 15px;
				font-size: 12px;
				color: #447375;
			}
		}
	}
}
</style>