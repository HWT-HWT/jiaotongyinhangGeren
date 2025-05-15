<template>
	<view class="finance">
		<view class="title">
			<occupy></occupy>
			<TaberTitle :TaberTitle='TaberTitle' :isTrue='true'>
					<slot>持仓</slot>
			</TaberTitle>
			<view class="TitleList">
				<view class="TitleList-li">
						<z-tabs :list="TitleList" tab-width='70' :barStyle='{"background":"#006ae9"}' active-color='#000' bg-color='none'></z-tabs>
				</view>
				<view class="TitleList-icon">
					<image src="../../static/ego-menu-1.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="finance-occupy"></view>
		
		<view class="finance-banner">
			<bannerSwiper :list="bannerSwiperimageList" :dianStyles='{"color":"#999","backgroundColor":"rgba(0,0,0,.2)"}'></bannerSwiper>
		</view>
		
		<!-- 行情中心 今日市场 -->
		<TowDiv>
			<template #left>
				<view class="quotation">
					<view class="quotation-title">
						<text class="quotation-title-left">行情中心</text>
						<text class="quotation-title-rigth">已收盘</text>
					</view>
					<view class="quotation-text">
						<view class="quotation-text-left">
							<p class="top">上升指数</p>
							<p class="footer">3348.20</p>
						</view>
						<view class="quotation-text-rigth">
							<p class="top">恒生指数</p>
							<p class="footer">13348.20</p>
						</view>
					</view>
				</view>
			</template>
			<template #rigth>
				<view class="quotation">
					<view class="quotation-title">
						<text class="quotation-title-left">今日市场</text>
						<text class="quotation-title-rigth"><text style="font-size: 30rpx;">62</text>/温暖</text>
					</view>
					<view class="quotation-text">
						<view class="quotation-text-left" style="background: none;">
							<p class="top">华夏A500ETF基金规模</p>
							<p class="top">突破100亿，适合作何..</p>
						</view>
					</view>
				</view>
			</template>
		</TowDiv>
		
		<!-- 财富精选 -->
		<TitleBox MaxTitle="财富精选" miniTitle="轻松挑选好产品">
			<scroll-view scroll-x="true">
				<view class="Optimal-title-btn">
					<view class="Optimal-btn" v-for="(item,index) in Optimal" :key="index">
						{{item}}
					</view>
				</view>
			</scroll-view>
			<view class="Optimal-money">
				<view class="money-title">
					广发创业板ETF发起式联接C 
					<uni-tag text="基金" type="primary" size="mini" custom-style="background-color: #f3f4f6; border-color: #f3f4f6; color: #90979d; font-weight:bold;margin-left:10rpx"/>
				</view>
				<view class="Optimal-list">
					<view class="Optimal-list-left">
						<p class="Optimal-list-left-MaxTitle">12.45%</p>
						<p class="Optimal-list-left-MiniTitle">近1年收益率</p>
					</view>	
					<view class="Optimal-list-rigth">
						<p class="Optimal-list-left-MaxTitle">跟踪创业板指数</p>
						<p class="Optimal-list-left-MiniText">5R进取型</p>
					</view>
				</view>
			</view>
			
			<view class="Optimal-money">
				<view class="money-title">
					摩根海外稳健配置混合(QDII-FOF)... 
					<uni-tag text="沃德优选" style="margin-left: 20rpx;" type="primary" size="mini" custom-style="background-color: #fef5e3; border-color: #fef5e3; color: #d68e55; font-weight:bold;"/>
					<uni-tag text="基金" type="primary" size="mini" custom-style="background-color: #f3f4f6; border-color: #f3f4f6; color: #90979d; font-weight:bold;margin-left:10rpx"/>
				</view>
				<view class="Optimal-list">
					<view class="Optimal-list-left">
						<p class="Optimal-list-left-MaxTitle">4.23%</p>
						<p class="Optimal-list-left-MiniTitle">近1年收益率</p>
					</view>	
					<view class="Optimal-list-rigth">
						<p class="Optimal-list-left-MaxTitle">短端美债 稳健获利</p>
						<p class="Optimal-list-left-MiniText">4R增长型</p>
					</view>
				</view>
			</view>
			
			<view class="money-btn">
				查看更多
			</view>
		</TitleBox>
		
		<!-- 指数专区 查一查 -->
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
	
		<!-- 投资配额 -->
		<view class="titleImage"></view>
		<view class="investment">
			<view class="investment-title">
				<z-tabs :list="investment" tab-width='70' :barStyle='{"background":"#bf9f34"}' active-color='#000' bg-color='none'></z-tabs>
			</view>
			<view class="investment-Tips">
				低风险为主，适合需要随时取用的资金
			</view>
			
			<view class="Optimal-money" v-for="(item,index) in investmentOptimal" :key="index">
				<view class="money-title">
					{{item.title}}
					<uni-tag text="基金" type="primary" size="mini" custom-style="background-color: #f3f4f6; border-color: #f3f4f6; color: #90979d; font-weight:bold;margin-left:10rpx"/>
				</view>
				<view class="Optimal-list">
					<view class="Optimal-list-left">
						<p class="Optimal-list-left-MaxTitle">{{item.num}}</p>
						<p class="Optimal-list-left-MiniTitle">{{item.numTitle}}</p>
					</view>	
					<view class="Optimal-list-rigth">
						<p class="Optimal-list-left-MaxTitle">{{item.MaxText}}</p>
						<p class="Optimal-list-left-MiniText">{{item.miniText}}</p>
					</view>
				</view>
			</view>
			
		</view>
		
		<view class="imageBg">
			
		</view>
		
		<!-- 发现更多 -->
		<view class="titleImage-tow"></view>
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
	import occupy from '../../components/occupy.vue';
	import TaberTitle from '../../components/TaberTitle.vue';
	import bannerSwiper from '../../components/bannerSwiper.vue';
	import TowDiv from '../../components/TowDiv.vue';
	import TitleBox from '../../components/Title-box.vue';
	export default {
		data() {
			return {
				TaberTitle:['../../static/nav_service.png','../../static/notice_message_top.png'],
				TitleList:['推荐','存款','贷款','理财','基金','保险','黄金'],
				bannerSwiperimageList:[
					{url: '../../static/finance-banner-1.png'},
					{url: '../../static/finance-banner-2.png'},
					{url: '../../static/finance-banner-3.png'},
					{url: '../../static/finance-banner-4.png'},
				],
				Optimal:['市场热点','稳健专区','新品上架','沃德优选'],
				investment:['灵活存取','稳健投资','进取投资','保险保障'],
				investmentOptimal:[
					{
						title:'交银理财现金添利13号惠享G',num:'1.45%',numTitle:'七日年化收益率',MaxText:'快赎1万，T+0到账',miniText:'0.01元起投 2日确认份额'
					},
					{
						title:'天天成长3号66期A ',num:'1.56%',numTitle:'七日年化收益率',MaxText:'快赎1万，T+1到账',miniText:'0.01元起投 2日确认份额'
					},
					{
						title:'交银理财现金添利31号惠享C',num:'1.48%',numTitle:'七日年化收益率',MaxText:'快赎1万，T+0到账',miniText:'0.01元起投 2日确认份额'
					}
				],
				bannerSwiperimage:[
					{url: '../../static/titlebox-12.png'},
					{url: '../../static/titlebox-18.png'},
					{url: '../../static/titlebox-19.png'},
				],
			};
		},
		components:{
			TaberTitle,
			occupy,
			bannerSwiper,
			TowDiv,
			TitleBox
		}
	}
