<template>
	<view class="TransactionDetails" :style="{'background':bill === true ? '#f7f7f7' : ''}">
		<view class="TransactionDetails-card">
			<view class="card-list">
				<image src="@/static/app_launcher.png" mode=""></image>交通银行 借记卡(**2703)
			</view>
			<view class="card-Title-list">
				<view class="card-Title-list-left" @click="isTure(0)">
					<text>{{billName}}</text> <image src="@/static/sogou_up_icon_normal.png" mode=""></image>
				</view>
				<view class="card-Title-list-rigth"  @click="isTure(1)">
					<text>筛选</text> <image src="@/static/nav_choose.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="zzc" v-if="zzcOneTrue">
			<view class="zzc-box" v-for="(item,index) in zzcOneList" :key="index" @click="nian(index,item)">
				{{item}}
			</view>
		</view>
		
		<view class="scroll-view" v-if="zzcTowTrue">
			<scroll-view scroll-y="true" class="zzc-tow">
				<view class="zzc-tow-box" v-for="(item,index) in zzcTowList" :key="index">
					<view class="zzc-tow-title">
						{{item.title}}
					</view>
					<view class="zzc-tow-content" v-for="(sum,num) in item.list" :key="num">
						<view class="zzc-tow-content-list">
							{{sum}}
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="btn">
				<view>重置</view>
				<view class="rigth" @click="rigth">完成</view>
			</view>
		</view>
		
		<view v-if="bill">
			<view class="TransactionDetails-list">
				<view class="TransactionDetails-list-title">
					<text>2024-12</text>
					<text>
						<span>收入</span>+0.00
						<span>支出</span>-3,375.00
					</text>
				</view>
				<view class="TransactionDetails-list-box">
					
					<view class="list-box">
						<view class="text-left">
							<p>贷款到期归还-朱岳鹏</p>
							<p class="text" style="opacity: 0;">123</p>
							<p class="text">2024-12-21 3:09:50</p>
						</view>
						<view class="text-rigth">
							<p>-3,375.00</p>
							<span>余额:12,393.67</span>
						</view>
					</view>
					
					
				</view>
			</view>
			
			
			<view class="TransactionDetails-list">
				<view class="TransactionDetails-list-title">
					<text>2024-11</text>
					<text>
						<span>收入</span>+0.00
						<span>支出</span>-4575.00
					</text>
				</view>
				<view class="TransactionDetails-list-box">
					<view class="list-box">
						<view class="text-left">
							<p>网上支付-微信转账</p>
							<p class="text" style="opacity: 1;">微信支付</p>
							<p class="text">2024-11-25 17:59:55</p>
						</view>
						<view class="text-rigth">
							<p style="color: black;">-1,200.00</p>
							<span>余额:15,768.67</span>
						</view>
					</view>
					
					<view class="list-box">
						<view class="text-left">
							<p>贷款到期归还-朱岳鹏</p>
							<p class="text" style="opacity: 0;">123</p>
							<p class="text">2024-11-21 3:21:11</p>
						</view>
						<view class="text-rigth">
							<p>-3,375.00</p>
							<span>余额:16,968.67</span>
						</view>
					</view>
					
					
				</view>
			</view>
			
			
			<view class="TransactionDetails-list">
				<view class="TransactionDetails-list-title">
					<text>2024-10</text>
					<text>
						<span>收入</span>+0.00
						<span>支出</span>-3,375.00
					</text>
				</view>
				<view class="TransactionDetails-list-box">
					
					<view class="list-box">
						<view class="text-left">
							<p>贷款到期归还-朱岳鹏</p>
							<p class="text" style="opacity: 0;">123</p>
							<p class="text">2024-10-21 3:11:32</p>
						</view>
						<view class="text-rigth">
							<p>-3,375.00</p>
							<span>余额:20,343.67</span>
						</view>
					</view>
					
				</view>
			</view>
			
			<view class="TransactionDetails-list">
				<view class="TransactionDetails-list-title">
					<text>2024-9</text>
					<text>
						<span>收入</span>+0.00
						<span>支出</span>-3,375.00
					</text>
				</view>
				<view class="TransactionDetails-list-box">
					
					<view class="list-box">
						<view class="text-left">
							<p>贷款到期归还-朱岳鹏</p>
							<p class="text" style="opacity: 0;">123</p>
							<p class="text">2024-9-21 3:58:47</p>
						</view>
						<view class="text-rigth">
							<p>-3,375.00</p>
							<span>余额:23,718.67</span>
						</view>
					</view>
					
				</view>
			</view>
			
			<view class="TransactionDetails-list">
				<view class="TransactionDetails-list-title">
					<text>2024-8</text>
					<text>
						<span>收入</span>+0.00
						<span>支出</span>-3,375.00
					</text>
				</view>
				<view class="TransactionDetails-list-box">
					
					<view class="list-box">
						<view class="text-left">
							<p>贷款到期归还-朱岳鹏</p>
							<p class="text" style="opacity: 0;">123</p>
							<p class="text">2024-8-21 3:10:21</p>
						</view>
						<view class="text-rigth">
							<p>-3,375.00</p>
							<span>余额:27,093.67</span>
						</view>
					</view>
					
				</view>
			</view>
			
			<view class="TransactionDetails-list">
				<view class="TransactionDetails-list-title">
					<text>2024-7</text>
					<text>
						<span>收入</span>+80,000.00
						<span>支出</span>-50,260.33
					</text>
				</view>
				<view class="TransactionDetails-list-box">
					<view class="list-box">
						<view class="text-left">
							<p>贷款到期归还-朱岳鹏</p>
							<p class="text" style="opacity: 0;">123</p>
							<p class="text">2024-8-21 3:10:21</p>
						</view>
						<view class="text-rigth">
							<p>-3,375.00</p>
							<span>余额:30,468.67</span>
						</view>
					</view>
					<view class="list-box">
						<view class="text-left">
							<p>转账汇款-陈惠敏</p>
							<p class="text" style="opacity: 1;">手机银行</p>
							<p class="text">2024-7-24 12:28:36</p>
						</view>
						<view class="text-rigth">
							<p style="color: black;">-35,000.00</p>
							<span>余额:33,843.67</span>
						</view>
					</view>
					<view class="list-box">
						<view class="text-left">
							<p>贷款到期金额-朱岳鹏</p>
							<p class="text" style="opacity: 0;">123</p>
							<p class="text">2024-7-21 3:10:59</p>
						</view>
						<view class="text-rigth">
							<p style="color: black;">-2,925.33</p>
							<span>余额:68,843.67</span>
						</view>
					</view>
					<view class="list-box">
						<view class="text-left">
							<p>其他</p>
							<p class="text" style="opacity: 1;">微信支付</p>
							<p class="text">2024-7-15 17:18:02</p>
						</view>
						<view class="text-rigth">
							<p style="color: black;">-2,720.00</p>
							<span>余额:71,769.00</span>
						</view>
					</view>
					<view class="list-box">
						<view class="text-left">
							<p>转账汇款-伍咏茵</p>
							<p class="text" style="opacity: 1;">手机银行</p>
							<p class="text">2024-7-13 19:26:52</p>
						</view>
						<view class="text-rigth">
							<p style="color: black;">-6,240.00</p>
							<span>余额:74,489.00</span>
						</view>
					</view>
					<view class="list-box">
						<view class="text-left">
							<p>跨行贷款-罗有才</p>
							<p class="text" style="opacity: 1;">网络支付</p>
							<p class="text">2024-7-12 19:28:01</p>
						</view>
						<view class="text-rigth">
							<p style="color: red;">+50,000.00</p>
							<span>余额:80,729.00</span>
						</view>
					</view>	
					<view class="list-box">
						<view class="text-left">
							<p>跨行汇款-姚洁兰</p>
							<p class="text" style="opacity: 1;">支付平台</p>
							<p class="text">2024-7-09 17:23:18</p>
						</view>
						<view class="text-rigth">
							<p style="color: red;">+30,000.00</p>
							<span>余额:30,729.00</span>
						</view>
					</view>				
				</view>
			</view>
			
			<view class="TransactionDetails-list">
				<view class="TransactionDetails-list-title">
					<text>2024-6</text>
					<text>
						<span>收入</span>+1,350,900
						<span>支出</span>-1,350,171
					</text>
				</view>
				<view class="TransactionDetails-list-box">
					
					<view class="list-box">
						<view class="text-left">
							<p>贷款受托支付-于浪</p>
							<p class="text" style="opacity: 1;">交通银行广州越秀支行</p>
							<p class="text">2024-6-26 11:36:20</p>
						</view>
						<view class="text-rigth">
							<p>-1,350,000.00</p>
							<span>余额:729.00</span>
						</view>
					</view>
					
					<view class="list-box">
						<view class="text-left">
							<p>贷款发放-朱岳鹏</p>
							<p class="text" style="opacity: 1;">手机银行</p>
							<p class="text">2024-6-26 11:36:18</p>
						</view>
						<view class="text-rigth">
							<p style="color: red;">+1,350,000.00</p>
							<span>余额:1,350,729.00</span>
						</view>
					</view>
					
					<view class="list-box">
						<view class="text-left">
							<p>网上支付-微信转账</p>
							<p class="text" style="opacity: 1;">微信支付</p>
							<p class="text">2024-6-20 21:39:32</p>
						</view>
						<view class="text-rigth">
							<p>-171.00</p>
							<span>余额:729.00</span>
						</view>
					</view>
					
					<view class="list-box">
						<view class="text-left">
							<p>跨行汇款-朱岳鹏</p>
							<p class="text">支付平台</p>
							<p class="text">2024-6-15 20:50:32</p>
						</view>
						<view class="text-rigth">
							<p style="color: red;">+900.00</p>
							<span>余额:900.00</span>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				zzcOneList:['本月','近一周','近一个月','近三个月','近一年','自定义'],
				zzcTowList:[
					{title:'交易类型', list:['全部收入','全部支出']},
					{title:'常用', list:['转账','代发工资','现金','投资理财','生活缴费','消费支付','ETC','其他']},
					{title:'金额',list:['1百以下','1百-1千','1千-5千','5千-1万','1万-5万','5万以上','自定义']},
					{title:'渠道/地点', list:['手机银行','网银','柜面','POS','自助设备','电话银行','其他']},
					{title:'对方开户行', list:['交通银行','建设银行','中国银行','工商银行','农业银行','招商银行','浦发银行','民生银行','中信银行','广发银行','兴业银行','储蓄银行','光大银行','平安银行','华夏银行','自定义']},
					{title:'对方开户名', list:['全部收入','全部支出']},
					{title:'对方账户', list:['全部收入','全部支出']},
					{title:'摘要', list:['全部收入','全部支出']}
				],
				zzcOneTrue:false,
				zzcTowTrue:false,
				bill:false,
				billName:'本月'
			}
		},
		methods: {
			isTure(num){
				if(num){
					this.zzcOneTrue = false
					this.zzcTowTrue = !this.zzcTowTrue
				}else{
					this.zzcTowTrue = false
					this.zzcOneTrue = !this.zzcOneTrue
				}
			},
			rigth(){
				this.zzcTowTrue = !this.zzcTowTrue
			},
			nian(index,item){
				this.zzcOneTrue = false
				console.log(index,item);
				index === 4 ? this.bill = true : ''
				this.billName = item
			}
		}
	}
