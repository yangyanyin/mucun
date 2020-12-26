<!-- 护照项目-申请流程 -->
<template>
	<div class="application">
		<Title name="申请流程" />
		<ul class="clearfix">
				<li class="left" v-for="(item, key) in application" :key="key">
					<i>{{key + 1}}</i>
					<p v-html="isDevice === 'wap' ? item.replace('<br />', '') : item"></p>
				</li>
		</ul>
	</div>
</template>

<script>
import { device } from '../../../assets/js/config'
import Title from '../base/Title'
export default {
	props: {
		application: Array
	},
	components: {
		Title
	},
	data () {
		return {
			isDevice: device()
		}
	}
}
</script>
<style scoped lang="less">
.application {
	margin-top: 40px;
	ul {
		padding-top: 30px;
		text-align: center;
		li {
			position: relative;
			width: 16.6666%;
			padding: 0 10px;
			margin-top: 20px;
			&:first-child, &:nth-child(7) {
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
				min-height: 66px;
				padding-top: 15px;
				font-size: 12px;
				color: #447375;
			}
		}
	}
	@media (max-width: 767px) {
		margin-top: 20px;
		ul {
			padding: 0 0 20px;
			text-align: left;
			li {
				display: block;
				width: 100%;
				margin-top: 40px;
				padding: 0 20px;
				i {
					float: left;
				}
				p {
					display: inline-block;
					min-height: auto;
					width: calc(100% - 40px);
					padding: 0;
					height: 32px;
					padding-left: 20px;
					display: flex;
					align-items: center;
				}
				&:after {
					content: '';
					left: 35px;
					top: -30px;
					width: 4px;
					height: 20px;
				}
			}
		}
	}
}
</style>