<!-- 护照项目-Banner -->
<template>
  <div class="project-banner">
		<img :src="banner[name]" :alt="name" />
	</div>
</template>
<script>
export default {
	props: {
		name: String
	},
  data () {
    return {
			banner: {
				vanuatu: require('../../../assets/images/passport/vanuatu-banner.jpg')
			}
		}
  }
};
</script>
<style lang="less" scoped>
.project-banner {
	display: block;
	img {
		display: block;
		width: 100%;
	}
}
</style>