</script>

<style scoped lang="scss">
	.TransactionDetails{
		width: 100vw;
		padding-bottom: 50rpx;
		// background-color: #f7f7f7;
		.TransactionDetails-card{
			background-color: #fff;
			padding: 20rpx;
			.card-list{
				width: 100%;
				margin: 0 auto;
				display: flex;
				align-items: center;
				font-size: 30rpx;
				image{
					width: 50rpx;
					height: 50rpx;
					margin-right:20rpx;
				}
			}
			.card-Title-list{
				display: flex;
				margin: 0 auto;
				padding: 10rpx;
				font-size: 28rpx;
				margin-top: 20rpx;
				view:hover{
					color: dodgerblue;
					image{
						transform: scale(1);
					}
				}
				.card-Title-list-left{
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: center;
					image{
						width: 25rpx;
						height: 20rpx;
						transform: scale(-1);
						margin-left: 5rpx;
					}
				}
				.card-Title-list-rigth{
					width: 30%;
					display: flex;
					align-items: center;
					justify-content: right;
					image{
						width: 30rpx;
						height: 25rpx;
						margin-left: 5rpx;
					}
				}
			}
		}
		.zzc{
			width: 100%;
			background-color: #fff;
			position: absolute;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			justify-content:space-evenly;
			box-shadow: 0 0 0.1rpx #000;
			padding: 50rpx 0; 
			padding-bottom: 10rpx;
			.zzc-box{
				width: 200rpx;
				height: 60rpx;
				display: flex;
				margin-bottom: 20rpx;
				align-items: center;
				justify-content: center;
				font-size: 25rpx;
				border-radius: 10rpx;
				background-color: #f0f0f0;
				color: #222;
			}
			.zzc-box:hover{
				background-color: aliceblue;
				color: dodgerblue;
			}
		}
		.scroll-view{
			box-shadow: 0 0 0.1rpx #000;
			width: 100%;
			position: absolute;
			z-index: 999;
			background-color: #fff;
			.zzc-tow{
				width: 100%;
				height: 1000rpx;
				.zzc-tow-box{
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					.zzc-tow-title{
						width: 90%;
						font-size: 28rpx;
						margin: 15rpx auto;
					}
					.zzc-tow-content{
						.zzc-tow-content-list{
							width: 200rpx;
							height: 60rpx;
							display: flex;
							margin: 20rpx;
							align-items: center;
							justify-content: center;
							font-size: 25rpx;
							border-radius: 10rpx;
							background-color: #f0f0f0;
							color: #222;
						}
						.zzc-tow-content-list:hover{
							background-color: aliceblue;
							color: dodgerblue;
						}
					}
					
				}
			}
			.btn{
				font-size: 30rpx;
				display: flex;
				view{
					padding: 25rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					width: 50%;
					box-shadow: 0 0 0.1rpx #000;
					color: dodgerblue;
				}
				.rigth{
					background-color: dodgerblue;
					color: #fff;
				}
			}
		}
		.TransactionDetails-list{
			width: 100vw;
			margin-top: 30rpx;
			.TransactionDetails-list-title{
				margin: 0 auto;
				width: 92%;
				font-size: 25rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				span{
					color: #666;
					margin-left: 30rpx;
				}
			}
			.TransactionDetails-list-box{
				width: 90%;
				// height: 200rpx;
				background-color: #fff;
				margin: 0 auto;
				border-radius: 20rpx;
				margin-top: 20rpx;
				padding: 1rpx 20rpx;
				.list-box{
					width: 95%;
					margin: 0 auto;
					margin-top: 20rpx;
					border-bottom: 1px solid #f4f4f4;
					display: flex;
					justify-content: space-between;
					font-size: 28rpx;
					line-height: 45rpx;
					padding-bottom: 10rpx;
					.text-left{
						font-size: 30rpx;
						.text{
							color: #888;
							font-size: 25rpx;
						}
					}
					.text-rigth{
						text-align: center;
						span{
							font-size: 25rpx;
						}
					}
				}
			}
		}
	}
</style>
