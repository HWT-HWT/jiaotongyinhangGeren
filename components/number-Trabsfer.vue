<template>
	<view class="number-Transfer">
		<view class="number-Transfer-title">
			收款人
		</view>
		<view class="number-Transfer-list" v-for="(item,index) in NumberList" :key="index">
			
			<view class="transfer-Body-list">
				<view class="name">
					{{item.name}}
				</view>
				<view class="input-text">
					<textarea
					      :placeholder="item.placeholder"
						  v-model="item.value"
					      rows="2"
					      placeholder-style="color: #ccc; font-weight:normal"
					      style="width: 100%; height: auto; font-size:28rpx;"
					    ></textarea>
				</view>
				<view class="icon">
					<image :src="item.icon" mode=""></image>
				</view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"number-Trabsfer",
		data() {
			return {
				NumberList:[
					{name:'户名',placeholder:'收款人户名/企业账户名',value:'',icon:'../../static/tongxunlu.png'},
					{name:'账号',placeholder:'借记卡/信用卡号/企业账号',value:'',icon:'../../static/saoyisao.png'},
					{name:'银行',placeholder:'请选择收款账户开户银行',value:''}
				],
				isTrue:''
			};
		},
		watch:{
			NumberList:{
				handler(newVlaue){
					this.isTrue = newVlaue.every(item=>item.value !== '')
					this.$emit('content',this.isTrue)
				},
				deep:true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.number-Transfer{
		width: 100%;
		background-color: #fff;
		margin-top: 20rpx;
		padding: 20rpx 0;
		.number-Transfer-title{
			width: 90%;
			margin: 0 auto;
			font-size: 32rpx;
			font-weight: bold;
		}
		.number-Transfer-list{
			width: 90%;
			margin: 0 auto;
			.transfer-Body-list{
				width: 100%;
				border-bottom: 1px solid #f5f5f5;
				display: flex;
				font-size: 30rpx;
				margin: 10rpx auto;
				.name{
					padding: 20rpx;
					display: flex;
					align-items: center;
				}
				
				.input-text{
					padding: 20rpx;
					flex: 1;
					display: flex;
				}
				
				.icon{
					display: flex;
					align-items: center;
					margin-right: 20rpx;
					image{
						width: 35rpx;
						height: 35rpx;
					}
				}
			}
		}
	}
</style>