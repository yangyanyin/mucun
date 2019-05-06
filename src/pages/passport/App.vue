<template>
    <Layout>  
        <div class="passport">
        	<div class="pc-max-width">
        		<ul class="passport-list clearfix">
	        		<li>
	        			<strong class="name">多米尼克</strong>
	        			<img src="../../assets/images/passport/passport1.png" />
	        			<div class="clearfix info">
	        				<div class="left">
	        					<strong>123</strong>
	        					<i>免签国家</i>
	        				</div>
	        				<div class="right">
	        					<strong>31</strong>
	        					<i>全球排名</i>
	        				</div>
	        			</div>
	        		</li>
	        		<li>
	        			<strong class="name">格林纳达</strong>
	        			<img src="../../assets/images/passport/passport2.png" />
	        			<div class="clearfix info">
	        				<div class="left">
	        					<strong>128</strong>
	        					<i>免签国家</i>
	        				</div>
	        				<div class="right">
	        					<strong>27</strong>
	        					<i>全球排名</i>
	        				</div>
	        			</div>
	        		</li>
	        		<li>
	        			<strong class="name">圣卢西亚</strong>
	        			<img src="../../assets/images/passport/passport3.png" />
	        			<div class="clearfix info">
	        				<div class="left">
	        					<strong>129</strong>
	        					<i>免签国家</i>
	        				</div>
	        				<div class="right">
	        					<strong>26</strong>
	        					<i>全球排名</i>
	        				</div>
	        			</div>
	        		</li>
	        		<li>
	        			<strong class="name">塞浦路斯</strong>
	        			<img src="../../assets/images/passport/passport4.png" />
	        			<div class="clearfix info">
	        				<div class="left">
	        					<strong>156</strong>
	        					<i>免签国家</i>
	        				</div>
	        				<div class="right">
	        					<strong>10</strong>
	        					<i>全球排名</i>
	        				</div>
	        			</div>
	        		</li>
	        		<li>
	        			<strong class="name">圣基茨和尼维斯</strong>
	        			<img src="../../assets/images/passport/passport5.png" />
	        			<div class="clearfix info">
	        				<div class="left">
	        					<strong>134</strong>
	        					<i>免签国家</i>
	        				</div>
	        				<div class="right">
	        					<strong>21</strong>
	        					<i>全球排名</i>
	        				</div>
	        			</div>
	        		</li>
	        		<li>
	        			<strong class="name">瓦努阿图</strong>
	        			<img src="../../assets/images/passport/passport6.png" />
	        			<div class="clearfix info">
	        				<div class="left">
	        					<strong>128</strong>
	        					<i>免签国家</i>
	        				</div>
	        				<div class="right">
	        					<strong>30</strong>
	        					<i>全球排名</i>
	        				</div>
	        			</div>
	        		</li>
        		</ul>
        		<div class="country">
        			<div class="list clearfix">
        				<div class="left name-img">
        					<strong class="name">多米尼克</strong>
		        			<img src="../../assets/images/passport/passport1.png" />
		        			<div class="clearfix info">
		        				<div class="left">
		        					<strong>123</strong>
		        					<i>免签国家</i>
		        				</div>
		        				<div class="right">
		        					<strong>31</strong>
		        					<i>全球排名</i>
		        				</div>
		        			</div>
        				</div>
        				<div class="right exemption">
        					<div class="title">免签国家<strong>124</strong><i>(个)</i></div>
        					<div>
	        					<ul class="clearfix">
	        						<li>不丹</li>
	        						<li class="type1">签证入境</li>
	        					</ul>
	        					<ul class="clearfix">
	        						<li>东帝汶</li>
	        						<li class="type2">落地签入境</li>
	        					</ul>
	        					<ul class="clearfix">
	        						<li>丹麦</li>
	        						<li class="type3">免签目的国</li>
	        					</ul>
	        					<ul class="clearfix">
	        						<li>乌兹别克斯坦</li>
	        						<li class="type4">eVisa</li>
	        					</ul>
	        								<ul class="clearfix">
	        						<li>不丹</li>
	        						<li class="type1">签证入境</li>
	        					</ul>
	        					<ul class="clearfix">
	        						<li>东帝汶</li>
	        						<li class="type2">落地签入境</li>
	        					</ul>
	        					<ul class="clearfix">
	        						<li>丹麦</li>
	        						<li class="type3">免签目的国</li>
	        					</ul>
	        					<ul class="clearfix">
	        						<li>乌兹别克斯坦</li>
	        						<li class="type4">eVisa</li>
	        					</ul>
	        								<ul class="clearfix">
	        						<li>不丹</li>
	        						<li class="type1">签证入境</li>
	        					</ul>
	        					<ul class="clearfix">
	        						<li>东帝汶</li>
	        						<li class="type2">落地签入境</li>
	        					</ul>
	        					<ul class="clearfix">
	        						<li>丹麦</li>
	        						<li class="type3">免签目的国</li>
	        					</ul>
	        					<ul class="clearfix">
	        						<li>乌兹别克斯坦</li>
	        						<li class="type4">eVisa</li>
	        					</ul>
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        </div>
    </Layout>
</template>

<script>
import Layout from '../../components/layout.vue'

export default {
    name: 'app',
    components: {
        Layout
    }
}
</script>
<style lang="less" scoped>
	.passport{
		background: #131313;
		padding: 100px 0;
	}
	.passport-list{
		li{
			float: left;
			width: 16.66%;
			text-align: center;
			color: #fff;
			padding: 0 12px;
			strong{
				display: block;
				&.name{
					font-size: 18px;
					margin-bottom: 25px;
				}
			}
			img{
				width: 100%;
				max-width: 179px;

			}

			.info{
				padding: 22px;
				div{
					width: 50%;
					i{
						display: block;
						margin-top: 5px;
						color: #828282;

					}
				}
			}
		}
	}
	.country{
		.list{
			position: relative;
			padding: 50px 0 0 520px;
			border-top: 2px solid #bd8c67;
			min-height: 700px;
			.name-img{
				position: absolute;
				left: 0;
				top: 50px;
				width: 476px;
				height: 596px;
				border: 2px solid #352b24;
				text-align: center;
				color: #fff;
				img{
					display: block;
					width: 215px;
					margin: auto;
				}
				strong{
					display: block;
					padding: 30px 0 0 0;
				}
				strong.name{
					padding: 50px 0;
					font-size: 24px;
				}
				.info{
					width: 215px;
					margin: auto;
					>div{
						width: 50%;
					}
					i{
						display: block;
						margin-top: 5px;
						color: #828282;
					}
				}
				
			}
			.exemption{
				display: block;
				width: 100%;
				.title{
					display: block;
					height: 120px;
					line-height: 120px;
					color: #fff;
					font-size: 26px;
					text-align: center;
					background: #574335;
					strong{
						display: inline-block;
						padding: 0 20px 0 35px;
						font-size: 26px;
					}
					i{
						position: relative;
						top: -3px;
						font-size: 16px;
					}
				}
				ul{
					border-top: 1px solid #131313;
					li{
						float: left;
						color: #fff;
						height: 46px;
						line-height: 46px;
						font-size: 18px;
						&.type1{
							background: #a91c1c;
						}
						&.type2{
							background: #2d3b7e;
						}
						&.type3{
							background: #256224;
						}
						&.type4{
							background: #90711f;
						}
					}
					li:nth-child(1){
						width: 40%;
						color: #fff;
						border: 1px solid #352b24;
						border-radius: none;
						padding-left: 30px;
					}
					li:nth-child(2){
						width: 60%;
						text-align: center;
					}

				}
			}
		}
	}
</style>
