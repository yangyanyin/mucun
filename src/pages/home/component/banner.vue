<template>
	<div class="banner">
		<swiper :options="swiperOption">
	   		<!-- slides -->
		    <swiper-slide>
		    	<img src="../../../assets/images/index/banner1.png" />
		    	<p class="t1">十年深耕新加坡，客户满意度100%</p>
		    </swiper-slide>
		    <swiper-slide><img src="../../../assets/images/index/5cc188e52282d.jpg" /></swiper-slide>

		    <!-- Optional controls -->
		    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
		    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
		    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
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
				autoplay: true,
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
	.t1{
		position: absolute;
		left: 0;
		bottom: 30%;
		width: 100%;
		text-align: center;
		color: #fff;
		font-size: 50px;
	}
}
</style>