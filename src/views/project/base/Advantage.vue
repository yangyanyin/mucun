
<!-- 护照项目-项目优势 -->
<template>
	<div class="advantage details-advantage">
		<Title name="项目优势" />
		<ul class="clearfix">
			<li class="left" v-for="(item, key) in advantage" :key="key">
        <img :src="item.icon" />
        <h4>{{item.title}}</h4>
        <p v-html="item.des"></p>
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
	@media (max-width: 767px) {
		margin-top: 20px;
		padding: 0 10px 20px;
	}
}
ul {
	li {
		width: 23%;
		margin-right: 2.6666%;
		padding: 15px 0;
		text-align: center;
		&:nth-child(4n+0) {
			margin-right: 0;
		}
		img {
			display: block;
			width: 100%;
		}
		h4 {
			padding: 10px 0 8px 0;
			color: #447375;
		}
		p {
			min-height: 60px;
			font-size: 12px;
			line-height: 20px;
		}
		@media (max-width: 767px) {
			width: 50%;
			margin: 0;
			padding: 10px;
			h3 {
				padding: 8px 0 6px;
			}
			p {
				line-height: 18px;
				height: 72px;
				overflow: hidden;
				text-align: center;
			}
		}
	}
}
</style>
<style lang="less">
.antigua {
	ul li p {
		padding: 0 7px;
	}
}
</style>