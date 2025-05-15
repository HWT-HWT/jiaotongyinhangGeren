<template>
	<view class="TaberTitle">
		<view class="title-text" @click="quit" v-if="!isTrue">
			<slot></slot>
		</view>
		<view class="title-text" v-else>
			<slot></slot>
		</view>
		
		<view class="title-input">
			
			<view class="input">
				<view class="icon">
					<image src="@/static/nav_search.png" mode=""></image>
				</view>
				<input type="text" placeholder="周五抽五折红包" placeholder-style=""  />
			</view>
			<view class="icon">
				<image src="@/static/title-icon-2.webp" mode=""></image>
			</view>
		</view>
		<view class="title-icon">
			<view v-for="(item,index) in TaberTitle" :key="index">
				<image :src="item" mode=""></image>
			</view>
		</view>
	</view>	
</template>

<script>
	export default {
		name:"TaberTitle",
		data() {
			return {
				token:''
			};
		},
		props:{
			TaberTitle:{
				type:Array
			},
			isTrue:{
				type:Boolean
			}
		},
		methods:{
			quit(){
				if(this.token){
					uni.showToast({
						title:'退出登录',
						icon:'none',
						duration:2000
					})
					uni.removeStorageSync('account')
					setTimeout(()=>{
						uni.reLaunch({
							url:'/pages/login/login'
						})
					},1000)
				}else{
					uni.reLaunch({
						url:'/pages/login/login'
					})
				}
			}
		},
		created() {
			this.token = uni.getStorageSync('account')
		}
	}
</script>

<style lang="scss" scoped>
	.TaberTitle{
		width: 95%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		padding-bottom: 20rpx;
		.title-text{
			padding: 20rpx;
			display: flex;
			align-items: center;
			font-size: 30rpx;
		}
		.title-input{
			flex: 1;
			height: 70rpx;
			border: 1px solid #ccc;
			border-radius: 50rpx;
			display: flex;
			padding: 0 20rpx;
			align-items: center;
			justify-content: space-between;
			image{
				width: 40rpx;
				height: 40rpx;
				margin-top: 5rpx;
			}
			.input{
				flex: 1;
				display: flex;
				align-items: center;
				input{
					font-size: 28rpx;
					margin-left: 10rpx;
				}
			}
		}
		.title-icon{
			display: flex;
			align-items: center;
			justify-content: space-between;
			image{
				width: 45rpx;
				height: 45rpx;
				padding: 0 10rpx;
			}
		}
	}
</style>