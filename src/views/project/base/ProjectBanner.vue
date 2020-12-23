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
				vanuatu: require('../../../assets/images/passport/vanuatu-banner.jpg'),
				cyprus: require('../../../assets/images/passport/cyprus-banner.jpg'),
				saintKitts: require('../../../assets/images/passport/SaintKitts-banner.jpg'),
				dominica: require('../../../assets/images/passport/Dominica-banner.jpg'),
				grenada: require('../../../assets/images/passport/Grenada-banner.jpg'),
				saintLucia: require('../../../assets/images/passport/saint-lucia-banner.jpg'),
				antigua: require('../../../assets/images/passport/Antigua-banner.jpg'),
				turkey: require('../../../assets/images/passport/Turkey-banner.jpg'),
				montenegro: require('../../../assets/images/passport/Montenegro-banner.jpg'),
			}
		}
  }
};
</script>
<style lang="less" scoped>
.project-banner {
	display: block;
	overflow: hidden;
	img {
		position: relative;
		display: block;
		width: auto;
		height: 340px;
		left: 50%;
		transform: translateX(-50%);
		@media(max-width: 1200px) {
			height: 260px;
		}
	}
}
</style>