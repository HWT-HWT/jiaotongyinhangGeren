<template>
	<view class="home">
		<view class="title">
			<view class="occupy-title">
				
			</view>
			
			<view class="TaberTitle">
				<view class="title-text">
					登录
				</view>
				<view class="title-input">
					<view class="icon">
						<image src="@/static/nav_search_white.png" mode=""></image>
					</view>
					<view class="input">
						<input type="text" placeholder="周五抽5折红包" placeholder-style="color:#fbf0fd"  />
					</view>
					<view class="icon">
						<image src="@/static/title-icon-2.webp" mode=""></image>
					</view>
				</view>
				<view class="title-icon">
					<image src="@/static/title-icon-3.png" mode=""></image>
					<image src="@/static/nav_service_white.png" mode=""></image>
					<image src="@/static/nav_scan_white.png" mode=""></image>
				</view>
			</view>
			
			<view class="title-icon-btn">
				<view class="title-icon-btn-box" v-for="(item,index) in TitleIcon" :key="index">
					<view class="title-icon-btn-box-icon">
						<image class="title-icon-btn-box-image" :src="`../../static/ico_test${index+1}.webp`" mode=""></image>
					</view>
					<view class="title-icon-btn-box-text">
						{{item}}
					</view>
				</view>
			</view>	
		</view>
		
		<view class="list-btn">
			<view class="list-btn-box" v-for="(item,index) in listBtn" :key="index">
				<view class="list-btn-box-icon">
					<image class="list-btn-box-image" :src="`../../static/list-btn-${index}.png`" mode=""></image>
				</view>
				<view class="list-btn-box-text">
					{{item}}
				</view>
			</view>
			
		</view>
	
		<view class="Notice">
			<view class="Notice-lfet">
				<view class="Notice-lfet-list">
					<uni-tag text="公告" type="primary" size="mini" custom-style="background-color: #fff6ef; border-color: #fff6ef; color: #837b6f; font-weight:bold;"/> 
					<text>交通银行有关金融产品服务所执行服务条款</text>
				</view>
				<view class="Notice-lfet-list">
					<uni-tag text="精选" type="primary" size="mini"  custom-style="background-color: #f4f5f7; border-color: #f4f5f7; color: #7a7d8c; font-weight:bold;"/> 
					<text>如何轻松获得“无痛攒钱”法? 点击查看</text>
				</view>
			</view>
			<view class="Notice-rigth">
				<view class="Notice-rigth-icon">
					<image class="Notice-rigth-image" src="../../static/notice_message_top.png" mode=""></image>
				</view>
				<view class="Notice-rigth-text">
					消息
				</view>
			</view>
		</view>
		
		<view class="banner-zooz">
			<view class="banner-zooz-left">
				<bannerSwiper :list='bannerSwiperList'></bannerSwiper>
			</view>
			<view class="banner-zooz-rigth">
				<view class="banner-zooz-rigth-occupy">
					
				</view>
				<view class="banner-zooz-rigth-image">
					<image src="../../static/bg-image-1.png" mode=""></image>
					<image src="../../static/bg-image-2.png" mode=""></image>
				</view>
			</view>
		</view>
	
		<view class="Optimal">
			<view class="Optimal-title">
				<span class="Optimal-Maxtitle">优选精品</span>
				<span class="Optimal-Minititle">严选优质投资产品</span>
			</view>
			<scroll-view scroll-x="true">
				<view class="Optimal-title-btn">
					<view class="Optimal-btn" v-for="(item,index) in Optimal" :key="index">
						{{item}}
					</view>
				</view>
			</scroll-view>
			
			<view class="Optimal-list" v-for="(item,index) in OptimalList" :key='index'>
				<view class="Optimal-list-left">
					<p class="Optimal-list-left-MaxTitle">{{item.leftTitle}}</p>
					<p class="Optimal-list-left-MiniTitle">{{item.leftMiniTitle}}</p>
					<uni-tag text="理财" type="primary" size="mini" custom-style="background-color: #f3f4f6; border-color: #f3f4f6; color: #90979d;font-weight:bold;"/>
				</view>	
				<view class="Optimal-list-rigth">
					<p class="Optimal-list-left-MaxTitle">{{item.rigthTitle}}</p>
					<p class="Optimal-list-left-MiniTitle">{{item.rigthMiniTitle}}</p>
					<p class="Optimal-list-left-MiniText">{{item.rigthMiniText}}</p>
				</view>
			</view>
			
			<view class="Optimal-list" style="border: none;">
				<view class="Optimal-list-left">
					<p class="Optimal-list-left-MaxTitle">3.92%</p>
					<p class="Optimal-list-left-MiniTitle">近3月年化收益率</p>
					<uni-tag text="理财" type="primary" size="mini" custom-style="background-color: #f3f4f6; border-color: #f3f4f6; color: #90979d; font-weight:bold;"/>
					<uni-tag text="沃德优选" style="margin-left: 20rpx;" type="primary" size="mini" custom-style="background-color: #fef5e3; border-color: #fef5e3; color: #d68e55; font-weight:bold;"/>
				</view>	
				<view class="Optimal-list-rigth">
					<p class="Optimal-list-left-MaxTitle">最低持有7个自然日</p>
					<p class="Optimal-list-left-MiniTitle">信银理财安盈象固收稳利.</p>
					<p class="Optimal-list-left-MiniText">1元起投 今天确认份额</p>
				</view>
			</view>
			
		</view>
	
		<view class="load">
			<view class="load-title">
				<view class="load-title-text">
					<p class="load-title-text-max">一分钟定制贷款方案</p>
					<p class="load-title-text-mini">最高可借</p>
				</view>
				<view class="load-title-btn">
					<view class="load-title-text">
						10,000,000
					</view>
					<view class="load-title-btn">
						立即借款
					</view>
				</view>
			</view>
			<view class="load-list">
				<view class="load-list-li" v-for="(item,index) in loadList" :key="index">
					<p class="top">{{item.top}}</p>
					<p class="content">{{item.content}}</p>
					<p class="footer">{{item.footer}}</p>
				</view>
				<view class="load-list-li" style="border: none;">
					<p class="top">线上抵押贷</p>
					<p class="content">1000万</p>
					<p class="footer">额度最高</p>
				</view>
			</view>
		</view>
	
		<TitleBox :MaxTitle="'活动中心'" :miniTitle="'超多福利来袭'" :rigth="'更多'">
			<view class="TitleBox-image">
				<view class="Maximage">
					<image src="@/static/titlebox-7.png" mode=""></image>
				</view>
				<view class="Miniimage">
					<image src="@/static/titlebox-5.png" mode=""></image>
					<image src="@/static/titlebox-6.png" mode=""></image>
				</view>
			</view>
		</TitleBox>
	
		<TitleBox :MaxTitle="'养老专区'" :miniTitle="''" :rigth="'更多'">
			<view class="OldZooz">
				<view class="MaxImage">
					<image src="@/static/titlebox-4.png" mode=""></image>
				</view>
				<view class="icon-text">
					
					<view class="icon-text-list">
						<view class="icon">
							<image src="../../static/titlebox-1.png" mode=""></image>
						</view>
						<view class="text">
							<p class="text-title">养老规划</p>
							<p class="html-text">算算退休后能领多少</p>
						</view>
					</view>
					
					<view class="icon-text-list">
						<view class="icon">
							<image src="../../static/titlebox-2.png" mode=""></image>
						</view>
						<view class="text">
							<p class="text-title">税优计算器</p>
							<p class="html-text">测一测，能省多少税</p>
						</view>
					</view>
					
					<view class="icon-text-list" style="border: none;">
						<view class="icon">
							<image src="../../static/titlebox-3.png" mode=""></image>
						</view>
						<view class="text">
							<p class="text-title">商业养老金</p>
							<p class="html-text">退休美好生活从此开始</p>
						</view>
					</view>
				</view>
			</view>
		</TitleBox>
	
		<TitleBox :MaxTitle="'交薪通专区'" :miniTitle="''" :rigth="'更多'">
			<view class="TitleBox-image-money">
				<view class="Maximage">
					<image src="@/static/titlebox-8.png" mode=""></image>
				</view>
				<view class="Miniimage">
					<image src="@/static/titlebox-9.png" mode=""></image>
					<image src="@/static/titlebox-10.png" mode=""></image>
				</view>
			</view>
		</TitleBox>
	
		<view class="Text-Max">
			更多探索
		</view>
	
		<view class="image-list">
			<view class="image-list-left">
				<view class="left-one">
					<bannerSwiper :list="bannerSwiperimageList"></bannerSwiper>
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
	
		<view class="footer-image"></view>
		
		<view class="title-top":style="{opacity:yc}">
			<occupy></occupy>
			<TaberTitle :TaberTitle='TaberTitle'>登录</TaberTitle>
		</view>
	</view>
