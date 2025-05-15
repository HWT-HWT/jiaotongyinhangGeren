<template>
	<view class="user" v-if="token">
		<view class="user-title" style="position: relative; background-color:rgba(0, 0, 0, 0);">
			<view class="occupy">
				
			</view>
			<view class="TaberTitle">
				<view class="title-text" @click="quit">
					退出
				</view>
				<view class="title-input">
					
				
				</view>
				<view class="title-icon">
					<view v-for="(item,index) in TaberTitle" :key="index">
						<image :src="item" mode=""></image>
					</view>
				</view>
			</view>	
		</view>
		
		<view class="user-title" :style="{'opacity':titleOp}">
			<view class="occupy">
				
			</view>
			<view class="TaberTitle">
				<view class="title-text" @click="quit">
					退出
				</view>
				<view class="title-input">
					
				
				</view>
				<view class="title-icon">
					<view v-for="(item,index) in TaberTitle" :key="index">
						<image :src="item" mode=""></image>
					</view>
				</view>
			</view>	
		</view>
	
		<view class="headTitle">
			<view class="head-icon">
				<image src="@/static/user-head.png" mode=""></image>
			</view>
			<view class="head-name">
				<view class="name-icon">
					*岳鹏
					<image src="@/static/ico_wode.webp" mode=""></image>
				</view>
				<view class="name-text">
					上次登录 2小时
				</view>
			</view>
			
			<view class="head-img">
				<image src="@/static/user-bj-1.png" mode=""></image>
			</view>
		</view>
	
		<view class="head-list">
			<view class="head-list-box">
				<p class="head-list-box-title">借记卡积分</p>
				<p class="head-list-box-number">0</p>
			</view>
			<view class="head-list-box">
				<p class="head-list-box-title">优惠卷</p>
				<p class="head-list-box-number">0</p>
			</view>
			<view class="head-list-box" style="border: none;">
				<p class="head-list-box-title">碳星权益</p>
				<p class="head-list-box-number">15</p>
			</view>
		</view>
	
		<view class="user-list">
			<view class="user-list-box" v-for="(item,index) in userList " :key="index">
				<view class="user-list-box-image">
					<image :src="item.url" mode=""></image>
				</view>
				<view class="user-list-box-text">
					{{item.name}}
				</view>
			</view>
		</view>
	
		<view class="user-money">
			<view class="user-money-image">
				<view class="user-money-text" @click="GoMyAssets">
					<view class="user-money-top">总资产 <image src="@/static/fin_applet_info-1.png"></image></view>
					<view class="user-money-content">0.00 <image src="@/static/home_icon_live_broadcast_solid_arrow.png"></image></view>
					<p><span style="opacity: 0.6;margin-right: 10rpx;">活期可用</span>0.00</p>
				</view>
				<view class="user-money-text">
					<view class="user-money-top">昨日收益 <image src="@/static/fin_applet_info-1.png"></image></view>
					<view class="user-money-content">-- <image src="@/static/home_icon_live_broadcast_solid_arrow.png"></image></view>
					<p><span style="opacity: 0.6; margin-right: 10rpx;">持仓</span>0.00</p>
				</view>
				<view class="user-money-icon">
					<image src="@/static/floor_asset_eye_open.png" mode=""></image>
				</view>
			</view>
				
			<view class="user-money-footer">
				<view class="user-money-footer-icon">
					<view class="user-money-footer-icon-image">
						<image src="@/static/icon_credit_balance.png" mode=""></image>
					</view>
					<view class="user-money-footer-icon-text">
						<p class="title">借记卡</p>
						<p class="text">账户详情</p>
					</view>
				</view>
				<view class="user-money-footer-icon" style="border: none;">
					<view class="user-money-footer-icon-image">
						<image src="@/static/icon_debit_balance.png" mode=""></image>
					</view>
					<view class="user-money-footer-icon-text">
						<p class="title">信用卡</p>
						<p class="text">办卡拿好礼	</p>
					</view>
				</view>
			</view>
		</view>
	
		<view class="user-Maxtitle">
			<text class="user-Maxtitle-left">账单</text>
			<text class="user-Maxtitle-rigth">查看账单</text>
		</view>
		
		<view class="bill">
			<view class="bill-title">
				<text class="bill-title-left">本月收入</text>
				<text class="bill-title-rigth">更多</text>
			</view>
			<view class="bill-content">
				<view class="bill-content-left">
					<p class="bill-content-left-top">收入</p>
					<p>0.00</p>
				</view>
				<view class="bill-title-rigth">
					<p class="bill-title-rigth-top">支出</p>
					<p>0.00</p>
				</view>
			</view>
		</view>
		
		<view class="user-load" @click="GoMyload">
			<view class="user-load-title">
				我的贷款
			</view>
			
			<view class="user-load-content">
				<view class="user-load-content-left">
					<view class="user-load-content-left-top">
						<view class="user-load-content-left-top-left">
							<view class="user-load-content-left-top-left-title">
								最近应还 <image src="@/static/ic_explain.png"></image>
							</view>
							<p>3,375.00</p>
						</view>
						<view class="user-load-content-left-top-left">
							<view class="user-load-content-left-top-left-title">
								最近还款日 
							</view>
							<p>2024-11-21</p>
						</view>
					</view>
					<view class="user-load-content-left-footer">
						未还本金合计:￥1,350,000.00
					</view>
				</view>
				<view class="user-load-content-rigth">
					<image src="@/static/upsdk_payment_right.webp" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="user-Maxtitle">
			<text class="user-Maxtitle-left">我的服务</text>
			<text class="user-Maxtitle-rigth">更多</text>
		</view>
	
		<view class="user-footer">
			<footerBox FooterTitle='我的支付'>
				<view class="footer-one">
					<view class="footer-one-top">
						<view class="footer-one-top-image">
							<image src="@/static/nav_summary_white.png" mode=""></image>
						</view>
						<view class="footer-one-top-text">
							支付设置
						</view>
					</view>
					<view class="footer-one-top">
						<view class="footer-one-top-image">
							<image src="@/static/IM37394e397a72418fbd4aea28bf16cc36.png" mode=""></image>
						</view>
						<view class="footer-one-top-text">
							代扣管理
						</view>
					</view>
				</view>
				
				<view class="footer-tow">
					<view class="footer-one-top">
						<view class="footer-one-top-image">
							<image src="@/static/bcm_ic_shortcut_ridecode.png" mode=""></image>
						</view>
						<view class="footer-one-top-text">
							乘车码
						</view>
					</view>
					<view class="footer-one-top">
						<view class="footer-one-top-image">
							<image src="@/static/IM2fcb6e8a733640e4a65f17ded38fce93.png" mode=""></image>
						</view>
						<view class="footer-one-top-text">
							电子医保码
						</view>
					</view>
				</view>
			</footerBox>
		
			<footerBox FooterTitle='数字人民币'>
				<view class="number-money">
					<image src="@/static/list-btn-0.png" mode=""></image>
					<p>体验数字新生活</p>
					<button size="mini" plain='true'>去体验</button>
				</view>
			</footerBox>
			
			<footerBox FooterTitle='远程办理' :backGroundUrl='"url(../../static/ic_mybranch_kefu.png)"'>
				<view class="number-Ai">
					<p>云上交行 视频营业厅</p>
					<p>8:00-22:00</p>
					<button size="mini" plain='true'>去办理</button>
				</view>
			</footerBox>
		
			<footerBox FooterTitle='广州越秀支行' backGroundUrl='#fff'>
				<view class="footer-four">
					<p>广卫路4号</p>
					<view class="footer-four-div">
						<image src="@/static/icon_service_my_branch_address.png" mode=""></image>
						距离24.6km
					</view>
					
					<view class="footer-four-list">
						<view class="footer-four-list-icon">
							<image src="@/static/nav_search.png" mode=""></image>
							<view class="text">
								网点查询
							</view>
						</view>
						<view class="footer-four-list-icon">
							<image src="@/static/icon_my_branch_bank_info.png" mode=""></image>
							<view class="text">
								网点详情
							</view>
						</view>
					</view>
				</view>
			</footerBox>
			
			<footerBox FooterTitle='我的安全':backGroundUrl='"url(../../static/user-bj4.png)"' >
				<view class="number-saft">
					<p>五维检测 保驾护航</p>
					<view class="number-saft-image">
						<image src="@/static/user-dp.png" mode=""></image>
					</view>
					<view class="number-saft-button">
						一键检测
					</view>
				</view>
			</footerBox>
			
			<footerBox FooterTitle='我的管家'>
				<view class="footer-housekeeper">
					<image src="@/static/user-head-1.png" mode=""></image>
					<p>何启豪</p>
					<text>广州越秀支行</text>
				</view>
			</footerBox>
		</view>
	
		<view class="footer-image"></view>
	</view>
