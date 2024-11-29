<template>
	<view class="Title-box">
		<view class="Title-li">
			<view class="Max">
				<span class="MaxTitle">{{MaxTitle}}</span>
				<span class="miniTitle">{{miniTitle}}</span>
			</view>
			<span class="rigth">{{rigth}}</span>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:"Title-box",
		data() {
			return {
				
			};
		},
		props:{
			MaxTitle:{
				type:String
			},
			miniTitle:{
				type:String
			},
			rigth:{
				type:String
			},
		}
	}
</script>

<style lang="scss" scoped>
	.Title-box{
		width: 95%;
		margin:  0 auto;
		margin-top: 20rpx;
		background-color: #fff;
		border-radius:20rpx;
		.Title-li{
			width: 90%;
			padding-top: 30rpx;
			display: flex;
			justify-content: space-between;
			margin: 0 auto;
			.Max{
				.MaxTitle{
					font-size: 35rpx;
					font-family: '华文中宋';
					font-weight:bold;
				}
				.miniTitle{
					font-size: 28rpx;
					margin-left: 10rpx;
				}
				
			}
			.rigth{
				font-size: 30rpx;
				color: #3672b7;
				font-family: '方正中宋';
			}
		}
	}
</style>