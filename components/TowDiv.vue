<template>
	<view class="TowDiv">
		<view class="left">
			<slot name="left"></slot>
		</view>
		
		<view class="rigth">
			<slot name="rigth"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name:"TowDiv",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
	.TowDiv{
		width: 95%;
		// height: 150rpx;
		// border: 1px solid;
		margin: 0 auto;
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
		.left{
			width: 47%;
			height: 100%;
			border-radius: 10px;
			// background-color: #fff;
			padding: 5rpx;
			
		}
		.rigth{
			width: 47%;
			height: 100%;
			padding: 5rpx;
			border-radius: 10px;
			// background: url('@/static/bg_warm.d1c8483.png');
			// background-size: 100% 100%;
			
		}
	}
</style>