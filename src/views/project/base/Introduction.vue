<!-- 护照项目-项目简介 -->
<template>
	<div class="introduction">
		<Title name="项目简介" />
		<p v-for="(des, k) in introduction" :key="k"> {{ des }} </p>
	</div>
</template>

<script>
import Title from '../base/Title'
export default {
	props: {
		introduction: Array
	},
	components: {
		Title
	}
}
</script>
<style scoped lang="less">
.introduction {
	padding-bottom: 40px;
	border-bottom: 1px solid #E3E3E3;
	p {
		padding: 10px 0;
		font-size: 12px;
		line-height: 26px;
	}
	@media (max-width: 767px) {
		padding: 0 20px 20px;
	}
}
</style>