<template>
	<view class="MYLoad">
		<view class="occupy"></view>
		<view class="MyLoad-Navtitle">
			<image src="@/static/nav_stat_back_white.png" mode="" @click="Back()"></image>
			<text style="margin-left: 60rpx;">我的资产</text>
			<view class="">
				<image style="width: 50rpx; height: 50rpx; margin-right: 40rpx;" src="@/static/nav_detail_white.png" mode=""></image>
				<image src="@/static/nav_service_white.png" mode=""></image>
			</view>
			
			
		</view>
		
		<view class="LoadData">
			<view class="LoadData-tow">
				<view class="LoadData-tow-left">
					<p>总资产 <image src="@/static/fin_applet_info.png" mode=""></image> </p>
					<p class="money">{{eye ? '12,393.67' : '******'}}</p>
				</view>
				<view class="LoadData-tow-left">
					<p>总负债  <image src="@/static/fin_applet_info.png" mode=""></image> </p>
					<p class="money">{{eye ? '1,350,000.00' : '******'}}</p>
				</view>
				<view class="LoadData-icon" @click="eyeNext">
					<image src="../../static/eye.png" mode="" v-if="eye"></image>
					<image src="../../static/eye_fff.png" mode="" v-else></image>
				</view>
			</view>
			<view class="LoadData-footer">
				 {{eye ? '朱岳鹏交行资产' : ''}}更新至2024年12月25日
			</view>
		</view>
		
		<view class="MyAccount-Notice">
			<view class="MyAccount-Notice-text">
				<image src="@/static/upsdk_mp_red_dot.png" mode=""></image> 数字证书,让交易流程更简单
			</view>
			<view class="MyAccount-Notice-icon">
				立即查看 <image src="@/static/upsdk_payment_right.webp" mode=""></image>
			</view>
		</view>
		
		<view class="MyLoad-datalist">
			<view class="MyLoad-datalist-title">
				<text class="maxTitle">存款+</text>
				<text></text>
			</view>
			
			<view class="MyLoad-datalist-title">
				<text class="maxTitle" style="font-weight: normal; font-size: 32rpx;">活期余额</text>
				<view class="maxTitle-rigth">{{eye ? '12,393.67' : '******'}}<image style="width: 45rpx; height: 45rpx;" src="@/static/upsdk_payment_right.webp" mode=""></image> </view>
			</view>
		</view>
		
		<view class="OnlineLoadns-load-datali">
			<view class="datali-title">
				信用卡
			</view>
			<view class="datali-content">
				您还未绑定信用卡
			</view>
			<view class="card-list">
				<view class="card-list-text">
					去绑卡
				</view>
				<view class="card-list-text" style="border: none;">
					我要办卡
				</view>
			</view>
		</view>
		
		<view class="MyLoad-datalist">
			<view class="MyLoad-datalist-title">
				<text class="maxTitle">贷款</text>
				<text></text>
			</view>
			
			<view class="MyLoad-datalist-title" @click="GoMyLoad">
				<text class="maxTitle" style="font-weight: normal; font-size: 32rpx;">经营消费贷</text>
				<view class="maxTitle-rigth"> {{eye ? '1,350,000.00' : '******'}}<image style="width: 45rpx; height: 45rpx;" src="@/static/upsdk_payment_right.webp" mode=""></image> </view>
			</view>
		</view>
		
		<view class="MyAccount-footer-text">
			<p class="title">温馨提示:</p>
			<p>1.当前页面展示的总资产不统计您未添加账户的资产若您想查询您名下的全部资产，可 <span>修改资产统计方式</span>。您也可以通过添加银行卡、存折、一本通、存单和数字人民币钱包，使您的资产统计更完整，<span>点此添加账户</span>。</p>
			<p>2.保险及“其他资产”(详见“<span>资产说明</span>”)会有2天延时，其余资产均为实时数据。但在每日数据处理期间，资产展示金额与实际金额可能会有短暂偏差，完成处理后将恢复正常。</p>
			<p>3.当负债为负数时，表示您有溢存款，您无需为该项负债还款。</p>
			<p>4.所有数据仅供参考，不作为对账凭证。</p>
		</view>
	</view>
</template>

<script>
	import occupy from '../../components/occupy.vue';
	export default {
		data() {
			return {
				eye:true
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
			},
			GoMyLoad(){
				uni.navigateTo({
					url:'/pages/MyLoad/MyLoad'
				})
			},
			eyeNext(){
				this.eye = !this.eye
			}
		}
	}
</script>

<style lang="scss" scoped>
	.MYLoad{
		width: 100%;
		// height: 100vh;
		background: linear-gradient(to bottom, #6b8cf5,#4775e4,#4775e4,#6b8cf5,#f7f7f7 35%,);
		padding-bottom: 100rpx;
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
						font-size: 35rpx;
						font-weight: bold;
						margin: 10rpx 0;
					}
				}
				.LoadData-icon{
					height: 100%;
					display:flex;
					align-self: flex-start;
					color: #fff;
					image{
						width: 30rpx;
						height: 30rpx;
					}
				}
			}
			.LoadData-footer{
				font-size: 24rpx;
				color: #e6e6e6;
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
				align-items: center;
				padding: 30rpx 0;
				.maxTitle{
					font-size: 35rpx;
					color: #000;
					font-weight: bold;
				}
				.maxTitle-rigth{
					display: flex;
					align-items: center;
					font-weight: bold;
					image{
						width: 45rpx;
						height: 45rpx;
					}
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
					color: #f70000;
				}
			}
		}
		
		.OnlineLoadns-load-datali{
			width: 95%;
			padding-bottom: 10rpx;
			background-color: #fff;
			margin: 0 auto;
			border-radius: 20rpx;
			margin-top: 40rpx;
			.datali-title{
				width: 90%;
				margin: 0 auto;
				padding: 30rpx 0;
				font-weight: bold;
			}
			.datali-content{
				width: 100%;
				text-align: center;
				font-size: 30rpx;
				color: #888888;
				margin: 50rpx 0;
			}
			.card-list{
				width: 90%;
				margin: 20rpx auto;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				justify-content: center;
				.card-list-text{
					flex: 1;
					height: 25rpx;
					font-size: 30rpx;
					color: #0d6ad7;
					border-right: 1px solid #e5e5e5;
					text-align: center;
					margin-top:20rpx;
					padding-right: 20rpx;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
		
		.MyAccount-footer-text{
			width: 90%;
			margin: 0 auto;
			font-size: 25rpx;
			color: #929192;
			line-height: 40rpx;
			margin-top: 40rpx;
			.title{
				color: #92979d;
				margin: 10rpx auto;
			}
			span{
				color: #435fc5;
			}
			p{
				margin: 10rpx 0;
			}
		}
	}
</style>
