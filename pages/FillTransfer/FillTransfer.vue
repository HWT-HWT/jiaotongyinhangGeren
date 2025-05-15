<template>
	<view class="FillTransfer">
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
		
		<cardTransferVue v-if="isTure==0"></cardTransferVue>
		<numberTrabsferVue v-if="isTure==1" @content='content'></numberTrabsferVue>
		<PhoneTransferVue v-if="isTure==2" @content='content'></PhoneTransferVue>
		
		
		<view class="CommonPayee-money">
			<view class="title">
				<text class="text">转账金额</text>
				<text style="color: dodgerblue;">说明</text>
			</view>
			<view class="CommonPayee-list-box">
				<view class="list-content" style="border-bottom:1rpx solid #f5f5f5;">
					<view class="image">
						￥
					</view>
					<view class="text">
						<input type="text" placeholder="可用限额2,000,000.00" placeholder-style="color:#ccc;font-size:28rpx; font-weight:normal;" v-model="moeny">
					</view>
				</view>
				<view class="list-content">
					<text style="color: #ccc;">添加转账说明</text>
				</view>
			</view>
		</view>
		
		<view class="tisi">
			<view>
				预计<text style="color: red;">实时</text>到账 
				<image src="@/static/ic_explain.png" mode=""></image> 
			</view>
			<text>更换到账时间</text>
		</view>
		
		
		<view class="FillTransferBtn-acvtion" v-if="!moeny || !contentIsTrue">
			下一步
		</view>
		
		<view class="FillTransferBtn" v-else>
			下一步
		</view>
		
		
		<view class="MyAccount-footer-text" v-if="isTure===2">
			<p class="title">温馨提示:</p>
			<p>1、通过手机银行进行手机号转账,单日/单笔限额为5000元。</p>
			<p>2、如收款人手机号码已绑定收款账户(绑定账户需收款人另行开通)款项将实时入账，否则款项将在付款人账户中冻结直至收款人收款，或次日22:00前未收款自动解除交易。</p>
			<p>3、收款方手机号可绑定银行卡收款，未绑定也可以通过短信回复卡号收款。</p>
			<p>4.使用交通银行|类账户向未绑定账户的手机号转账时，同时受类账户本身支出限额(日累计1万元，年累计20万元)限制。</p>
			<p>5.为保障您的资金安全，切勿轻信以网购刷单、冒充公检法、领导或亲人朋友、代办大额信用卡和高额贷款、网购客服或快递进行退款、鼓吹大额投资理财等非正规渠道要求进行的转账汇款，谨防被骗。涉及不明资金的转账事宜，务必当面或电话确认核实。资金一旦转出将无法追回。</p>
			<p>6.不扫描可疑二维码，不安装不明APP，妥善保管卡号、密码、短信验证码、令牌动态口令等个人重要信息。</p>
		</view>
		<view class="MyAccount-footer-text" v-else>
			<p class="title">温馨提示:</p>
			<p>1、为保障您的资金安全，切勿轻信以网购刷单、冒充公检法、领导或亲人朋友、代办大额信用卡和高额贷款、网购客服或快递进行退款、鼓吹大额投资理财等非正规渠道要求进行的转账汇款，谨防被骗。
			<span>涉及不明资金的转账事宜，务必当面或电话确认核实。资金一旦转出将无法追回。</span></p>
			<p>2、不扫描可疑二维码，不安装不明App，妥善保管卡号、密码、短信验证码、令牌动态口令等个人重要信息。</p>
		</view>
	</view>
</template>

<script>
	import cardTransferVue from '../../components/cardTransfer.vue';
	import numberTrabsferVue from '../../components/number-Trabsfer.vue';
	import PhoneTransferVue from '../../components/Phone-Transfer.vue';
	export default {
		data() {
			return {
				isTure:'',
				moeny:'',
				contentIsTrue:''
			};
		},
		 onLoad(options) {
			this.isTure = Number(options.num)
			this.isTure === 0 ? this.contentIsTrue=true:this.contentIsTrue=false
			uni.setNavigationBarTitle({
				title:options.title
			})
		},
		components:{
			cardTransferVue,
			numberTrabsferVue,
			PhoneTransferVue
		},
		methods:{
			content(isTrue){
				this.contentIsTrue=isTrue
			}
		}
	}
</script>

<style lang="scss" scoped>
	.FillTransfer{
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
		.tisi{
			width: 90%;
			margin: 0 auto;
			font-size: 28rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 20rpx;
			view{
				display: flex;
				color: #666;
				align-items: center;
				image{
					width: 30rpx;
					height: 30rpx;
					margin-left: 5rpx;
				}
			}
			
			text{
				color: dodgerblue;
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
				color: #d58946;
			}
		}
	}
</style>
