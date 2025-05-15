<template>
	<view class="TransferAccounts">
		<view class="list-card">
			<view class="card-box" v-for="(item,index) in FileList" :key="index" @click="cardBox(index)">
				<image :src="`../../static/zz_list-${index+1}.png`" mode=""></image>
				<p>{{item}}</p>
			</view>
		</view>
		
		<view class="TransferAccounts-list">
			<view class="TransferAccounts-list-box" v-for="(item,index) in TransferAccountsList" :key="index" @click="GoTransferAccountsList(index)">
				<image :src="`../../static/zz_${index+1}.png`" mode=""></image>
				<p>{{item}}</p>
			</view>
		</view>
		
		<view class="MyAccount-Notice">
			<view class="MyAccount-Notice-text">
				<image src="@/static/upsdk_mp_red_dot.png" mode=""></image> 活期盈利,边攒边花随时用
			</view>
			<view class="MyAccount-Notice-icon">
				立即查看 <image src="@/static/upsdk_payment_right.webp" mode=""></image>
			</view>
		</view>
		
		<view class="CommonPayee" @click="GoFill">
			<view class="title">
				<text class="text">常用收款人</text>
				<text style="color: dodgerblue;">全部</text>
			</view>
			
			<view class="CommonPayee-list">
				<view class="CommonPayee-list-title">
					朱岳鹏 <view>3</view>
				</view>
				<view class="CommonPayee-list-box">
					<view class="list-content" v-for="(item,index) in CommonPayeeList" :key="index">
						<view class="image">
							<image :src="`../../static/zz-list-${index+2}.png`" mode=""></image>
						</view>
						<view class="text">
							<p>朱岳鹏</p>
							<p class="miniText">{{item}}</p>
						</view>
					</view>
				</view>
			</view>
			
			<view class="CommonPayee-list-box">
				<view class="list-content" v-for="(item,index) in CommonPayeeList" :key="index">
					<view class="image">
						<image :src="`../../static/zz-list-${index+2}.png`" mode=""></image>
					</view>
					<view class="text">
						<p>朱岳鹏</p>
						<p class="miniText">{{item}}</p>
					</view>
				</view>
			</view>
			
			<view class="CommonPayee-list-box">
				<view class="list-content" style="border: none;">
					<view class="image">
						<image src="../../static/zz-list-2.png" mode=""></image>
					</view>
					<view class="text">
						<p>王伟峰</p>
						<p class="miniText">中国工商银行 借记卡(**1817)</p>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TransferAccountsList:['预约转账','资金转入','全部收款人','转账记录','转账设置','转账限额'],
				
				CommonPayeeList:['中国工商银行 借记卡(**7747)','中国农业银行 借记卡(**2173)','兴业银行 借记卡(**4519)'],
				
				FileList:['账户转账','手机转账','信用卡转账']
			};
		},
		methods:{
			cardBox(index){
				index === 0  ?  uni.navigateTo({url:'/pages/FillTransfer/FillTransfer?title=银行账户转账&num=1'}) : ''
				index === 1  ?  uni.navigateTo({url:'/pages/FillTransfer/FillTransfer?title=银行账户转账&num=2'}) : ''
			},
			GoFill(){
				uni.navigateTo({url:'/pages/FillTransfer/FillTransfer?title=银行账户转账&num=0'})
			},
			GoTransferAccountsList(index){
				console.log(index);
				index === 1 ? uni.navigateTo({url:'/pages/FundsTransfer/FundsTransfer'}) : ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.TransferAccounts{
		width: 100vw;
		height: 100vh;
		background: #f7f7f7;
		.list-card{
			width: 95%;
			height: 200rpx;
			margin: 0 auto;
			background: #5581d8;
			display: flex;
			border-radius: 20rpx;
			align-items: center;
			justify-content: space-evenly;
			.card-box{
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				image{
					width: 65rpx;
					height: 65rpx;
				}
				p{
					text-align: center;
					width: 100%;
					color: #fff;
					font-size: 30rpx;
					margin-top: 10rpx;
				}
			}
		}
		.TransferAccounts-list{
			width: 95%;
			margin: 0 auto;
			background-color: #fff;
			margin-top:20rpx;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			padding: 10rpx 0;
			border-radius: 20rpx;
			// justify-content: space-evenly;
			.TransferAccounts-list-box{
				display: flex;
				align-items: center;
				justify-content: center;
				flex-wrap: wrap;
				margin-top:20rpx;
				image{
					width: 55rpx;
					height: 55rpx;
				}
				p{
					width: 100%;
					text-align: center;
					margin-top: 10rpx;
					font-size: 28rpx
				}
			}
		}
		.MyAccount-Notice{
			width: 95%;
			margin: 0 auto;
			background-color: #fff;
			padding: 20rpx 0;
			margin-top: 30rpx;
			border-radius: 10rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.MyAccount-Notice-text{
				display: flex;
				align-items: center;
				font-size: 28rpx;
				image{
					width: 20rpx;
					height: 20rpx;
					padding: 0 20rpx;
				}
			}
			.MyAccount-Notice-icon{
				display: flex;
				align-items: center;
				font-size: 28rpx;
				image{
					width: 50rpx;
					height: 50rpx;
					padding-right: 20rpx;
				}
			}
		}
		.CommonPayee{
			width: 95%;
			// height: 200rpx;
			margin: 0 auto;
			margin-top: 20rpx;
			background-color: #fff;
			padding: 20rpx 0;
			border-radius: 20rpx;
			.title{
				width: 90%;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				font-size: 28rpx;
				.text{
					font-weight: bold;
					font-size: 32rpx
				}
			}
			.CommonPayee-list{
				width: 90%;
				// height: 200rpx;
				// border: 1px solid;
				margin: 0 auto;
				margin-top: 20rpx;
				font-size: 30rpx;
				.CommonPayee-list-title{
					width: 100%;
					display: flex;
					align-items: center;
					view{
						width: 40rpx;
						height: 40rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						background-color: aliceblue;
						color: #5581d8;
						border-radius: 100rpx;
						margin-left: 10rpx;
						font-size: 25rpx;
					}
				}
				.CommonPayee-list-box{
					width: 100%;
					margin: 0 auto;
					.list-content{
						width: 85%;
						margin: 0 auto;
						display: flex;
						align-items: center;
						border-bottom: 1px solid #ededed;
						margin-top: 20rpx;
						padding-bottom: 20rpx;
						.image{
							display: flex;
							align-items: center;
							image{
								width: 50rpx;
								height: 50rpx;
							}
						}
						.text{
							margin-left: 20rpx;
							font-size: 30rpx;
							.miniText{
								font-size: 25rpx;
								color: #666;
							}
						}
					}
				}
			}
			.list-content{
				width: 85%;
				margin: 0 auto;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #ededed;
				margin-top: 20rpx;
				padding-bottom: 20rpx;
				.image{
					display: flex;
					align-items: center;
					image{
						width: 50rpx;
						height: 50rpx;
					}
				}
				.text{
					margin-left: 20rpx;
					font-size: 30rpx;
					.miniText{
						font-size: 25rpx;
						color: #666;
					}
				}
			}
		}
	}
</style>