</template>

<script>
	import TitleBox from '@/components/Title-box.vue'
	import footerBox from '@/components/footer-box.vue'
	export default {
		data() {
			return {
				TaberTitle:['../../static/nav_service.png','../../static/nav_set.png','../../static/notice_message_top.png'],
				userList:[
						{name:'个人主页',url:'../../static/IM7f8a04138330406794b110a86fc7eea8.png'},
						{name:'个人信息',url:'../../static/00_infomaintain.png'},
						{name:'我的收藏',url:'../../static/01_myfav.png'},
						{name:'账户管理',url:'../../static/IM73ffcfb3e505403c9689eb96dba3b581.png'},
						{name:'我的安全',url:'../../static/IMfa9133872c51488693fc166ca228d447.png'},
					],
					token:false,
					titleOp:0,
					titleBg:''
			};
				
		},
		components:{
			TitleBox,
			footerBox
		},
		created() {
			this.token = false
			// 没有account则未登录
			if(!uni.getStorageSync('account')){
				return uni.reLaunch({
					url:'/pages/login/login'
				})
			}
			this.token = true
		},
		methods:{
			quit(){
				uni.removeStorageSync('account')
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			GoMyload(){
				uni.navigateTo({
					url:'/pages/MyLoad/MyLoad'
				})
			},
			GoMyAssets(){
				uni.navigateTo({
					url:'/pages/MyAssets/MyAssets'
				})
			}
			
		},
		onPageScroll(top) {
			this.titleOp = top.scrollTop / 100
		
		}
	}
</script>

<style lang="scss" scoped>
	.user{
		width: 100vw;
		background-color: #f7f7f7;
		padding-bottom:100rpx ;
		.user-occupy{
			height: 200rpx;
		}
		.user-title{
			width: 100%;
			position: fixed;
			top: 0;
			background-color: #fff;
			z-index: 999;
			.occupy{
				width: 100%;
				height: 80rpx;
			}
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
		}
		.headTitle{
			width: 85%;
			margin:  0 auto;
			display: flex;
			align-items: center;
			// background-color: #fff;
			.head-icon{
				margin-right: 20rpx;
				image{
					width: 110rpx;
					height: 110rpx;
				}
			}
			.head-name{
				flex: 1;
				.name-icon{
					font-size: 35rpx;
					font-weight: bold;
					display: flex;
					align-items: center;
					image{
						width: 120rpx;
						height: 40rpx;
						margin-left: 20rpx;
					}
				}
				.name-text{
					margin-top: 10rpx;
					font-size: 25rpx;
					color: #999;
				}
				
			}
			.head-img{
				image{
					width: 220rpx;
					height: 75rpx;
				}
			}
		}
		.head-list{
			width: 90%;
			margin: 0 auto;
			margin-top: 50rpx;
			display: flex;
			justify-content: space-between;
			.head-list-box{
				height: 45rpx;
				border-right: 1px solid #e1e1e1;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				font-size: 30rpx;
				.head-list-box-title{
					width: 100%;
					margin-top: -20rpx;
					margin-right: 25rpx;
					text-align: center;
					color: #888;
				}
				.head-list-box-number{
					width: 100%;
					margin-top: 10rpx;
					margin-right: 25rpx;
					text-align: center;
				}
			}
		}
		.user-list{
			width: 95%;
			background-color: #fff;
			// padding: 25rpx;
			margin:  0 auto;
			margin-top: 50rpx;
			display: flex;
			justify-content:space-between;
			border-radius:20rpx;
			padding-bottom: 10rpx;
			.user-list-box{
				// border: 1px solid;
				padding: 15rpx;
				.user-list-box-image{
					// border: 1px solid;
					// padding: 10rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					image{
						width: 65rpx;
						height: 65rpx;
					}
				}
				.user-list-box-text{
					margin-top: 10rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 25rpx;
				}
			}
			
		}
		.user-money{
			background-color: #fff;
			width: 95%;
			margin:0 auto;
			border-radius: 20rpx;
			.user-money-image{
				width: 100%;
				height: 285rpx;
				background: url('@/static/user-bj-2.png');
				background-size: 100% 100%;
				margin: 0 auto;
				margin-top: 20rpx;
				border-radius: 20rpx;
				align-items: center;
				display: flex;
				justify-content: space-between;
				// z-index: 998;	
				.user-money-text{
					flex: 1;
					height: 200rpx;
					align-items: center;
					color: #fff;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					margin-left: 40rpx;
					font-size: 30rpx;
					.user-money-top{
						width: 100%;
						display: flex;
						align-items: center;
						flex-wrap: wrap;
						image{
							width: 30rpx;
							height: 30rpx;
							margin-left: 10rpx;
							background-color: #fff;
							border-radius: 50rpx;
							opacity: 0.6;
						}
					}
					.user-money-content{
						width: 100%;
						display: flex;
						align-items: center;
						font-weight: bold;
						font-size: 35rpx;
						image{
							width: 30rpx;
							height: 40rpx;
							margin-left: 10rpx;
							opacity: 0.3;
						}
					}
				}
				.user-money-icon{
					height: 60%;
					display: flex;
					justify-content: center;
					width: 10%;
					margin-right: 10rpx;
					image{
						width: 45rpx;
						height: 45rpx;
						// opacity: .6;
					}
				}
			}
			.user-money-footer{
				width: 100%;
				// height: 120rpx;
				padding: 35rpx 10rpx;
				display: flex;
				.user-money-footer-icon{
					width: 50%;
					// height: 100%;
					border-right: 1px solid #ccc;
					display: flex;
					justify-content: center;
					.user-money-footer-icon-image{
						// border: 1px solid;
						display: flex;
						justify-content: center;
						align-items: center;
						image{
							width: 50rpx;
							height: 50rpx;
						}
					}
					.user-money-footer-icon-text{
						display: flex;
						justify-content: center;
						align-items: center;
						flex-wrap: wrap;
						margin-left: 20rpx;
						.title{
							width: 100%;
							font-size: 28rpx;
						}
						.text{
							width: 100%;
							font-size: 25rpx;
							color: #888;
							margin-top: 5rpx;
						}
					}
				}
			}
		}
		.user-Maxtitle{
			width: 90%;
			display: flex;
			justify-content: space-between;
			margin:  0 auto;
			margin-top: 20rpx;
			.user-Maxtitle-left{
				font-size: 35rpx;
			}
			.user-Maxtitle-rigth{
				font-size: 28rpx;
				color: #126ec8;
			}
		}
		.bill{
			width: 95%;
			// height: 300rpx;
			// border: 1px solid;
			padding-bottom: 60rpx;
			margin: 0 auto;
			margin-top: 20rpx;
			background: url('@/static/user-bj.png');
			background-size: 100% 100%;
			border-radius: 20rpx;
			.bill-title{
				width: 90%;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				padding: 20rpx 0;
				.bill-title-left{
					font-size: 32rpx;
					font-weight:bold;
				}
				.bill-title-rigth{
					font-size: 28rpx;
					color: #5b729a;
				}
			}
			.bill-content{
				width: 90%;
				margin: 0 auto;
				margin-top: 20rpx;
				display: flex;
				justify-content: space-between;
				.bill-content-left{
					font-size: 40rpx;
					font-weight: bold;
					.bill-content-left-top{
						font-size: 25rpx;
						color: #888;
						font-weight: normal;
						margin-bottom: 10rpx;
					}
				}
				.bill-title-rigth{
					font-size: 40rpx;
					font-weight: bold;
					.bill-title-rigth-top{
						font-size: 25rpx;
						color: #888;
						margin-bottom: 10rpx;
						font-weight: normal;
					}
				}
			}
		}
		.user-load{
			width: 95%;
			// height: 300rpx;
			padding: 30rpx 0;
			background-color: #fff;
			margin:  0 auto;
			margin-top: 20rpx;
			border-radius: 20rpx;
			.user-load-title{
				width: 90%;
				margin: 0 auto;
				padding: 20rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
			.user-load-content{
				width: 90%;
				margin: 0 auto;
				height: 150rpx;
				// border: 1px solid;
				display: flex;
				justify-content: space-between;
				.user-load-content-left{
					flex:1;
					height: 100%;
					// border: 1px solid;
					display: flex;
					flex-wrap: wrap;
					.user-load-content-left-top{
						width: 100%;
						// height: 100%;
						height: 70%;
						// border: 1px solid;
						display: flex;
						.user-load-content-left-top-left{
							width: 50%;
							height: 100%;
							// border: 1px solid;
							align-items: center;
							display: flex;
							flex-wrap: wrap;
							.user-load-content-left-top-left-title{
								display: flex;
								align-items: center;
								font-size: 30rpx;
								width: 100%;
								color: #222;
								image{
									width: 30rpx;
									height: 30rpx;
									margin-left: 10rpx;
									background-color: #fff;
									border-radius: 50rpx;
									opacity: 0.6;
								}
							}
							p{
								width: 100%;
								color: #000;
								font-weight: bold;
							}
						}
						.user-load-content-left-top-rigth{
							width: 50%;
							height: 100%;
							// border: 1px solid;
						}
					}
					.user-load-content-left-footer{
						width: 100%;
						font-size: 28rpx;
						color: #353535;
						margin-top: 15rpx;
					}
				}
				.user-load-content-rigth{
					// border: 1px solid;
					display: flex;
					align-items: center;
					justify-content: center;
					image{
						width: 50rpx;
						height: 60rpx;
					}
				}
			}
		}
		.user-footer{
			width: 95%;
			// border: 1px solid;
			margin: 0 auto;
			margin-top: 20rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			// 我的支付
			.footer-one{
				width: 90%;
				margin: 0 auto;
				display: flex;
				background-color: #f6f9fe;
				border-radius: 20rpx;
				padding: 20rpx 0;
				color: #6e8dad;
				.footer-one-top{
					width: 50%;
					height: 50%;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					justify-content: center;
					font-size: 25rpx;
					.footer-one-top-image{
						display: flex;
						align-items: center;
						justify-content: center;
						width: 100%;
						image{
							width: 40rpx;
							height: 40rpx;
						}
					}
					.footer-one-top-text{
						display: flex;
						flex-wrap: wrap;
						align-items: center;
						justify-content: center;
						width: 100%;
						margin-top: 10rpx;
					}
				}
			}
			.footer-tow{
				width: 90%;
				margin: 0 auto;
				display: flex;
				// background-color: #f6f9fe;
				border-radius: 20rpx;
				padding: 20rpx 0;
				// color: #6e8dad;
				.footer-one-top{
					width: 50%;
					height: 50%;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					justify-content: center;
					font-size: 25rpx;
					.footer-one-top-image{
						display: flex;
						align-items: center;
						justify-content: center;
						width: 100%;
						image{
							width: 50rpx;
							height: 50rpx;
						}
					}
					.footer-one-top-text{
						display: flex;
						flex-wrap: wrap;
						align-items: center;
						justify-content: center;
						width: 100%;
						margin-top: 10rpx;
					}
				}
			}
		
			// 数字人民币
			.number-money{
				width: 90%;
				margin: 0 auto;
				image{
					width: 100rpx;
					height: 100rpx;
				}
				p{
					font-size: 25rpx;
					margin-top: 5rpx;
					color: #888;
				}
				button{
					border-radius: 50rpx;
					border: none;
					color: #006ae9;
					background-color: #f1f7fb;
					margin-top: 100rpx;
				}
			}
	
			// 远程办理
			.number-Ai{
				width: 100%;
				font-size: 25rpx;
				height: 350rpx;
				line-height: 50rpx;
				margin-left: 20rpx;
				button{
					border-radius: 50rpx;
					background-color: #fff;
					border: none;
					color: #7d6aea;
					margin-top: 150rpx;
				}
			}
			
			// 附近网点
			.footer-four{
				width: 95%;
				height: 320rpx;
				margin: 0 auto;
				font-size: 28rpx;
				.footer-four-div{
					width: 200rpx;
					// border: 1px solid;
					padding: 8rpx 5rpx;
					border-radius: 40rpx;
					font-size: 25rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #000;
					margin-top: 20rpx;
					background-color: #fbffff;
					border: 1px solid #dfdfdf;
					image{
						width: 35rpx;
						height: 35rpx;
					}
				}
				.footer-four-list{
					width: 100%;
					display: flex;
					margin-top: 100rpx;
					justify-content: flex-end;
					.footer-four-list-icon{
						display: flex;
						flex-wrap: wrap;
						align-items: center;
						justify-content: center;
						width: 100%;
						
						image{
							width: 40rpx;
							height: 40rpx;
						}
						.text{
							width: 100%;
							text-align: center;
							font-size: 28rpx
						}
					}
					
				}
			}
		
			// 我的安全
			.number-saft{
				width: 90%;
				margin: 0 auto;
				display: flex;
				flex-wrap: wrap;
				.number-saft-image{
					width: 100%;
					margin-top: 20rpx;
					image{
						// width: ;
						width: 50rpx;
						height: 50rpx;
					}
				}
				p{
					width: 100%;
					font-size: 25rpx;
					margin-top: 5rpx;
					color: #888;
				}
				.number-saft-button{
					// width: 100%;
					border-radius: 50rpx;
					border: none;
					color: #006ae9;
					background-color: #f1f7fb;
					margin-top: 120rpx;
					margin-bottom: 20rpx;
					padding:10rpx 20rpx;
					font-size: 28rpx;
				}
			}
		
			// 我的管家
			.footer-housekeeper{
				width: 100%;
				height: 60%;
				text-align: center;
				line-height: 50rpx;
				image{
					width: 140rpx;
					height: 140rpx;
				}
				p{
					font-size: 30rpx;
					margin-top: 20rpx;
					font-weight: bold;
				}
				text{
					font-size: 30rpx;
					color: #888;
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
	}
</style>
