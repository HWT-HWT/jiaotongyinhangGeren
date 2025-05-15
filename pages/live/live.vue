<template>
	<view class="live">
		<view class="title">
			<view class="occupy-title">
				
			</view>
			
			
			<view class="TaberTitle">
				<view class="title-text">
					<image src="@/static/wz.png" mode=""></image>广州	
				</view>
				<view class="title-input">
					<view class="input">
						<view class="icon">
							<image src="@/static/nav_search_white.png" mode=""></image>
						</view>
						<input type="text" placeholder="周五抽5折红包" placeholder-style="color:#fbf0fd"  />
					</view>
					<view class="icon">
						<image src="@/static/title-icon-2.webp" mode=""></image>
					</view>
				</view>
				<view class="title-icon">
					<image src="@/static/nav_scan_white.png" mode=""></image>
				</view>
			</view>
			
			<view class="title-icon-btn">
				<p>☼21℃</p>
				<p>下午好!</p>
			</view>	
		</view>
	
		<view class="live-list">
			<view class="live-list-icon" v-for="(item,index) in liveList" :key="index">
				<view class="icon">
					<image :src="`../../static/live-icon-${index+1}.png`" mode=""></image>
				</view>
				<view class="text">
					{{item}}
				</view>
			</view>
		</view>
	
		<view class="live-banner">
			<bannerSwiper :list="bannerSwiperimageList"></bannerSwiper>
		</view>
		
		<view class="MaxTitle">
			今日推荐
		</view>
	
		<view class="recommend">
			<view class="recommend-image">
				<image src="@/static/live-recommend-1.png" mode=""></image>
			</view>
			<view class="recommend-image">
				<image src="@/static/live-recommend-2.png" mode=""></image>
			</view>
			<view class="recommend-image">
				<image src="@/static/live-recommend-3.png" mode=""></image>
			</view>
		</view>
		
		<view class="MaxTitle">
			特色服务
		</view>
	
		<TowDiv>
			<template #left>
				<view class="Tow-image-left">
					
				</view>
			</template>
			<template #rigth>
				<view class="Tow-image-rigth">
					
				</view>
			</template>
		</TowDiv>
		
		<view class="TitleBox-image-money">
			<view class="Maximage">
				<image src="@/static/live-recommend-6.png" mode=""></image>
			</view>
			<view class="Miniimage">
				<image src="@/static/live-recommend-7.png" mode=""></image>
				<image src="@/static/live-recommend-8.png" mode=""></image>
			</view>
		</view>
		
		<z-tabs :list="investment" tab-width='150' :barStyle='{"background":"#1373f8"}' active-color='#000' bg-color='none'></z-tabs>
		
		<view class="image-list">
			<view class="image-list-left">
				<view class="left-one">
					<bannerSwiper :list="bannerSwiperimage" ></bannerSwiper>
				</view>
				<view class="left-tow">
				</view>
				<view class="left-therr">
				</view>
			</view>
			<view class="image-list-rigth">
				<view class="rigth-one">
				</view>
				<view class="rigth-tow">
				</view>
				<view class="rigth-therr">
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import bannerSwiper from '../../components/bannerSwiper.vue';
	import TowDiv from '../../components/TowDiv.vue';
	export default {
		data() {
			return {
				liveList:['生活缴费','话费充值','商超立减','高德打车','出行专区','党费','娱乐充值','电影票','高铁管家','乘车码','网易严选','特来电','餐饮美食','唯品会','更多'],
				bannerSwiperimageList:[
					{url: '../../static/adbanner7.jpg'},
					{url: '../../static/banner.jpg'},
					{url: '../../static/titlebox-7.png'},
				],
				investment:['推荐','餐饮','购物','出现'],
				bannerSwiperimage:[
					{url: '../../static/titlebox-12.png'},
					{url: '../../static/titlebox-18.png'},
					{url: '../../static/titlebox-19.png'},
				],
			};
		},
		components:{
			bannerSwiper,
			TowDiv
		}
	}
</script>

