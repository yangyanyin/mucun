<!-- 护照项目-项目入籍方案 -->
<template>
	<div class="program">
		<Title :name="title" />
		<ul>
			<li v-for="(item, key) in program" :key="key">
				{{item}}
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
		padding-top: 20px;
	}
	li {
		position: relative;
		padding-left: 25px;
		line-height: 28px;
		&:after {
			content: '';
			position: absolute;
			left: 0;
			top: 8px;
			width: 12px;
			height: 12px;
			border-radius: 100%;
			background: #45A366;
		}
		&:before {
			content: '';
			position: absolute;
			z-index: 9;
			left: 4px;
			top: 10px;
			width: 3px;
			height: 6px;
			border-bottom: 1px solid #fff;
			border-right: 1px solid #fff;
			transform: rotate(45deg);
		}
		i {
			display: block;
			padding-left: 10px;
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