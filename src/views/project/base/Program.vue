<!-- 护照项目-项目入籍方案 -->
<template>
	<div class="program">
		<Title :name="title" />
		<template v-for="(dome, s) in program">
			<p :key="dome.title + s">{{dome.title}}</p>
			<ul :key="s" class="clearfix">
				<li v-for="(list, name, l) in dome.item" :key="l" class="left">
					<h3>{{name}}</h3>
					<span v-for="(t, i) in list" :key="i" :class="{odd: i%2}">
						{{t}}
					</span>
				</li>
			</ul>
		</template>
		
		<em>*以上费用根据国家政策而改变</em>
	</div>
</template>

<script>
import Title from '../base/Title'
export default {
	props: {
		program: Array,
		title: String
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
				&.odd {
					background: #FAFAFA;
				}
			}
		}
	}
	em {
		display: block;
		margin-top: 40px;
		color: #C9C9C9;
		font-size: 12px;
	}
	@media (max-width: 767px) {
		margin-top: 20px;
		padding: 0 10px 20px;
		p {
			text-align: center;
			padding: 20px 0 0;
		}
		ul {
			margin: 10px 0;
			li {
				width: 50%;
				margin: 20px 0 0;
				padding: 0 10px;
			}
		}
	}
}
</style>