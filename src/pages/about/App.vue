<template>
    <Layout>  
    	<div class="about-bg">
    		<img class="web-img" src="../../assets/images/about/about-banner-web.png" />
    		<img class="wap-img" src="../../assets/images/about/about-banner-wap.png" />
    	</div>
    	<div class="about-main pc-max-width">
	        <div class="details">
	        	<img class="web-img" src="../../assets/images/about/about-img1.png" />
	        	<img class="wap-img" src="../../assets/images/about/about-img1-wap.png" />
	        	<div>
		        	<h3>关于我们</h3>
					<p>儒商资管作为儒商文化的忠实信仰者，十年深耕新加坡，我们专注于为亚洲区域范围内的成功企业家提供第二居住和公民身份的服务，使个人或家庭成为全球公民。这是我们团队通过专业的一对一定制服务体验实现的，客户通过我们简化了成为全球公民的复杂性，并通过和相关机构保持长期稳定关系，可满足亚洲区域企业家对全球公民的需求。</p>
					<p>儒商资管立足狮城，放眼亚洲，专业服务亚洲企业成功精英。</p>
				</div>
	        </div>
	        <div class="about-img">
	        	<img class="web-img"src="../../assets/images/about/about-img2.png" />
	        	<img class="wap-img" src="../../assets/images/about/about-img2-wap.png" />
	        </div>
        </div>
    </Layout>
</template>

<script>
import Layout from '../../components/layout.vue'
import '../../assets/less/custom.less'
export default {
    name: 'app',
    components: {
        Layout
    }
}
</script>
<style lang="less" scoped>
	.details{
		position: relative;
		div{
			position: absolute;
			top: 250px;
			left: 40%;
			right: 110px;
			color: #bd8c67;
			h3{
				font-size: 36px;
				margin-bottom: 50px;
			}
			p{
				font-size: 18px;
				line-height: 34px;
				margin-bottom: 20px;
			}
		}
		@media(max-width: 1200px){
			div{
				top: 160px;
				h3{
					margin-bottom: 30px;
				}
				p{
					line-height: 30px;
					font-size: 16px;
				}
			}
		}
		@media(max-width: 767px){
			div{
				position: relative;
				left: 0;
				top: -50px;
				h3{
					text-align: right;
					font-size: 24px;
					margin-bottom: 30px;
					padding-right: 25px;
				}
				p{
					line-height: 28px;
				}
			}
		}
	}
	.about-main{
		margin-top: 90px;
		
		.about-img{
			margin-top: 80px;
		}
		img{
			// display: block;
			width: 100%;
		}
		@media(max-width: 767px){
			padding: 0 15px;
			margin-top: 30px;
			.about-img{
				margin: 0px;
			}
		}
	}
	.about-bg{
		display: block;
		img{
			width: 100%;
		}
	}


</style>
