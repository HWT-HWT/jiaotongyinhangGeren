<template>
	<view class="number-Transfer">
		<view class="number-Transfer-title">
			收款人
		</view>
		<view class="number-Transfer-list">
			
			<view class="transfer-Body-list">
				<view class="name">
					{{PhoneList[0].name}}
				</view>
				<view class="input-text">
					<textarea
					      placeholder="请输入收款人的真实姓名"
					      rows="2"
					      placeholder-style="color: #ccc; font-weight:normal"
					      style="width: 100%; height: auto; font-size:28rpx;"
						   v-model="PhoneList[0].value"
					    ></textarea>
				</view>
				<view class="icon">
					<image src="@/static/tongxunlu.png" mode=""></image>
				</view>
			</view>
			
			<view class="transfer-Body-list" style="border: none;">
				<view class="name">
					{{PhoneList[1].name}}
				</view>
				<view class="input-text">
					<textarea
					      placeholder="请输入收款人手机号"
					      rows="2"
					      placeholder-style="color: #ccc; font-weight:normal"
					      style="width: 100%; height: auto; font-size:28rpx;"
						  v-model="PhoneList[1].value"
					    ></textarea>
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
				PhoneList:[
					{name:'姓名',value:''},
					{name:'手机号',value:''}
				]
			};
		},
		watch:{
			PhoneList:{
				handler(newVlaue){
					let isTrue =  newVlaue.every(item=>item.value !== '')
					this.$emit('content',isTrue)
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
					width: 15%;
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