</template>

<script>
	import TaberTitle from '@/components/TaberTitle.vue'
	import occupy from "@/components/occupy.vue"
	import bannerSwiper from '../../components/bannerSwiper.vue'
	import TitleBox from '../../components/Title-box.vue'
	export default {
		data() {
			return {
				TaberTitle:['../../static/title-icon-1.png','../../static/nav_service.png','../../static/nav_scan.png'],
				TitleIcon:['账户','资产','安全','付款码'],
				listBtn:['数字人民币','转账','惠民贷','信用卡','城市专区','个人养老金','活动中心','一键绑卡','直播视频','全部'],
				bannerSwiperList:[
					{url: '../../static/bg-1.png'},
					{url: '../../static/bg-3.png'},
					{url: '../../static/bg-1.png'},
				],
				Optimal:['闲钱理财','短期+','价值投资','长期持有'],
				OptimalList:[
					{
						leftTitle:'3.30%',
						leftMiniTitle:'七日年化收益率',
						uniTag:'理财',
						uniTagBg:'#f3f4f6',
						uniTagColor:'#90979d',
						rigthTitle:'随时可赎,T+1到账',
						rigthMiniTitle:'天天成长3号80期G',
						rigthMiniText:'0.01元起投 今天确认份额'
					},
					{
						leftTitle:'4.00%',
						leftMiniTitle:'近3月年化收益率',
						uniTag:'理财',
						uniTagBg:'#f3f4f6',
						uniTagColor:'#90979d',
						rigthTitle:'每日开放',
						rigthMiniTitle:'交银理财鑫容日日开4号C',
						rigthMiniText:'1元起投 今天确认份额'
					},
				],
				loadList:[
					{top:'惠民贷',content:'80万',footer:'最高可申请'},
					{top:'质押贷',content:'20万',footer:'放款可达'},
				],
				bannerSwiperimageList:[
					{url: '../../static/titlebox-12.png'},
					{url: '../../static/titlebox-18.png'},
					{url: '../../static/titlebox-19.png'},
				],
				titleTop:false,
				yc:0
			}
		},
		onLoad() {
			
		},
		methods: {
			 
		},
		onPageScroll(res){
			this.yc = res.scrollTop/100
			res.scrollTop >=100 ? this.titleTop = true : this.titleTop = false
		},
		components:{
			TaberTitle,
			occupy,
			bannerSwiper,
			TitleBox
		}
	}
