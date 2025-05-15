<template>
	<view class="MyAccount">
		<view class="MyAccount-eye">
			<text></text>
			<view class="MyAccount-eye-image" @click="eyeTrue">
				隐藏金额
				<image src="@/static/eye_open.png" mode="" v-if="eye"></image>
				<image src="@/static/icon_eye_close.webp" mode="" v-else></image>
			</view>
		</view>
		<view class="MyAccount-card">
			<view class="card-box" @click="cardlist">
				<view class="card-image">
					<image src="@/static/account-card.png" mode=""></image>
				</view>
				<view class="card-text">
					<span>**2703</span>
					<text>查看账号</text>
					<p>借记卡 · |类卡</p>
				</view>
				<view class="card-icon">
					<image src="@/static/icon_pay.png" mode=""></image>
				</view>
			</view>
			
			<view v-if="card">
				<view class="card-date" @click="GoTransactionDetails">
					<text>活期</text>
					<span>{{eye ? '12,393.67' : '****'}} <image src="@/static/upsdk_payment_right.webp" mode=""></image> </span>
				</view>
				
				<view class="card-date" @click="GoMyLoad">
					<text>经营性贷款</text>
					<span>{{eye ? '1,350,000.00' : '****'}}<image src="@/static/upsdk_payment_right.webp" mode=""></image> </span>
				</view>
				
				<view class="card-list">
					<view class="card-list-text" v-for="(item,index) in cardList" :key="index" @click="TransferAccounts(index)" >
						{{item}}
					</view>
				</view>
				
				<view class="card-icon" @click="cardlist">
					收起<image src="@/static/sogou_up_icon_normal.png" mode=""></image>
				</view>
			</view>
			
		</view>
		<view class="MyAccount-Notice">
			<view class="MyAccount-Notice-text">
				<image src="@/static/upsdk_mp_red_dot.png" mode=""></image> 免费抽1-88元消费红包
			</view>
			<view class="MyAccount-Notice-icon">
				立即查看 <image src="@/static/upsdk_payment_right.webp" mode=""></image>
			</view>
		</view>
		<view class="Add-MyAccount" >
			<image src="@/static/nav_add.png" mode=""></image> 添加账户
		</view>
		<view class="MyAccount-list-icon">
			<view class="MyAccount-list-icon-box" v-for="(item,index) in MyAccountListIcon" :key="index">
				<view class="MyAccount-list-icon-box-image">
					<image :src="`../../static/account-list-${index+1}.png`" mode=""></image>
				</view>
				<text>{{item}}</text>
			</view>
		</view>
		<view class="MyAccount-footer-text">
			<p class="title">温馨提示:</p>
			<p>1、所有数据仅供参考，不作为对账凭证。资产不含已添加的他人和他行账户名下的资产。贷款信息请以<span>“我的贷款”</span>页面为准。</p>
			<p>2、外币理财、外币基金、外币活期存款、外币定期存款等外币资产将会按银行现汇买入价被折算成人民币资产统计。因汇率实时变动，请以 <span>外汇牌价</span> 为准。</p>
			<p>3、每个借记账户内不含保险、金生金、黄金定投、记账式贵金属、记账式商品、记账式原油及海外资产等，请以实际信息为准。</p>
			<p>4、每日数据处理期间，资产展示金额与实际金额可能会有短暂偏差，完成处理后将恢复正常。</p>
			<p>如需查询您名下的全部交行账户，请 <span>点此查询</span>。</p>
		</view>
		
		<uni-popup ref="alertDialog" type="dialog">
			<uni-popup-dialog :type="msgType" cancelText="我知道了" confirmText="网点详情" title="所属网点" content="交通银行广州越秀支行"
				@close="dialogClose"></uni-popup-dialog>
		</uni-popup>
		
		<uni-popup ref="alertDialog" type="dialog">
			<uni-popup-dialog :type="msgType" cancelText="我知道了" confirmText="网点详情" title="所属网点" content="交通银行广州越秀支行"@close="dialogClose">
				
			</uni-popup-dialog>
		</uni-popup>
		
		<uni-popup ref="SetAlias" type="dialog">
			<uni-popup-dialog :type="msgType" cancelText="取消" confirmText="确定" title="设置别名" content="" @close="SetAliasClose">
				<view class="SetAlias">
					<view class="SetAlias-input">
						<input type="text" placeholder="不超过5个字" maxlength="5"  v-model="SetAliasValue"/>
					</view>
					
					<view class="SetAlias-btn" >
						<view class="btn" v-for="(item,index) in SetAliasList" :key="index" @click="SetAliasBtn(item)">
							{{item}}
						</view>
						
					</view>
				</view>
			</uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import {gologin} from "@/components/login.js"
	export default {
		data() {
			return {
				cardList:['交易明细','转账','资金转入','明细清单','设置别名','所属网点','挂失','更多功能'],
				MyAccountListIcon:['账户申请','卡片激活','账户解绑','账户排序'],
				card:true,
				eye:false,
				msgType:'',
				SetAliasList:['工资卡','网购卡','理财卡','房贷卡','车贷卡','生活开支卡'],
				SetAliasValue:''
			};
		},
		methods:{
			GoMyLoad(){
				uni.navigateTo({
					url:'/pages/MyLoad/MyLoad'
				})
			},
			cardlist(){
				this.card = !this.card
			},
			TransferAccounts(index){
				index === 0 ? gologin('/pages/TransactionDetails/TransactionDetails'):''
				index === 1 ? gologin('/pages/TransferAccounts/TransferAccounts'):''
				index === 2 ? gologin('/pages/FundsTransfer/FundsTransfer'):''
				index === 4 ? this.SetAlias('info') : ''
				index === 5 ? this.dialogToggle('info') : ''
			},
			eyeTrue(){
				this.eye = !this.eye
			},
			GoTransactionDetails(){
				gologin('/pages/TransactionDetails/TransactionDetails')
			},
			dialogToggle(type) {
				this.msgType = type
				this.$refs.alertDialog.open()
			},
			dialogClose(){
				this.$refs.alertDialog.close()
			},
			SetAlias(type) {
				this.SetAliasValue = ''
				this.msgType = type
				this.$refs.SetAlias.open()
			},
			SetAliasClose(){
				this.$refs.SetAlias.close()
			},
			SetAliasBtn(item){
				this.SetAliasValue = item
			}
		},
		onPageScroll(Scroll) {
			Scroll.scrollTop >= 100 ? uni.setNavigationBarColor({frontColor: '#000000', backgroundColor: '#ffffff',}) : uni.setNavigationBarColor({frontColor: '#000000', backgroundColor: '#f7f7f7',})
		}
	}
