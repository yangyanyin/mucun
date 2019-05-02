<template>
    <Layout>  
        <div class="bank-banner">
        	<img src="../../assets/images/bank/bank-banner.png" />
        </div>
        <div class="pc-max-width">
        	<div class="public-title">
        		<h3>什么人适合办新加坡银行个人开户</h3>
        		<p>Who is suitable for opening an account in Bank Of Singapore</p>
        	</div>
        	<div class="bank-account clearfix">
        		<div class="list left">
        			<img src="../../assets/images/bank/bank-account1.png" />
        			<div class="name">
	        			<strong>海外资产配置</strong>
						<p>需要做海外资产配置，开设新加坡银行账号，金融中心资金出入自由，方便快捷，便于后期海外置业，移民，保险，教育等用途。</p>
        			</div>
        		</div>
        		<div class="list left">
        			<img src="../../assets/images/bank/bank-account2.png" />
        			<div class="name">
        				<strong>需要境外银行做资金中转</strong>
						<p>新加坡个人银行账号可以在全球范围内，任何角落即可方便网银操作，作为亚洲金融中心，方便接	受不来自世界各地的资金。</p>
        			</div>
        		</div>
        		<div class="list left">
        			<img src="../../assets/images/bank/bank-account3.png" />
        			<div class="name">
	        			<strong>无法解释资金来源</strong>
						<p>商业银行都会对客户资金来源都会有要求，而大部分客户无法具体解释清楚资金来源，儒商资管团队经验丰富，能协助客户妥善处理好开户前和开户后资金入账问题。</p>
	        		</div>
	        	</div>
        	</div>
        </div>
        <div class="condition">
    		<div class="content">
    			<h3>新加坡银行个人开户申请条件</h3>
				<p>需要申请人提供相应的开户文件，包括个人身份文件及相关地址文件，同时完成填写银行要求的KYC文件和最低存款资金要求，以华侨银行开户为例，需要提供文件如下：</p>
				<ul class="clearfix">
					<li>
						<i>1</i>
						申请人提供开立账户的护照，金融事务身份及地址证明
					</li>
					<li>
						<i>2</i>
						申请人完成填写银行KYC文件并与银行确认信息无误
					</li>
					<li>
						<i>3</i>
						保证银行账户的最低资金要求（20w新币或等值货币）
					</li>
				</ul>
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
	.bank-banner{
		position: relative;
		img{
			width: 100%;
		}
	}
	.bank-account{
		margin-top: 50px;
		.list{
			width: 33.33%;
			padding: 0 20px;
			img{
				display: block;
				width: 100%;
			}
			.name{
				height: 234px;
				background: #f3f3f3;
				padding: 40px 30px;
				strong{
					font-size: 20px;
				}
				p{
					padding-top: 10px;
					font-size: 15px;
					line-height: 26px;
				}
			}
		}
	}
	.condition{
		background: url('../../assets/images/bank/bank-account-bg.png') no-repeat;
		background-size: 1920px;
		height: 560px;
		color: #fff;
		text-align: center;
		.content{
			width: 850px;
			margin: auto;
		}
		h3{
			font-weight: bold;
			font-size: 34px;
		}
		p{
			font-size: 18px;
		}
		ul{
			li{
				float: left;
				width: 33.3%;
			}
		}
	}
</style>

