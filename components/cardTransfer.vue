<template>
	<view class="CommonPayee">
		<view class="title">
			<text class="text">收款人</text>
			<text style="color: dodgerblue;"></text>
		</view>
		<view class="CommonPayee-list-box">
			<view class="list-content" style="border: none;">
				<view class="image">
					<image style="transform: scale(0.8);" src="../static/zz-list-2.png" mode=""></image>
				</view>
				<view class="text">
					<p>朱岳鹏</p>
					<p class="miniText">中国工商银行(6212 8836 0200 1627 447)</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"cardTransfer",
		data() {
			return {
				
			};
		},
	}
</script>

<style lang="scss" scoped>
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
</style>