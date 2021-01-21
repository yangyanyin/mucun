<!-- 护照项目-如何获得护照 -->
<template>
	<div class="obtain">
		<Title :name="titleName" />
		<ul>
			<li v-for="(item, name, key) in obtain" :key="key">
				{{name}}
				<i v-for="(d, i) in item" :key="i" v-html="d"></i>
			</li>
		</ul>
	</div>
</template>

<script>
import Title from '../base/Title'
export default {
	props: {
		obtain: Object,
		titleName: String
	},
	components: {
		Title
	}
}
</script>
<style scoped lang="less">
.obtain {
	margin-top: 40px;
	padding-bottom: 40px;
	border-bottom: 1px solid #E3E3E3;
	ul {
		padding-top: 40px;
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
	@media (max-width: 767px) {
		margin-top: 20px;
		padding: 0 20px 20px;
		ul {
			padding-top: 20px;
			li {
				padding-left: 20px;
				line-height: 24px;
				i {
					padding: 0;
				}
			}
		}
	}
}
</style>