<template>
	<view class="FundsTransfer">
		<view class="CommonPayee">
			<view class="title">
				<text class="text">付款卡</text>
				<text style="color: dodgerblue;"></text>
			</view>
			<view class="CommonPayee-list-box">
				<view class="list-content" style="border: none;">
					<view class="image">
						<image src="../../static/app_launcher.png" mode=""></image>
					</view>
					<view class="text">
						<p>交通银行 借记卡(**2703)</p>
						<p class="miniText">可用余额: <text style="color: red;">0.00</text>元</p>
					</view>
					<view class="image">
						<image src="../../static/upsdk_payment_right.webp" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="CommonPayee-content">
			<view class="CommonPayee-content-title">
				付款卡
			</view>
			<view class="text">请使用[我的账户]内的已绑卡付款</view>
			<view class="CommonPayee-content-account">
				<view class="name">
					账户
				</view>
				<view class="content">
					请选择付款卡
				</view>
				<image src="../../static/upsdk_payment_right.webp" mode=""></image>
			</view>
		</view>
		
		<view class="CommonPayee-money">
			<view class="title">
				<text class="text">转账金额</text>
				<text style="color: dodgerblue;">说明</text>
			</view>
			<view class="CommonPayee-list-box">
				<view class="list-content">
					<view class="image">
						￥
					</view>
					<view class="text">
						<input type="text" placeholder="免手续费" placeholder-style="color:#ccc;font-size:28rpx; font-weight:normal;" v-model="moeny">
					</view>
				</view>
			</view>
		</view>
		
		<view class="checkbox">
			<label>
				<checkbox @click="checkboxBtn(Ischeckbox)" iconColor="#fff" activeBackgroundColor='#3475d3' :checked="Ischeckbox"/>
			</label>
			<text>我阅读并同意<text>《交通银行个人电子渠道转入资金客户协议》</text></text>
		</view>
		
		<view class="FillTransferBtn-acvtion" v-if="!moeny || !Ischeckbox">
			下一步
		</view>
		
		<view class="FillTransferBtn" v-else>
			下一步
		</view>
		<view class="MyAccount-footer-text">
			<p class="title">温馨提示:</p>
			<p>1、收款卡与付款卡必须为本人同名账户，<span>支持的付款卡银行列表</span>。</p>
			<p>2、转入限额:他行资金转入的单笔及日累计限额等，转入限额按付款卡银联无卡支付限额为准。</p>
			<p>3.付款卡为交行卡时，不受上述限额限制。</p>
			<p>4.为保障您的资金安全，切勿轻信以网购刷单、冒充公检法、领导或亲人朋友、代办大额信用卡和高额贷款、网购客服或快递进行退款、鼓吹大额投资理财等非正规渠道要求进行的转账汇款，谨防被骗。涉及不明资金的转账事宜，务必当面或电话确认核实。资金一旦转出将无法追回。</p>
			<p>5.不扫描可疑二维码，不安装不明APP，妥善保管卡号、密码:短信验证码、令牌动态口令等个人重要信息。</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				moeny:'',
				Ischeckbox:false
			};
		},
		methods:{
			checkboxBtn(istrue){
				this.Ischeckbox = !this.Ischeckbox 
				this.passNumber = false
				this.phoneNumber = false
			},
		}
	}
</script>

<style lang="scss" scoped>
	.FundsTransfer{
		width: 100vw;
		height: 100vh;
		background-color: #f7f7f7;
		.CommonPayee{
			width: 100%;
			margin: 0 auto;
			margin-top:20rpx;
			background-color: #fff;
			.title{
				width: 90%;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				font-size: 28rpx;
				background-color: #fff;
				.text{
					margin-top: 20rpx;
					font-weight: bold;
					font-size: 32rpx
				}
			}
			.CommonPayee-list-box{
				width: 100%;
				margin: 0 auto;
				background-color: #fff;
				.list-content{
					width: 90%;
					margin: 0 auto;
					display: flex;
					align-items: center;
					border-bottom: 1px solid #ededed;
					margin-top: 30rpx;
					padding-bottom: 20rpx;
					.image{
						display: flex;
						align-items: center;
						image{
							width: 60rpx;
							height: 60rpx;
						}
					}
					.text{
						flex: 1;
						margin-left: 20rpx;
						font-size: 30rpx;
						color: #666;
						.miniText{
							font-size: 25rpx;
						}
					}
				}
			}
		}
		
		.CommonPayee-content{
			width: 100%;
			margin-top: 20rpx;
			.CommonPayee-content-title{
				background-color: #fff;
				width: 100%;
				margin: 0 auto;
				padding:20rpx 40rpx;
				font-weight: bold;
				font-size: 32rpx;
			}
			.text{
				width: 90%;
				margin: 10rpx auto;
				color: #999;
				font-size: 28rpx;
			}
			.CommonPayee-content-account{
				display: flex;
				align-items: center;
				justify-content: space-between;
				background-color: #fff;
				padding:20rpx 40rpx;
				font-size: 30rpx;
				image{
					width: 50rpx;
					height: 50rpx;
				}
				.content{
					flex: 1;
					margin:0 20rpx;
				}
			}
		}
		
		.CommonPayee-money{
			width: 100%;
			margin: 0 auto;
			margin-top:20rpx;
			background-color: #fff;
			.title{
				width: 90%;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 28rpx;
				background-color: #fff;
				padding-top: 30rpx;
				.text{
					font-weight: bold;
					font-size: 32rpx
				}
			}
			.CommonPayee-list-box{
				width: 100%;
				margin: 0 auto;
				background-color: #fff;
				.list-content{
					width: 90%;
					margin: 0 auto;
					display: flex;
					align-items: center;
					margin-top: 30rpx;
					padding-bottom: 20rpx;
					font-size: 30rpx;
					.image{
						display: flex;
						align-items: center;
						font-size: 50rpx;
						font-weight: bold;
					}
					.text{
						flex: 1;
						margin-left: 20rpx;
						input{
							font-size: 50rpx;
							font-weight: bold;
						}
					}
				}
			}
		}
		
		.checkbox{
			width: 90%;
			margin: 30rpx auto;
			font-size: 28rpx;
			display: flex;
			flex-wrap: nowrap;
			justify-content: center;
		
			checkbox{
				transform: scale(0.7);
			}
			text{
				width: 100%;
				letter-spacing: 2rpx;
				line-height: 40rpx;
				text{
					color: #2d84ec;
					
				}
			}
		}
		
		.FillTransferBtn{
			width: 90%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 20rpx 0;
			margin-top: 40rpx;
			border-radius: 10rpx;
			background-color: #016ae9;
			color: #fff;
		}
		.FillTransferBtn-acvtion{
			width: 90%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 20rpx 0;
			margin-top: 40rpx;
			border-radius: 10rpx;
			background-color: #ccc;
			color: #fff;
		}
		.MyAccount-footer-text{
			width: 95%;
			margin: 0 auto;
			font-size: 23rpx;
			color: #929192;
			line-height: 35rpx;
			margin-top: 40rpx;
			.title{
				color: #92979d;
				margin: 10rpx auto;
				font-size: 28rpx;
				font-weight: bold;
			}
			span{
				color: #006ae9;
			}
		}
	}
</style>
