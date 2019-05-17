<template>
	<div class="banner">
		<div class="width">
			<swiper :options="swiperOption">
			    <swiper-slide v-for="(banners, index) in bannerImgList" :key="index">
			    	<img :src="banners.img" />
			    	<p class="t1">{{banners.name}}</p>
			    	<p class="t2">投资置业    定居生活   全面规划</p>
			    </swiper-slide>
				<!-- <div class="swiper-pagination" slot="pagination"></div> -->
	<!-- 	        <div class="swiper-button-prev" slot="button-prev"></div>
		        <div class="swiper-button-next" slot="button-next"></div> -->
			</swiper>
	   </div>
	</div>
</template>
<script>
import 'swiper/dist/css/swiper.min.css'
export default {
	props:['bannerImgList'],
	data () {
		return {
			swiperOption: {
		        autoplay: 3000,
		        loop: true,
		        // pagination: '.swiper-pagination'
	        }
		}
	},
	mounted () {
		console.log(this.bannerImgList)
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
		bottom: 55%;
		width: 100%;
		text-align: center;
		color: #fff;
		font-size: 60px;
	}
	.t2{
		position: absolute;
		left: 0;
		bottom: 42%;
		width: 100%;
		text-align: center;
		color: #fff;
		font-size: 44px;
	}
}
@media(max-width: 767px) {
	.banner{
		position: relative;
		height: 272px;
		overflow: hidden;
		.width{
			position: absolute;
			width: 670px;
			height: 272px;
			top: 0;
			left: 50%;
			margin-left: -335px;
		}
		.t1{
			bottom: 55%;
			font-size: 30px;
		}
		.t2{
			bottom: 40%;
			font-size: 24px;
		}
		img{
			display: block;
			width: auto;
			height: 272px;
		}
	}
}

</style>