</script>

<style lang="scss" scoped>
	.MyAccount{
		width: 100%;
		// height: 100vh;
		background: #f7f7f7;
		padding-bottom:100rpx ;
		.MyAccount-eye{
			width: 95%;
			margin:  0 auto;
			padding-top: 20rpx;
			display: flex;
			align-items: center;
			font-size: 30rpx;
			justify-content: space-between;
			.MyAccount-eye-image{
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 30rpx;
				image{
					width: 35rpx;
					height: 30rpx;
					margin-left: 10rpx;
				}
			}
			
		}
		.MyAccount-card{
			width: 95%;
			// height: 500rpx;
			background-color: #fff;
			margin: 0 auto;
			margin-top: 20rpx;
			border-radius: 20rpx;
			padding: 30rpx 0;
			.card-box{
				width: 90%;
				// border: 1px solid;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				.card-image{	
					display: flex;
					align-items: center;
					image{
						width: 240rpx;
						height: 150rpx;
					}
				}
				.card-text{
					font-size: 30rpx;
					line-height: 40rpx;
					margin-top: 20rpx;
					margin-right: 40rpx;
					p{
						color: #888;
						font-size: 28rpx;
					}
					span{
						margin-right: 20rpx;
					}
					text{
						color: #006ae9;
						font-size: 25rpx;
					}
				}
				.card-icon{
					padding: 15rpx 0rpx;
					display: flex;
					image{
						width: 70rpx;
						height: 70rpx;
					}
				}
			}
		
			.card-date{
				width: 90%;
				border-bottom: 1px solid #eeeeee;
				margin: 0 auto;
				margin-top: 20rpx;
				padding: 20rpx 0;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 32rpx;
				span{
					display: flex;
					align-items: center;
					font-weight:bold;
					image{
						width: 50rpx;
						height: 50rpx;
					}
				}
			}
		
			.card-list{
				width: 90%;
				margin: 20rpx auto;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				justify-content: space-between;
				.card-list-text{
					width: 20%;
					height: 25rpx;
					font-size: 28rpx;
					color: #6685fd;
					border-right: 1px solid #e5e5e5;
					text-align: center;
					margin: 40rpx 0;
					padding-right: 20rpx;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		
			.card-icon{
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 30rpx;
				image{
					width: 30rpx;
					height: 30rpx;
					margin-left: 10rpx;
				}
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
		.Add-MyAccount{
			width: 95%;
			margin: 0 auto;
			background-color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 40rpx 0;
			margin-top: 50rpx;
			border-radius: 10rpx;
			font-size: 28rpx;
			image{
				width: 35rpx;
				height: 35rpx;
				margin-right: 10rpx;
			}
		}
		.MyAccount-list-icon{
			width: 95%;
			margin: 0 auto;
			background-color: #fff;
			display: flex;
			flex-wrap: wrap;
			margin-top: 40rpx;	
			border-radius: 10rpx;
			justify-content: space-evenly;
			.MyAccount-list-icon-box{
				// border: 1px solid;
				width: 25%;
				padding: 40rpx 0;
				font-size: 25rpx;
				.MyAccount-list-icon-box-image{
					display: flex;
					align-items: center;
					justify-content: center;
					image{
						width: 60rpx;
						height: 50rpx;
					}
				}
				text{
					margin-top:5rpx;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
		.MyAccount-footer-text{
			width: 95%;
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
				color: #006ae9;
			}
		}
	
		.SetAlias{
			width: 100%;
			margin: 0 auto;
			.SetAlias-input{
				width: 100%;
				margin: 0 auto;
				border-bottom: 1rpx solid #ccc;
				input{
					padding: 10rpx 20rpx;
				}
			}
			.SetAlias-btn{
				width: 100%;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				justify-content:space-between;
				margin-top: 10rpx;
				.btn{
					width: 30%;
					padding: 20rpx 0;
					text-align: center;
					border-radius: 10rpx;
					background-color: #f3f3f3;
					font-size: 25rpx;
					margin:10rpx 5rpx ;
				}
				.btn:hover{
					background-color: aliceblue;
					color: #006ae9;
				}
			}
		}
	}
</style>
