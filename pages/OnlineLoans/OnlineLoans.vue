<template>
	<view class="OnlineLoadns">
		<view class="OnlineLoadns-load-box">
			<view class="LoadData">
				<view class="LoadData-tow">
					<view class="LoadData-tow-left">
						<p>最近应还 <image src="@/static/ic_explain.png" mode=""></image> </p>
						<p class="money">3,375.00</p>
					</view>
					<view class="LoadData-tow-left">
						<p>最近还款日</p>
						<p class="money">2024-12-21</p>
					</view>
				</view>
				<view class="LoadData-footer">
					未还本金总计:1,350,000.00
				</view>
			</view>
		</view>
	
		<view class="OnlineLoadns-load-datali">
			<view class="datali-title">
				合同号: 2024*****4494
			</view>
			
			<view class="datali-load-moeny">
				<view class="datali-load-box">
					<p class="title">您的可借额度 <image src="@/static/ic_explain.png" mode=""></image> </p>
					<p class="money">0.00</p>
					<p class="text">借款截至日:2034-05-25</p>
				</view>
				<view class="datali-load-btn">
					<view class="btn">
						去借款
					</view>
				</view>
			</view>
			
			<view class="datali-box">
				<view class="datali-box-title">
					<p>线下抵押贷款</p>
					<p>2024-06-26 借款1,350,000.00</p>
					<p>借款凭证号:2024*****4001</p>
				</view>
				<view class="LoadData">
					<view class="LoadData-tow">
						<view class="LoadData-tow-left">
							<p>未还本金</image> </p>
							<p class="money" style="color: #000;font-size: 35rpx;">1,350,000.00</p>
						</view>
						<view class="LoadData-tow-left">
							<p>剩余/总期数</p>
							<p class="money">7/12</p>
						</view>
					</view>
					<view class="LoadData-footer">
						本期应还:3,375.00  本期还款日:2024-12-21
					</view>
				</view>
				<view class="card-list">
					<view class="card-list-text" >
						提前还款
					</view>
					<view class="card-list-text" @click="GoLoanDetails">
						还款详情
					</view>
					<view class="card-list-text" style="border: none;"@click="GoDetails">
						还款信息
					</view>
				</view>
			</view>
		</view>
		
		<view class="footer-btn">
			<image src="@/static/nav_detail.png" mode=""></image>结清记录
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			GoLoanDetails(){
				uni.navigateTo({
					url:'/pages/LoanDetails/LoanDetails'
				})
			},
			GoDetails(){
				uni.navigateTo({
					url:'/pages/datalis/datalis'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.OnlineLoadns{
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background-color: #f7f7f7;
		.OnlineLoadns-load-box{
			width: 100%;
			height: 249rpx;
			background: url('@/static/default.c3b60ea.png');
			background-size: 100%;
			.LoadData{
				width: 90%;
				margin: 0 auto;
				// border: 1px solid;
				margin-top: 40rpx;
				.LoadData-tow{
					width: 100%;
					display: flex;
					// justify-content: space-between;
					padding: 20rpx 0;
					align-items: center;
					.LoadData-tow-left{
						width: 50%;
						color: #000;
						font-size: 30rpx;
						p{
							display: flex;
							align-items: center;
							image{
								width: 33rpx;
								height: 33rpx;
								margin-left: 10rpx;
							}
						}
						.money{
							color: #000;
							font-size: 40rpx;
							// font-weight: bold;
							margin: 20rpx 0;
						}
						
					}
					.LoadData-footer{
						// font-size: 30rpx;
						color: #888;
						margin-top: 20rpx;
					}
				}
			}
		}
		.OnlineLoadns-load-datali{
			width: 100%;
			// height: 800rpx;
			padding-bottom: 30rpx;
			background-color: #fff;
			margin-top: 40rpx;
			.datali-title{
				width: 90%;
				margin: 0 auto;
				padding: 30rpx 0;
				font-weight: bold;
			}
			.datali-load-moeny{
				width: 90%;
				margin: 0 auto;
				// border: 1px solid;
				margin-top: 20rpx;
				display: flex;
				.datali-load-box{
					flex: 1;
					.title{
						font-size: 32rpx;
						display: flex;
						align-items: center;
						image{
							width: 33rpx;
							height: 33rpx;
							margin-left: 10rpx;
						}
					}
					.money{
						font-size: 40rpx;
						font-weight: bold;
						margin: 10rpx auto;
					}
					.text{
						font-size: 28rpx;
						color:#888;
					}
				}
				.datali-load-btn{
					width: 20%;
					display: flex;
					align-items: center;
					font-size: 25rpx;
					.btn{
						padding:10rpx 20rpx;
						border-radius: 10rpx;
						color: #d7d7d7;
						border: 1px solid;
					}
				}
			}
			.datali-box{
				width: 90%;
				// border: 1px solid;
				margin: 0 auto;
				margin-top: 20rpx;
				// height: 400rpx;
				background-color: #f2f7fb;
				border-radius: 20rpx;
				font-size: 25rpx;
				.datali-box-title{
					width: 90%;
					margin: 0 auto;
					padding: 20rpx 0;
					line-height: 50rpx;
				}
				.LoadData{
					width: 90%;
					margin: 0 auto;
					.LoadData-tow{
						width: 100%;
						display: flex;
						// padding: 20rpx 0;
						align-items: center;
						.LoadData-tow-left{
							width: 50%;
							color: #000;
							p{
								display: flex;
								align-items: center;
								image{
									width: 33rpx;
									height: 33rpx;
									margin-left: 10rpx;
								}
							}
							.money{
								color: #000;
								font-size: 30rpx;
								font-weight: bold;
								margin: 15rpx 0;
								
							}
						}
					}
					.LoadData-footer{
						color: #999;
					}
				}
				.card-list{
					width: 90%;
					margin: 20rpx auto;
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					justify-content: center;
					.card-list-text{
						// width: 20%;
						flex: 1;
						height: 25rpx;
						font-size: 28rpx;
						color: #6685fd;
						border-right: 1px solid #e5e5e5;
						text-align: center;
						margin: 40rpx 0;
						padding-right: 20rpx;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}
			}
			
		}
		.footer-btn{
			width: 100%;
			// height: 100rpx;
			padding: 25rpx 0;
			background-color: #fff;
			position: absolute;
			bottom: 0rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 30rpx;
			border-top:1px solid #eeeeee ;
			image{
				width: 40rpx;
				height: 40rpx;
			}
		}
	}
</style>
