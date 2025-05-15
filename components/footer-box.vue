<template>
	<view class="user-footer-box" :style="{'background':backGroundUrl,'background-size':'100% 100%'}">
		<view class="user-footer-box-title">
			{{FooterTitle}}
		</view>
		<slot></slot>
	</view>
</template>

<script>

	export default {
		name:"footer-box",
		data() {
			return {
				
			};
		},
		props:{
			FooterTitle:{
				type:String
			},
			backGroundUrl:{
				type:String
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-footer-box{
		width: 47%;
		height: 420rpx;
		// border: 1px solid;
		background-color: #fff;
		border-radius: 20rpx;
		margin: 10rpx;
		display: flex;
		flex-wrap: wrap;
		// align-items: center;
		.user-footer-box-title{
			width: 90%;
			padding: 20rpx;
			font-size: 30rpx;
			font-weight: bold;
		}
	}
</style>