</script>

<style lang="scss" scoped>
	.home{
		width: 100%;
		padding-bottom: 50rpx;
		background-color: #f7f7f7;
		.title{
			width: 100%;
			height: 400rpx;
			background: url('@/static/home_king_area_default_new_bg.webp')no-repeat;
			background-size:100% 600rpx;
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
					input{
						font-size: 25rpx;
						flex: 1;
						color: #fff;
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
				display: flex;
				align-items: center;
				.title-icon-btn-box{
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					.title-icon-btn-box-icon{
						width: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						.title-icon-btn-box-image{
							width: 90rpx;
							height: 90rpx;
						}
					}
					.title-icon-btn-box-text{
						width: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						color: #fff;
						font-size: 28rpx;
					}
				}
			}
		}
		.list-btn{
			width: 95%;
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.list-btn-box{
				width: 20%;
				margin: 25rpx 0;
				// border: 1px solid;
				.list-btn-box-icon{
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					.list-btn-box-image{
						width: 60rpx;
						height: 60rpx;
					}
				}
				.list-btn-box-text{
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 25rpx;
				}
			}
		}
		.Notice{
			width: 90%;
			// height: 170rpx;
			margin: 10rpx auto;
			border-radius: 20rpx;
			background-color: #fff;
			display: flex;
			padding: 25rpx;
			.Notice-lfet{
				width: 85%;
				border-right: 1px solid #ccc;
				.Notice-lfet-list{
					width: 100%;
					font-size: 25rpx;
					padding: 10rpx 0;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					text{
						width: 100%;
						margin-left: 25rpx;
						
					}
				}
			}
			.Notice-rigth{
				flex: 1;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				.Notice-rigth-icon{
					height: 60rpx;
					// border: 1px solid;
					display: flex;
					align-items: center;
					justify-content: center;
					.Notice-rigth-image{
						width: 45rpx;
						height: 45rpx;
					}
				}
				.Notice-rigth-text{
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 20rpx;
				}
			}
		}
		.banner-zooz{
			width: 95%;
			height: 500rpx;
			margin: 0 auto;
			margin-top: 30rpx;
			display: flex;
			justify-content: space-between;
			.banner-zooz-left{
				width: 48%;
				height: 100%;
			}
			.banner-zooz-rigth{
				width: 48%;
				height: 100%;
				background: url('@/static/bg-2.png');
				background-size: 100% 100%;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				.banner-zooz-rigth-occupy{
					width: 100%;
					height: 80rpx;
				}
				.banner-zooz-rigth-image{
					width: 85%;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					margin: 0 auto;
					image{
						width:100%;
						height: 175rpx;
						margin: 10rpx 0;
					}
				}
			}
		}
		.Optimal{
			width: 95%;
			margin: 0 auto;
			margin-top: 20rpx;
			background: url('@/static/bj-1.png');
			background-size: 100% 100%;
			border-radius: 10rpx;
			background-position: center;
			.Optimal-title{
				padding:35rpx 0 0 25rpx;
				.Optimal-Maxtitle{
					font-size: 35rpx;
					font-weight: bold;
					letter-spacing: 1rpx;
					font-family: '华文中宋';
				}
				.Optimal-Minititle{
					font-size: 25rpx;
					color: #888;
					margin-left: 10rpx;
				}
			}
			scroll-view{
				width: 700rpx;
				margin: 0 auto;
				display: flex;
				.Optimal-title-btn{
					width: 120%;
					padding-left: 10rpx;
					margin-top: 20rpx;
					display: flex;
					align-items: center;
					.Optimal-btn{
						height: 60rpx;
						padding: 0 30rpx;
						border-radius: 40rpx;
						font-size: 30rpx;
						border: 1px solid #555;
						color: #555;
						display: flex; 	
						align-items: center;
						margin: 0 10rpx;
					}
					.Optimal-btn:hover{
						font-size: 35rpx;
						border: 1px solid #126ec8;
						color: #126ec8;
						font-weight:bold;
					}
				}
			}
			.Optimal-list{
				width: 90%;
				border-bottom: 1px solid #ccc;	
				margin: 0 auto;
				padding: 20rpx;
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
		.load{
			width: 95%;
			height: 300rpx;
			margin: 0 auto;
			margin-top: 20rpx;
			padding-bottom: 50rpx;
			background-color: #fff;
			border-radius: 10rpx;
			.load-title{
				height: 50%;
				padding: 20rpx 35rpx;
				.load-title-text{
					width: 100%;
					.load-title-text-max{
						font-size: 35rpx;
						font-weight:bold;
					}
					.load-title-text-mini{
						font-size: 25rpx;
						color: #888;
						margin-top: 5rpx;
					}
				}
				.load-title-btn{
					width: 100%;
					display: flex;
					justify-content: space-between;
					.load-title-text{
						flex: 1;
						font-size: 40rpx;
						color: #de6161;
						display: flex;
						align-items: center;
					}
					.load-title-btn{
						width: 150rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						border: 1px solid;
						border-radius:50rpx;
						padding: 15rpx 20rpx;
						font-size: 30rpx;
						color: #126ec8;
					}
				}
			}
			.load-list{
				width: 100%;
				height: 50%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				.load-list-li{
					text-align: center;
					border-right: 1px solid #ccc;
					font-size: 30rpx;
					display: flex;
					flex-wrap:wrap;
					justify-content: center;
					.top{
						width: 100%;
						font-weight: bold;
						letter-spacing: 2rpx;
					}
					.content{
						width: 100%;
						color: #de6161;
						margin: 5rpx auto;
					}
					.footer{
						width: 100%;
						font-size: 28rpx;	
						color: #777;
					}
				}
			}
		}
		.TitleBox-image{
			width: 90%;
			padding-bottom: 20rpx;
			margin:  10rpx auto;
			.Maximage{
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: 100%;
					height: 170rpx;
					padding: 5rpx;
				}
			}
			.Miniimage{
				padding: 0 5rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					padding: 5rpx;
					// width: 49%;
					height: 150rpx;
				}
			}
		}
		.OldZooz{
			width: 90%;
			margin: 0 auto;
			margin-top: 30rpx;
			padding-bottom: 20rpx;
			display: flex;
			// align-items: center;
			justify-content: center;
			.MaxImage{
				width: 50%;
				border-radius: 10rpx;
				image{
					width: 100%;
					height: 450rpx;
				}
			}
			.icon-text{
				// width: %;
				flex: 1;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				margin-left: 5rpx;
				.icon-text-list{
					width: 90%;
					height: 20%;
					border-bottom: 1rpx solid #ccc; 
					display: flex;
					padding: 30rpx 10rpx;
					.icon{
						display: flex;
						align-items: center;
						justify-content: center;
						padding-right: 20rpx;
						image{
							width: 50rpx;
							height: 50rpx;
						}
					}
					.text{
						display: flex;
						align-items: center;
						flex-wrap: wrap;
						.text-title{
							font-size: 30rpx;
						}
						.html-text{
							font-size: 23rpx;
							color: #999;
						}
					}
				}
			}
		}
		.TitleBox-image-money{
			width: 90%;
			padding-bottom: 20rpx;
			margin:  30rpx auto;
			.Maximage{
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: 100%;
					padding: 0rpx 10rpx;
					height: 260rpx;
				}
			}
			.Miniimage{
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 10rpx;
				image{
					padding: 10rpx;
					height: 125rpx;
				}
			}
		}
		.Text-Max{
			width: 95%;
			margin: 0 auto;
			font-size: 35rpx;
			font-weight: bold;
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
					height: 450rpx;
					background: url('@/static/titlebox-13.png')no-repeat;
					background-size: 100% 100%;
					margin-top: 20rpx;
				}
				.left-therr{
					width: 100%;
					height: 450rpx;
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
					height: 450rpx;
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
					height: 450rpx;
					background: url('@/static/titlebox-16.png')no-repeat;
					background-size: 100% 100%;
					margin-top: 20rpx;
				}
			}
		}
		.footer-image{
			width: 95%;
			height: 150rpx;
			margin-top: 50rpx;
			background: url('@/static/titlebox-17.png')no-repeat;
			background-size: 100% 100%;
		}
		.title-top{
			width: 100%;
			position: fixed;
			top: 0;
			background-color: #fff;
		}
	}
</style>