<style lang="scss" scoped>
	.live{
		width: 100%;
		// height: 100vh;
		padding-bottom: 50rpx;
		background:#f7f7f7 ;
		.title{
			width: 100%;
			height: 400rpx;
			background: url('@/static/bg_header_weather.webp')no-repeat;
			background-size:100% 100%;
			.occupy-title{
				height: 80rpx;
			}
			.TaberTitle{
				width: 95%;
				margin: 0 auto;
				display: flex;
				align-items: center;
				padding-bottom: 20rpx;
				color: #fff;
				.title-text{
					padding: 20rpx;
					display: flex;
					align-items: center;
					font-size: 30rpx;
					image{
						width: 40rpx;
						height: 40rpx;	
					}
				}
				.title-input{
					flex: 1;
					height: 70rpx;
					// border: 1px solid #ccc;
					border-radius: 50rpx;
					display: flex;
					padding: 0 20rpx;
					align-items: center;
					justify-content: space-between;
					background-color: rgba(255, 255, 255, 0.2);
					image{
						width: 40rpx;
						height: 40rpx;
						margin-top: 5rpx;
					}
					.input{
						flex: 1;
						color: #fff;
						display: flex;
						align-items: center;
						input{
							margin-left: 10rpx;
							font-size: 28rpx;
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
			.title-icon-btn{
				width: 95%;
				height: 150rpx;
				margin: 25rpx auto;
				color: #fff;
			}
		}
	
		.live-list{
			width: 90%;
			// height: 400rpx;
			margin: 0 auto;
			border: 1px solid #fff;
			background-color: rgba(255, 255, 255, 0.8);
			border-radius:20rpx;
			margin-top: -90rpx;
			display: flex;
			flex-wrap: wrap;
			padding: 10rpx;
			.live-list-icon{
				width: 20%;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				// padding: 1rpx;
				margin: 20rpx auto;
				.icon{
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					image{
						width: 60rpx;
						height: 60rpx;
					}
				}
				.text{
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 28rpx;
				}
			}
		}
	
		.live-banner{
			width: 95%;
			height: 180rpx;
			// border: 1px solid;
			margin: 0 auto;
			margin-top: 20rpx;
			border-radius: 10rpx;
		}
		
		.MaxTitle{
			width: 94%;
			margin: 20rpx auto;
			font-size: 33rpx;
		}
		
		.recommend{
			width: 95%;
			height: 180rpx;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			margin-top: 20rpx;
			.recommend-image{
				width: 30%;
				height: 100%;
				image{
					width: 100%;
					height: 180rpx;
				}
			}
		}
	
		.Tow-image-left{
			width: 100%;
			// height: 100%;
			height: 150rpx;
			background: url('@/static/live-recommend-4.png');
			background-size: 100%;
		}
		.Tow-image-rigth{
			width: 100%;
			height: 150rpx;
			background: url('@/static/live-recommend-5.png');
			background-size: 100%;
		}
	
		.TitleBox-image-money{
			width: 95%;
			padding-bottom: 20rpx;
			margin:  30rpx auto;
			.Maximage{
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: 100%;
					padding: 0rpx 10rpx;
					height: 170rpx;
				}
			}
			.Miniimage{
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 20rpx;
				image{
					padding: 10rpx;
					height: 160rpx;
				}
			}
		}
	
		.image-list{
			width: 95%;
			display: flex;
			margin: 0 auto;
			justify-content: space-between;
			margin-top: 20rpx;
			.image-list-left{
				width: 49%;
				height: 100%;
				.left-one{
					width: 100%;
					height: 550rpx;
				}
				.left-tow{
					width: 100%;
					height: 500rpx;
					background: url('@/static/titlebox-13.png')no-repeat;
					background-size: 100% 100%;
					margin-top: 20rpx;
				}
				.left-therr{
					width: 100%;
					height: 500rpx;
					background: url('@/static/titlebox-15.png')no-repeat;
					background-size: 100% 100%;
					margin-top: 20rpx;
				}
			}
			.image-list-rigth{
				width: 49%;
				height: 100%;
				.rigth-one{
					width: 100%;
					height: 500rpx;
					background: url('@/static/titlebox-11.png')no-repeat;
					background-size: 100% 100%;
				}
				.rigth-tow{
					width: 100%;
					height: 550rpx;
					background: url('@/static/titlebox-14.png')no-repeat;
					background-size: 100% 100%;
					margin-top: 20rpx;
				}
				.rigth-therr{
					width: 100%;
					height: 500rpx;
					background: url('@/static/titlebox-16.png')no-repeat;
					background-size: 100% 100%;
					margin-top: 20rpx;
				}
			}
		}
	}
</style>