</script>

<style lang="scss" scoped>
	.finance{
		width:100%;
		background-color: #f7f7f7;
		padding-bottom: 20rpx;
		.title{
			width: 100%;
			background-color: #fff;
			position: fixed;
			z-index: 999;
			top: 0;
			.TitleList{
				height: 100rpx;
				margin: 0 auto;
				// border: 1px solid;
				position:relative;
				background-color: #f7f7f7;
				top: 0;
				display: flex;
				padding: 0 20rpx;
				.TitleList-li{
					width: 90%;
					display: flex;
					align-items: center;
				}
				.TitleList-icon{
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: center;
					position: relative;
					image{
						width: 40rpx;
						height: 50rpx;
					}
				}
			}
		}
		.finance-occupy{
			height: 280rpx;
		}
		.finance-banner{
			width: 95%;
			height: 370rpx;
			margin: 0 auto;
		}
		
		// TowDiv 行情中心 今日市场
		.left{
			.quotation{
				padding:20rpx;
				background-color: #fff;
				border-radius: 10px;;
				.quotation-title{
					padding: 0rpx 15rpx;
					font-size: 28rpx;
					display: flex;
					justify-content: space-between;
					.quotation-title-rigth{
						font-size: 23rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						color: #888;
					}
				}
				.quotation-text{
					width: 100%;
					margin-top: 5rpx;
					display: flex;
					justify-content: space-between;
					border-radius:10rpx;
					margin-top: 5rpx;
					.quotation-text-left{
						width: 48%;
						height: 100%;
						font-size: 25rpx;
						display: flex;
						flex-wrap: wrap;
						justify-content: center;
						background-color: #fff5f4;
						padding: 10rpx 0;
						.footer{
							color:red;
						}
					}
					.quotation-text-rigth{
						width: 48%;
						height: 100%;
						font-size: 25rpx;
						display: flex;
						flex-wrap: wrap;
						justify-content: center;
						background-color: #fff5f4;
						padding: 10rpx 0;
						.footer{
							color:red;
						}
					}
				}
			}
		}
		.rigth{
			.quotation{
				padding:20rpx;
				border-radius: 10px;
				background: url('@/static/bg_warm.d1c8483.png');
				background-size: 100% 100%;
				.quotation-title{
					padding: 0rpx 15rpx;
					font-size: 28rpx;
					display: flex;
					justify-content: space-between;
					.quotation-title-rigth{
						font-size: 25rpx;
						display: flex;
						justify-content: center;
						align-items: center;
						color: #dd934e;
					}
				}
				.quotation-text{
					width: 100%;
					display: flex;
					justify-content: space-between;
					border-radius:10rpx;
					.quotation-text-left{
						flex:1;
						background-color: #888;
						height: 100%;
						font-size: 25rpx;
						display: flex;
						flex-wrap: wrap;
						justify-content: center;
						background-color: #fff5f4;
						padding: 10rpx 0;
						.top{
							margin-top: 5rpx;
						}
					}
					.quotation-text-rigth{
						width: 48%;
						height: 100%;
						font-size: 28rpx;
						display: flex;
						flex-wrap: wrap;
						justify-content: center;
						background-color: #fff5f4;
					}
				}
			}
		}
		
		// 财富精选
		scroll-view{
			margin: 0 auto;
			display: flex;
			.Optimal-title-btn{
				width: 100%;
				padding-left: 10rpx;
				margin-top: 20rpx;
				display: flex;
				align-items: center;
				.Optimal-btn{
					height: 50rpx;
					padding: 0 20rpx;
					border-radius: 40rpx;
					font-size: 25rpx;
					border: 1px solid #555;
					color: #555;
					display: flex; 	
					align-items: center;
					margin: 0 10rpx;
				}
				.Optimal-btn:hover{
					border: 1px solid #126ec8;
					color: #126ec8;
				}
			}
		}
		.Optimal-money{
			width: 100%;
			margin-top: 20rpx;
			.money-title{
				width:90%;
				margin: 0 auto;
				font-size: 28rpx;
			}
			.Optimal-list{
				width: 90%;
				border-bottom: 1px solid #ebebeb;	
				margin: 0 auto;
				padding-bottom: 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				.Optimal-list-left{
					width: 45%;
					// padding-right: 0rpx;	
					.Optimal-list-left-MaxTitle{
						font-size: 45rpx;
						color: #de6161;
						margin: 10rpx auto;
					}
					.Optimal-list-left-MiniTitle{
						font-size: 30rpx;
						color: #888;
						margin: 10rpx auto;
					}
				}
				.Optimal-list-rigth{
					flex: 1;
					.Optimal-list-left-MaxTitle{
						font-size: 35rpx;
						margin: 10rpx auto;
					}
					.Optimal-list-left-MiniTitle{
						font-size: 28rpx;
						margin: 10rpx auto;
					}
					.Optimal-list-left-MiniText{
						font-size: 25rpx;
						color: #888;
					}
				}
			}
		}
		.money-btn{
			width: 95%;
			height: 100rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #1964bc;
			font-size: 32rpx;
		}
		
		// TowDiv 指数专区 查一查
		.Tow-image-left{
			width: 100%;
			// height: 100%;
			height: 150rpx;
			background: url('@/static/finance-box-1.png');
			background-size: 100%;
		}
		.Tow-image-rigth{
			width: 100%;
			height: 150rpx;
			background: url('@/static/finance-box-2.png');
			background-size: 100%;
		}
	
		// 投资配额
		.titleImage{
			width: 100%;
			height: 50rpx;
			background: url('@/static/TextTitleImage.png');
			background-size: 100%,100%;
			margin-top: 20rpx;
		}
		.investment{
			width: 95%;
			// height: 400rpx;	
			background-color: #fff;
			margin: 0 auto;
			margin-top: 20rpx;
			border-radius: 10rpx;
			// padding:10rpx;
			.investment-title{
				padding: 10rpx;
			}
			.investment-Tips{
				width: 90%;
				margin: 0 auto;
				// height: 40rpx;
				padding: 10rpx 0;
				background-color: #fefaee;
				font-size: 24rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #ab9544;
			}
			.Optimal-money{
				width: 100%;
				margin-top: 20rpx;
				.money-title{
					width:90%;
					margin: 0 auto;
					font-size: 28rpx;
				}
				.Optimal-list{
					width: 90%;
					border-bottom:none;	
					margin: 0 auto;
					padding-bottom: 20rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					.Optimal-list-left{
						width: 45%;
						// padding-right: 0rpx;	
						.Optimal-list-left-MaxTitle{
							font-size: 45rpx;
							color: #de6161;
							margin: 10rpx auto;
						}
						.Optimal-list-left-MiniTitle{
							font-size: 30rpx;
							color: #888;
							margin: 10rpx auto;
						}
					}
					.Optimal-list-rigth{
						flex: 1;
						.Optimal-list-left-MaxTitle{
							font-size: 35rpx;
							margin: 10rpx auto;
						}
						.Optimal-list-left-MiniTitle{
							font-size: 28rpx;
							margin: 10rpx auto;
						}
						.Optimal-list-left-MiniText{
							font-size: 25rpx;
							color: #888;
						}
					}
				}
			}
		}
		
		.imageBg{
			width: 95%;
			height: 250rpx;
			margin: 0 auto;
			background: url(@/static/TextTitleImage-3.png);
			background-size: 100% 100%;
			margin-top: 20rpx;
		}
		
		// 发现更多
		.titleImage-tow{
			width: 100%;
			height: 50rpx;
			background: url('@/static/TextTitleImage-1.png');
			background-size: 100%,100%;
			margin-top: 20rpx;
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
