<template>
	<div class="banner">
		<swiper :options="swiperOption">
	   		<!-- slides -->
		    <swiper-slide><img src="../../../assets/images/5cc188df5104c.jpg" /></swiper-slide>
		    <swiper-slide><img src="../../../assets/images/5cc188e52282d.jpg" /></swiper-slide>

		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		    <div class="swiper-button-prev" slot="button-prev"></div>
		    <div class="swiper-button-next" slot="button-next"></div>
		    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
		</swiper>
	</div>
</template>
<script>
import 'swiper/dist/css/swiper.min.css'
export default {
	data () {
		return {
			swiperOption: {
				loop: true,
				navigation: {
			    	nextEl: '.swiper-button-next',
			    	prevEl: '.swiper-button-prev'
		  		}
			}
		}
	}
}
</script>
<style lang="less" scoped>
.banner{
	img{
		width: 100%;
	}
}
</style>