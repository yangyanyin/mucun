<!-- 护照项目-项目入籍方案：捐献入籍计划 -->
<template>
	<div class="program">
		<Title name="项目入籍方案：捐献入籍计划" />
		<p>{{tips}}</p>
		<ul v-for="(list, l) in program" :key="l" class="clearfix">
			<li v-for="(item, name, k) in list" :key="k" class="left">
				<h3>{{name}}</h3>
				<span v-for="(t, i) in item" :key="i">
					{{t}}
				</span>
			</li>
		</ul>
		<em>*以上费用根据国家政策而改变</em>
	</div>
</template>

<script>
import Title from '../base/Title'
export default {
	props: {
		program: Array,
		tips: String
	},
	components: {
		Title
	}
}
</script>
<style scoped lang="less">
.program {
	margin-top: 40px;
	padding-bottom: 40px;
	border-bottom: 1px solid #E3E3E3;
	p {
		padding: 15px 0 30px;
		font-size: 12px;
	}
	ul {
		li {
			width: 22%;
			margin-right: 4%;
			font-size: 12px;
			text-align: center;
			&:last-child {
				margin-right: 0;
			}
			h3 {
				display: block;
				line-height: 60px;
				font-size: 12px;
				color: #fff;
				background: #447375;
			}
			span {
				display: block;
				font-size: 12px;
				line-height: 40px;
				color: #447375;
				background: #E9EFED;
			}
		}
	}
	em {
		display: block;
		margin-top: 40px;
		color: #C9C9C9;
		font-size: 12px;
	}
	
}
</style>