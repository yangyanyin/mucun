<template>
	<div class="banner">
		<swiper :options="swiperOption" v-if="false">
		    <swiper-slide v-for="(banners, index) in bannerImgList" :key="index">
		    	<img :src="banners.img" />
		    	<p class="t1" v-if="banners.title">{{banners.title}}</p>
		    	<p class="t2" v-if="banners.description">{{banners.description}}</p>
		    </swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
<!-- 	        <div class="swiper-button-prev" slot="button-prev"></div>
	        <div class="swiper-button-next" slot="button-next"></div> -->
		</swiper>
		<video class="video"  src="../../../assets/images/video.mp4" autoplay="autoplay" loop="loop" muted="muted">your browser does not support the video tag</video>
		   
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
		        pagination: '.swiper-pagination'
	        }
		}
	},
	mounted () {
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
		bottom: 40%;
		width: 100%;
		text-align: center;
		color: #fff;
		font-size: 44px;
	}
}
.video{
	width: 100%;
	background: url('../../../assets/images/index/video-img.jpg') no-repeat top center;
	background-size: 100%;
}
@media(max-width: 767px) {
	.banner{
		padding-top: 60px;
		position: relative;
		height: 332px;
		overflow: hidden;
	}
	.video{
		position: absolute;
		width: 700px;
		top: 60px;
		left: 50%;
		background-size: 700px;
		margin-left: -350px;
	}
}

</style>