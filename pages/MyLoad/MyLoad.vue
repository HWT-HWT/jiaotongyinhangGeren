<template>
	<view class="MYLoad">
		<view class="occupy"></view>
		<view class="MyLoad-Navtitle">
			<image src="@/static/nav_stat_back_white.png" mode="" @click="Back()"></image>
			<text>我的贷款</text>
			<image src="@/static/nav_service_white.png" mode=""></image>
		</view>
	
		<view class="LoadData">
			<view class="LoadData-tow">
				<view class="LoadData-tow-left">
					<p>最近应还 <image src="@/static/fin_applet_info.png" mode=""></image> </p>
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
	
		<view class="MyLoad-datalist">
			<view class="MyLoad-datalist-title">
				<text class="maxTitle">线上抵押贷</text>
				<text @click="GoOnlinad">更多</text>
			</view>
			
			<view class="MyLoad-datalist-text">
				<p class="one">未还本金</p>
				<p class="tow">1,350,000.00</p>
				<span>最近应还:3,375.00 </span>
				<span>近日还款日:2024-12-21</span>
			</view>
		</view>
	</view>
</template>

<script>
	import occupy from '../../components/occupy.vue';
	export default {
		data() {
			return {
				
			};
		},
		components:{
			occupy
		},
		methods:{
			Back(){
				uni.navigateBack()
			},
			GoOnlinad(){
				uni.navigateTo({
					url:'/pages/OnlineLoans/OnlineLoans'
				})
			}
		}
	}
</script>

<style lang="scss">
	.MYLoad{
		width: 100%;
		height: 100vh;
		background: linear-gradient(to bottom, #6b8cf5,#4775e4,#4775e4,#6b8cf5,#f7f7f7 35%,);
		.occupy{
			height: 100rpx;
		}
		.MyLoad-Navtitle{
			width: 90%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: #fff;
			font-weight: bold;
			font-family: 黑体;
			image{
				width: 45rpx;
				height: 45rpx;
			}
		}
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
					color: #c6dffe;
					font-size: 30rpx;
					p{
						display: flex;
						align-items: center;
						image{
							width: 33rpx;
							height: 33rpx;
						}
					}
					
					.money{
						color: #fff;
						font-size: 40rpx;
						font-weight: bold;
						margin: 10rpx 0;
					}
				}
			}
			.LoadData-footer{
				font-size: 30rpx;
				color: #fff;
				margin-top: 20rpx;
			}
		}
		.MyLoad-datalist{
			width: 95%;
			// height: 300rpx;
			padding-bottom: 40rpx;
			margin: 0 auto;
			margin-top: 40rpx;
			background-color: #fff;
			border-radius: 20rpx;
			.MyLoad-datalist-title{
				width: 90%;
				display:flex;
				justify-content: space-between;
				margin: 0 auto;
				padding: 30rpx 0;
				.maxTitle{
					font-size: 35rpx;
					color: #000;
					font-weight: bold;
				}
				text{
					font-size: 28rpx;
					color: #6a8bf5;
				}
			}
			.MyLoad-datalist-text{
				width: 90%;
				margin: 0 auto;
				.one{
					font-size: 28rpx;
					color: #888;
				}
				.tow{
					font-size: 35rpx;
					font-weight: bold;
					margin: 15rpx 0;
				}
				span{
					margin-right: 40rpx;
					font-size: 30rpx;
					color: #999;
				}
			}
		}
	}
</style>
