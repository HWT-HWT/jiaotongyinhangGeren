<template>
	<view class="MySaft">
		<view class="occupy">
			
		</view>
		<view class="MySaft-title">
			<image src="@/static/nav_back.png" mode="" @click="back"></image>
			<text>我的安全</text>
			<image src="@/static/nav_service.png" mode=""></image>
		</view>
		
		<view class="MySaft-text">
			<p>安全检测 <image src="@/static/user-dp-1.png" mode=""></image> </p>
			<span>您尚未安全检测,建议立即检测</span>
			<view class="btn">
				一键检测
			</view>
		</view>
	
		<view class="MySaft-list">
			<text>登录安全</text>
			<view class="MySaft-list-box">
				
				<view class="MySaft-list-li">
					<image src="@/static/saft-1.png" mode=""></image>
					<view class="MySaft-list-box-text">
						<p>登录日志</p>
						<span>查询近30天登录记录</span>
					</view>
					<image style="width: 55rpx; height: 55rpx;" src="@/static/upsdk_payment_right.webp" mode=""></image>
				</view>
				
				<view class="MySaft-list-li" style="border: none;">
					<image style="width: 45rpx; height: 45rpx;" src="@/static/IMcf61a2bd6fdd4f5f8b63e569d3b389f9.png" mode=""></image>
					<view class="MySaft-list-box-text">
						<p>登录管理</p>
						<span>登录管理方式(密码登录,手势登录、....</span>
					</view>
					<image style="width: 55rpx; height: 55rpx;" src="@/static/upsdk_payment_right.webp" mode=""></image>
				</view>
				
			</view>
			
		</view>
		
		<view class="MySaft-list">
			<text>设备安全</text>
			<view class="MySaft-list-box">
				
				<view class="MySaft-list-li">
					<image src="@/static/saft-2.png" mode=""></image>
					<view class="MySaft-list-box-text">
						<p>借记卡安全锁</p>
						<span>设置账户可用时间和可用地区</span>
					</view>
					<image style="width: 55rpx; height: 55rpx;" src="@/static/upsdk_payment_right.webp" mode=""></image>
				</view>
				
				<view class="MySaft-list-li">
					<image src="@/static/saft-3.png" mode=""></image>
					<view class="MySaft-list-box-text">
						<p>身份认证工具</p>
						<span>管理各类身份认证工具</span>
					</view>
					<image style="width: 55rpx; height: 55rpx;" src="@/static/upsdk_payment_right.webp" mode=""></image>
				</view>
				
				<view class="MySaft-list-li" style="border: none;">
					<image src="@/static/saft-4.png" mode=""></image>
					<view class="MySaft-list-box-text">
						<p>隐私管理</p>
						<span>查看及撤销隐私政策及系统权限</span>
					</view>
					<image style="width: 55rpx; height: 55rpx;" src="@/static/upsdk_payment_right.webp" mode=""></image>
				</view>
				
				<view style="width: 100%;border-radius: 20rpx;">
					<image style="width: 100%; height: 180rpx;" src="@/static/titlebox-7.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="MySaft-list">
			<text>支付安全</text>
			<view class="MySaft-list-box">
				
				<view class="MySaft-list-li">
					<image src="@/static/IMeff05ee1e0ec41c0a7001af28975db5e.png" mode=""></image>
					<view class="MySaft-list-box-text">
						<p>支付设置</p>
						<span>管理支付密码及消费限额</span>
					</view>
					<image style="width: 55rpx; height: 55rpx;" src="@/static/upsdk_payment_right.webp" mode=""></image>
				</view>
				
				<view class="MySaft-list-li" style="border: none;">
					<image src="@/static/IMfb5e71ac8980455987d4ba16d82d6a0c.png" mode=""></image>
					<view class="MySaft-list-box-text">
						<p>转账设置</p>
						<span>管理转账限额及默认付款卡</span>
					</view>
					<image style="width: 55rpx; height: 55rpx;" src="@/static/upsdk_payment_right.webp" mode=""></image>
				</view>
				
			</view>
			
		</view>
		
		<view class="MySaft-list">
			<text>通知安全</text>
			<view class="MySaft-list-box">
				<view class="MySaft-list-li" style="border: none;">
					<image src="@/static/IMeff05ee1e0ec41c0a7001af28975db5e.png" mode=""></image>
					<view class="MySaft-list-box-text">
						<p>银信通</p>
						<span>开通及修改账户提醒服务</span>
					</view>
					<image style="width: 55rpx; height: 55rpx;" src="@/static/upsdk_payment_right.webp" mode=""></image>
				</view>
			</view>
			
		</view>
	
		<view class="list">
			
		</view>
		
	</view>
</template>

<script>
	import occupyVue from '../../components/occupy.vue';
	export default {
		data() {
			return {
				
			};
		},
		components:{
			occupyVue
		},
		methods:{
			back(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.MySaft{
		width: 100vw;
		padding-bottom: 50rpx;
		background: url('@/static/saft-bg.png') no-repeat;
		background-size: 100%;
		background-color: #f7f7f7;
		.occupy{
			width: 100%;
			height: 80rpx;
		}
		.MySaft-title{
			width: 90%;
			height: 100rpx;
			// border: 1px solid;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			image{
				width: 45rpx;
				height: 45rpx;
			}
			text{
				font-weight:bold;
			}
		}
		.MySaft-text{
			width: 90%;
			// height: 200rpx;
			margin: 0 auto;
			margin-top: 60rpx;
			display: flex;
			flex-wrap:wrap;
			p{
				width: 100%;
				font-size: 33rpx;
				display: flex;
				align-items: center;
				image{
					width: 35rpx;
					height: 40rpx;
					margin-left: 10rpx;
				}
			}
			span{
				width: 100%;
				font-size: 28rpx;
				margin: 20rpx 0;
			}
			.btn{
				display: flex;
				align-items: center;
				border: 1px solid;
				padding:15rpx 25rpx;
				border-radius: 50rpx;
				color: #fff;
				background: #016ae9;
				font-size: 28rpx;
				margin-top: 20rpx;
			}
		}
		.MySaft-list{
			width: 90%;
			margin: 0 auto;
			margin-top: 20rpx;
			
			text{
				font-size: 28rpx;
				color: #999;
			}
			.MySaft-list-box{
				margin-top: 20rpx;
				background: #fff;
				border-radius: 20rpx;
				padding: 10rpx 20rpx;
				.MySaft-list-li{
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 20rpx 0;
					border-bottom: 1rpx solid #e6e6e6;
					image{
						width: 45rpx;
						height: 45rpx;
					}
					.MySaft-list-box-text{
						padding:0 20rpx;
						flex: 1;
						p{
							font-size: 30rpx;
						}
						span{
							color: #828282;
							font-size: 28rpx;
						}
					}
				}
				
			}
		}
	}
</style>
