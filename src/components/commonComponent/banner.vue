<template>
	<div class="banner">
		<swiper :options="swiperOption">
		    <swiper-slide v-for="(banners, index) in bannerImgList" :key="index">
		    	<img :src="banners.img" />
		    	<p class="t1">{{banners.name}}</p>
		    	<p class="t2">投资置业    定居生活   全面规划</p>
		    </swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
<!-- 	        <div class="swiper-button-prev" slot="button-prev"></div>
	        <div class="swiper-button-next" slot="button-next"></div> -->
		</swiper>
		   
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
		bottom: 40%;
		width: 100%;
		text-align: center;
		color: #fff;
		font-size: 44px;
	}
}
.video{
	width: 100%;
}
@media(max-width: 767px) {
	.banner{
		position: relative;
		height: 272px;
		overflow: hidden;
	}
	.video{
		position: absolute;
		width: 700px;
		top: 0;
		left: 50%;
		margin-left: -350px;
	}
}

</style>