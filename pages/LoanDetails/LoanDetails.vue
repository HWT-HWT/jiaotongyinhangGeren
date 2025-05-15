<template>
	<view class="LoanDetails">
		<view class="LoanDetails-li" v-for="(item,index) in LoanDetailsList" :key="index">
			<view class="title">
				{{item.title}}
			</view>
			<view class="centen" v-for="(loan, loanIndex) in item.list" :key="loanIndex">
				<view class="centen-list" v-for="(entry, index) in Object.entries(loan)" :key="index">
					<text style="color: #8c9195;">{{entry[0]}}</text>
					
					<text style="text-align: right;">{{entry[1]}}</text>
				</view>
			</view>
		</view>
		<view class="LoanDetails-li">
			<view class="title">
				利率
			</view>
			<view class="centen">
				<view class="centen-list">
					<text style="color: #8c9195;">当前年化利率(单利)</text>
					<text style="text-align: right;">3%</text>
				</view>
				<view class="centen-list">
					<text style="color: #8c9195;">利率调整方式</text>
					<text style="text-align: right;">按年</text>
				</view>
				<view class="centen-list">
					<text style="color: #8c9195;">利率浮动率/点数</text>
					<text style="text-align: right; color: #dca065;">贷款市场报价利率(LPR)减45个基点LPR)</text>
				</view>
				<view class="centen-list">
					<text style="color: #8c9195;">下一重定价日</text>
					<text style="text-align: right; color: #dca065;">2025年06月26日</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				LoanDetailsList:[
					{
						title:'概要',
						list:[
							{
								'贷款品种':'线上抵押贷',
								'合同号':'202401441001999062200004494',
								'凭证号':'202401441001999062200004494001',
								'贷款金额':'1,350,000.00',
								'放款日':'2024-06-26',
								'贷款期限':'12月'
							}
						]
					},
					{
						title:'还款',
						list:[
							{
								'还款方式':'分次付息一次还本',
								'还款间隔':'按月还款',
								'还款日':'21日',
								'贷款金额':'1,350,000.00',
								'宽限期':'0天',
							}
						]
					},
				],
			};
		}
	}
</script>

<style lang="scss" scoped>
	.LoanDetails{
		width: 100vw;
		height: 100vh;
		background-color: #f7f7f7;
		.LoanDetails-li{
			width: 100%;
			// height: 200rpx;	
			// border: 1px solid;
			// font-size: 25rpx;
			.title{
				width: 90%;
				margin: 0 auto;
				padding: 20rpx 0;
				font-size: 25rpx;
				color: #888;
			}
			.centen{
				width: 100%;
				background-color: #fff;
				margin: 0 auto;
				font-size: 30rpx;
				.centen-list{
					width: 90%;
					margin: 0 auto;
					padding: 20rpx 0;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
			}
		}
	}
</style>
