
<!-- 护照项目-项目优势 -->
<template>
	<div class="advantage">
		<Title name="项目优势" />
		<ul class="clearfix">
			<li class="clearfix" v-for="(item, key) in advantage" :key="key">
				<template v-if="key%2">
					<p v-html="item.des"></p>
					<img :src="item.icon" />
			
				</template>
				<template v-else>
					<img :src="item.icon" />
					<p v-html="item.des"></p>
				</template>
      </li>
		</ul>
	</div>
</template>

<script>
import Title from '../base/Title'
export default {
	props: {
		advantage: Array
	},
	components: {
		Title
	}
}
</script>
<style scoped lang="less">
.advantage {
	margin-top: 40px;
	padding-bottom: 40px;
	border-bottom: 1px solid #E3E3E3;
	ul {
		text-align: center;
	}
	li {
		display: flex;
		align-items: center;
		margin-top: 30px;
	}
	img {
		width: 50%;
	}
	p {
		width: 50%;
		padding: 20px;
		font-size: 12px;
		line-height: 20px;
	}
}
</style>