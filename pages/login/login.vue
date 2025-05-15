<template>
	<view class="login">
		
		<view class="login-navtitle">
			<view class="icon-box">
				<image src="@/static/icon_location_close.webp" mode="" @click="quitGoHome"></image>
				<image src="@/static/nav_service.png" mode=""></image>
			</view>
		</view>
	
		<view class="login-input-box">
			<view class="login-input-box-MaxTitle">
				<p>您好,</p>
				<p>欢迎来到交通银行</p>
			</view>
			
			<view class="login-input-box-input" >
				<view class="phone-input" :style="{'background':phoneNumber ? '#f1f1f1' :'#f7f7f7'}">
					<view class="phone-input-title" @click="phone" :style="{'font-size':phoneNumber ? '23rpx' :'30rpx'}" v-if="!aindm || phoneNumber">
						请输入手机号/用户名
					</view>
					<view class="phone-input-text" v-show="phoneNumber || aindm" >
						<input type="text" maxlength="11" v-model='aindm' :focus="phoneNumber" />
					</view>
				</view>
				
				<view class="phone-input" :style="{'background':passNumber ? '#f1f1f1' :'#f7f7f7'}">
					<view class="phone-input-title" @click="passw" :style="{'font-size':passNumber ? '23rpx' :'30rpx'}" v-if="!pass || passNumber">
						请输入登录密码
					</view>
					<view class="phone-input-text" v-show="passNumber || pass" >
						<input type="password" maxlength="16" name="password" password="true" v-model='pass' :focus='passNumber'/>
					</view>
				</view>
			</view>
			
			<view class="input-text">
				找回账户/密码
			</view>
			
			<view class="checkbox">
				<label>
					<checkbox @click="checkboxBtn(Ischeckbox)" iconColor="#fff" activeBackgroundColor='#3475d3' :checked="Ischeckbox"/>
				</label>
				<text>我阅读并同意<text>《交通银行股份有限公司个人电子银行服务协议》、《交通银行个人手机银行和个人网上银行隐私政策》</text></text>
			</view>
		
			<view class="button">
				<view class="button-btn" v-if='aindm.length >= 10 && pass.length >= 6 && Ischeckbox === true ? false : true'>
					登录
				</view>
				<view class="button-btn"  style="background:#2d84ec" v-else @click="login">
					登录
				</view>
			</view>
			
			<view class="login-footer-list">
				<view class="login-footer-list-box">
					短信密码登录
				</view>
				<view class="login-footer-list-box">
					境外手机号登录
				</view>
				<view class="login-footer-list-box" style="border: none;">
					新用户注册
				</view>
			</view>
		
			<view class="login-bottom-icon">
				<view class="bottom-icon">
					<image src="@/static/login-footer-icon-1.png" mode=""></image>
				</view>
				<view class="bottom-icon">
					<image src="@/static/login-footer-icon-2.png" mode=""></image>
				</view>
				<view class="bottom-icon">
					<image src="@/static/login-footer-icon-3.png" mode=""></image>
				</view>
				<view class="bottom-icon">
					<image src="@/static/login-footer-icon-4.png" mode=""></image>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import occupy from '../../components/occupy.vue';
	export default {
		data() {
			return {
				phoneNumber:false,
				passNumber:false,
				aindm:'',
				pass:'',
				Ischeckbox:false,
				
			};
		},
		methods:{
			phone(){
				this.passNumber = false
				this.phoneNumber = !this.phoneNumber
				
			},
			passw(){
				this.phoneNumber = false
				this.passNumber = !this.passNumber
			},
			checkboxBtn(istrue){
				this.Ischeckbox = !this.Ischeckbox 
				this.passNumber = false
				this.phoneNumber = false
			},
			quitGoHome(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			},
			login(){
				if(this.aindm == '19867945909' && this.pass == 'abc123456789'){
					uni.setStorageSync('account',{account:this.aindm,password:this.pass})
					uni.showToast({
						title:'登录成功',
						icon:'none',
						duration:1000,
					})
					setTimeout(()=>{
						uni.reLaunch({
							url:'/pages/index/index'
						})
					},1000)
					
				}else{
					uni.showToast({
						title:'密码或账户错误',
						icon:'none'
					})
				}
			}
		},
		components:{
			occupy
		},
		watch:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.login{
		width: 100%;
		height: 100vh;
		background-color: #fff;
		.login-navtitle{
			width: 100%;
			height: 15%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.icon-box{
				width: 90%;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				align-items: center;
				image{
					width: 40rpx;
					height: 40rpx;
				}
			}
			
		}
		.login-input-box{
			width: 90%;
			height: 80%;
			margin: 0 auto;
			.login-input-box-MaxTitle{
				p{
					font-size: 45rpx;
				}
			}
			
			.login-input-box-input{
				width: 100%;
				margin-top: 50rpx;
				.phone-input{
					width: 100%;
					background-color: #f7f7f7;
					border-radius: 10rpx;
					margin: 0 auto;
					padding: 30rpx 0;
					margin-top: 20rpx;
					.phone-input-title{
						width:95% ;
						font-size: 30rpx;
						color: #666;
						margin: 0 auto;
					}
					.phone-input-text{
						width: 95%;
						margin: 0 auto;
						margin-top: 10rpx;
						input{
							width: 100%;
							height: 100%;
							margin: 0 auto;
							font-size: 30rpx;
						}
					}
					
				}
			}
		
			.input-text{
				width: 95%;
				margin: 0 auto;
				// float: right;
				text-align: right;
				margin-top: 20rpx;
				font-size: 28rpx;
				color: #2d84ec;
			}
			
			.checkbox{
				width: 100%;
				margin-top: 60rpx;
				font-size: 28rpx;
				display: flex;
				flex-wrap: nowrap;
				justify-content: center;
				checkbox{
					transform: scale(0.7);
				}
				text{
					width: 100%;
					letter-spacing: 2rpx;
					line-height: 40rpx;
					text{
						color: #2d84ec;
						
					}
				}
			}
		
			.button{
				width: 95%;
				margin: 0 auto;
				margin-top:40rpx;
				.button-btn{
					width: 100%;
					padding:20rpx 0;
					background-color: #99c3f6;
					color: #fff;
					border: none;
					border-radius: 10rpx;
					text-align: center;
				}
			}
		
			.login-footer-list{
				width: 95%;
				// border: 1px solid;
				margin: 0 auto;
				margin-top: 60rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.login-footer-list-box{
					border-right: 1px solid #ccc;
					padding-right:40rpx;
					color: #2d84ec;
					font-size: 25rpx;
					text-align: center;
				}
			}
			.login-bottom-icon{
				width: 60%;
				// height: 100rpx;
				// border: 1px solid;
				margin: 0 auto;
				margin-top: 400rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.bottom-icon{
					display: flex;
					align-items: center;
					image{
						width: 70rpx;
						height: 70rpx;
					}
				}
			}
		}
	}
</style>
